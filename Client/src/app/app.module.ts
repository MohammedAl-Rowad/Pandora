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
import { ProjectComponent } from './components/home/all-projects/components/project/project.component';
import { ProjectResolver } from './components/home/all-projects/components/resolvers/project.resolver';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './components/home/all-projects/components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMainChartsComponent,
    AllProjectsComponent,
    AllUsersComponent,
    ProjectComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    MatModule,
    NgxSpinnerModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [ProjectsResolver, UsersResolver, ProjectResolver],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
