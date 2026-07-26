import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'reveal' },
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private fallback?: ReturnType<typeof setTimeout>;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );
    this.observer.observe(this.el.nativeElement);

    // Safety net so content never stays hidden if the observer misses it.
    this.fallback = setTimeout(() => {
      this.el.nativeElement.classList.add('visible');
    }, 900);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.fallback) clearTimeout(this.fallback);
  }
}
