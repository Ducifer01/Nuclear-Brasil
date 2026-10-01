"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, CheckIcon, ChevronRightIcon } from "@/components/icons";
import type { Scenario } from "@/lib/emergencyScenario";

export default function EmergencyPhaseFlow({ scenario }: { scenario: Scenario }) {
  const [active, setActive] = useState(scenario.defaultPhaseIndex);
  const { phases } = scenario;
  const phase = phases[active];

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
          {phases.map((p, i) => (
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
          {phases.map((p, i) => (
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
              {scenario.sourceLabel} · rev. {scenario.reviewDate} · Nível {scenario.authorityLevel}
            </div>
          </div>
        </div>

        <Link
          href={scenario.relatedArticleHref}
          className="flex items-center justify-center gap-2 p-3.5 bg-paper rounded-[3px] no-underline"
        >
          <span className="font-semibold text-[13px] text-ink">
            {scenario.relatedArticleLabel}
          </span>
          <ChevronRightIcon className="text-ink" width={16} height={16} />
        </Link>
      </div>
    </div>
  );
}
