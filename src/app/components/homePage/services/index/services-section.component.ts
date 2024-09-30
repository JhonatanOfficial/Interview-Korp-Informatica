import { Component } from '@angular/core';

import { CardComponent } from "../card/card.component";

import { NgOptimizedImage } from '@angular/common';
import { MainButtonComponent } from '../../../main-button/main-button.component';
import { ContainerComponent } from '../../../container/container.component';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ContainerComponent, CardComponent, MainButtonComponent, NgOptimizedImage],
  templateUrl: './services-section.component.html',
  styleUrls:[ './services-section.component.css', './_responsive.css',]
})
export class ServicesSectionComponent {
 
}
