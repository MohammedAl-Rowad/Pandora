import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pandora-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class ChartComponent implements OnInit {
  @Input() data: Array<{ name: string; value: number }>;
  @Input() type: 'number-card';

  colorScheme = {
    name: 'ocean',
    selectable: false,
    group: 'Ordinal',
    domain: [
      '#1D68FB',
      '#33C0FC',
      '#4AFFFE',
      '#AFFFFF',
      '#FFFC63',
      '#FDBD2D',
      '#FC8A25',
      '#FA4F1E',
      '#FA141B',
      '#BA38D1',
    ],
  };
  cardColor: string = '#232837';

  view: any[] = [window.innerWidth, 400];

  onResize() {
    this.view = [
      window.innerWidth,
      window.innerWidth < this.view[0] ? this.view[1] + 10 : this.view[1],
    ];
  }

  ngOnInit(): void {}
}
