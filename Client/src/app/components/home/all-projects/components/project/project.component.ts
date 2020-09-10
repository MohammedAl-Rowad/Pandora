import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from 'src/app/dashboard/components/dashboard/dashboard.service';
import { ChartData, Data } from 'src/types';

@Component({
  selector: 'pandora-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [DashboardService],
})
export class ProjectComponent implements OnInit {
  issuesStatuses: ChartData;
  issuesTypes: ChartData;
  total: any;
  project: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService,
    private readonly dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.spinner.hide();

    this.route.data.subscribe({
      next: (snapshot) => {
        console.log(snapshot);
        const {
          data: { issues, project, total },
        } = snapshot;
        this.issuesStatuses = [];
        this.total = [];
        this.issuesTypes = [];
        this.mapper(project, issues, total);
      },
    });
  }

  private mapper(project, issues, total) {
    const sorter = (a: Data, b: Data) => b.value - a.value;
    this.project = project || { name: '🚧 ALL PROJECTS 🚧' };
    this.total = [{ name: 'Total Issues', value: total }];
    this.issuesStatuses = this.dashboardService
      .mapToCards(
        this.dashboardService.groupBy(issues, ({ status: { name } }) => name)
      )
      .sort(sorter);
    this.issuesTypes = this.dashboardService
      .mapToCards(
        this.dashboardService.groupBy(issues, ({ issuetype: { name } }) => name)
      )
      .sort(sorter);
  }
}
