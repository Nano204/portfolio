import { Directive, TemplateRef } from '@angular/core';

@Directive({ standalone: true, selector: '[ndpDescriptionSubtitle]' })
export class DescriptionSubtitleDirective {
  constructor(public template: TemplateRef<string>) {}
}
