import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  imports: [Card, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  pessoas = [
    { nome: 'Marcos Guimarães', cargo: 'Desenvolvedor Angular', cidade: 'São Gonçalo, RJ' },
    { nome: 'Ana Silva', cargo: 'Desenvolvedora React', cidade: 'Rio de Janeiro, RJ' },
    { nome: 'Carlos Santos', cargo: 'Desenvolvedor Vue', cidade: 'Niterói, RJ' },
    { nome: 'Julia Costa', cargo: 'Desenvolvedora Angular', cidade: 'Petrópolis, RJ' }
  ]

  contador: number = 0
  nomeBusca: string = ''

  incrementar(): void {
    this.contador++
  }

  get pessoasFiltradas() {
    if (!this.nomeBusca) {
      return this.pessoas
    }
    return this.pessoas.filter((pessoa) =>
      pessoa.nome.toLowerCase().includes(this.nomeBusca.toLowerCase())
    )
  }
}