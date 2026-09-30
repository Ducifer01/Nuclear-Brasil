"use client";

import { useMemo, useState } from "react";
import { calculateFood } from "@/lib/calculators";

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

export default function FoodCalculator() {
  const [people, setPeople] = useState(4);
  const [caloriesPerPerson, setCaloriesPerPerson] = useState(2000);
  const [stored, setStored] = useState(120000);

  const result = useMemo(
    () =>
      calculateFood({
        people,
        caloriesPerPersonPerDay: caloriesPerPerson,
        storedCalories: stored,
      }),
    [people, caloriesPerPerson, stored]
  );

  const covered = result.deficitCalories === 0;

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
        <Field label="Kcal/pessoa/dia" hint="Referência: ~2000">
          <input
            type="number"
            min={0}
            value={caloriesPerPerson}
            onChange={(e) => setCaloriesPerPerson(Number(e.target.value))}
            className={inputClass}
          />
        </Field>
        <Field label="Estoque (kcal totais)" hint="Some as calorias das embalagens">
          <input
            type="number"
            min={0}
            value={stored}
            onChange={(e) => setStored(Number(e.target.value))}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="flex flex-col gap-2 p-4 bg-teal-tint rounded-[3px]">
        <div className="flex justify-between">
          <span className="text-[12px] text-[#164f4c]">Consumo diário total</span>
          <span className="font-mono font-semibold text-[13px] text-[#164f4c]">
            {result.dailyCalories} kcal
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px] text-[#164f4c]">Autonomia do estoque</span>
          <span className="font-mono font-semibold text-[13px] text-[#164f4c]">
            {result.autonomyDays} dia{result.autonomyDays === 1 ? "" : "s"}
          </span>
        </div>
        <div className="h-px bg-[#bcd9d7] my-1" />
        <div className="flex justify-between">
          <span className="text-[12.5px] font-semibold text-[#164f4c]">
            {covered ? "Estoque cobre 1 dia" : "Falta para cobrir 1 dia"}
          </span>
          <span className="font-mono font-bold text-[14px] text-[#164f4c]">
            {covered ? "✓" : `${result.deficitCalories} kcal`}
          </span>
        </div>
      </div>

      <p className="text-[10.5px] text-muted leading-relaxed">
        Referência geral de ~2000 kcal/pessoa/dia — necessidades reais variam
        por idade, peso, atividade física e condição de saúde. Cálculo local
        e determinístico; nada é enviado para nenhum servidor.
      </p>
    </div>
  );
}
