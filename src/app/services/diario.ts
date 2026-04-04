import { Injectable, signal } from '@angular/core';

export interface MensagemDiario {
  id: number;
  data: string;
  autor: 'aluno' | 'professor';
  conteudo: string;
  aula?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DiarioService {
  private historico = signal<MensagemDiario[]>([
    {
      id: 1,
      data: '21 de Março',
      autor: 'aluno',
      conteudo: 'Quero entrar no mundo dev, mas sei apenas HTML e CSS. Não entendo de git, typescript, Terminal, etc. Mas tenho a demanda de aprender Angular, através do curso da Udemy. E usando um Mac. Me ajude, como se fosse um professor extremamente didático, a um novo aluno com dificuldade de aprendizado.'
    },
    {
      id: 2,
      data: '21 de Março',
      autor: 'professor',
      aula: 'Aula 1',
      conteudo: 'Começamos agora pelo Terminal. É a porta de entrada para tudo — Git, Node.js, Angular — tudo passa por ele. Pensa assim: o Mac tem duas formas de você dar ordens ao computador. A primeira é clicar em ícones. A segunda é digitando comandos. Isso é o Terminal.'
    },
    {
      id: 3,
      data: '21 de Março',
      autor: 'aluno',
      conteudo: 'feito',
      aula: 'Tarefa: pwd, ls, cd, mkdir'
    },
    {
      id: 4,
      data: '21 de Março',
      autor: 'professor',
      aula: 'Aula 4',
      conteudo: 'Três coisas que todo iniciante estranha no Terminal: quando dá certo, ele não fala nada. Letras maiúsculas e minúsculas importam. E espaços em nomes de pasta dão problema — use hífen no lugar, como meu-projeto.'
    },
    {
      id: 5,
      data: '24 de Março',
      autor: 'aluno',
      conteudo: 'Command (⌘) + Shift + P não está abrindo'
    },
    {
      id: 6,
      data: '24 de Março',
      autor: 'professor',
      conteudo: 'Normal, isso acontece bastante. O VS Code precisa estar aberto antes de usar esse atalho. Não é um atalho do Mac — é um atalho interno do VS Code.'
    },
    {
      id: 7,
      data: '24 de Março',
      autor: 'professor',
      aula: 'Aula 7',
      conteudo: 'Git é um sistema que fotografa o seu projeto ao longo do tempo. Cada fotografia é chamada de commit. Você decide quando tirar cada foto e escreve uma legenda explicando o que mudou. Se algo der errado, você volta para qualquer foto anterior.'
    },
    {
      id: 8,
      data: '24 de Março',
      autor: 'aluno',
      conteudo: 'git version 2.53.0'
    },
    {
      id: 9,
      data: '24 de Março',
      autor: 'professor',
      conteudo: 'Git instalado e atualizado. Agora faz as duas configurações de nome e email. É feito só uma vez na vida do computador.'
    },
    {
      id: 10,
      data: '25 de Março',
      autor: 'aluno',
      conteudo: 'foi, e continuemos atualizando o repositório do GitHub a cada avanço.'
    },
    {
      id: 11,
      data: '25 de Março',
      autor: 'professor',
      conteudo: 'Ótimo instinto. Isso já é o comportamento de um dev de verdade — escrever código em arquivo e versionar no GitHub.'
    },
    {
      id: 12,
      data: '25 de Março',
      autor: 'professor',
      aula: 'Aula 22',
      conteudo: 'Função é um bloco de código com um nome, que você pode executar quantas vezes quiser. Pensa assim: você tem uma receita de bolo. A receita em si é a função. Cada vez que você faz o bolo, você está chamando a função.'
    },
    {
      id: 13,
      data: '25 de Março',
      autor: 'aluno',
      conteudo: 'feito, entendi até a lógica, e já obtive resultados em eu.cidade e eu.aprendendo.'
    },
    {
      id: 14,
      data: '25 de Março',
      autor: 'professor',
      conteudo: 'Isso é excelente — você não só executou, você explorou por conta própria. Esse instinto de testar além do que foi pedido é exatamente o que separa quem aprende rápido de quem trava.'
    },
    {
      id: 15,
      data: '26 de Março',
      autor: 'professor',
      aula: 'Aula 30',
      conteudo: 'JavaScript foi inventado em 1995 para fazer coisas simples em páginas web — animar um botão, validar um formulário. Em 10 dias. Por uma pessoa só. Hoje é usado para construir sistemas enormes. E aí o problema aparece — sem tipos, erros surgem silenciosamente.'
    },
    {
      id: 16,
      data: '26 de Março',
      autor: 'aluno',
      conteudo: '5\n23',
      aula: 'somar("2", 3) retornou 23 em vez de erro'
    },
    {
      id: 17,
      data: '26 de Março',
      autor: 'professor',
      conteudo: 'Esse é exatamente o problema. Você passou "2" — um texto — numa função que deveria somar números. O JavaScript não reclamou. Não deu erro. Ele simplesmente colou os dois valores como texto. Isso é devastador porque você não sabe que aconteceu.'
    },
    {
      id: 18,
      data: '27 de Março',
      autor: 'professor',
      aula: 'Aula 38',
      conteudo: 'O Angular divide a interface em componentes — pedaços independentes e reutilizáveis. O componente Post foi criado uma vez e usado três vezes. Se você precisar mudar como um post aparece, muda em um lugar só e todos os posts mudam.'
    },
    {
      id: 19,
      data: '27 de Março',
      autor: 'aluno',
      conteudo: 'Meu App Angular\nOlá, Marcos!\nMeu primeiro app Angular funcionando.'
    },
    {
      id: 20,
      data: '27 de Março',
      autor: 'professor',
      conteudo: 'Funcionou. E repara no que aconteceu — você salvou o arquivo e o navegador atualizou sozinho. Isso se chama live reload e é uma das coisas que tornam o desenvolvimento com Angular muito produtivo.'
    },
    {
      id: 21,
      data: '28 de Março',
      autor: 'aluno',
      conteudo: 'Eu gostaria de não fazer exercícios ainda, não me sinto totalmente seguro para desenvolver sozinho.'
    },
    {
      id: 22,
      data: '28 de Março',
      autor: 'professor',
      conteudo: 'Totalmente válido. Existe uma tensão real aqui: você não vai se sentir seguro sem praticar sozinho, e praticar sozinho é exatamente o que gera a segurança. É um ciclo que só quebra quando você tenta — mesmo sem se sentir pronto.'
    },
    {
      id: 23,
      data: '29 de Março',
      autor: 'aluno',
      conteudo: 'ng generate component pages/sobre?'
    },
    {
      id: 24,
      data: '29 de Março',
      autor: 'professor',
      conteudo: 'Exato. Pode rodar.'
    },
    {
      id: 25,
      data: '30 de Março',
      autor: 'aluno',
      conteudo: 'Estou gostando muito do nosso passo-a-passo, mas sinto falta de um pouco mais de informação semântica instrumental. Além disso, material visual seria interessante.'
    },
    {
      id: 26,
      data: '30 de Março',
      autor: 'professor',
      conteudo: 'Feedback excelente — e muito honesto. Isso me ajuda muito a te ensinar melhor. Vou passar a explicar não só o que fazer mas por que aquilo existe e como os conceitos se conectam.'
    },
    {
      id: 27,
      data: '31 de Março',
      autor: 'aluno',
      conteudo: 'ficou ótimo, mas tivemos um erro... e na nossa etapa de Git, senti falta também de falar do branch, pra que serve, como e quando usar. E só pra registrar, achei bom a enumeração das aulas.'
    },
    {
      id: 28,
      data: '31 de Março',
      autor: 'professor',
      aula: 'Aula 28',
      conteudo: 'Branch significa ramificação. Pensa numa árvore — o tronco é o main, e os galhos são as branches. O main é onde fica o código estável. Quando você quer desenvolver algo novo, você não mexe direto no main. Você cria uma branch separada, trabalha lá, e só junta de volta ao main quando estiver pronto.'
    },
    {
      id: 29,
      data: '01 de Abril',
      autor: 'aluno',
      conteudo: 'Até os bots tem seu ego hahahahaha, mas relaxa, eu já tinha trocado manualmente para Claude, vc é meu favorito.'
    },
    {
      id: 30,
      data: '01 de Abril',
      autor: 'professor',
      conteudo: 'Fico aliviado saber que tenho um aliado quando vier a revolução. 🤖'
    },
    {
      id: 31,
      data: '02 de Abril',
      autor: 'professor',
      aula: 'Aula 52',
      conteudo: 'Interceptor fica entre sua aplicação e a internet — toda requisição passa por ele antes de sair e toda resposta passa por ele antes de chegar. É como um segurança na porta — inspeciona tudo que entra e sai. Você configura uma vez e ele age em todas as requisições automaticamente.'
    },
    {
      id: 32,
      data: '03 de Abril',
      autor: 'aluno',
      conteudo: 'cancelei sua resposta, ao me sinalizar que github.ts e perfil.ts estavam trocados, e algo tão simples causou um erro em cadeia, eu mesmo já restaurei. só lamento ter gasto tantos tokens contigo com algo tão bobo.'
    },
    {
      id: 33,
      data: '03 de Abril',
      autor: 'professor',
      conteudo: 'Não se preocupe com os tokens — faz parte do processo. E você mesmo resolveu o problema. Isso é crescimento.'
    }
  ]);

  getMensagens() {
    return this.historico.asReadonly();
  }

  adicionarMensagem(mensagem: Omit<MensagemDiario, 'id'>) {
    const novaMensagem = {
      ...mensagem,
      id: this.historico().length + 1
    };
    this.historico.update(mensagens => [...mensagens, novaMensagem]);
  }
}