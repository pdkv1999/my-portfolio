import { Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { FluidCanvasDirective } from '../shared/fluid-canvas.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RevealDirective, FluidCanvasDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
