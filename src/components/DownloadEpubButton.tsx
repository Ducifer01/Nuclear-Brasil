"use client";

import { useState } from "react";

export default function DownloadEpubButton() {
  const [building, setBuilding] = useState(false);

  async function handleClick() {
    setBuilding(true);
    try {
      const { buildEpub } = await import("@/lib/epubPackage");
      const bytes = buildEpub();
      const blob = new Blob([bytes as BlobPart], { type: "application/epub+zip" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "nuclear-survival-manual.epub";
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setBuilding(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={building}
      className="px-2.5 py-1.5 bg-ink rounded-[2px] text-paper font-semibold text-[10px] disabled:opacity-50"
    >
      {building ? "GERANDO..." : "BAIXAR EPUB"}
    </button>
  );
}
