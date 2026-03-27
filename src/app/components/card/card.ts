import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  nome: string = 'Marcos Guimarães'
  cargo: string = 'Desenvolvedor Angular'
  cidade: string = 'São Gonçalo, RJ'
}