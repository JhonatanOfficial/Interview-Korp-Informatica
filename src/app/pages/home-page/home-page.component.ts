import { Component } from '@angular/core';
import { SectionHeroComponent } from "../../components/homePage/section-hero/section-hero.component";
import { CustomersComponent } from "../../components/homePage/customers/customers.component";
import { ServicesSectionComponent } from "../../components/homePage/services/index/services-section.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SectionHeroComponent,
    CustomersComponent,
    ServicesSectionComponent,
  ],

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})


export class HomePageComponent {

}
