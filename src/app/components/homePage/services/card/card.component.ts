import { NgClass, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './_responsive.css']
})
export class CardComponent implements AfterViewInit {

  @ViewChild("card") card: ElementRef | null = null;

  @Input() class: string = "";
  @Input() title1: string = ""
  @Input() title2: string = ""
  @Input() imgPath: string = ""


  ngAfterViewInit() {
    gsap.fromTo(this.card?.nativeElement,
      { y: 200 },
      {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: this.card?.nativeElement,
          start: 'top 100%',
          end: "+=400",
          scrub: 1
        }
      }
    )
  }
}
