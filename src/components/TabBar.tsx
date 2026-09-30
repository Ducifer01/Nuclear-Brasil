"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, TrefoilIcon, BookIcon, ToolboxIcon } from "./icons";

const TABS = [
  { href: "/", label: "Início", icon: HomeIcon, match: (p: string) => p === "/" },
  {
    href: "/emergency",
    label: "Emergência",
    icon: TrefoilIcon,
    match: (p: string) => p.startsWith("/emergency"),
    activeColor: "text-red",
  },
  {
    href: "/learn",
    label: "Aprender",
    icon: BookIcon,
    match: (p: string) => p.startsWith("/learn"),
    activeColor: "text-teal",
  },
  {
    href: "/prepare",
    label: "Preparar",
    icon: ToolboxIcon,
    match: (p: string) => p.startsWith("/prepare") || p.startsWith("/tools"),
    activeColor: "text-amber",
  },
];

export default function TabBar() {
  const pathname = usePathname() ?? "/";

  return (
    <nav className="flex border-t border-border bg-paper shrink-0">
      {TABS.map(({ href, label, icon: Icon, match, activeColor }) => {
        const active = match(pathname);
        return (
          <Link
            key={href}
            href={href}
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 ${
              active ? (activeColor ?? "text-ink") + " font-bold" : "text-muted font-medium"
            }`}
          >
            <Icon width={20} height={20} />
            <span className="text-[10.5px]">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
