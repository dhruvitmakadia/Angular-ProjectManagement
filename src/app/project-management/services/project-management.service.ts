import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectList } from '../models/project-list.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService {

  // API URL
  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.baseUrl = environment.baseUrl;
  }

  /**
   * getProjectList
   * @description to get all project list
   */
  public getProjectList(): Observable<ProjectList[]> {
    const url: string = `${this.baseUrl}/projects`;
    return this.httpClient.get<ProjectList[]>(url);
  }

  /**
   * getProjectList
   * @description to get all project list
   * @param id project id
   */
  public deleteProject(id: number): Observable<ProjectList> {
    const url: string = `${this.baseUrl}/projects/${id}`;
    return this.httpClient.delete<ProjectList>(url);
  }
}
