import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../core/models/project';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';

@Component({
  selector: 'app-level-section',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './level-section.html',
  styleUrl: './level-section.css',
})
export class LevelSection {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() projects: Project[] = [];
  @Input() themeClass: string = '';
}
