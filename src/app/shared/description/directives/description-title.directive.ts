import { Directive, TemplateRef } from '@angular/core';

@Directive({ standalone: true, selector: '[ndpDescriptionTitle]' })
export class DescriptionTitleDirective {
  constructor(public template: TemplateRef<string>) {}
}
