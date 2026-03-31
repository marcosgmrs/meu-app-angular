import { Component, signal, effect } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  estaLogado = signal(false)

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(evento => evento instanceof NavigationEnd)
    ).subscribe(() => {
      this.estaLogado.set(localStorage.getItem('logado') === 'true')
    })
  }
}