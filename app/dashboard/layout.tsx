

import Sidebar from "@/components/ui/dashboard/sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex-1 flex gap-4">
      <Sidebar />
      <main className="flex-1 overflow-scroll">{children}</main>
    </section>
  );
}
