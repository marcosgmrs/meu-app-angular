import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {
  nome: string = 'Marcos Guimarães'
  cargo: string = 'Desenvolvedor Angular'
  cidade: string = 'São Gonçalo, RJ'
}