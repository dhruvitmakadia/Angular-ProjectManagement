import { Injectable, Injector, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ProjectList } from '../../models/project-list.model';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ProjectFormPresentation } from '../project-list-presentation/project-form-presentation/project-form.presentation';
import { PROJECT_DETAILS } from '../../token';


@Injectable({
  providedIn: 'root'
})
export class ProjectListPresenter {

  // addFormDetails subject of type ProjectList model
  public addFormDetails: Subject<ProjectList>;
  // addDetails subject of type ProjectList model
  public updateFormDetails: Subject<ProjectList>;

  constructor(
    // private overlay: Overlay,
    // private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) { }

  /**
   * to open overlay and pass project data
   * @param projectDetails projectDetails
   */
  public createProjectForm(projectDetails: ProjectList): void {
    // this.viewContainerRef.clear();

    // let config = new OverlayConfig();

    // // To set position of overlay
    // config.positionStrategy = this.overlay.position()
    //   .global()
    //   .centerHorizontally()
    //   .centerVertically();

    // // Used to close overlay on Backdrop
    // config.hasBackdrop = true;

    // // Used in creating overlay
    // let overlayRef = this.overlay.create(config);

    // // Used to close overlay on Backdrop
    // overlayRef.backdropClick().subscribe(() => {
    //   overlayRef.dispose();
    // });

    // // Create overlay
    // let ref = overlayRef.attach(new ComponentPortal(
    //   ProjectFormPresentation, this.viewContainerRef, this.createInjector(projectDetails, overlayRef)));

    // ref.instance.updateProject.subscribe((formData: ProjectList) => {
    //   if (formData) {
    //     this.updateFormDetails.next(formData);
    //   }
    // });

    // ref.instance.addProject.subscribe((formData: ProjectList) => {
    //   if (formData) {
    //     this.addFormDetails.next(formData);
    //   }
    // });
  }


  /**
   * createInjector() method
   * @param projectDetails projectDetails of type ProjectForm
   * @param overlayRef overlayRef which returns PortalInjector
   */
  private createInjector(projectDetails: ProjectList, overlayRef: OverlayRef) {
  //   const injectorTokens = new WeakMap();
  //   injectorTokens.set(OverlayRef, overlayRef);
  //   injectorTokens.set(PROJECT_DETAILS, projectDetails);
  //   // tslint:disable-next-line: deprecation
  //   return new PortalInjector(this.injector, injectorTokens);
  }
}
