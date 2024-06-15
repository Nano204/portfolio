import { Component, Input } from '@angular/core';

@Component({
  selector: 'ndp-under-construction-image',
  standalone: true,
  imports: [],
  templateUrl: './under-construction-image.component.html',
})
export class UnderConstructionImageComponent {
  @Input() customClass = '';
}
