import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panadora-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() issuesStatuses: Array<{ name: string; value: number }>;
  @Input() issuesTypes: Array<{ name: string; value: number }>;

  ngOnInit(): void {}
}
