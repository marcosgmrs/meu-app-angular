import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tarefa } from '../../components/tarefa/tarefa';
import { TarefaService } from '../../services/tarefa';

@Component({
  selector: 'app-tarefas',
  imports: [RouterLink, Tarefa],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css'
})
export class Tarefas {
  tarefas: { nome: string, responsavel: string, concluida: boolean }[] = []

  constructor(private tarefaService: TarefaService) {
    this.tarefas = this.tarefaService.getTarefas()
  }
}