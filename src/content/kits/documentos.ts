import type { KitItem } from "./types";

export const documentosItems: KitItem[] = [
  { id: "identificacao", label: "Documentos de identificação", hint: "RG, CPF, CNH, passaporte" },
  { id: "contatos", label: "Lista de contatos de emergência", hint: "Nomes, telefones, endereços" },
  { id: "medico", label: "Dados médicos", hint: "Alergias, medicamentos em uso, condições crônicas" },
  { id: "vacinas", label: "Comprovantes de vacinação", hint: "" },
  { id: "tipo-sanguineo", label: "Tipo sanguíneo", hint: "Quando oficialmente conhecido" },
  { id: "enderecos", label: "Endereços importantes", hint: "Casa, trabalho, escola, pontos de encontro" },
  { id: "seguros", label: "Informações de seguros", hint: "Apólices, contatos de seguradora" },
  { id: "propriedade", label: "Documentos de propriedade", hint: "Imóvel, veículo" },
  { id: "familia", label: "Informações importantes para a família", hint: "Quem precisa saber o quê" },
];
