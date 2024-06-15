import { Component } from '@angular/core';

import { DescriptionComponent } from 'app/shared/description/description.component';
import {
  DescriptionContentDirective,
  DescriptionSubtitleDirective,
  DescriptionTitleDirective,
} from 'app/shared/description/directives';

@Component({
  selector: 'ndp-stack-description',
  standalone: true,
  imports: [
    DescriptionComponent,
    DescriptionContentDirective,
    DescriptionSubtitleDirective,
    DescriptionTitleDirective,
  ],
  templateUrl: './stack-description.component.html',
})
export class StackDescriptionComponent {}
