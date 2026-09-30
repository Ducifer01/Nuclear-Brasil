"use client";

import { useMemo, useState } from "react";
import { calculateWater, type ClimateFactor } from "@/lib/calculators";

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

export default function WaterCalculator() {
  const [people, setPeople] = useState(4);
  const [days, setDays] = useState(3);
  const [pets, setPets] = useState(0);
  const [climate, setClimate] = useState<ClimateFactor>("normal");
  const [stored, setStored] = useState(12);

  const result = useMemo(
    () =>
      calculateWater({
        people,
        days,
        petsLitersPerDay: pets,
        climate,
        storedLiters: stored,
      }),
    [people, days, pets, climate, stored]
  );

  const covered = result.deficitLiters === 0;

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Pessoas">
          <input
            type="number"
            min={0}
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            className={inputClass}
          />
        </Field>
        <Field label="Dias">
          <input
            type="number"
            min={0}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className={inputClass}
          />
        </Field>
        <Field label="Animais (L/dia extra)" hint="Estimativa — varia por espécie e porte">
          <input
            type="number"
            min={0}
            value={pets}
            onChange={(e) => setPets(Number(e.target.value))}
            className={inputClass}
          />
        </Field>
        <Field label="Já armazenado (L)">
          <input
            type="number"
            min={0}
            value={stored}
            onChange={(e) => setStored(Number(e.target.value))}
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

      <div className="flex flex-col gap-2 p-4 bg-teal-tint rounded-[3px]">
        <div className="flex justify-between">
          <span className="text-[12px] text-[#164f4c]">Consumo diário</span>
          <span className="font-mono font-semibold text-[13px] text-[#164f4c]">
            {result.dailyLiters} L
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px] text-[#164f4c]">
            Necessário para {days} dia{days === 1 ? "" : "s"}
          </span>
          <span className="font-mono font-semibold text-[13px] text-[#164f4c]">
            {result.neededLiters} L
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px] text-[#164f4c]">Autonomia do estoque atual</span>
          <span className="font-mono font-semibold text-[13px] text-[#164f4c]">
            {result.autonomyDays} dia{result.autonomyDays === 1 ? "" : "s"}
          </span>
        </div>
        <div className="h-px bg-[#bcd9d7] my-1" />
        <div className="flex justify-between">
          <span className="text-[12.5px] font-semibold text-[#164f4c]">
            {covered ? "Estoque cobre o período" : "Falta armazenar"}
          </span>
          <span className="font-mono font-bold text-[14px] text-[#164f4c]">
            {covered ? "✓" : `${result.deficitLiters} L`}
          </span>
        </div>
      </div>

      <p className="text-[10.5px] text-muted leading-relaxed">
        Referência: cerca de 4 L por pessoa por dia (≈ 1 galão, referência do
        CDC). Cálculo local e determinístico — nada é enviado para nenhum
        servidor.
      </p>
    </div>
  );
}
