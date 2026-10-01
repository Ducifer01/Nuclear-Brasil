"use client";

import { useState } from "react";

export default function DownloadZipButton() {
  const [building, setBuilding] = useState(false);

  async function handleClick() {
    setBuilding(true);
    try {
      const { buildOfflinePackage } = await import("@/lib/offlinePackage");
      const bytes = buildOfflinePackage();
      const blob = new Blob([bytes as BlobPart], { type: "application/zip" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "nuclear-survival-offline.zip";
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
      {building ? "GERANDO..." : "BAIXAR ZIP"}
    </button>
  );
}
