import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import {
  mainTechnologies,
  otherTechnologies,
  technologyIconConfigToClass,
} from './scripts';
import { TechnologyIcon } from './models';

@Component({
  selector: 'ndp-stack-details',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule],
  templateUrl: './stack-details.component.html',
  styleUrls: ['./stack-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StackDetailsComponent implements OnInit {
  mainTechnologiesIcons: TechnologyIcon[] = [];
  otherTechnologiesIcons: TechnologyIcon[] = [];

  ngOnInit(): void {
    this.mainTechnologiesIcons = mainTechnologies.map((devicon) => {
      return {
        iconClass: technologyIconConfigToClass(devicon),
        tooltip: devicon.technology,
      };
    });

    this.otherTechnologiesIcons = otherTechnologies.map((devicon) => {
      return {
        iconClass: technologyIconConfigToClass(devicon),
        tooltip: devicon.technology,
      };
    });
  }
}
