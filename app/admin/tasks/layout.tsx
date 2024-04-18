import React from "react";
import type { Metadata } from "next";
import InnerNav from "@/components/ui/inner-nav";
import { InnerNavSearchbar } from "@/components/ui/inner-nav-searchbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const innerNavItems = [
  {
    title: "Task 1",
    href: "/admin/tasks/task-1",
  },
  {
    title: "Task 2",
    href: "/admin/tasks/task-2",
  },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
      <div className="h-screen w-full">
        <div className="w-full h-[58px] flex items-center">
          <h1 className="text-2xl font-bold">Tasks</h1>
        </div>
        <InnerNavSearchbar innerNavItems={innerNavItems} />
        <InnerNav className="" navItems={innerNavItems} />
      </div>
      <div className="flex flex-col p-3">{children}</div>
    </div>
  );
}