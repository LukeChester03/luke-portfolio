"use client";

import { usePathname } from "next/navigation";
import Header from "@/Components/Header";

export default function ClientHeaderWrapper() {
  const pathname = usePathname();
  const isPortfolio = pathname === "/portfolio";

  return <Header sticky={!isPortfolio} />;
}
