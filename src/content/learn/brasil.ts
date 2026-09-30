import type { LearnArticle } from "./types";

export const brasil: LearnArticle = {
  slug: "brasil",
  category: "Brasil",
  title: "Camada Brasil: órgãos oficiais e estrutura de resposta",
  riskLevel: "medio",
  authorityLevel: 1,
  status: "verified",
  version: "1.0",
  author: "Nuclear Survival",
  reviewer: "Pendente",
  createdAt: "30/09/2026",
  lastReview: "30/09/2026",
  nextReview: "30/03/2027",
  sources: [
    {
      label: "Brasil · SIPRON — Sistema de Proteção ao Programa Nuclear Brasileiro",
      url: "https://www.gov.br/gsi/pt-br/assuntos/programa-nuclear-brasileiro/sipron-sistema-de-protecao-ao-programa-nuclear-brasileiro",
    },
    {
      label: "Brasil · CNEN — Normas e estrutura regulatória nuclear",
      url: "https://www.gov.br/cnen/pt-br/acesso-rapido/normas",
    },
    {
      label: "Brasil · Defesa Civil — Proteção e Defesa Civil",
      url: "https://www.gov.br/mdr/pt-br/assuntos/protecao-e-defesa-civil",
    },
  ],
  weKnow:
    "No Brasil, a resposta a emergências nucleares e radiológicas envolve estrutura federal específica. O SIPRON (Sistema de Proteção ao Programa Nuclear Brasileiro) coordena a proteção do programa nuclear nacional, a CNEN (Comissão Nacional de Energia Nuclear) regula a área nuclear e radiológica no país, e a Defesa Civil (hoje sob a Secretaria Nacional de Proteção e Defesa Civil) coordena resposta a desastres em geral, incluindo articulação com estados e municípios.",
  recommended:
    "Em qualquer emergência real, siga as orientações oficiais divulgadas por esses órgãos e pelas autoridades estaduais/municipais de defesa civil da sua região — o conteúdo deste site é conhecimento geral de preparação, não substitui comunicação oficial durante um evento real. Conheça com antecedência os canais de comunicação da defesa civil do seu município e estado, já que a resposta operacional a um evento específico é coordenada localmente, com apoio federal conforme a gravidade.",
  why:
    "A estrutura brasileira de resposta é federada: órgãos nacionais definem normas, regulação e apoio, enquanto estados e municípios operam a resposta local, que é onde a maior parte das ações diretas durante uma emergência acontece. Seguir orientação oficial garante coordenação com a resposta institucional em andamento, algo que fontes não-oficiais não conseguem substituir.",
  uncertain:
    "Fontes estaduais e municipais específicas variam por região e não são cobertas neste artigo ainda; características climáticas, de infraestrutura e de água/agricultura regionais (Norte, Nordeste, Centro-Oeste, Sudeste, Sul) também ainda não têm camada dedicada — previsto para versões futuras do projeto.",
  myths: [
    "\"Não existe estrutura oficial brasileira para emergência nuclear.\" — Existe: SIPRON e CNEN têm papel definido na proteção e regulação da área nuclear/radiológica no país.",
    "\"Defesa Civil só atua em desastres naturais.\" — A Defesa Civil brasileira tem escopo amplo de proteção e resposta a desastres, incluindo articulação em emergências de diferentes naturezas junto a outros órgãos especializados.",
  ],
};
