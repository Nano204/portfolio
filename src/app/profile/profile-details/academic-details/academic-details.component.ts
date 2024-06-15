import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateDescriptionPipe } from '../shared/pipes';
import { AcademicDetails } from './models';

@Component({
  selector: 'ndp-academic-details',
  standalone: true,
  imports: [CommonModule, DateDescriptionPipe],
  templateUrl: './academic-details.component.html',
})
export class AcademicDetailsComponent {
  @Input() academicDetails!: AcademicDetails;
}
