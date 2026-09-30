import type { Metadata } from "next";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import { BoltIcon, ChevronRightIcon, ClockIcon, DropletIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Ferramentas",
  description: "Calculadoras determinísticas — sem IA, sem rede.",
};

export default function ToolsIndexPage() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <h1 className="font-display font-black text-[19px] text-ink">
            Ferramentas
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Cálculos determinísticos e testáveis. Nada depende de IA ou de
            conexão com a internet.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href="/tools/water"
            className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-[3px]"
          >
            <div className="w-9 h-9 rounded-[3px] bg-teal-tint text-teal flex items-center justify-center shrink-0">
              <DropletIcon width={18} height={18} />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[13.5px] text-ink">
                Calculadora de água
              </div>
              <div className="text-[11px] text-[#5b584f] mt-0.5">
                Pessoas, animais, clima e dias → volume e autonomia
              </div>
            </div>
            <ChevronRightIcon className="text-[#b0aa96]" width={16} height={16} />
          </Link>

          <Link
            href="/tools/energy"
            className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-[3px]"
          >
            <div className="w-9 h-9 rounded-[3px] bg-amber-tint text-amber flex items-center justify-center shrink-0">
              <BoltIcon width={18} height={18} />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[13.5px] text-ink">
                Calculadora de energia
              </div>
              <div className="text-[11px] text-[#5b584f] mt-0.5">
                Bateria, equipamentos e consumo → autonomia
              </div>
            </div>
            <ChevronRightIcon className="text-[#b0aa96]" width={16} height={16} />
          </Link>

          <Link
            href="/tools/food"
            className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-[3px]"
          >
            <div className="w-9 h-9 rounded-[3px] bg-teal-tint text-teal flex items-center justify-center shrink-0">
              <ClockIcon width={18} height={18} />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[13.5px] text-ink">
                Calculadora de alimentação
              </div>
              <div className="text-[11px] text-[#5b584f] mt-0.5">
                Pessoas, calorias e estoque → duração estimada
              </div>
            </div>
            <ChevronRightIcon className="text-[#b0aa96]" width={16} height={16} />
          </Link>

          {["Gerador de checklist"].map((title) => (
            <div
              key={title}
              className="flex items-center gap-3 p-3.5 bg-panel border border-[#ddd6c2] rounded-[3px] opacity-75"
            >
              <div className="w-9 h-9 rounded-[3px] bg-panel-2 text-muted flex items-center justify-center shrink-0">
                <ClockIcon width={16} height={16} />
              </div>
              <div className="font-semibold text-[13px] text-[#5b584f]">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
