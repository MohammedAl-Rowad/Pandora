import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './components/home/home.component';
import { MatModule } from './modules/mat/mat.module';
import { HomeMainChartsComponent } from './components/home-main-charts/home-main-charts.component';
import { AllProjectsComponent } from './components/home/all-projects/all-projects.component';
import { AllUsersComponent } from './components/home/all-users/all-users.component';
import { ProjectsResolver } from './components/home/all-projects/resolvers/get-projects.resolver';
import { UsersResolver } from './components/home/all-users/resolvers/get-users.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMainChartsComponent,
    AllProjectsComponent,
    AllUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    MatModule,
    NgxSpinnerModule,
  ],
  providers: [ProjectsResolver, UsersResolver],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
