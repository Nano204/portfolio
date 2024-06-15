import { Component } from '@angular/core';

import { UnderConstructionImageComponent } from 'assets/images/under-construction-image/under-construction-image.component';

@Component({
  selector: 'ndp-under-construction-view',
  standalone: true,
  imports: [UnderConstructionImageComponent],
  templateUrl: './under-construction-view.component.html',
  styleUrls: ['./under-construction-view.component.scss'],
})
export class UnderConstructionViewComponent {}
