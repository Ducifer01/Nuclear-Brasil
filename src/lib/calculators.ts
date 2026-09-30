export type ClimateFactor = "normal" | "quente";

export type WaterInput = {
  people: number;
  days: number;
  petsLitersPerDay: number;
  climate: ClimateFactor;
  storedLiters: number;
};

export type WaterResult = {
  dailyLiters: number;
  neededLiters: number;
  autonomyDays: number;
  deficitLiters: number;
};

const LITERS_PER_PERSON_PER_DAY = 4; // referência CDC: ~1 galão (3,8 L) por pessoa/dia, arredondado.
const CLIMATE_MULTIPLIER: Record<ClimateFactor, number> = {
  normal: 1,
  quente: 1.5,
};

/** Cálculo determinístico — sem IA, sem rede. Ver roadmap §36 "Simuladores". */
export function calculateWater(input: WaterInput): WaterResult {
  const people = Math.max(0, input.people);
  const days = Math.max(0, input.days);
  const pets = Math.max(0, input.petsLitersPerDay);
  const stored = Math.max(0, input.storedLiters);

  const dailyLiters =
    people * LITERS_PER_PERSON_PER_DAY * CLIMATE_MULTIPLIER[input.climate] + pets;
  const neededLiters = dailyLiters * days;
  const autonomyDays = dailyLiters > 0 ? stored / dailyLiters : 0;
  const deficitLiters = Math.max(0, neededLiters - stored);

  return {
    dailyLiters: round1(dailyLiters),
    neededLiters: round1(neededLiters),
    autonomyDays: round1(autonomyDays),
    deficitLiters: round1(deficitLiters),
  };
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}
