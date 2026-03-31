import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre',
  imports: [RouterLink],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {
  nome: string = 'Marcos Guimarães'
  cargo: string = 'Desenvolvedor Angular'
  cidade: string = 'São Gonçalo, RJ'
}