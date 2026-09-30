import { learnArticles } from "@/content/learn";
import { kit72hItems } from "@/content/kits/kit72h";
import { RISK_LABEL } from "@/content/learn/types";

const NUCLEAR_STEPS = [
  "ANTES: saiba onde se abrigar em casa, trabalho e escola. Monte o Kit 72h. Combine ponto de encontro e contato fora da região.",
  "DURANTE A EXPLOSÃO: nunca olhe para o clarão. Jogue-se no chão e proteja cabeça e pescoço. Só se levante após a onda de choque passar.",
  "AGORA (primeiros minutos): 1) Entre em um edifício. 2) Vá para o porão ou parte central. 3) Afaste-se de janelas, paredes externas e teto. 4) Fique dentro. 5) Acompanhe as instruções oficiais.",
  "PRIMEIRA HORA: remova a camada externa das roupas e guarde-a longe de pessoas e alimentos. Lave a pele exposta com água morna e sabão suave, sem esfregar. Não coma nem beba nada exposto ao ar livre.",
  "PRIMEIRAS 24 HORAS: permaneça abrigado por pelo menos 24 horas, salvo orientação oficial diferente. Beba apenas água armazenada ou de fontes fechadas.",
  "DIAS SEGUINTES: só saia quando a orientação oficial confirmar que é seguro. Evite contato com poeira depositada em superfícies externas.",
];

function buildText(): string {
  const lines: string[] = [];
  lines.push("NUCLEAR SURVIVAL — VERSÃO TEXTO");
  lines.push("Biblioteca offline-first de sobrevivência civil e continuidade.");
  lines.push("IA não é usada no produto — apenas conhecimento verificado.");
  lines.push("=".repeat(60));
  lines.push("");
  lines.push("## EMERGÊNCIA — EXPLOSÃO NUCLEAR");
  lines.push("");
  for (const step of NUCLEAR_STEPS) {
    lines.push("- " + step);
  }
  lines.push("");
  lines.push("Fonte: CDC — Radiation Emergencies (cdc.gov/radiation-emergencies)");
  lines.push("");
  lines.push("=".repeat(60));
  lines.push("");
  lines.push("## KIT 72 HORAS");
  lines.push("");
  for (const item of kit72hItems) {
    lines.push(`[ ] ${item.label} — ${item.hint}`);
  }
  lines.push("");
  lines.push("=".repeat(60));
  lines.push("");
  lines.push("## APRENDER");
  lines.push("");
  for (const a of learnArticles) {
    lines.push(`### ${a.title} (${RISK_LABEL[a.riskLevel]})`);
    lines.push("");
    lines.push("O QUE SABEMOS: " + a.weKnow);
    lines.push("");
    lines.push("O QUE É RECOMENDADO: " + a.recommended);
    lines.push("");
    lines.push("POR QUE FUNCIONA: " + a.why);
    lines.push("");
    lines.push("O QUE É INCERTO: " + a.uncertain);
    lines.push("");
    lines.push("MITOS E ERROS COMUNS:");
    for (const myth of a.myths) lines.push("- " + myth);
    lines.push("");
    lines.push("Fontes: " + a.sources.map((s) => `${s.label} (${s.url})`).join(" · "));
    lines.push("Última revisão: " + a.lastReview);
    lines.push("");
    lines.push("-".repeat(60));
    lines.push("");
  }
  lines.push("Gerado por nuclearsurvival — funciona sem internet depois de salvo.");
  return lines.join("\n");
}

export async function GET() {
  const body = buildText();
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="nuclear-survival.txt"',
    },
  });
}
