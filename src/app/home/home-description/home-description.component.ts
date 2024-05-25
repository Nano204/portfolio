import { Component } from '@angular/core';

import { DescriptionComponent } from 'app/shared/description/description.component';
import {
  DescriptionContentDirective,
  DescriptionSubtitleDirective,
  DescriptionTitleDirective,
} from 'app/shared/description/directives';

@Component({
  selector: 'ndp-home-description',
  standalone: true,
  imports: [
    DescriptionComponent,
    DescriptionContentDirective,
    DescriptionSubtitleDirective,
    DescriptionTitleDirective,
  ],
  templateUrl: './home-description.component.html',
})
export class HomeDescriptionComponent {}
