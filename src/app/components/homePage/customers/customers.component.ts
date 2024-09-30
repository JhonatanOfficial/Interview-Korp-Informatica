import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ContainerComponent } from '../../container/container.component';

gsap.registerPlugin(ScrollTrigger)
@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [NgFor, ContainerComponent],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css',]
})
export class CustomersComponent implements AfterViewInit {

  @ViewChild("containerRef") containerRef: ElementRef | null = null;

  customers = [
    { img: "/customers/amazon.png", alt: "Amazon" },
    { img: "/customers/dribe.png", alt: "Amazon" },
    { img: "/customers/hubspot.png", alt: "Amazon" },
    { img: "/customers/notion.png", alt: "Amazon" },
    { img: "/customers/netflix.png", alt: "Amazon" },
    { img: "/customers/zoom.png", alt: "Amazon" },
  ]

  ngAfterViewInit() {

    const container = this.containerRef?.nativeElement
    gsap.fromTo(container,
      { x: 0, },
      {
        x: -400,
        duration: 10 ,
        scrollTrigger: {
          trigger: container,
         
          scrub: 2
        }
      })
  }

}
