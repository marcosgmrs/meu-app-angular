import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tarefas } from './pages/tarefas/tarefas';
import { Sobre } from './pages/sobre/sobre';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guard';
import { Perfil } from './pages/perfil/perfil';
import { Diario } from './pages/diario/diario';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tarefas', component: Tarefas },
  { path: 'sobre', component: Sobre },
  { path: 'login', component: Login },
  { path: 'perfil', component: Perfil, canActivate: [authGuard] },
  { path: 'diario', component: Diario }
]