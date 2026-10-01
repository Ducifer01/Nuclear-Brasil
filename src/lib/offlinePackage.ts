import { zipSync, strToU8 } from "fflate";
import { learnArticles } from "@/content/learn";
import { kit0Items } from "@/content/kits/kit0";
import { kit1Items } from "@/content/kits/kit1";
import { kit72hItems } from "@/content/kits/kit72h";
import { kit3Items } from "@/content/kits/kit3";
import { kit4Items } from "@/content/kits/kit4";
import { kit5Items } from "@/content/kits/kit5";
import { kit6Items } from "@/content/kits/kit6";
import { documentosItems } from "@/content/kits/documentos";
import type { KitItem } from "@/content/kits/types";
import { markdownToHtml } from "./markdownToHtml";

const KITS: { slug: string; title: string; items: KitItem[] }[] = [
  { slug: "bolso", title: "Kit 0 — No bolso", items: kit0Items },
  { slug: "10min", title: "Kit 1 — 10 minutos", items: kit1Items },
  { slug: "72h", title: "Kit 2 — 72 horas", items: kit72hItems },
  { slug: "14dias", title: "Kit 3 — 14 dias", items: kit3Items },
  { slug: "30dias", title: "Kit 4 — 30 dias", items: kit4Items },
  { slug: "90dias", title: "Kit 5 — 90 dias", items: kit5Items },
  { slug: "longo-prazo", title: "Kit 6 — Longo prazo", items: kit6Items },
  { slug: "documentos", title: "Checklist de documentos", items: documentosItems },
];

const PAGE_STYLE = `
  body { font-family: -apple-system, system-ui, sans-serif; max-width: 680px; margin: 0 auto; padding: 24px 20px 60px; color: #2a2823; line-height: 1.6; }
  h1 { font-size: 22px; } h2 { font-size: 17px; margin-top: 24px; }
  a { color: #0d5c56; } nav a { margin-right: 12px; font-size: 13px; }
  .meta { color: #777; font-size: 12px; margin-bottom: 16px; }
  ul, ol { padding-left: 22px; }
`;

function page(title: string, nav: string, body: string): string {
  return `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>${title}</title>
<style>${PAGE_STYLE}</style></head>
<body><nav>${nav}</nav>${body}</body></html>`;
}

/** Monta o pacote offline completo (roadmap §40/§51) e retorna o ZIP como bytes. */
export function buildOfflinePackage(): Uint8Array {
  const files: Record<string, Uint8Array> = {};
  const nav = `<a href="../index.html">Início</a>`;

  for (const a of learnArticles) {
    const body = `
      <div class="meta">${a.category} · revisado em ${a.lastReview} · v${a.version}</div>
      <h1>${a.title}</h1>
      ${markdownToHtml(a.body)}
      <h2>Fontes</h2>
      <ul>${a.sources.map((s) => `<li><a href="${s.url}">${s.label}</a></li>`).join("")}</ul>
    `;
    files[`content/${a.slug}.html`] = strToU8(page(a.title, nav, body));
  }

  for (const kit of KITS) {
    const body = `
      <h1>${kit.title}</h1>
      <ul>${kit.items.map((i) => `<li>☐ ${i.label} — ${i.hint}</li>`).join("")}</ul>
    `;
    files[`checklists/${kit.slug}.html`] = strToU8(page(kit.title, nav, body));
  }

  const sourcesBody = `
    <h1>Fontes</h1>
    <ul>${learnArticles
      .flatMap((a) => a.sources)
      .map((s) => `<li><a href="${s.url}">${s.label}</a></li>`)
      .join("")}</ul>
  `;
  files["sources/index.html"] = strToU8(page("Fontes", nav, sourcesBody));

  const indexBody = `
    <h1>Nuclear Survival — pacote offline</h1>
    <p>Gerado no seu aparelho em ${new Date().toLocaleDateString("pt-BR")}. Nenhum dado passou por servidor externo.</p>
    <h2>Aprender</h2>
    <ul>${learnArticles.map((a) => `<li><a href="content/${a.slug}.html">${a.title}</a></li>`).join("")}</ul>
    <h2>Kits</h2>
    <ul>${KITS.map((k) => `<li><a href="checklists/${k.slug}.html">${k.title}</a></li>`).join("")}</ul>
    <h2><a href="sources/index.html">Todas as fontes</a></h2>
  `;
  files["index.html"] = strToU8(
    page("Nuclear Survival — offline", "", indexBody).replace('<nav></nav>', "")
  );

  return zipSync(files, { level: 6 });
}
