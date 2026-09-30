import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import KitChecklist from "@/components/KitChecklist";
import { kit1Items } from "@/content/kits/kit1";

export const metadata: Metadata = {
  title: "Kit 1 — 10 minutos",
  description: "Sair de casa ou do abrigo rapidamente.",
};

export default function Kit1Page() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <div className="font-mono text-[10px] font-semibold tracking-widest text-amber">
            KIT 1 · 10 MINUTOS
          </div>
          <h1 className="font-display font-extrabold text-[20px] text-ink mt-1">
            Kit 10 minutos
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Sair de casa ou do abrigo rapidamente.
          </p>
        </div>

        <KitChecklist storageKey="kit-1-10min" items={kit1Items} />

        <p className="text-[10.5px] text-muted text-center">
          Seu progresso fica salvo neste aparelho — nada é enviado para
          nenhum servidor.
        </p>
      </div>
    </AppShell>
  );
}
