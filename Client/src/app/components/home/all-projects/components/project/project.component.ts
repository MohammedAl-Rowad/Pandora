import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from 'src/app/dashboard/components/dashboard/dashboard.service';

@Component({
  selector: 'pandora-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [DashboardService],
})
export class ProjectComponent implements OnInit {
  issuesStatuses: Array<{ name: string; value: number }>;
  issuesTypes: Array<{ name: string; value: number }>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService,
    private readonly dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.spinner.hide();
    const {
      issues: { issues },
    } = this.route.snapshot.data;

    this.issuesStatuses = this.dashboardService.mapToCards(
      this.dashboardService.groupBy(issues, ({ status: { name } }) => name)
    );
    this.issuesTypes = this.dashboardService.mapToCards(
      this.dashboardService.groupBy(issues, ({ issuetype: { name } }) => name)
    );
  }
}
