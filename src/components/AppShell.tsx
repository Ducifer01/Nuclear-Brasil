import type { ReactNode } from "react";
import Header from "./Header";
import TabBar from "./TabBar";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">{children}</main>
      <TabBar />
    </div>
  );
}
