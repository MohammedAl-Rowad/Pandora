import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProjectsComponent } from './components/home/all-projects/all-projects.component';
import { ProjectsResolver } from './components/home/all-projects/resolvers/get-projects.resolver';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'all-projects',
    component: AllProjectsComponent,
    resolve: { projects: ProjectsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
