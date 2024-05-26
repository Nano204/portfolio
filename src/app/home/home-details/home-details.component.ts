import { Component } from '@angular/core';

import { NanoPortraitImageComponent } from 'assets/images/nano-portrait-image/nano-portrait-image.component';

@Component({
  selector: 'ndp-home-details',
  standalone: true,
  imports: [NanoPortraitImageComponent],
  templateUrl: './home-details.component.html',
})
export class HomeDetailsComponent {}
