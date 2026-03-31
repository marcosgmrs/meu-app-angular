import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export interface TodoItem {
  id: number
  title: string
  completed: boolean
  categoria: string
}

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private tarefas: TodoItem[] = [
    { id: 1, title: 'Terminal e linha de comando', completed: true, categoria: 'Fundamentos' },
    { id: 2, title: 'Git e controle de versão', completed: true, categoria: 'Fundamentos' },
    { id: 3, title: 'JavaScript essencial', completed: true, categoria: 'Fundamentos' },
    { id: 4, title: 'TypeScript — tipos e interfaces', completed: true, categoria: 'Fundamentos' },
    { id: 5, title: 'Componentes Angular', completed: true, categoria: 'Angular' },
    { id: 6, title: 'Templates e interpolação', completed: true, categoria: 'Angular' },
    { id: 7, title: 'Property e event binding', completed: true, categoria: 'Angular' },
    { id: 8, title: 'Serviços e injeção de dependência', completed: true, categoria: 'Angular' },
    { id: 9, title: 'Rotas e navegação', completed: true, categoria: 'Angular' },
    { id: 10, title: 'HttpClient e APIs REST', completed: true, categoria: 'Angular' },
    { id: 11, title: 'Reactive Forms e validação', completed: true, categoria: 'Angular' },
    { id: 12, title: 'Guards de rota', completed: true, categoria: 'Angular' },
    { id: 13, title: 'RxJS e Observables', completed: false, categoria: 'Avançado' },
    { id: 14, title: 'Autenticação com JWT', completed: false, categoria: 'Avançado' },
    { id: 15, title: 'Testes unitários', completed: false, categoria: 'Avançado' },
    { id: 16, title: 'Deploy e CI/CD', completed: false, categoria: 'Avançado' },
  ]

  constructor(private http: HttpClient) {}

  getTodos() {
    return of(this.tarefas)
  }
}