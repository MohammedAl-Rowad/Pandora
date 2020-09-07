import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'pandora-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss'],
})
export class AllProjectsComponent implements OnInit {
  projects: Array<any>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    const { projects } = this.route.snapshot.data;
    this.projects = projects.map(
      ({
        key,
        name,
        avatarUrls,
        projectCategory,
        projectTypeKey,
        simplified,
        style,
      }) => ({
        key,
        name,
        avatarUrl: avatarUrls['32x32'],
        methodology: projectCategory ? projectCategory.name : '〰〰',
        simplified,
        projectTypeKey,
        style,
      })
    );
    this.spinner.hide();
  }
}
