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
  @Input() set setColorScheme(colors: Array<string>) {
    if (colors) {
      this.colorScheme = {
        ...this.colorScheme,
        domain: colors,
      };
    }
  }
  height: number = 400;

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

  view: any[] = [window.innerWidth, this.height];

  onResize() {
    this.view = [
      window.innerWidth,
      window.innerWidth < this.view[0] ? this.view[1] + 10 : this.view[1],
    ];
  }

  ngOnInit(): void {
    if (this.data && this.data.length > 10) {
      console.log(this.data);
      this.height = 900;
      this.view = [window.innerWidth, this.height];
      this.colorScheme = {
        ...this.colorScheme,
        domain: [
          ...this.colorScheme.domain,
          '#135487',
          '#E00087',
          '#800048',
          '#D94AA7',
          '#514F8C',
          '#731F3E',
          '#4D4357',
          '#EFD7FF',
          '#BF5A6C',
          '#2A2D40',
          '#535B73',
        ],
      };
    }
  }
}
