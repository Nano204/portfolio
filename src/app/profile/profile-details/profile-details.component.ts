import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { academicDetails, experienceDetails } from './profile-details.script';

@Component({
  selector: 'ndp-profile-details',
  standalone: true,
  imports: [CommonModule, ExperienceDetailsComponent, AcademicDetailsComponent],
  templateUrl: './profile-details.component.html',
})
export class ProfileDetailsComponent {
  experienceDetails = experienceDetails;
  academicDetails = academicDetails;
}
