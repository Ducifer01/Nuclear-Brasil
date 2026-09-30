import type { LearnArticle } from "./types";
import { fallout } from "./fallout";
import { agua } from "./agua";
import { abrigo } from "./abrigo";
import { descontaminacao } from "./descontaminacao";
import { comunicacao } from "./comunicacao";

export const learnArticles: LearnArticle[] = [
  abrigo,
  fallout,
  descontaminacao,
  agua,
  comunicacao,
];

export function getLearnArticle(slug: string): LearnArticle | undefined {
  return learnArticles.find((a) => a.slug === slug);
}

export type { LearnArticle } from "./types";
