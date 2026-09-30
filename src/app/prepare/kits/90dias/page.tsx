import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import KitChecklist from "@/components/KitChecklist";
import { kit5Items } from "@/content/kits/kit5";

export const metadata: Metadata = {
  title: "Kit 5 — 90 dias",
  description: "Começar a deixar de depender da cadeia de abastecimento.",
};

export default function Kit5Page() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <div className="font-mono text-[10px] font-semibold tracking-widest text-amber">
            KIT 5 · 90 DIAS
          </div>
          <h1 className="font-display font-extrabold text-[20px] text-ink mt-1">
            Kit 90 dias
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Começar a deixar de depender da cadeia de abastecimento.
          </p>
        </div>

        <KitChecklist storageKey="kit-5-90dias" items={kit5Items} />

        <p className="text-[10.5px] text-muted text-center">
          Seu progresso fica salvo neste aparelho — nada é enviado para
          nenhum servidor.
        </p>
      </div>
    </AppShell>
  );
}
