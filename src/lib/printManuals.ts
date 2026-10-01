export type PrintLayout = "manual" | "cards" | "poster";

export type PrintManual = {
  id: string;
  name: string;
  isPreset: boolean;
  layout: PrintLayout;
  emergency: boolean;
  kitsOn: boolean;
  /** Categorias habilitadas — vazio não significa "nenhuma", significa "nenhuma categoria de artigo", emergência/kits são campos separados. */
  categories: string[];
};

const STORAGE_KEY = "nuclear-survival:print-manuals";

/**
 * Presets nomeados — roadmap §64 "Impressão avançada". Semeados no código,
 * não editáveis nem removíveis pelo usuário (isPreset: true).
 */
export const PRESET_MANUALS: PrintManual[] = [
  {
    id: "preset-pocket-guide",
    name: "Pocket Guide",
    isPreset: true,
    layout: "manual",
    emergency: true,
    kitsOn: false,
    categories: [],
  },
  {
    id: "preset-home-binder",
    name: "Home Binder",
    isPreset: true,
    layout: "manual",
    emergency: true,
    kitsOn: true,
    categories: [
      "Abrigo", "Radiação · Fallout", "Descontaminação", "Água", "Comunicação",
      "Saneamento", "Medicina", "Saúde", "Alimentação", "Energia", "Ferramentas",
      "Agricultura", "Longo prazo", "Brasil", "Saúde dental", "Navegação",
      "Documentos", "Animais", "Vetores e pragas", "Saúde mental", "Comunidade",
    ],
  },
  {
    id: "preset-family-manual",
    name: "Family Manual",
    isPreset: true,
    layout: "manual",
    emergency: true,
    kitsOn: true,
    categories: ["Água", "Abrigo", "Saneamento", "Alimentação", "Medicina", "Saúde", "Comunicação", "Documentos"],
  },
  {
    id: "preset-medical-binder",
    name: "Medical Binder",
    isPreset: true,
    layout: "manual",
    emergency: false,
    kitsOn: false,
    categories: ["Medicina", "Saúde", "Saúde dental", "Saúde mental", "Documentos"],
  },
  {
    id: "preset-water-manual",
    name: "Water Manual",
    isPreset: true,
    layout: "manual",
    emergency: false,
    kitsOn: false,
    categories: ["Água"],
  },
  {
    id: "preset-food-manual",
    name: "Food Manual",
    isPreset: true,
    layout: "manual",
    emergency: false,
    kitsOn: false,
    categories: ["Alimentação", "Agricultura"],
  },
  {
    id: "preset-long-term-manual",
    name: "Long-Term Manual",
    isPreset: true,
    layout: "manual",
    emergency: false,
    kitsOn: false,
    categories: ["Longo prazo", "Energia", "Ferramentas", "Agricultura", "Comunidade", "Brasil"],
  },
  {
    id: "preset-quick-cards",
    name: "Quick Cards",
    isPreset: true,
    layout: "cards",
    emergency: true,
    kitsOn: true,
    categories: [],
  },
  {
    id: "preset-wall-posters",
    name: "Wall Posters",
    isPreset: true,
    layout: "poster",
    emergency: true,
    kitsOn: false,
    categories: ["Água", "Abrigo", "Saneamento"],
  },
];

function isValidManual(value: unknown): value is PrintManual {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    typeof v.name === "string" &&
    typeof v.emergency === "boolean" &&
    typeof v.kitsOn === "boolean" &&
    Array.isArray(v.categories)
  );
}

/** Lê os manuais salvos pelo usuário — nunca inclui os presets. */
export function loadSavedManuals(): PrintManual[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isValidManual);
  } catch {
    return [];
  }
}

/** Salva uma nova seleção nomeada pelo usuário — gera id a partir do nome + horário. */
export function saveManual(manual: Omit<PrintManual, "id" | "isPreset">): PrintManual {
  const saved = loadSavedManuals();
  const newManual: PrintManual = {
    ...manual,
    id: `manual-${Date.now()}`,
    isPreset: false,
  };
  const next = [...saved, newManual];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Armazenamento indisponível (modo privado, etc.) — a seleção atual
    // continua funcionando nesta sessão, só não persiste entre visitas.
  }
  return newManual;
}

export function deleteManual(id: string): void {
  const saved = loadSavedManuals().filter((m) => m.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch {
    // Idem — falha ao salvar não deve quebrar a interface.
  }
}
