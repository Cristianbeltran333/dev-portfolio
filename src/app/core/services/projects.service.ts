import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { PROJECTS_DATA } from '../data/projects.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS_DATA);
  }

  getProjectsByDifficulty(difficulty: string): Observable<Project[]> {
    return of(PROJECTS_DATA.filter(project => project.difficulty === difficulty));
  }
}
