import React from "react";
import type { Metadata } from "next";
import SideNav from "@/components/ui/side-nav";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] gap-7">
      <SideNav />
      <div className="flex flex-col p-3">{children}</div>
    </div>
  );
}
