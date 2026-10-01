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
  body: `A resposta brasileira a emergências é organizada em camadas, e entender como essas camadas se dividem ajuda a saber a quem recorrer e o que esperar de cada uma — em vez de assumir que "o governo" é um bloco único que vai agir de uma forma ou de outra.

## A divisão entre regulação, proteção e resposta operacional

Três estruturas federais têm papéis distintos na área nuclear e de desastres. A CNEN (Comissão Nacional de Energia Nuclear) regula a área nuclear e radiológica do país — normas técnicas, licenciamento, fiscalização. O SIPRON (Sistema de Proteção ao Programa Nuclear Brasileiro) coordena a proteção especificamente do programa nuclear nacional. A Defesa Civil, hoje estruturada sob a Secretaria Nacional de Proteção e Defesa Civil, tem escopo mais amplo: coordena resposta a desastres de naturezas diferentes, articulando apoio federal com a operação local em estados e municípios. Nenhuma dessas três substitui as outras — elas cobrem partes diferentes do mesmo sistema.

## Por que a resposta real acontece no nível local

A estrutura brasileira de resposta a emergências é federada por desenho: os órgãos nacionais definem normas, regulação e fornecem apoio quando a gravidade do evento o exige, mas a operação direta — quem chega primeiro, quem coordena um abrigo temporário, quem emite um alerta local — acontece no nível estadual e municipal. Isso significa que, numa emergência real, os canais que vão efetivamente orientar você no momento são os da Defesa Civil do seu município e estado, não apenas comunicados federais genéricos. Conhecer com antecedência como contatar a Defesa Civil local (o número 199 funciona nacionalmente) é mais útil, no momento do evento, do que saber o nome dos órgãos federais.

## O que este site é, e o que ele não substitui

O conteúdo aqui é conhecimento geral de preparação — construído para ajudar antes de um evento acontecer. Durante uma emergência real, a orientação oficial em tempo real (da Defesa Civil local, de autoridades competentes para o tipo específico de evento) tem precedência sobre qualquer recomendação genérica publicada aqui, porque ela incorpora informação específica da situação que nenhum conteúdo preparado com antecedência pode ter.`,
};
