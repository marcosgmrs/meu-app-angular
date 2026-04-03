import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService, GithubUsuario, GithubRepo } from '../../services/github';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil implements OnInit {
  email = signal('')
  usuario = signal<GithubUsuario | null>(null)
  repositorios = signal<GithubRepo[]>([])
  private todosRepos: GithubRepo[] = []
  private termoBusca = new Subject<string>()
  carregando = signal(true)
  abaAtiva = signal('progresso')

  topicos = [
    { nome: 'Terminal e linha de comando', concluido: true, categoria: 'Fundamentos' },
    { nome: 'Git e controle de versão', concluido: true, categoria: 'Fundamentos' },
    { nome: 'JavaScript essencial', concluido: true, categoria: 'Fundamentos' },
    { nome: 'TypeScript — tipos e interfaces', concluido: true, categoria: 'Fundamentos' },
    { nome: 'Componentes Angular', concluido: true, categoria: 'Angular' },
    { nome: 'Templates e interpolação', concluido: true, categoria: 'Angular' },
    { nome: 'Property e event binding', concluido: true, categoria: 'Angular' },
    { nome: 'Serviços e injeção de dependência', concluido: true, categoria: 'Angular' },
    { nome: 'Rotas e navegação', concluido: true, categoria: 'Angular' },
    { nome: 'HttpClient e APIs REST', concluido: true, categoria: 'Angular' },
    { nome: 'Reactive Forms e validação', concluido: true, categoria: 'Angular' },
    { nome: 'Guards de rota', concluido: true, categoria: 'Angular' },
    { nome: 'RxJS e Observables', concluido: false, categoria: 'Avançado' },
    { nome: 'Autenticação com JWT', concluido: false, categoria: 'Avançado' },
    { nome: 'Testes unitários', concluido: false, categoria: 'Avançado' },
    { nome: 'Deploy e CI/CD', concluido: false, categoria: 'Avançado' },
  ]

  get totalConcluidos() {
    return this.topicos.filter(t => t.concluido).length
  }

  get percentual() {
    return Math.round((this.totalConcluidos / this.topicos.length) * 100)
  }

  constructor(
    private router: Router,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    this.email.set(localStorage.getItem('email') ?? '')
    this.githubService.getUsuario().subscribe((dados) => {
      this.usuario.set(dados)
      this.carregando.set(false)
    })
    this.githubService.getRepositorios().subscribe((repos) => {
      this.todosRepos = repos
      this.repositorios.set(repos)
    })

    // Configuração do fluxo RxJS para busca
    this.termoBusca.pipe(
      debounceTime(300),           // Espera 300ms após o usuário parar de digitar
      distinctUntilChanged()      // Só dispara se o termo for diferente do último (ex: seta pro lado)
    ).subscribe(termo => {
      const filtrados = this.todosRepos.filter(repo => 
        repo.name.toLowerCase().includes(termo.toLowerCase())
      )
      this.repositorios.set(filtrados)
    })
  }

  trocarAba(aba: string): void {
    this.abaAtiva.set(aba)
  }

  buscarRepositorios(evento: Event): void {
    const input = evento.target as HTMLInputElement
    this.termoBusca.next(input.value) // "Abre a torneira" e envia o texto
  }

  sair(): void {
    localStorage.removeItem('logado')
    localStorage.removeItem('email')
    this.router.navigate(['/login'])
  }
}