import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarefaService, TodoItem } from '../../services/tarefa';

@Component({
  selector: 'app-tarefas',
  imports: [RouterLink],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css'
})
export class Tarefas implements OnInit {
  todos = signal<TodoItem[]>([])

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefaService.getTodos().subscribe((dados) => {
      this.todos.set(dados)
    })
  }
}