import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tarefas } from './pages/tarefas/tarefas';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tarefas', component: Tarefas },
  { path: 'sobre', component: Sobre }
]