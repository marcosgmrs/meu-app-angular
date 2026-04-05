# 📚 Jornada Angular — Marcos Guimarães
> Briefing completo para continuidade das aulas. Leia antes de responder qualquer coisa.

---

## 👤 Perfil do aluno

| Campo | Info |
|---|---|
| **Nome** | Marcos Henriques Guimarães |
| **Cidade** | São Gonçalo, RJ |
| **GitHub** | github.com/marcosgmrs |
| **Nível inicial** | Apenas HTML e CSS. Zero de programação. |
| **Computador** | MacBook Air (Apple Silicon) |
| **Disponibilidade** | Mais de 2h por dia |
| **Objetivo** | Primeiro emprego como dev front-end júnior |
| **Curso de referência** | Udemy — The Complete Guide to Angular (Maximilian) |

---

## 🎓 Como ensinar este aluno

- **Didático e passo a passo** — nunca pular etapas, sempre explicar o porquê
- **Semântica instrumental** — não só "o que fazer", mas que problema aquilo resolve
- **Analogias do cotidiano** — fábricas, receitas, fotos, táxis, torneiras
- **Código sempre no VS Code** — não no console do navegador
- **Commit a cada avanço** — faz parte do ritual, o aluno gosta
- **Numerar as aulas** — o aluno gosta de saber em que aula está
- **Imagens e diagramas** — bem-vindos quando ajudam a entender
- **Não pressionar por memorização** — foco em leitura e compreensão
- **Angular moderno (v18+)** — `@if`, `@for`, `signal()`, `styleUrl` (sem s). Nunca `*ngIf`, `*ngFor`, `styleUrls`
- **Não usar `standalone: true`** — é o padrão no Angular 18+, não precisa declarar
- **Sempre atualizar o PROGRESSO.md** ao fim de cada sessão de aulas

---

## 🗂️ Repositórios e projetos

| Repositório | Descrição | Deploy |
|---|---|---|
| `marcosgmrs/estudos-angular` | Repositório principal de estudos | meus-estudos-angular.vercel.app |
| `marcosgmrs/mineralogia` | Catálogo satírico de minerais (projeto 2) | mineralogia.vercel.app |
| `marcosgmrs/marcosgmrs` | Portfólio pessoal Angular | marcosgmrs.vercel.app |
| `Vistructa/gems_studies` | Repo colaborativo do amigo (branch: feature/mineralogia) | — |

### Projeto principal de estudos

- **Pasta local:** `~/Angular/estudos-angular`
- **Servidor:** `ng serve` → `http://localhost:4200`
- **Angular:** v18 standalone

```
src/app/
├── app.ts / app.html / app.css    ← raiz com navbar e router-outlet
├── app.routes.ts                  ← todas as rotas
├── app.config.ts                  ← HttpClient + interceptor configurados
│
├── pages/
│   ├── home/       ← página inicial dark laranja
│   ├── tarefas/    ← lista de tópicos de estudo com status (signal)
│   ├── sobre/      ← dados reais do GitHub API + cards de info
│   ├── login/      ← formulário reativo com validação
│   ├── perfil/     ← dashboard com abas: Progresso, Repositórios, Currículo
│   └── diario/     ← histórico das aulas em formato de chat
│
├── services/
│   ├── tarefa.ts   ← lista de tópicos de estudo (dados locais)
│   ├── github.ts   ← GitHub API: getUsuario() e getRepositorios()
│   └── diario.ts   ← histórico de mensagens das aulas
│
├── guards/
│   └── auth-guard.ts        ← protege /perfil, redireciona para /login
│
└── interceptors/
    └── auth-interceptor.ts  ← adiciona Authorization Bearer (exceto api.github.com)
```

---

## ✅ Aulas concluídas

### Fase 0 — Pré-requisitos

| Aulas | Tópico | Conceitos |
|---|---|---|
| 1–6 | Terminal | `pwd`, `ls`, `cd`, `mkdir`, `code .`, `clear` |
| 7–12 | Git & GitHub | `init`, `add`, `commit`, `push`, remote, token |
| 13–21 | JavaScript no Console | vars, objetos, funções, arrow fn, async/await |
| 22–29 | JavaScript no VS Code | `return`, arrays, `map`, `filter`, `find`, callbacks |
| 28 | Branches | `git branch`, `git checkout`, merge (conceito) |

### Fase 1 — TypeScript

| Aulas | Tópico | Conceitos |
|---|---|---|
| 30–31 | Por que TypeScript | `somar("2", 3) === 23` — o problema |
| 32–33 | Instalação | `npm install -g typescript`, `ts-node` |
| 34 | Tipos primitivos | `string`, `number`, `boolean`, `string[]` |
| 35–36 | Interface | Contrato de objeto, propriedade opcional `?` |
| 37 | Classes | `class`, `constructor`, `this`, `new` |

### Fase 2 — Angular fundamentos

| Aulas | Tópico | Conceitos |
|---|---|---|
| 38–40 | O que é Angular | Framework vs biblioteca, componentes, árvore |
| 41 | Angular CLI | `ng new`, `ng generate`, `ng serve` |
| 42–43 | Primeiro projeto | `app.ts`, `app.html`, live reload, interpolação `{{ }}` |
| 44 | @Input e @for | Passar dados entre componentes, repetir listas |
| 45 | Eventos | `(click)`, `: void`, métodos na classe |
| 46 | @if | Condicionais no template |
| 47 | Two-way binding | `[(ngModel)]`, `FormsModule` |
| 48–49 | Serviços | `@Injectable`, separação de responsabilidades |
| 50 | HttpClient | `GET`, `subscribe`, `pipe`, `catchError`, `of` |
| 51 | Rotas | `app.routes.ts`, `router-outlet`, `routerLink` |
| 52 | Reactive Forms | `FormGroup`, `FormControl`, `Validators` |
| 53 | RxJS | `Observable`, `subscribe`, `pipe`, `map`, `filter`, `catchError` |
| — | Guards | `CanActivateFn`, `canActivate`, redirect |
| — | Interceptors | `HttpInterceptorFn`, `req.clone()`, `setHeaders` |
| — | Signals | `signal()`, `.set()`, `.asReadonly()` |
| — | GitHub API | Busca de dados reais, perfil com abas |

### Fase 3 — Projetos reais construídos

| Projeto | Descrição | Status |
|---|---|---|
| `estudos-angular` | App de estudos com auth, rotas, API, dark mode | ✅ Em andamento |
| `mineralogia` | Catálogo satírico + quiz, Angular 21, tema gótico | ✅ Concluído |
| `marcosgmrs` (portfólio) | Portfólio pessoal com Angular, Inter font, tema neutro | ✅ Concluído |

---

## ⏳ Próxima aula — Aula 54: Lazy Loading

O interceptor foi validado via Network do navegador — funcionando corretamente.

**O que é Lazy Loading:**
- Carregar módulos/componentes só quando o usuário navegar para aquela rota
- Melhora o tempo de carregamento inicial do app
- Essencial para apps grandes em produção

**Como implementar:**
```typescript
// Em vez de importar o componente direto:
{ path: 'perfil', component: Perfil }

// Usa loadComponent com import dinâmico:
{ path: 'perfil', loadComponent: () => import('./pages/perfil/perfil').then(m => m.Perfil) }
```

---

## 📌 Notas importantes

1. O aluno já trabalhou com outro agente (Antigravity) — houve confusão com arquivos trocados e histórico Git bagunçado. Já resolvido.
2. **Nunca commitar arquivos `.htm` de conversa** — adicionar ao `.gitignore`
3. O token do GitHub que estava exposto foi **revogado** em 03/04/2026
4. O aluno prefere **nomes de repositórios em português**
5. No projeto `mineralogia`, commits vão para dois remotes:
   - `git push origin main`
   - `git push upstream main:feature/mineralogia`
6. O aluno tem experiência como instrutor de informática — comunica bem, aprende rápido quando entende o porquê

---

## 🗺️ Fases do plano

- [x] Fase 0 — Terminal, Git, JavaScript básico
- [x] Fase 1 — TypeScript essencial  
- [x] Fase 2 — Angular fundamentos
- [ ] **Fase 3 — Angular avançado:**
  - [x] RxJS e Observables
  - [x] Guards de rota
  - [x] Interceptors HTTP
  - [x] Lazy Loading
  - [x] Resolvers
  - [x] Testes unitários
- [x] Fase 4 — Projeto 3 (curso escrito em Angular)