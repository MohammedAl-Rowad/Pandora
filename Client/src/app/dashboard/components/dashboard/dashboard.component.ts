import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'panadora-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit {
  issuesStatuses: Array<{ name: string; value: number }>;
  issuesTypes: Array<{ name: string; value: number }>;
  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.get().subscribe({
      next: ({ issues }: any) => {
        this.issuesStatuses = this.dashboardService.mapToCards(
          this.dashboardService.groupBy(issues, ({ status: { name } }) => name)
        );
        this.issuesTypes = this.dashboardService.mapToCards(
          this.dashboardService.groupBy(
            issues,
            ({ issuetype: { name } }) => name
          )
        );
      },
      error() {
        alert('Plz refresh the page, something went wrong');
      },
    });
  }
}
