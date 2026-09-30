import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import KitChecklist from "@/components/KitChecklist";
import { kit6Items } from "@/content/kits/kit6";

export const metadata: Metadata = {
  title: "Kit 6 — Longo prazo",
  description: "Continuidade — não é uma mochila, é infraestrutura.",
};

export default function Kit6Page() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <div className="font-mono text-[10px] font-semibold tracking-widest text-amber">
            KIT 6 · LONGO PRAZO
          </div>
          <h1 className="font-display font-extrabold text-[20px] text-ink mt-1">
            Kit longo prazo
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Continuidade. Não é uma mochila — é infraestrutura.
          </p>
        </div>

        <KitChecklist storageKey="kit-6-longo-prazo" items={kit6Items} />

        <p className="text-[10.5px] text-muted text-center">
          Seu progresso fica salvo neste aparelho — nada é enviado para
          nenhum servidor.
        </p>
      </div>
    </AppShell>
  );
}
