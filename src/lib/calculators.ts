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

export type EnergyAppliance = {
  id: string;
  name: string;
  watts: number;
  hoursPerDay: number;
};

export type EnergyInput = {
  batteryWh: number;
  appliances: EnergyAppliance[];
};

export type EnergyResult = {
  dailyWh: number;
  autonomyDays: number;
  perApplianceWh: { id: string; name: string; wh: number }[];
};

/** Cálculo determinístico — sem IA, sem rede. Ver roadmap §36 "Simuladores". */
export function calculateEnergy(input: EnergyInput): EnergyResult {
  const batteryWh = Math.max(0, input.batteryWh);
  const perApplianceWh = input.appliances.map((a) => ({
    id: a.id,
    name: a.name,
    wh: Math.max(0, a.watts) * Math.max(0, a.hoursPerDay),
  }));
  const dailyWh = perApplianceWh.reduce((sum, a) => sum + a.wh, 0);
  const autonomyDays = dailyWh > 0 ? batteryWh / dailyWh : 0;

  return {
    dailyWh: round1(dailyWh),
    autonomyDays: round1(autonomyDays),
    perApplianceWh: perApplianceWh.map((a) => ({ ...a, wh: round1(a.wh) })),
  };
}

export type FoodInput = {
  people: number;
  caloriesPerPersonPerDay: number;
  storedCalories: number;
};

export type FoodResult = {
  dailyCalories: number;
  autonomyDays: number;
  deficitCalories: number;
};

const DEFAULT_CALORIES_PER_PERSON_PER_DAY = 2000;

/** Cálculo determinístico — sem IA, sem rede. Ver roadmap §36 "Simuladores". */
export function calculateFood(input: FoodInput): FoodResult {
  const people = Math.max(0, input.people);
  const caloriesPerPerson =
    input.caloriesPerPersonPerDay > 0
      ? input.caloriesPerPersonPerDay
      : DEFAULT_CALORIES_PER_PERSON_PER_DAY;
  const stored = Math.max(0, input.storedCalories);

  const dailyCalories = people * caloriesPerPerson;
  const autonomyDays = dailyCalories > 0 ? stored / dailyCalories : 0;
  const deficitCalories = Math.max(0, dailyCalories - stored);

  return {
    dailyCalories: round1(dailyCalories),
    autonomyDays: round1(autonomyDays),
    deficitCalories: round1(deficitCalories),
  };
}
