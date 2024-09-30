import { Component } from '@angular/core';
import { ContainerComponent } from "../container/container.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ContainerComponent, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './responsive.css', '../../../_variables.css']
})
export class HeaderComponent {

}
