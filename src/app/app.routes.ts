import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { TasksComponent } from './pages/tasks/tasks.component';

export const routes: Routes = [
    {path: "", component: HomePageComponent},
    {path: "tarefas", component: TasksComponent},
];
