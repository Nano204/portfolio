import { Component, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DESCRIPTION_DIRECTIVES,
  DescriptionContentDirective,
  DescriptionSubtitleDirective,
  DescriptionTitleDirective,
} from './directives';

@Component({
  selector: 'ndp-description',
  standalone: true,
  imports: [CommonModule, DESCRIPTION_DIRECTIVES],
  templateUrl: './description.component.html',
})
export class DescriptionComponent {
  @ContentChild(DescriptionTitleDirective) title?: DescriptionTitleDirective;
  @ContentChild(DescriptionSubtitleDirective)
  subtitle?: DescriptionSubtitleDirective;
  @ContentChild(DescriptionContentDirective)
  content?: DescriptionContentDirective;
}
