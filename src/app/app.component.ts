import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'ndp-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
