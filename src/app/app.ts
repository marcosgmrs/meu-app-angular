import { Component } from '@angular/core';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  pessoas = [
    { nome: 'Marcos Guimarães', cargo: 'Desenvolvedor Angular', cidade: 'São Gonçalo, RJ' },
    { nome: 'Ana Silva', cargo: 'Desenvolvedora React', cidade: 'Rio de Janeiro, RJ' },
    { nome: 'Carlos Santos', cargo: 'Desenvolvedor Vue', cidade: 'Niterói, RJ' }
  ]
}