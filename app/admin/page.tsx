import React from "react";
import { auth } from "@clerk/nextjs";

export default async function Admin() {
  const { userId } = auth();

  return (
    <div>
      <div className="w-full h-[58px] flex items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <span>Coming Soon</span>
      </div>
    </div>
  );
}
