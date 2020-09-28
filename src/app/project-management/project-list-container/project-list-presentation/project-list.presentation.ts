import { Component, EventEmitter, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { ProjectList } from '../../models/project-list.model';
import { ProjectListPresenter } from '../project-list-presenter/project-list.presenter';
import Swal from 'sweetalert2';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'project-list-presentation-ui',
  templateUrl: './project-list.presentation.html',
  styleUrls: ['./project-list.presentation.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProjectListPresentation implements OnInit {

  // Get all project detail getter setter
  @Input() public set projectList(value: ProjectList[]) {
    if (value) {
      this.project = value;
      console.log(value);

      this.filteredProjectList = value;
      this.filteredProjectList = this.filteredProjectList.length > 0 ? this.filteredProjectList : value;
      this.filteredProjectList.sort((a, b) => a > b ? 1 : -1);
      this.totalRecords = this.filteredProjectList.length;
    }
  }
  public get projectList(): ProjectList[] {
    return this.project;
  }

  // output event to add project details
  @Output() public addProject: EventEmitter<ProjectList>;
  // output event to update project details
  @Output() public updateProject: EventEmitter<ProjectList>;
  // send project id for get project
  @Output() public sendId: EventEmitter<number>;

  // list after filter
  public filteredProjectList: ProjectList[];
  // For storing total records
  public totalRecords: number;
  // For storing current page number
  public currentPage: number;
  // For storing size of page
  public pageSize: number;
  // Stores the name of field as per the model
  public fieldName: string;
  // For reversing the project list
  public reverse: boolean;
  // Search Query
  public searchQuery: string;

  // private property prpject of type array
  private project: ProjectList[];
  // private property updatedDetails
  private updatedDetails: ProjectList;

  constructor(
    private projectListPresenter: ProjectListPresenter,
  ) {
    this.reverse = true;
    this.currentPage = 1;
    this.pageSize = 5;
    this.fieldName = 'name';
    this.searchQuery = '';
    this.sendId = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  /**
   * numberOfPages
   * @description Return Number of pages
   */
  public numberOfPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize);
  }

  /**
   * onPageChanges
   * @description Sets the current page on page changes
   * @param pageNumber Current page number
   */
  public onPageChanges(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  /**
   * sorting
   * @description Function for sorting project list
   * @param fieldName Contains the name of field to sort with
   */
  public sorting(fieldName: string): void {
    // Gets the name of the field to which sorting should be applied
    this.fieldName = fieldName;
    // Sets reverse  to sort in ascending or descending order
    this.reverse = !this.reverse;
  }

  /**
   * deleteProject
   * @description delete project
   * @param id project id to delete
   */
  public deleteProject(id): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this project!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.sendId.emit(id);
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }

  /**
   * create function which will be called on add project button
   * @param projectForm projectForm of type model ProjectList
   */
  public loadProjectForm(projectForm: ProjectList): void {
    let flag = 0;
    this.projectListPresenter.createProjectForm(projectForm);

    this.projectListPresenter.addFormDetails.subscribe((projectData: ProjectList) => {
      if (flag === 0) {
        flag = 1;
        this.currentPage = 1;
        this.updatedDetails = projectData;
        this.addProject.emit(this.updatedDetails);
      }
    });

    this.projectListPresenter.updateFormDetails.subscribe((projectData: ProjectList) => {
      if (flag === 0) {
        flag = 1;
        this.updatedDetails = projectData;
        this.updateProject.emit(this.updatedDetails);
      }
    });
  }

}
