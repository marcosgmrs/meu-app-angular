import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tarefas } from './pages/tarefas/tarefas';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tarefas', component: Tarefas }
]