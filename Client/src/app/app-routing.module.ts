import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProjectsComponent } from './components/home/all-projects/all-projects.component';
import { AllUsersComponent } from './components/home/all-users/all-users.component';
import { ProjectsResolver } from './components/home/all-projects/resolvers/get-projects.resolver';
import { UsersResolver } from './components/home/all-users/resolvers/get-users.resolver';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'projects',
    component: AllProjectsComponent,
    resolve: { projects: ProjectsResolver },
  },
  {
    path: 'users',
    component: AllUsersComponent,
    resolve: { users: UsersResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
