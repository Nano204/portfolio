import { Component } from '@angular/core';

import { UnderConstructionViewComponent } from 'app/shared/under-construction/under-construction-view.component';
import { NanoPortraitImageComponent } from 'assets/images/nano-portrait-image/nano-portrait-image.component';

@Component({
  selector: 'ndp-projects-details',
  standalone: true,
  imports: [NanoPortraitImageComponent, UnderConstructionViewComponent],
  templateUrl: './projects-details.component.html',
})
export class ProjectsDetailsComponent {}
