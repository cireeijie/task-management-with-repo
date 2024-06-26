import React from "react";
import type { Metadata } from "next";
import InnerNav from "@/components/ui/inner-nav";
import Filter from "@/components/ui/Filter.1";
import PopoverForm from "@/components/ui/popover-form";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/api/firebase";
import { getData } from "@/actions/actions";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData("repositories");

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] gap-10">
      <div className="h-screen w-full">
        <div className="w-full h-[58px] flex items-center">
          <h1 className="text-2xl font-bold">Repositries</h1>
        </div>
        <div className="flex gap-2">
          <Filter items={data} />
          <PopoverForm />
        </div>
        <InnerNav className="" navItems={data} />
      </div>
      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
}
