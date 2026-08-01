import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection implements AfterViewInit {
  @ViewChild('heroBg', { static: true }) heroBg!: ElementRef<HTMLDivElement>;
  @ViewChild('heroContent', { static: true }) heroContent!: ElementRef<HTMLDivElement>;
  @ViewChild('heroContainer', { static: true }) heroContainer!: ElementRef<HTMLElement>;

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      gsap.registerPlugin(ScrollTrigger);
      
      // Parallax and zoom effect for background
      gsap.to(this.heroBg.nativeElement, {
        scale: 1.2,
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: this.heroContainer.nativeElement,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Fade out and translate content
      gsap.to(this.heroContent.nativeElement, {
        y: -100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: this.heroContainer.nativeElement,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }
  }
}
