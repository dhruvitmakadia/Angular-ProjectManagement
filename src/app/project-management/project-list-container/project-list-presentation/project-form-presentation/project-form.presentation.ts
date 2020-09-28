import { Component, OnInit } from '@angular/core';
import { ProjectFormPresenter } from '../project-form-presenter/project-form.presenter';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'project-form-presentation-ui',
  templateUrl: './project-form.presentation.html',
  styleUrls: ['./project-form.presentation.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProjectFormPresentation implements OnInit {

  constructor(
    private projectFormPresenter: ProjectFormPresenter
  ) { }

  ngOnInit() {
  }

}
