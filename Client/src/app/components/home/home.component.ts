import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pandora-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  breakpoint: number;
  constructor() {}

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 6;
  }
}
