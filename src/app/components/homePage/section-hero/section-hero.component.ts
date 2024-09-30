import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { NgOptimizedImage } from '@angular/common';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MainButtonComponent } from '../../main-button/main-button.component';
import { ContainerComponent } from '../../container/container.component';


gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-section-hero',
  standalone: true,
  imports: [ContainerComponent, MainButtonComponent, NgOptimizedImage],
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.css', './_responsive.css']
})
export class SectionHeroComponent implements AfterViewInit  {
  @ViewChild('section') sectionHero!: ElementRef;
  @ViewChild('title') titleRef!: ElementRef;
  @ViewChild('p') p!: ElementRef;
  imgPath = "/hero-section/megaphone.png"


  ngAfterViewInit() {
    this.animateText()
    this.scroll();
  }

  animateText() {
    gsap.from(this.titleRef.nativeElement, {opacity: 0, x: -50, duration: 1})
    gsap.from(this.p.nativeElement, {opacity: .3,x: 100, duration: 1})
  }

  scroll() {
    const section = this.sectionHero.nativeElement

    gsap.to(section, {
      scrollTrigger: {
        trigger: section,    
        start: 'top 5%',    
        end: '+=500',        
        scrub: 1,            
      },
      scale: .8,
           // Alterar a cor do texto para branco
    });
  }


}
