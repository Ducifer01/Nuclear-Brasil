import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import KitChecklist from "@/components/KitChecklist";
import { kit4Items } from "@/content/kits/kit4";

export const metadata: Metadata = {
  title: "Kit 4 — 30 dias",
  description: "Viver com abastecimento irregular.",
};

export default function Kit4Page() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <div className="font-mono text-[10px] font-semibold tracking-widest text-amber">
            KIT 4 · 30 DIAS
          </div>
          <h1 className="font-display font-extrabold text-[20px] text-ink mt-1">
            Kit 30 dias
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Viver com abastecimento irregular.
          </p>
        </div>

        <KitChecklist storageKey="kit-4-30dias" items={kit4Items} />

        <p className="text-[10.5px] text-muted text-center">
          Seu progresso fica salvo neste aparelho — nada é enviado para
          nenhum servidor.
        </p>
      </div>
    </AppShell>
  );
}
