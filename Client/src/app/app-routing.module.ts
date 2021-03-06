import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProjectsComponent } from './components/home/all-projects/all-projects.component';
import { AllUsersComponent } from './components/home/all-users/all-users.component';
import { ProjectsResolver } from './components/home/all-projects/resolvers/get-projects.resolver';
import { UsersResolver } from './components/home/all-users/resolvers/get-users.resolver';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/home/all-projects/components/project/project.component';
import { ProjectResolver } from './components/home/all-projects/components/resolvers/project.resolver';
import { UsersComponent } from './components/home/all-users/users/users.component';
import { AllEpicsComponent } from './components/home/all-epics/all-epics.component';
import { EpicResolver } from './components/home/all-epics/resolvers/get-epics.resolver';
import { EpicComponent } from './components/home/all-epics/epic/epic.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'projects',
    component: AllProjectsComponent,
    pathMatch: 'full',
    resolve: { projects: ProjectsResolver },
  },
  {
    path: 'projects/:id',
    component: ProjectComponent,
    resolve: { data: ProjectResolver },
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'users',
    component: AllUsersComponent,
    resolve: { users: UsersResolver },
  },
  {
    path: 'users/:id',
    component: UsersComponent,
    resolve: { users: UsersResolver },
  },
  {
    path: 'epics',
    component: AllEpicsComponent,
    resolve: { epics: EpicResolver },
  },
  {
    path: 'epics/:id',
    component: EpicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
