import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-salary-band',
  templateUrl: './salary-band.component.html',
  styleUrls: ['./salary-band.component.sass']
})
export class SalaryBandComponent implements OnInit {
  bandMinimum = 20_000;
  bandMaximum = 60_000;
  percentile = 0;
  currentSalary = 40_000;

  constructor() {
  }

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    if (this.bandMinimum && this.bandMaximum && this.currentSalary) {
      const range = (this.bandMaximum - this.bandMinimum);
      const adjustedPoint = this.currentSalary - this.bandMinimum;

      this.percentile = adjustedPoint / range;
    }
  }

}
