# 📚 Jornada de Aprendizado Angular — Marcos Guimarães

> Este arquivo serve como **briefing completo** para qualquer agente de IA (Claude, Antigravity, etc.)
> dar continuidade às aulas de onde paramos. Leia tudo antes de responder qualquer coisa.

---

## 👤 Perfil do aluno

| Campo | Info |
|---|---|
| **Nome** | Marcos Guimarães |
| **Cidade** | São Gonçalo, RJ |
| **GitHub** | github.com/marcosgmrs |
| **Nível inicial** | Sabia apenas HTML e CSS. Zero de programação. |
| **Computador** | MacBook Air (Apple Silicon) |
| **Disponibilidade** | Mais de 2h por dia |
| **Objetivo** | Primeiro emprego como dev front-end júnior |
| **Curso de referência** | Udemy — The Complete Guide to Angular (Maximilian) |

---

## 🎓 Estilo de ensino que funciona com este aluno

- **Didático e passo a passo** — nunca pular etapas
- **Explicação semântica instrumental** — não só "o que fazer", mas **por que existe** e **que problema resolve**
- **Analogias do cotidiano** — Excel, YouTube, fila de caixas, etc.
- **Código no VS Code** — não no console do navegador
- **Commit a cada avanço** — `git add . → git commit → git push` ao fim de cada aula
- **Numeração das aulas** — o aluno gosta de saber em que aula está
- **Imagens quando ajudam** — diagramas de conceitos são bem-vindos
- **Não avançar se não entendeu** — perguntar o que ficou claro antes de seguir
- **Não usar copiar/colar sem explicação** — o aluno percebe quando está só copiando
- **Sintaxe Angular moderna (v18+)** — usar `@if`, `@for`, `styleUrl` (sem s), `input()`, `signal()`. Nunca `*ngIf`, `*ngFor`, `styleUrls`

---

## 🗂️ Projeto atual

- **Pasta:** `~/Angular/estudos-angular`
- **Repositório GitHub:** `github.com/marcosgmrs/estudos-angular`
- **Angular:** v18+ (standalone components — `standalone: true` NÃO é necessário)
- **Servidor de dev:** `ng serve` → `http://localhost:4200`

### Estrutura relevante

```
src/app/
├── app.ts                  ← componente raiz com nav e router-outlet
├── app.html                ← nav com links e <router-outlet>
├── app.routes.ts           ← rotas definidas
├── app.config.ts           ← configuração do app (HttpClient, interceptor)
│
├── pages/
│   ├── home/               ← página inicial
│   ├── tarefas/            ← lista de tópicos de estudo com status
│   ├── sobre/              ← página sobre
│   ├── login/              ← formulário reativo de login
│   └── perfil/             ← perfil com GitHub API, abas, progresso, currículo
│
├── services/
│   ├── tarefa.ts           ← TarefaService — retorna lista de tópicos de estudo
│   └── github.ts           ← GithubService — busca dados e repos da API do GitHub
│
├── guards/
│   └── auth-guard.ts       ← protege a rota /perfil (redireciona para /login)
│
└── interceptors/
    └── auth-interceptor.ts ← adiciona header Authorization Bearer nas requisições
```

---

## ✅ Aulas concluídas (resumo)

### Fase 0 — Pré-requisitos

| Aula | Tópico | Conceitos-chave |
|---|---|---|
| 1–6 | Terminal | `pwd`, `ls`, `cd`, `mkdir`, `code .`, `clear` |
| 7–12 | Git & GitHub | `init`, `add`, `commit`, `push`, remote, autenticação |
| 13–21 | JavaScript no Console | vars, objetos, funções, arrow fn, async/await |
| 22–29 | JavaScript no VS Code | `return`, arrays, `map`, `filter`, `find`, métodos, callbacks |
| 28 | Branches (conceito) | `git branch`, `git checkout`, merge — conceito, sem prática aprofundada |

### Fase 1 — TypeScript

| Aula | Tópico | Conceitos-chave |
|---|---|---|
| 30–31 | Por que TypeScript existe | Problema do JS sem tipos, `somar("2", 3) === 23` |
| 32–33 | Instalação e primeiro `.ts` | `npm install -g typescript`, `tsc`, `ts-node` |
| 34 | Tipos primitivos | `string`, `number`, `boolean`, `string[]` |
| 35–36 | Interface | Contrato de objeto, propriedade opcional com `?` |
| 37 | Classes | `class`, `constructor`, `this`, `new`, instâncias |

### Fase 2 — Angular

| Aula | Tópico | Conceitos-chave |
|---|---|---|
| 38–40 | O que é Angular | Framework vs biblioteca, componente, arvore de componentes |
| 41 | Angular CLI | `npm install -g @angular/cli`, `ng version` |
| 42 | Primeiro projeto | `ng new`, `ng serve`, `app.ts`, `app.html`, live reload |
| 43 | Primeiro componente | `ng generate component`, `@Component`, selector, `.ts+.html+.css` |
| 43 | Interpolação | `{{ valor }}` |
| 44 | @Input | Passar dados de fora para dentro do componente |
| 44 | @for | Repetir componentes com lista |
| 45 | Eventos | `(click)="metodo()"`, `incrementar()`, `: void` |
| 46 | @if | Mostrar/esconder com condição |
| 47 | Two-way binding | `[(ngModel)]`, `FormsModule` |
| 48–49 | Serviços | `@Injectable`, `providedIn: 'root'`, separação de responsabilidades |
| 50 | Injeção de dependência | `inject()` vs construtor, como o Angular entrega serviços |
| 50 | HttpClient | `GET` de API, `subscribe`, `pipe`, `catchError`, `of` |
| 51 | Rotas | `app.routes.ts`, `<router-outlet>`, `routerLink`, `routerLinkActive` |
| 51 | Navegação programática | `inject(Router)`, `router.navigate(['/perfil'])` |
| 52 | Reactive Forms | `FormGroup`, `FormControl`, `Validators`, `formulario.valid`, `get email()` |
| 53 | RxJS e Observables | `Subject`, `pipe`, `debounceTime`, `distinctUntilChanged`, `subscribe`, busca reativa |
| — | Guard de rota | `CanActivateFn`, `canActivate: [authGuard]`, redirect para `/login` |
| — | Interceptor HTTP | `HttpInterceptorFn`, adicionar header `Authorization: Bearer token` |
| — | Página de Perfil | GitHub API, signals, abas, barra de progresso, currículo |

---

## ⏳ Próxima aula — **Aula 54: Autenticação com JWT e Interceptors (fundo)**

O aluno já tem um interceptor básico, mas precisamos entender como gerenciar o ciclo de vida do token, expiração e segurança real.

### O que cobrir na Aula 54:

1. **O que é JWT** — o "crachá" assinado digitalmente
2. **Refresh Token (Conceito)** — como manter o usuário logado sem pedir senha toda hora
3. **Gerenciamento de Estado do Usuário** — evoluir o `estaLogado` do App para algo centralizado
4. **Tratamento de erro 401** — o que fazer quando o token expira (redirecionamento automático)

### Estado ao iniciar a Aula 54:

- RxJS concluído com busca reativa no perfil.
- Próximo passo natural é segurança e autenticação profissional.
- O aluno já tem uma base de interceptor e guard, vamos aprofundar.

---

## 📌 Notas importantes para o próximo agente

1. **Angular v18**: use `signal()`, `@if`, `@for`, `inject()`, `input()`. Nunca decorators antigos como `*ngIf`, `*ngFor`.
2. **Não use `standalone: true`** — é o padrão, não precisa declarar.
3. **`styleUrl`** (sem s) — não `styleUrls`.
4. **O aluno tem dificuldade de reproduzir sem consulta** — normal para o estágio. Não pressionar por memorização, focar em leitura e compreensão de código.
5. **O aluno usa agentes de IA para ajudar** — aceitar, mas ensinar a ler o que foi gerado.
6. **Committar a cada aula** — é parte do ritual e o aluno gosta.
7. **Projetos no GitHub:** `marcosgmrs/estudos-angular` (principal) e `marcosgmrs/meu-projeto` (arquivo de prática JS/TS).

---

## 🗺️ Fases restantes do plano original

- [x] Fase 0 — Terminal, Git, JavaScript básico
- [x] Fase 1 — TypeScript essencial
- [x] Fase 2 — Angular (componentes, rotas, serviços, formulários, guards, interceptors)
- [ ] **Fase 3 — Angular avançado:**
  - [ ] RxJS e Observables ← **PRÓXIMO**
  - [ ] Autenticação com JWT
  - [ ] Testes unitários
  - [ ] Deploy e CI/CD (Vercel)
