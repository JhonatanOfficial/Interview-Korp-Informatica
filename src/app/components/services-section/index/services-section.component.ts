import { Component } from '@angular/core';
import { ContainerComponent } from "../../container/container.component";
import { CardComponent } from "../card/card.component";
import { MainButtonComponent } from "../../main-button/main-button.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ContainerComponent, CardComponent, MainButtonComponent, NgOptimizedImage],
  templateUrl: './services-section.component.html',
  styleUrls:[ './services-section.component.css', './_responsive.css', '../../../../_variables.css']
})
export class ServicesSectionComponent {
 
}
