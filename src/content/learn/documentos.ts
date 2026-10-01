import type { LearnArticle } from "./types";

export const documentos: LearnArticle = {
  slug: "documentos",
  category: "Documentos",
  title: "Documentos: cópias offline e impressas do que importa",
  riskLevel: "alto",
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
  body: `Existe uma coincidência cruel em emergências: o momento em que documentos são mais necessários — atendimento médico de urgência, comprovação de identidade, acionamento de seguro — é frequentemente o mesmo momento em que acesso a sistemas digitais (internet, nuvem, autenticação por app) está mais comprometido. Cópias físicas e offline existem para quebrar essa coincidência.

## Por que "está salvo no celular" não é suficiente

Um documento salvo apenas no celular depende de três coisas acontecerem ao mesmo tempo: o aparelho ter bateria, o aparelho não ter sido perdido ou danificado, e (se o arquivo estiver na nuvem) haver conexão de internet e autenticação funcionando. Cada uma dessas dependências pode falhar isoladamente, e numa emergência a chance de pelo menos uma falhar é maior, não menor. Uma cópia física não depende de nenhuma dessas três coisas — ela é a camada de redundância que cobre exatamente o cenário em que a versão digital falha.

## Por que dados médicos têm prioridade entre os documentos

Alergias, medicamentos em uso e condições crônicas são informações que podem mudar diretamente uma decisão de atendimento médico de urgência — e são informações que a própria pessoa pode não conseguir comunicar se estiver inconsciente ou em estado grave. Ter essas informações em papel, de fácil acesso, significa que alguém mais (um socorrista, um familiar) consegue fornecer essa informação crítica no momento em que ela mais importa, independente do estado da pessoa.

## O que vale a pena manter em cópia física

Documentos de identificação pessoal, contatos de emergência, dados médicos, comprovantes de vacinação, informações de seguro e documentos de propriedade relevantes cobrem a maioria dos cenários em que documentação é exigida sob pressão. Essa lista é um ponto de partida, não uma exigência fechada — o que é realmente crítico varia por situação familiar, país e condição de saúde específica de cada pessoa.

## Onde guardar, e por que não a nuvem de terceiros por padrão

Guarde as cópias físicas em um local de fácil acesso em caso de evacuação rápida — um envelope ou pasta resistente à água, perto da porta ou do kit de emergência, não no fundo de uma gaveta. Para cópias digitais, prefira um dispositivo local sob seu controle a um serviço de nuvem de terceiros como opção padrão: a nuvem depende exatamente das duas coisas (internet, autenticação) que você está tentando ter redundância contra. Isso não significa que a nuvem nunca tem uso — significa que ela não deve ser a única cópia que você tem.`,
};
