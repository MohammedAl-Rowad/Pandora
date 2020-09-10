import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'pandora-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss'],
})
export class AllProjectsComponent implements OnInit {
  projects: Array<any> = [];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const { projects } = this.route.snapshot.data;
    this.projects = [
      { name: '🚧 ALL PROJECTS 🚧' },
      ...projects.map(
        ({
          key,
          id,
          name,
          avatarUrls,
          projectCategory,
          projectTypeKey,
          simplified,
          style,
        }) => ({
          key,
          name,
          id,
          avatarUrl: avatarUrls['32x32'],
          methodology: projectCategory ? projectCategory.name : '〰〰',
          simplified,
          projectTypeKey,
          style,
        })
      ),
    ];
    this.spinner.hide();
  }

  showSpinner(id: string = 'all', project: object): void {
    this.router.navigateByUrl(`projects/${id}`, {
      state: project,
    });
    this.spinner.show();
  }
}
