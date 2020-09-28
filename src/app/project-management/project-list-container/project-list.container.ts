import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectList } from '../models/project-list.model';
import { ProjectManagementService } from '../services/project-management.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'project-list-container',
  templateUrl: './project-list.container.html'
})
// tslint:disable-next-line: component-class-suffix
export class ProjectListContainer implements OnInit {

  // observable to store project detail
  public projectList$: Observable<ProjectList[]>;

  constructor(
    private projectManagementService: ProjectManagementService
  ) { }

  ngOnInit() {
    this.getProjectList();
  }

  /**
   * getProjectList
   * @description Gets the details of project list
   */
  private getProjectList(): void {
    // Gets project list from the database server
    this.projectList$ = this.projectManagementService.getProjectList();
  }
}
