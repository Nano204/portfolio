import { DescriptionContentDirective } from './description-content.directive';
import { DescriptionSubtitleDirective } from './description-subtitle.directive';
import { DescriptionTitleDirective } from './description-title.directive';

export const DESCRIPTION_DIRECTIVES = [
  DescriptionContentDirective,
  DescriptionSubtitleDirective,
  DescriptionTitleDirective,
] as const;
