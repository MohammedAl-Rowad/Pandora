import { Component, OnInit, Input } from '@angular/core';
import { ChartData, LineData } from 'src/types';

@Component({
  selector: 'panadora-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() issuesStatuses: ChartData;
  @Input() issuesTypes: ChartData;
  @Input() total: ChartData;
  @Input() colorScheme?: Array<string>;
  @Input() barData?: ChartData;
  @Input() lineData?: LineData;

  ngOnInit(): void {}
}
