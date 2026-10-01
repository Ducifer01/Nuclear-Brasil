import type { LearnArticle } from "@/content/learn/types";

/** Primeiro parágrafo do corpo — o que cabe em letra grande numa única folha. */
function firstParagraph(body: string): string {
  const withoutHeadings = body
    .split("\n\n")
    .find((block) => !block.trim().startsWith("#"));
  return withoutHeadings?.trim() ?? body.split("\n\n")[0] ?? "";
}

/**
 * Wall Posters — roadmap §64. Uma página grande por tema, tipografia
 * ampliada para leitura a distância. Layout de impressão próprio (ver
 * globals.css `.print-poster`), uma folha por tema em vez de manual corrido.
 */
export default function WallPosterLayout({ articles }: { articles: LearnArticle[] }) {
  return (
    <div className="print-posters flex flex-col">
      {articles.map((a) => (
        <div
          key={a.slug}
          className="print-poster flex flex-col justify-center items-center text-center gap-6 px-10"
        >
          <div className="font-mono text-[14px] font-bold tracking-[0.15em] text-neutral-500">
            {a.category.toUpperCase()}
          </div>
          <h1 className="font-display font-black text-[40px] leading-tight">{a.title}</h1>
          <p className="text-[18px] leading-relaxed max-w-xl">{firstParagraph(a.body)}</p>
          <p className="text-[12px] text-neutral-500 mt-4">
            Fonte: {a.sources[0]?.label}
          </p>
        </div>
      ))}
    </div>
  );
}
