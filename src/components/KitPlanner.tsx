"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BASE_TIER, planKit } from "@/lib/kitPlanner";
import type { ClimateFactor } from "@/lib/calculators";
import { ChevronRightIcon } from "@/components/icons";

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12.5px] font-semibold text-ink">{label}</span>
      {children}
      {hint && <span className="text-[10.5px] text-muted">{hint}</span>}
    </label>
  );
}

const inputClass =
  "w-full px-3 py-2.5 bg-white border border-border rounded-[3px] text-[14px] text-ink font-mono focus:outline-none focus:border-teal";

export default function KitPlanner() {
  const [people, setPeople] = useState(4);
  const [days, setDays] = useState(3);
  const [hasPets, setHasPets] = useState(false);
  const [climate, setClimate] = useState<ClimateFactor>("normal");

  const result = useMemo(
    () => planKit({ people, days, hasPets, climate }),
    [people, days, hasPets, climate]
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Pessoas">
          <input
            type="number"
            min={1}
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            className={inputClass}
          />
        </Field>
        <Field label="Dias a cobrir">
          <input
            type="number"
            min={0}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Clima">
        <div className="flex gap-2">
          {(["normal", "quente"] as ClimateFactor[]).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setClimate(c)}
              className={`flex-1 py-2.5 rounded-[3px] text-[12.5px] font-semibold border ${
                climate === c
                  ? "bg-teal text-white border-teal"
                  : "bg-white text-ink border-border"
              }`}
            >
              {c === "normal" ? "Normal" : "Quente"}
            </button>
          ))}
        </div>
      </Field>

      <label className="flex items-center gap-2.5 p-3 bg-panel border border-border rounded-[3px]">
        <input
          type="checkbox"
          checked={hasPets}
          onChange={(e) => setHasPets(e.target.checked)}
          className="w-4 h-4"
        />
        <span className="text-[12.5px] font-semibold text-ink">
          Inclui animais de estimação
        </span>
      </label>

      <div className="flex flex-col gap-3 p-4 bg-teal-tint rounded-[3px]">
        <div>
          <span className="text-[11px] text-[#164f4c]">Kit recomendado</span>
          <div className="font-display font-extrabold text-[15px] text-[#164f4c] mt-0.5">
            {result.tier.label}
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px] text-[#164f4c]">Água estimada necessária</span>
          <span className="font-mono font-semibold text-[13px] text-[#164f4c]">
            {result.waterLiters} L
          </span>
        </div>
        <Link
          href={result.tier.href}
          className="flex items-center justify-center gap-1.5 mt-1 py-2.5 bg-teal text-white rounded-[3px] text-[12.5px] font-semibold no-underline"
        >
          Abrir checklist do kit
          <ChevronRightIcon width={14} height={14} />
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[12px] font-semibold text-ink">
          Sempre no bolso, independente da duração
        </span>
        <Link
          href={BASE_TIER.href}
          className="flex items-center gap-3 p-3 bg-white border border-border rounded-[3px]"
        >
          <span className="flex-1 text-[12.5px] text-ink">{BASE_TIER.label}</span>
          <ChevronRightIcon className="text-[#b0aa96]" width={16} height={16} />
        </Link>
      </div>

      <p className="text-[10.5px] text-muted leading-relaxed">
        Cálculo local e determinístico — combina a camada de kit adequada à
        duração informada com a estimativa de água do roadmap §36. Nada é
        enviado para nenhum servidor.
      </p>
    </div>
  );
}
