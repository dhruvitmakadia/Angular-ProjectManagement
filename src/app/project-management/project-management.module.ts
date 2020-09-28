import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectListContainer } from './project-list-container/project-list.container';
import { ProjectListPresentation } from './project-list-container/project-list-presentation/project-list.presentation';
import {
  ProjectFormPresentation
} from './project-list-container/project-list-presentation/project-form-presentation/project-form.presentation';
import { ProjectManagementService } from './services/project-management.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderPipe } from './pipes/order.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';


@NgModule({
  declarations: [
    ProjectListContainer,
    ProjectListPresentation,
    ProjectFormPresentation,
    OrderPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    ProjectManagementRoutingModule
  ],
  providers: [
    ProjectManagementService
  ]
})
export class ProjectManagementModule { }
