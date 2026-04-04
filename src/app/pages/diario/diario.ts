import { Component, inject } from '@angular/core';
import { DiarioService } from '../../services/diario';

@Component({
  selector: 'app-diario',
  imports: [],
  templateUrl: './diario.html',
  styleUrl: './diario.css'
})
export class Diario {
  private diarioService = inject(DiarioService);
  mensagens = this.diarioService.getMensagens();

  formatarAutor(autor: string): string {
    return autor === 'professor' ? '🤖 Claude' : '👨‍💻 Marcos'
  }
}