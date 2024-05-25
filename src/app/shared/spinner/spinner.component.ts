import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ndp-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent implements OnInit {
  @Input() width = '100px';
  @Input() thickness = '5px';
  style = {};

  ngOnInit(): void {
    this.style = { width: this.width, fontSize: this.thickness };
  }
}
