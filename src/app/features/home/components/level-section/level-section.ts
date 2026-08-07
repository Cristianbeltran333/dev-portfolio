import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Project } from '../../../../core/models/project';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';

@Component({
  selector: 'app-level-section',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './level-section.html',
  styleUrl: './level-section.css',
})
export class LevelSection implements AfterViewInit, OnDestroy {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() projects: Project[] = [];
  @Input() themeClass: string = '';
  
  @ViewChild('scrollContainer') scrollContainer?: ElementRef<HTMLElement>;

  private scrollInterval: any;
  private isPaused = false;
  private scrollDirection = 1;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoScroll();
    }
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    // Execute outside Angular to prevent excessive change detection
    this.ngZone.runOutsideAngular(() => {
      this.scrollInterval = setInterval(() => {
        if (this.isPaused || !this.scrollContainer) return;
        
        const el = this.scrollContainer.nativeElement;
        
        // Auto-scroll only if there's overflowing content (mobile view)
        if (el.scrollWidth > el.clientWidth) {
          // Estimate card width + gap for a smooth snap (e.g. ~340px)
          const scrollAmount = 340; 
          
          let nextScrollLeft = el.scrollLeft + (scrollAmount * this.scrollDirection);
          
          // Reached the right end
          if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10 && this.scrollDirection === 1) {
            this.scrollDirection = -1;
            nextScrollLeft = el.scrollLeft - scrollAmount;
          } 
          // Reached the left end
          else if (el.scrollLeft <= 10 && this.scrollDirection === -1) {
            this.scrollDirection = 1;
            nextScrollLeft = el.scrollLeft + scrollAmount;
          }
          
          el.scrollLeft = nextScrollLeft;
        }
      }, 3000); // Slide every 3 seconds
    });
  }

  stopAutoScroll() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }

  pauseScroll() {
    this.isPaused = true;
  }

  resumeScroll() {
    this.isPaused = false;
  }
}
