import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SectionHeroComponent } from "./components/section-hero/section-hero.component";
import { CustomersComponent } from "./components/customers/customers.component";
import { ServicesSectionComponent } from "./components/services-section/index/services-section.component";


@Component({
  selector: 'app-root', standalone: true,
  imports: [RouterOutlet, HeaderComponent, SectionHeroComponent, CustomersComponent, ServicesSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {
  title = 'positivus-tasks-website';

  
}
