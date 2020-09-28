import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'project-management',
    pathMatch: 'full'
  },
  {
    path: 'project-management', loadChildren: './project-management/project-management.module#ProjectManagementModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
