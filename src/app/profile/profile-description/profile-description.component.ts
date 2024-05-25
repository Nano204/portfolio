import { Component } from '@angular/core';

import { DescriptionComponent } from 'app/shared/description/description.component';
import {
  DescriptionContentDirective,
  DescriptionSubtitleDirective,
  DescriptionTitleDirective,
} from 'app/shared/description/directives';

@Component({
  selector: 'ndp-profile-description',
  standalone: true,
  imports: [
    DescriptionComponent,
    DescriptionContentDirective,
    DescriptionSubtitleDirective,
    DescriptionTitleDirective,
  ],
  templateUrl: './profile-description.component.html',
})
export class ProfileDescriptionComponent {}
