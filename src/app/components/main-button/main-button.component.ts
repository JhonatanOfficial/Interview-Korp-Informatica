
import { Component, input, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css'
})
export class MainButtonComponent {

  @Input() text: string = "" 
  @Input() href: string = ""


}
