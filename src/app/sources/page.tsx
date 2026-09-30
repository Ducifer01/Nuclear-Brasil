import type { Metadata } from "next";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: "Fontes",
  description: "Toda orientação crítica deste site tem fonte, data e nível de autoridade.",
};

const SOURCES = [
  {
    org: "CDC",
    desc: "Radiation Emergencies — orientação oficial dos EUA para emergências radiológicas",
    url: "https://www.cdc.gov/radiation-emergencies/",
  },
  {
    org: "CDC",
    desc: "Emergency Water Supply — armazenamento e criação de reserva de água",
    url: "https://www.cdc.gov/water-emergency/about/how-to-create-and-store-an-emergency-water-supply.html",
  },
  {
    org: "IAEA",
    desc: "Emergency Preparedness and Response",
    url: "https://www.iaea.org/topics/emergency-preparedness-and-response",
  },
  {
    org: "WHO",
    desc: "Environmental Health in Emergencies — água, saneamento e higiene",
    url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/environmental-health-in-emergencies",
  },
  {
    org: "WHO",
    desc: "IPC / WASH in Emergencies",
    url: "https://www.who.int/emergencies/operations/ipc-wash",
  },
  {
    org: "Brasil · SIPRON",
    desc: "Sistema de Proteção ao Programa Nuclear Brasileiro",
    url: "https://www.gov.br/gsi/pt-br/assuntos/programa-nuclear-brasileiro/sipron-sistema-de-protecao-ao-programa-nuclear-brasileiro",
  },
  {
    org: "Brasil · CNEN",
    desc: "Normas e estrutura regulatória nuclear",
    url: "https://www.gov.br/cnen/pt-br/acesso-rapido/normas",
  },
  {
    org: "Brasil · Defesa Civil",
    desc: "Proteção e Defesa Civil",
    url: "https://www.gov.br/mdr/pt-br/assuntos/protecao-e-defesa-civil",
  },
];

const HIERARCHY = [
  "Nível 1 — autoridades governamentais / reguladores",
  "Nível 2 — organismos internacionais",
  "Nível 3 — universidades / literatura científica",
  "Nível 4 — manuais técnicos de instituições reconhecidas",
  "Nível 5 — material secundário",
];

export default function SourcesPage() {
  return (
    <AppShell>
      <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-5">
        <div>
          <h1 className="font-display font-black text-[19px] text-ink">Fontes</h1>
          <p className="text-[12px] text-[#5b584f] mt-1">
            Toda orientação crítica aqui tem fonte, data e nível de
            autoridade. Material de nível inferior não substitui recomendação
            oficial aplicável.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {SOURCES.map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="block p-3.5 bg-white border border-border rounded-[3px] no-underline"
            >
              <div className="font-mono text-[9.5px] font-semibold tracking-wide text-teal">
                {s.org.toUpperCase()}
              </div>
              <div className="text-[12.5px] text-ink mt-0.5">{s.desc}</div>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2 p-3.5 bg-panel border border-border rounded-[3px]">
          <div className="font-mono text-[10px] font-semibold tracking-widest text-muted">
            HIERARQUIA DE EVIDÊNCIA
          </div>
          <ul className="text-[11.5px] text-[#5b584f] leading-relaxed list-none">
            {HIERARCHY.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
