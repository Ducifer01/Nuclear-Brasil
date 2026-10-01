import type { Metadata } from "next";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import { TrefoilIcon, ChevronRightIcon, FlameIcon, StormIcon, BoltIcon, DropletIcon, RadioIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Emergência",
  description: "Selecione o cenário mais próximo da sua situação.",
};

const NUCLEO = [
  {
    href: "/emergency/nuclear",
    title: "Explosão nuclear",
    desc: "Clarão, calor, onda de choque",
  },
  {
    href: "/emergency/nuclear",
    title: "Emergência radiológica",
    desc: "Exposição fora de um acidente maior",
  },
  {
    href: "/emergency/nuclear",
    title: "Acidente nuclear",
    desc: "Reator, instalação ou transporte",
  },
  {
    href: "/learn/fallout",
    title: "Fallout / contaminação",
    desc: "Poeira radioativa após a explosão",
  },
];

const OUTROS_CENARIOS = [
  {
    href: "/emergency/incendio",
    title: "Incêndio",
    desc: "Evacuação, fumaça, rotas de saída",
    icon: FlameIcon,
  },
  {
    href: "/emergency/desastre-natural",
    title: "Desastre natural",
    desc: "Enchente, deslizamento, sinais de risco",
    icon: StormIcon,
  },
  {
    href: "/emergency/colapso-energia",
    title: "Colapso de energia",
    desc: "Apagão, geladeira, gerador",
    icon: BoltIcon,
  },
  {
    href: "/emergency/falha-agua",
    title: "Falha no abastecimento de água",
    desc: "Diagnóstico, racionamento, fontes alternativas",
    icon: DropletIcon,
  },
  {
    href: "/emergency/perda-comunicacao",
    title: "Perda de comunicação",
    desc: "Rede congestionada, SMS, rádio",
    icon: RadioIcon,
  },
  {
    href: "/emergency/colapso-atendimento",
    title: "Colapso do atendimento",
    desc: "Triagem, SAMU 192, quando esperar",
    icon: CheckIcon,
  },
];

export default function EmergencyStartPage() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <h1 className="font-display font-black text-[19px] text-ink">
            O que está acontecendo?
          </h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Toque no cenário mais próximo da sua situação. Sem cadastro, sem
            localização.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-mono text-[10px] font-semibold tracking-widest text-red">
            NÚCLEO NUCLEAR / RADIOLÓGICO
          </div>
          {NUCLEO.map(({ href, title, desc }) => (
            <Link
              key={title}
              href={href}
              className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-[3px]"
            >
              <div className="w-[38px] h-[38px] rounded-[3px] bg-red-tint text-red flex items-center justify-center shrink-0">
                <TrefoilIcon width={18} height={18} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[13.5px] text-ink">{title}</div>
                <div className="text-[11px] text-[#5b584f] mt-0.5">{desc}</div>
              </div>
              <ChevronRightIcon className="text-[#b0aa96]" width={16} height={16} />
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-mono text-[10px] font-semibold tracking-widest text-muted">
            OUTROS CENÁRIOS
          </div>
          {OUTROS_CENARIOS.map(({ href, title, desc, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-[3px]"
            >
              <div className="w-9 h-9 rounded-[3px] bg-amber-tint text-amber flex items-center justify-center shrink-0">
                <Icon width={16} height={16} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[13px] text-ink">{title}</div>
                <div className="text-[11px] text-[#5b584f] mt-0.5">{desc}</div>
              </div>
              <ChevronRightIcon className="text-[#b0aa96]" width={16} height={16} />
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
