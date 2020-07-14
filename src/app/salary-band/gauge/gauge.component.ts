import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.svg',
  styleUrls: ['./gauge.component.sass']
})
export class GaugeComponent implements OnInit {
  canvasWidth = 300;
  canvasHeight = 150;

  constructor() { }

  ngOnInit(): void {
  }

}
