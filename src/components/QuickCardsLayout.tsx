import type { KitItem } from "@/content/kits/types";

type KitGroup = { title: string; items: KitItem[] };

/**
 * Quick Cards — roadmap §64. Cartões pequenos, recortáveis, com a ação
 * imediata de cada tema. Layout de impressão próprio (ver globals.css
 * `.print-cards`), diferente do manual contínuo normal.
 */
export default function QuickCardsLayout({
  nuclearSteps,
  kits,
}: {
  nuclearSteps: string[];
  kits: KitGroup[];
}) {
  return (
    <div className="print-cards grid grid-cols-2 gap-3">
      <div className="print-card border-2 border-black rounded-[3px] p-3 break-inside-avoid">
        <div className="font-display font-black text-[13px] mb-1.5 border-b border-black pb-1">
          EXPLOSÃO NUCLEAR — AGORA
        </div>
        <ol className="list-decimal list-inside text-[10px] leading-snug flex flex-col gap-0.5">
          {nuclearSteps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>

      {kits.map((kit) => (
        <div
          key={kit.title}
          className="print-card border-2 border-black rounded-[3px] p-3 break-inside-avoid"
        >
          <div className="font-display font-black text-[13px] mb-1.5 border-b border-black pb-1">
            {kit.title.toUpperCase()}
          </div>
          <div className="text-[9.5px] leading-snug flex flex-col gap-0.5">
            {kit.items.map((item) => (
              <div key={item.id}>☐ {item.label}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
