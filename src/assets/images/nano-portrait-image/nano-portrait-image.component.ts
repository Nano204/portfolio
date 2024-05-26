import { Component, Input } from '@angular/core';

@Component({
  selector: 'ndp-nano-portrait-image',
  standalone: true,
  imports: [],
  templateUrl: './nano-portrait-image.component.html',
  styleUrls: ['./nano-portrait-image.component.scss'],
})
export class NanoPortraitImageComponent {
  @Input() customClass = '';
}
