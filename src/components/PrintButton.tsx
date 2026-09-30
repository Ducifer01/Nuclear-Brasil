"use client";

import { PrintIcon } from "./icons";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex items-center gap-2 px-4 py-2.5 bg-ink text-paper rounded-[3px] font-semibold text-[12.5px]"
    >
      <PrintIcon width={16} height={16} />
      Imprimir / salvar como PDF
    </button>
  );
}
