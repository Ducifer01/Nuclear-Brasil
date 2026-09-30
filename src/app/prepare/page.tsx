import type { Metadata } from "next";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import { ChevronRightIcon, ClockIcon, ToolboxIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Preparar",
  description: "Não existe um kit único. Existem camadas.",
};

const KITS = [
  { title: "Kit 0 — No bolso", goal: "Sobreviver e alcançar um local seguro", href: "/prepare/kits/bolso" },
  { title: "Kit 1 — 10 minutos", goal: "Sair de casa ou do abrigo rapidamente", href: "/prepare/kits/10min" },
  { title: "Kit 2 — 72 horas", goal: "Sobreviver sem serviços básicos por alguns dias", href: "/prepare/kits/72h" },
  { title: "Kit 3 — 14 dias", goal: "Atravessar uma interrupção prolongada", href: "/prepare/kits/14dias" },
  { title: "Kit 4 — 30 dias", goal: "Viver com abastecimento irregular", href: "/prepare/kits/30dias" },
  { title: "Kit 5 — 90 dias", goal: "Começar a deixar de depender da cadeia de abastecimento", href: "/prepare/kits/90dias" },
  { title: "Kit 6 — Longo prazo", goal: "Continuidade — não é uma mochila, é infraestrutura", href: "/prepare/kits/longo-prazo" },
];

export default function PreparePage() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <h1 className="font-display font-black text-[19px] text-ink">
            Não existe um kit único
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Existem camadas. Combine os módulos de acordo com o tempo que você
            precisa atravessar.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {KITS.map((kit) =>
            kit.href ? (
              <Link
                key={kit.title}
                href={kit.href}
                className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-[3px]"
              >
                <div className="w-9 h-9 rounded-[3px] bg-amber-tint text-amber flex items-center justify-center shrink-0">
                  <ToolboxIcon width={18} height={18} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[13.5px] text-ink">{kit.title}</div>
                  <div className="text-[11px] text-[#5b584f] mt-0.5">{kit.goal}</div>
                </div>
                <ChevronRightIcon className="text-[#b0aa96]" width={16} height={16} />
              </Link>
            ) : (
              <div
                key={kit.title}
                className="flex items-center gap-3 p-3.5 bg-panel border border-[#ddd6c2] rounded-[3px] opacity-75"
              >
                <div className="w-9 h-9 rounded-[3px] bg-panel-2 text-muted flex items-center justify-center shrink-0">
                  <ClockIcon width={16} height={16} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[13px] text-[#5b584f]">{kit.title}</div>
                  <div className="text-[11px] text-muted mt-0.5">{kit.goal}</div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-mono text-[10px] font-semibold tracking-widest text-muted">
            FERRAMENTAS
          </div>
          <Link
            href="/tools/water"
            className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-[3px]"
          >
            <div className="flex-1">
              <div className="font-semibold text-[13px] text-ink">
                Calculadora de água
              </div>
              <div className="text-[11px] text-[#5b584f] mt-0.5">
                Pessoas, dias e clima → volume necessário
              </div>
            </div>
            <ChevronRightIcon className="text-[#b0aa96]" width={16} height={16} />
          </Link>
          <Link
            href="/tools/energy"
            className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-[3px]"
          >
            <div className="flex-1">
              <div className="font-semibold text-[13px] text-ink">
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
            <div className="flex-1">
              <div className="font-semibold text-[13px] text-ink">
                Calculadora de alimentação
              </div>
              <div className="text-[11px] text-[#5b584f] mt-0.5">
                Pessoas, calorias e estoque → duração estimada
              </div>
            </div>
            <ChevronRightIcon className="text-[#b0aa96]" width={16} height={16} />
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
