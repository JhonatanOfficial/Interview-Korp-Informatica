import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// Console.log estilizado
console.log('%cProjeto desenvolvido exclusivamente para o processo seletivo da Korps tecnologia', 'padding: .5rem 1rem; background-color:red; font-size: 2rem;');
console.log('%cObrigado, Carolina e Eduardo, pela oportunidade de estar aqui com vocês. ', 'padding: .5rem 1rem; background-color:green; font-size: 2rem;');
console.log('%cEspero fazer parte da equipe 🙌🏻', 'padding: .5rem 1rem; background-color:green; font-size: 2rem;');
