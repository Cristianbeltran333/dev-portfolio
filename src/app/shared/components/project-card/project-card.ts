import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() project!: Project;
  @ViewChild('instructionsModal') modal!: ElementRef<HTMLDialogElement>;

  openInstructions(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.modal.nativeElement.showModal();
  }

  closeInstructions(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.modal.nativeElement.close();
  }
}
