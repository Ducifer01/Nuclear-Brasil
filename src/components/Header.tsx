import Link from "next/link";
import { TrefoilIcon } from "./icons";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-5 border-b border-border bg-paper shrink-0">
      <Link href="/" className="flex items-center gap-2 text-ink">
        <TrefoilIcon width={20} height={20} />
        <span className="font-display font-black text-sm tracking-wide">
          NUCLEAR SURVIVAL
        </span>
      </Link>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-green bg-green-tint">
        <span className="w-1.5 h-1.5 rounded-full bg-green" />
        <span className="font-mono text-[9.5px] font-semibold tracking-wide text-[#1e5c33]">
          OFFLINE OK
        </span>
      </div>
    </header>
  );
}
