import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pandora-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class CardsComponent implements OnInit {
  @Input() data: Array<{ name: string; value: number }>;

  colorScheme = {
    domain: [
      '#A10A28',
      '#D3342D',
      '#EF6D49',
      '#FAAD67',
      '#FDDE90',
      '#DBED91',
      '#A9D770',
      '#6CBA67',
      '#2C9653',
      '#146738',
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
