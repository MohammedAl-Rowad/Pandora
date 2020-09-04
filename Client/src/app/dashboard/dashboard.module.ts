import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardsComponent } from './components/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [DashboardComponent, CardsComponent],
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
