"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, CheckIcon, ChevronRightIcon } from "@/components/icons";

type Phase = {
  key: string;
  tab: string;
  phaseLabel: string;
  title: string;
  subtitle: string;
  steps: string[];
};

const PHASES: Phase[] = [
  {
    key: "antes",
    tab: "ANTES",
    phaseLabel: "FASE 0 · PREPARAÇÃO",
    title: "ANTES",
    subtitle: "O que fazer com antecedência, quando nada está acontecendo.",
    steps: [
      "Saiba onde se abrigar rapidamente em casa, no trabalho e na escola — de preferência um porão ou o centro de um prédio de concreto ou tijolo.",
      "Monte o Kit 72h e mantenha-o em local de fácil acesso.",
      "Combine com a família um ponto de encontro e um contato fora da região, caso as linhas locais fiquem sobrecarregadas.",
      "Saiba sintonizar um rádio a pilha em uma emissora local — a rede de celular pode cair primeiro.",
    ],
  },
  {
    key: "durante",
    tab: "DURANTE",
    phaseLabel: "FASE 0 · NO MOMENTO",
    title: "DURANTE A EXPLOSÃO",
    subtitle: "Se você vir o clarão, aja nos primeiros segundos.",
    steps: [
      "NUNCA olhe diretamente para o clarão — pode causar cegueira temporária ou permanente.",
      "JOGUE-SE NO CHÃO imediatamente e proteja a cabeça e o pescoço, atrás de qualquer barreira disponível.",
      "Só se levante depois que a onda de choque passar — pode levar de segundos a cerca de um minuto, dependendo da distância.",
      "Se estiver dirigindo, pare com segurança fora da via e abrigue-se; não continue dirigindo.",
    ],
  },
  {
    key: "agora",
    tab: "AGORA",
    phaseLabel: "FASE 1 · AGORA",
    title: "AGORA",
    subtitle: "Primeiros minutos após o clarão. Não espere confirmação — aja.",
    steps: [
      "ENTRE EM UM EDIFÍCIO.",
      "VÁ PARA O PORÃO OU PARTE CENTRAL.",
      "AFASTE-SE DE JANELAS, PAREDES EXTERNAS E TETO.",
      "FIQUE DENTRO.",
      "ACOMPANHE AS INSTRUÇÕES OFICIAIS.",
    ],
  },
  {
    key: "primeira-hora",
    tab: "1ª HORA",
    phaseLabel: "FASE 2 · 1ª HORA",
    title: "PRIMEIRA HORA",
    subtitle: "Se você esteve exposto do lado de fora, a descontaminação começa aqui.",
    steps: [
      "Remova a camada externa das roupas e guarde-a longe de pessoas e alimentos — isso remove boa parte do material radioativo depositado nela.",
      "Lave a pele exposta com água morna e sabão suave, sem esfregar com força — esfregar pode empurrar contaminação para os poros.",
      "Cubra nariz e boca com um pano ou máscara até estar em um ambiente limpo.",
      "Não coma nem beba nada que tenha ficado exposto ao ar livre depois da explosão.",
      "Reduza o uso de celular e rádio ao mínimo — economize bateria, a rede pode estar sobrecarregada.",
    ],
  },
  {
    key: "24h",
    tab: "24H",
    phaseLabel: "FASE 3 · 24 HORAS",
    title: "PRIMEIRAS 24 HORAS",
    subtitle: "O risco de fallout é maior logo depois da explosão e cai com o tempo.",
    steps: [
      "Fallout perde intensidade rapidamente nas primeiras horas. Como referência geral (não uma garantia): a cada múltiplo de 7 no tempo decorrido, a intensidade da radiação cai por volta de 10 vezes.",
      "Permaneça abrigado. Autoridades costumam recomendar ao menos 24 horas antes de avaliar a saída — pode ser mais tempo, dependendo da quantidade de material e do vento.",
      "Beba apenas água armazenada ou de fontes fechadas (garrafas, caixa-d'água fechada). Evite água que ficou exposta ao ar livre nesse período.",
      "Comece a racionar o Kit 72h — não assuma que o fornecimento normal vai voltar logo.",
    ],
  },
  {
    key: "dias",
    tab: "DIAS",
    phaseLabel: "FASE 4 · DIAS SEGUINTES",
    title: "DIAS SEGUINTES",
    subtitle: "Só saia do abrigo quando a orientação oficial indicar que é seguro.",
    steps: [
      "Saia apenas quando autoridades confirmarem que é seguro, ou quando a orientação oficial indicar uma janela segura.",
      "Ao sair, evite contato com poeira depositada em superfícies externas; não mexa em solo, telhados ou veículos sem necessidade.",
      "Continue acompanhando comunicados oficiais — rádio costuma ser mais confiável que celular nesse período.",
      "Comece a avaliar água, alimentos e abrigo para os próximos dias.",
    ],
  },
];

export default function EmergencyNuclearPage() {
  const [active, setActive] = useState(2); // "AGORA" por padrão

  const phase = PHASES[active];

  return (
    <div className="flex flex-col min-h-dvh bg-ink text-paper">
      <div className="px-5 pt-4 pb-3 border-b border-[#2a2e31] max-w-md mx-auto w-full">
        <div className="flex items-center justify-between">
          <Link
            href="/emergency"
            className="flex items-center gap-1.5 text-[#b7b3a4] no-underline"
          >
            <ArrowLeftIcon width={16} height={16} />
            <span className="font-mono text-[10.5px] tracking-wide">CENÁRIOS</span>
          </Link>
          <span className="font-mono text-[9.5px] font-semibold tracking-wide text-yellow px-2 py-1 border border-[#4a3d14] rounded-full bg-[#26200e]">
            {phase.phaseLabel}
          </span>
        </div>

        <div className="flex gap-1 mt-3.5">
          {PHASES.map((p, i) => (
            <button
              key={p.key}
              onClick={() => setActive(i)}
              aria-current={i === active}
              className={`flex-1 h-[3px] rounded-sm ${
                i <= active ? "bg-red" : "bg-[#3a3e41]"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5">
          {PHASES.map((p, i) => (
            <button
              key={p.key}
              onClick={() => setActive(i)}
              className={`font-mono text-[8.5px] ${
                i === active ? "text-yellow" : "text-[#8a8677]"
              }`}
            >
              {p.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 px-5 py-5 max-w-md mx-auto w-full flex flex-col gap-4">
        <div>
          <h1 className="font-display font-black text-[32px] leading-none tracking-wide text-paper">
            {phase.title}
          </h1>
          <p className="text-[12.5px] text-[#9a968a] mt-1.5">{phase.subtitle}</p>
        </div>

        <ol className="flex flex-col gap-2 list-none">
          {phase.steps.map((step, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-3.5 bg-[#1c2023] border border-[#2a2e31] rounded-[3px]"
            >
              <span className="w-[26px] h-[26px] rounded-full bg-red flex items-center justify-center shrink-0 font-mono font-bold text-xs text-paper">
                {i + 1}
              </span>
              <span className="font-semibold text-[14.5px] leading-snug text-paper pt-0.5">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <div className="flex items-center gap-2.5 p-3 bg-[#1a2620] border border-[#234030] rounded-[3px]">
          <CheckIcon className="text-[#5fcb82] shrink-0" />
          <div>
            <div className="font-mono text-[10px] font-bold text-[#8fe3a8] tracking-wide">
              VERIFICADO
            </div>
            <div className="text-[10.5px] text-[#9a968a] mt-0.5">
              CDC — Radiation Emergencies · rev. 30/09/2026 · Nível 1
            </div>
          </div>
        </div>

        <Link
          href="/learn/fallout"
          className="flex items-center justify-center gap-2 p-3.5 bg-paper rounded-[3px] no-underline"
        >
          <span className="font-semibold text-[13px] text-ink">
            Entender fallout e descontaminação
          </span>
          <ChevronRightIcon className="text-ink" width={16} height={16} />
        </Link>
      </div>
    </div>
  );
}
