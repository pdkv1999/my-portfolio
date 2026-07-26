import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

/**
 * Ports the reference site's ink-wash fluid simulation (a small stable-fluids /
 * Navier-Stokes solver) onto a <canvas>. Mouse/touch movement over the parent
 * element deposits "ink" that advects and diffuses across frames.
 */
@Directive({
  selector: 'canvas[appFluidCanvas]',
  standalone: true,
})
export class FluidCanvasDirective implements AfterViewInit, OnDestroy {
  private raf = 0;
  private resizeHandler = () => this.resize();
  private cleanupFns: Array<() => void> = [];

  constructor(private elRef: ElementRef<HTMLCanvasElement>) {}

  ngAfterViewInit(): void {
    this.initFluid();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.resizeHandler);
    this.cleanupFns.forEach((fn) => fn());
  }

  private initFluid(): void {
    const canvas = this.elRef.nativeElement;

    const N = 72;
    const ITER = 10;
    const DT = 0.14;
    const S = (N + 2) * (N + 2);
    const IX = (x: number, y: number) => x + (N + 2) * y;

    const INKS = [
      [236, 216, 190],
      [200, 218, 228],
      [206, 222, 202],
      [248, 246, 242],
    ];
    const BG = [247, 244, 238];
    const NC = 4;

    let vx = new Float32Array(S),
      vy = new Float32Array(S);
    let vxT = new Float32Array(S),
      vyT = new Float32Array(S);
    let pr = new Float32Array(S),
      dv = new Float32Array(S);
    const dye = Array.from({ length: NC }, () => new Float32Array(S));
    const dyeT = Array.from({ length: NC }, () => new Float32Array(S));

    let W = 0,
      H = 0,
      offC: HTMLCanvasElement,
      offCtx: CanvasRenderingContext2D,
      imgD: ImageData;
    let mx = -1,
      my = -1,
      pmx = -1,
      pmy = -1;
    let activeInk = 0,
      smx = -1,
      smy = -1;

    const resize = () => {
      W = canvas.offsetWidth || 480;
      H = canvas.offsetHeight || 640;
      canvas.width = W;
      canvas.height = H;
      offC = document.createElement('canvas');
      offC.width = N;
      offC.height = N;
      offCtx = offC.getContext('2d')!;
      imgD = offCtx.createImageData(N, N);
    };
    this.resize = resize;

    const bnd = (b: number, f: Float32Array) => {
      for (let i = 1; i <= N; i++) {
        f[IX(0, i)] = b === 1 ? -f[IX(1, i)] : f[IX(1, i)];
        f[IX(N + 1, i)] = b === 1 ? -f[IX(N, i)] : f[IX(N, i)];
        f[IX(i, 0)] = b === 2 ? -f[IX(i, 1)] : f[IX(i, 1)];
        f[IX(i, N + 1)] = b === 2 ? -f[IX(i, N)] : f[IX(i, N)];
      }
      f[IX(0, 0)] = 0.5 * (f[IX(1, 0)] + f[IX(0, 1)]);
      f[IX(0, N + 1)] = 0.5 * (f[IX(1, N + 1)] + f[IX(0, N)]);
      f[IX(N + 1, 0)] = 0.5 * (f[IX(N, 0)] + f[IX(N + 1, 1)]);
      f[IX(N + 1, N + 1)] = 0.5 * (f[IX(N, N + 1)] + f[IX(N + 1, N)]);
    };

    const linsolve = (b: number, x: Float32Array, x0: Float32Array, a: number, c: number) => {
      const r = 1 / c;
      for (let k = 0; k < ITER; k++) {
        for (let j = 1; j <= N; j++)
          for (let i = 1; i <= N; i++)
            x[IX(i, j)] = (x0[IX(i, j)] + a * (x[IX(i + 1, j)] + x[IX(i - 1, j)] + x[IX(i, j + 1)] + x[IX(i, j - 1)])) * r;
        bnd(b, x);
      }
    };

    const project = (u: Float32Array, v: Float32Array) => {
      const h = 1 / N;
      for (let j = 1; j <= N; j++)
        for (let i = 1; i <= N; i++) {
          dv[IX(i, j)] = -0.5 * h * (u[IX(i + 1, j)] - u[IX(i - 1, j)] + v[IX(i, j + 1)] - v[IX(i, j - 1)]);
          pr[IX(i, j)] = 0;
        }
      bnd(0, dv);
      bnd(0, pr);
      linsolve(0, pr, dv, 1, 4);
      for (let j = 1; j <= N; j++)
        for (let i = 1; i <= N; i++) {
          u[IX(i, j)] -= 0.5 * (pr[IX(i + 1, j)] - pr[IX(i - 1, j)]) / h;
          v[IX(i, j)] -= 0.5 * (pr[IX(i, j + 1)] - pr[IX(i, j - 1)]) / h;
        }
      bnd(1, u);
      bnd(2, v);
    };

    const advect = (b: number, d: Float32Array, d0: Float32Array, ux: Float32Array, uy: Float32Array) => {
      const dt0 = DT * N;
      for (let j = 1; j <= N; j++)
        for (let i = 1; i <= N; i++) {
          const x = Math.max(0.5, Math.min(N + 0.5, i - dt0 * ux[IX(i, j)]));
          const y = Math.max(0.5, Math.min(N + 0.5, j - dt0 * uy[IX(i, j)]));
          const i0 = x | 0,
            i1 = i0 + 1,
            j0 = y | 0,
            j1 = j0 + 1;
          const s1 = x - i0,
            s0 = 1 - s1,
            t1 = y - j0,
            t0 = 1 - t1;
          d[IX(i, j)] = s0 * (t0 * d0[IX(i0, j0)] + t1 * d0[IX(i0, j1)]) + s1 * (t0 * d0[IX(i1, j0)] + t1 * d0[IX(i1, j1)]);
        }
      bnd(b, d);
    };

    const velStep = () => {
      const a = DT * 1.6e-4 * N * N;
      linsolve(1, vxT, vx, a, 1 + 4 * a);
      bnd(1, vxT);
      linsolve(2, vyT, vy, a, 1 + 4 * a);
      bnd(2, vyT);
      project(vxT, vyT);
      advect(1, vx, vxT, vxT, vyT);
      advect(2, vy, vyT, vxT, vyT);
      project(vx, vy);
    };

    const dyeStep = () => {
      const a = DT * 3e-5 * N * N;
      for (let c = 0; c < NC; c++) {
        linsolve(0, dyeT[c], dye[c], a, 1 + 4 * a);
        bnd(0, dyeT[c]);
        advect(0, dye[c], dyeT[c], vx, vy);
        for (let i = 0; i < S; i++) dye[c][i] *= 0.986;
      }
    };

    const addDye = (gx: number, gy: number, fx: number, fy: number, amt: number, ci: number) => {
      const x = Math.max(1.001, Math.min(N - 0.001, gx)),
        y = Math.max(1.001, Math.min(N - 0.001, gy));
      const i0 = x | 0,
        j0 = y | 0,
        i1 = i0 + 1,
        j1 = j0 + 1;
      const sx = x - i0,
        sy = y - j0;
      const w00 = (1 - sx) * (1 - sy),
        w10 = sx * (1 - sy),
        w01 = (1 - sx) * sy,
        w11 = sx * sy;
      const a00 = IX(i0, j0),
        a10 = IX(i1, j0),
        a01 = IX(i0, j1),
        a11 = IX(i1, j1);
      vx[a00] += fx * w00;
      vx[a10] += fx * w10;
      vx[a01] += fx * w01;
      vx[a11] += fx * w11;
      vy[a00] += fy * w00;
      vy[a10] += fy * w10;
      vy[a01] += fy * w01;
      vy[a11] += fy * w11;
      const D = dye[ci];
      D[a00] = Math.min(1, D[a00] + amt * w00);
      D[a10] = Math.min(1, D[a10] + amt * w10);
      D[a01] = Math.min(1, D[a01] + amt * w01);
      D[a11] = Math.min(1, D[a11] + amt * w11);
    };

    const inkDrop = (cx: number, cy: number, r: number, ci: number) => {
      for (let dj = -r; dj <= r; dj++)
        for (let di = -r; di <= r; di++) {
          const dist = Math.sqrt(di * di + dj * dj);
          if (dist > r) continue;
          addDye(cx + di, cy + dj, 0, 0, 0.42 * (1 - dist / r), ci);
        }
    };

    const step = () => {
      if (smx >= 0 && pmx >= 0) {
        const gx0 = (pmx / W) * N,
          gy0 = (pmy / H) * N;
        const gx1 = (smx / W) * N,
          gy1 = (smy / H) * N;
        const gdx = gx1 - gx0,
          gdy = gy1 - gy0;
        const gd = Math.hypot(gdx, gdy);
        if (gd > 0.04) {
          const nx = gdx / gd,
            ny = gdy / gd;
          const steps = Math.min(48, Math.max(1, Math.ceil(gd / 0.5)));
          const rad = 4.2;
          const vmag = Math.min(2.6, gd * 0.5);
          const fx = nx * vmag,
            fy = ny * vmag;
          for (let s = 0; s <= steps; s++) {
            const cx = gx0 + gdx * (s / steps),
              cy = gy0 + gdy * (s / steps);
            for (let l = -rad; l <= rad; l += 0.8)
              for (let w = -rad; w <= rad; w += 0.8) {
                const d = Math.hypot(l, w) / rad;
                if (d > 1) continue;
                const fall = Math.pow(1 - d, 2.1);
                addDye(cx + l, cy + w, fx * fall * 0.35, fy * fall * 0.35, 0.14 * fall, activeInk);
              }
          }
        }
      }
      pmx = smx;
      pmy = smy;
      velStep();
      dyeStep();
    };

    const ctx2d = canvas.getContext('2d')!;

    const render = () => {
      const px = imgD.data;
      for (let j = 1; j <= N; j++)
        for (let i = 1; i <= N; i++) {
          const idx = IX(i, j);
          let fa = 0,
            fR = 0,
            fG = 0,
            fB = 0;
          for (let c = 0; c < NC; c++) {
            const d = Math.pow(Math.min(1, dye[c][idx]), 1.05);
            if (d < 0.001) continue;
            fR += INKS[c][0] * d;
            fG += INKS[c][1] * d;
            fB += INKS[c][2] * d;
            fa += d;
          }
          const pi = ((j - 1) * N + (i - 1)) * 4;
          if (fa < 0.001) {
            px[pi] = BG[0];
            px[pi + 1] = BG[1];
            px[pi + 2] = BG[2];
            px[pi + 3] = 255;
          } else {
            const blend = Math.min(0.92, fa * 0.95);
            px[pi] = (BG[0] + (fR / fa - BG[0]) * blend) | 0;
            px[pi + 1] = (BG[1] + (fG / fa - BG[1]) * blend) | 0;
            px[pi + 2] = (BG[2] + (fB / fa - BG[2]) * blend) | 0;
            px[pi + 3] = 255;
          }
        }
      offCtx.putImageData(imgD, 0, 0);
      ctx2d.imageSmoothingEnabled = true;
      ctx2d.imageSmoothingQuality = 'high';
      const blur = Math.max(4, (W / N) * 0.9);
      const m = blur * 2.5;
      ctx2d.globalAlpha = 0.3;
      ctx2d.filter = `blur(${blur}px)`;
      ctx2d.drawImage(offC, -m, -m, W + 2 * m, H + 2 * m);
      ctx2d.filter = 'none';
      ctx2d.globalAlpha = 1;
    };

    const loop = () => {
      step();
      render();
      this.raf = requestAnimationFrame(loop);
    };

    const heroVis = canvas.parentElement!;
    const onEnter = () => {
      activeInk = (activeInk + 1) % NC;
      smx = smy = pmx = pmy = -1;
    };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      smx = smx < 0 ? mx : smx * 0.62 + mx * 0.38;
      smy = smy < 0 ? my : smy * 0.62 + my * 0.38;
    };
    const onLeave = () => {
      mx = my = pmx = pmy = smx = smy = -1;
    };
    const onTouchStart = () => {
      activeInk = (activeInk + 1) % NC;
      smx = smy = pmx = pmy = -1;
    };
    const onTouchMove = (e: TouchEvent) => {
      const r = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mx = touch.clientX - r.left;
      my = touch.clientY - r.top;
      smx = smx < 0 ? mx : smx * 0.62 + mx * 0.38;
      smy = smy < 0 ? my : smy * 0.62 + my * 0.38;
    };
    const onTouchEnd = () => {
      mx = my = pmx = pmy = smx = smy = -1;
    };

    heroVis.addEventListener('mouseenter', onEnter);
    heroVis.addEventListener('mousemove', onMove);
    heroVis.addEventListener('mouseleave', onLeave);
    heroVis.addEventListener('touchstart', onTouchStart, { passive: true });
    heroVis.addEventListener('touchmove', onTouchMove, { passive: true });
    heroVis.addEventListener('touchend', onTouchEnd);

    this.cleanupFns.push(
      () => heroVis.removeEventListener('mouseenter', onEnter),
      () => heroVis.removeEventListener('mousemove', onMove),
      () => heroVis.removeEventListener('mouseleave', onLeave),
      () => heroVis.removeEventListener('touchstart', onTouchStart),
      () => heroVis.removeEventListener('touchmove', onTouchMove),
      () => heroVis.removeEventListener('touchend', onTouchEnd)
    );

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(this.raf);
      else this.raf = requestAnimationFrame(loop);
    };
    document.addEventListener('visibilitychange', onVisibility);
    this.cleanupFns.push(() => document.removeEventListener('visibilitychange', onVisibility));

    window.addEventListener('resize', this.resizeHandler);
    resize();
    inkDrop(N * 0.5, N * 0.46, 4, 0);
    loop();
  }

  private resize: () => void = () => {};
}
