import type { LearnArticle } from "./types";

export const ferramentas: LearnArticle = {
  slug: "ferramentas",
  category: "Ferramentas",
  title: "Alfabetização mecânica: ferramentas e manutenção básica",
  riskLevel: "medio",
  authorityLevel: 4,
  status: "verified",
  version: "1.0",
  author: "Nuclear Survival",
  reviewer: "Pendente",
  createdAt: "30/09/2026",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "IAEA — Emergency Preparedness and Response",
      url: "https://www.iaea.org/topics/emergency-preparedness-and-response",
    },
  ],
  body: `Ter uma ferramenta não é o mesmo que saber usá-la, e saber usá-la não é o mesmo que saber quando parar e chamar alguém mais qualificado. "Alfabetização mecânica" é essa combinação: identificar o problema, escolher a ferramenta certa, resolver o que está dentro da sua capacidade, e reconhecer com clareza o que não está.

## Por que manutenção preventiva vale mais que reparo emergencial

Quase todo equipamento dá sinais antes de falhar completamente — um ruído novo, uma folga que não existia, um desgaste visível. Manutenção preventiva é simplesmente parar periodicamente para notar esses sinais antes que se tornem uma falha súbita no pior momento possível. Isso é sistematicamente mais barato e mais seguro do que reparo de emergência, porque dá tempo para resolver com calma, com as peças certas, em vez de sob pressão com o que estiver disponível. A pergunta "se está funcionando, por que mexer?" ignora que falhas raramente são instantâneas — elas têm um histórico de sinais que a manutenção regular é o que detecta.

## O conjunto básico, e por que cada item está nele

Alicate, chaves de fenda e Phillips, martelo, serrote pequeno e fita métrica cobrem a maioria dos reparos mecânicos simples do dia a dia — fixar, cortar, medir, remover e apertar. Fita adesiva resistente e cordas resolvem fixações temporárias rapidamente, mas "temporário" é a palavra chave: fita adesiva estanca um vazamento por tempo suficiente para você fazer o reparo correto depois, não é o reparo em si — tratá-la como solução definitiva só adia um problema que vai voltar, geralmente em pior estado. Abraçadeiras e parafusos variados existem porque a maioria dos reparos improvisados precisa prender algo a outra coisa, e ter esse material à mão evita depender de uma loja que pode não estar aberta.

## Reparo elétrico: onde a linha de segurança está

Trocar um fusível ou um disjuntor é uma operação simples e segura quando feita com a energia desligada no ponto certo. Mexer em fiação exposta, emendar cabos ou qualquer intervenção além da troca de componentes já isolados é outra categoria de risco — choque elétrico e incêndio são consequências reais de fiação malfeita, e o conhecimento necessário para fazer isso com segurança vai além do que este artigo cobre. A regra prática: se a tarefa envolve trocar uma peça desenhada para ser trocada pelo usuário, está dentro do razoável; se envolve abrir, cortar ou emendar fiação, é hora de um profissional ou de aprender especificamente essa habilidade antes de tentar.

## Por que o nível de preparo certo varia por contexto

Uma casa isolada, longe de serviços de manutenção rápidos, se beneficia de um conjunto de ferramentas e conhecimento mais amplo do que um apartamento em área urbana com acesso fácil a profissionais. Não existe uma lista única de "o que todo mundo precisa saber" — existe a pergunta de quanto tempo você esperaria, na pior hipótese, para conseguir ajuda externa, e o que você precisaria resolver sozinho durante esse tempo.`,
};
