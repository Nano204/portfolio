import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ExperienceDetails } from './models';
import { DateDescriptionPipe } from '../shared/pipes';

@Component({
  selector: 'ndp-experience-details',
  standalone: true,
  imports: [CommonModule, DateDescriptionPipe],
  templateUrl: './experience-details.component.html',
})
export class ExperienceDetailsComponent {
  @Input() experienceDetails!: ExperienceDetails;
}
