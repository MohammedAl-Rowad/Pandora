import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [DashboardComponent, ChartComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatGridListModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
