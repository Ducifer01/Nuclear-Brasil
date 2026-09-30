import type { LearnArticle } from "./types";

export const documentos: LearnArticle = {
  slug: "documentos",
  category: "Documentos",
  title: "Documentos: cópias offline e impressas do que importa",
  riskLevel: "alto",
  authorityLevel: 4,
  status: "verified",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "IAEA — Emergency Preparedness and Response",
      url: "https://www.iaea.org/topics/emergency-preparedness-and-response",
    },
  ],
  weKnow:
    "Em uma emergência, acesso a sistemas digitais (internet, nuvem, aplicativos bancários) pode ficar indisponível justamente quando documentos são mais necessários — para atendimento médico, identificação, seguros ou apoio oficial. Ter cópias físicas e offline reduz essa dependência.",
  recommended:
    "Mantenha cópias impressas e/ou digitais offline (não dependentes de internet) de: documentos pessoais de identificação, contatos de emergência, dados médicos (alergias, medicamentos em uso, condições crônicas), comprovantes de vacinação, informações de seguros e documentos de propriedade relevantes. Guarde essas cópias em um local de fácil acesso em caso de evacuação rápida, idealmente em um envelope ou pasta resistente à água. Não armazene cópias digitais sensíveis em servidores de terceiros por padrão — prefira um dispositivo local, sob seu controle, ou papel.",
  why:
    "Documentos médicos disponíveis rapidamente (alergias, medicamentos, condições de saúde) podem mudar diretamente uma decisão de atendimento de emergência, especialmente se a pessoa não conseguir comunicar essas informações por conta própria. Cópias físicas não dependem de bateria, sinal ou disponibilidade de sistemas online — funcionam mesmo no pior cenário de infraestrutura.",
  uncertain:
    "Quais documentos são realmente críticos varia por país, situação familiar e condição de saúde de cada pessoa — a lista recomendada aqui é um ponto de partida, não uma lista exaustiva ou obrigatória para todos.",
  myths: [
    "\"Ter tudo salvo no celular já é suficiente.\" — Celular pode ficar sem bateria, ser perdido ou danificado; cópia física é uma camada de redundância que não depende de nenhum aparelho.",
    "\"Documentos digitais na nuvem são sempre acessíveis.\" — Acesso à nuvem depende de internet e de autenticação, ambos podem falhar justamente durante uma emergência.",
  ],
};
