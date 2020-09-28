import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectListContainer } from './project-list-container/project-list.container';
import { ProjectListPresentation } from './project-list-container/project-list-presentation/project-list.presentation';
import {
  ProjectFormPresentation
} from './project-list-container/project-list-presentation/project-form-presentation/project-form.presentation';


@NgModule({
  declarations: [ProjectListContainer, ProjectListPresentation, ProjectFormPresentation],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule
  ]
})
export class ProjectManagementModule { }
