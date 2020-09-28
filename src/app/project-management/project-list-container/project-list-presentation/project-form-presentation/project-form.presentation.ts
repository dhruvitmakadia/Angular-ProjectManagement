import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectList } from 'src/app/project-management/models/project-list.model';
import { ProjectFormPresenter } from '../project-form-presenter/project-form.presenter';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'project-form-presentation-ui',
  templateUrl: './project-form.presentation.html',
  styleUrls: ['./project-form.presentation.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProjectFormPresentation implements OnInit {

  // event for addProject
  @Output() public addProject: EventEmitter<ProjectList>;
  // event for update project
  @Output() public updateProject: EventEmitter<ProjectList>;

  constructor(
    private projectFormPresenter: ProjectFormPresenter
  ) { }

  ngOnInit() {
  }

}
