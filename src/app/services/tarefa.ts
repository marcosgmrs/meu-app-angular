import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export interface TodoItem {
  id: number
  title: string
  completed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<TodoItem[]>(this.apiUrl).pipe(
      map(todos => todos.slice(0, 20)),
      filter(todos => todos.length > 0),
      catchError(erro => {
        console.error('Erro ao buscar tarefas:', erro)
        return of([])
      })
    )
  }
}