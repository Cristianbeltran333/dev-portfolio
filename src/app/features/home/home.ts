import { Component, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../core/models/project';
import { LevelSection } from './components/level-section/level-section';
import { HeroSection } from './components/hero-section/hero-section';
import { PersonalProjects } from './components/personal-projects/personal-projects';
import { Subscription } from 'rxjs';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LevelSection, HeroSection, PersonalProjects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  newbieProjects: Project[] = [];
  juniorProjects: Project[] = [];
  intermediateProjects: Project[] = [];
  advancedProjects: Project[] = [];
  guruProjects: Project[] = [];
  
  private sub!: Subscription;
  private lenis!: Lenis;
  private isBrowser: boolean;

  constructor(
    private projectsService: ProjectsService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.sub = this.projectsService.getProjects().subscribe(projects => {
      this.newbieProjects = projects.filter(p => p.difficulty === 'Novato');
      this.juniorProjects = projects.filter(p => p.difficulty === 'Junior');
      this.intermediateProjects = projects.filter(p => p.difficulty === 'Intermedio');
      this.advancedProjects = projects.filter(p => p.difficulty === 'Avanzado');
      this.guruProjects = projects.filter(p => p.difficulty === 'Gurú');
    });
  }
  
  ngAfterViewInit(): void {
    if (this.isBrowser) {
      gsap.registerPlugin(ScrollTrigger);
      this.initSmoothScrolling();
    }
  }

  private initSmoothScrolling(): void {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    this.lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      this.lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.isBrowser && this.lenis) {
      this.lenis.destroy();
      gsap.ticker.remove(this.lenis.raf);
    }
  }
}
