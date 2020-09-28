import { Component, OnInit } from '@angular/core';
import { ProjectListPresenter } from '../project-list-presenter/project-list.presenter';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'project-list-presentation-ui',
  templateUrl: './project-list.presentation.html',
  styleUrls: ['./project-list.presentation.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProjectListPresentation implements OnInit {

  constructor(
    private projectListPresenter: ProjectListPresenter,
  ) { }

  ngOnInit() {
  }

}
