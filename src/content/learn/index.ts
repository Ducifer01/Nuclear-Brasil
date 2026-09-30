import type { LearnArticle } from "./types";
import { fallout } from "./fallout";
import { agua } from "./agua";
import { abrigo } from "./abrigo";
import { descontaminacao } from "./descontaminacao";
import { comunicacao } from "./comunicacao";
import { saneamento } from "./saneamento";
import { primeirosSocorros } from "./primeiros-socorros";
import { infeccoes } from "./infeccoes";
import { alimentacao } from "./alimentacao";
import { energia } from "./energia";
import { ferramentas } from "./ferramentas";
import { agricultura } from "./agricultura";
import { longoPrazo } from "./longo-prazo";
import { brasil } from "./brasil";

export const learnArticles: LearnArticle[] = [
  abrigo,
  fallout,
  descontaminacao,
  agua,
  comunicacao,
  saneamento,
  primeirosSocorros,
  infeccoes,
  alimentacao,
  energia,
  ferramentas,
  agricultura,
  longoPrazo,
  brasil,
];

export function getLearnArticle(slug: string): LearnArticle | undefined {
  return learnArticles.find((a) => a.slug === slug);
}

export type { LearnArticle } from "./types";
