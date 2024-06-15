import { Component, Input } from '@angular/core';

@Component({
  selector: 'ndp-nano-dev-logo',
  standalone: true,
  imports: [],
  templateUrl: './nano-dev-logo.component.html',
})
export class NanoDevLogoComponent {
  @Input() customClass = '';
  @Input() width = "1rem";
}
