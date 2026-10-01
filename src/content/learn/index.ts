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
import { saudeDental } from "./saude-dental";
import { navegacao } from "./navegacao";
import { documentos } from "./documentos";
import { animais } from "./animais";
import { vetoresPragas } from "./vetores-pragas";
import { saudeMental } from "./saude-mental";
import { comunidade } from "./comunidade";
import { regioesBrasil } from "./regioes-brasil";
import { regiaoNorte } from "./regiao-norte";
import { regiaoNordeste } from "./regiao-nordeste";
import { regiaoCentroOeste } from "./regiao-centro-oeste";
import { regiaoSudeste } from "./regiao-sudeste";
import { regiaoSul } from "./regiao-sul";

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
  saudeDental,
  navegacao,
  documentos,
  animais,
  vetoresPragas,
  saudeMental,
  comunidade,
  regioesBrasil,
  regiaoNorte,
  regiaoNordeste,
  regiaoCentroOeste,
  regiaoSudeste,
  regiaoSul,
];

export function getLearnArticle(slug: string): LearnArticle | undefined {
  return learnArticles.find((a) => a.slug === slug);
}

export type { LearnArticle } from "./types";
