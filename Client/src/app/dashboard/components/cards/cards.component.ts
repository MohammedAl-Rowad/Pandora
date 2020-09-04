import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pandora-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() data: Array<{ name: string; value: number }>;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  cardColor: string = '#232837';

  view: any[] = [window.innerWidth, 400];
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.colorScheme);
  }
}
