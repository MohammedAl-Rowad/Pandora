import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pandora-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss'],
})
export class AllProjectsComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
  }
}
