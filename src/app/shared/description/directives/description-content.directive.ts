import { Directive, TemplateRef } from '@angular/core';

// TODO: Leand about directives guards and apply
@Directive({ standalone: true, selector: '[ndpDescriptionContent]' })
export class DescriptionContentDirective {
  constructor(public template: TemplateRef<string>) {}
}
