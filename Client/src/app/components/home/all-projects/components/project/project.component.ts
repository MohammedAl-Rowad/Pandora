import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from 'src/app/dashboard/components/dashboard/dashboard.service';
import { ChartData, Data, allProjects, LineData } from 'src/types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'pandora-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [DashboardService],
})
export class ProjectComponent implements OnInit {
  issuesStatuses: ChartData;
  issuesTypes: ChartData;
  allProjects = allProjects;
  lineData: LineData;
  total: any;
  project: any;
  @Input() isStatic?: boolean;
  @Input() obj?: { issues: Array<any>; project: object; total: number };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService,
    private readonly dashboardService: DashboardService,
    private readonly snackBar: MatSnackBar
  ) {
    this.isStatic = false;
  }

  ngOnInit(): void {
    this.spinner.hide();
    this.snackBar.open('Loaded this project!', 'Dismiss', { duration: 2000 });

    if (this.isStatic) {
      const { issues, total } = this.obj;
      this.issuesStatuses = [];
      this.total = [];
      this.issuesTypes = [];
      this.mapper(issues, total);
    } else {
      this.route.data.subscribe({
        next: (snapshot) => {
          const {
            data: { issues, project, total },
          } = snapshot;
          this.issuesStatuses = [];
          this.total = [];
          this.issuesTypes = [];
          this.mapper(issues, total, project);
        },
      });
    }
  }

  private mapper(issues, total, project?) {
    const sorter = (a: Data, b: Data) => b.value - a.value;
    this.project = project || { name: allProjects };
    this.total = [{ name: 'Total Issues', value: total }];
    this.lineData = [
      {
        name: 'Issues By Year',
        series: this.dashboardService.mapToCards(
          this.dashboardService.groupBy(issues, ({ created }) =>
            new Date(created).getFullYear()
          )
        ),
      },
    ];
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
