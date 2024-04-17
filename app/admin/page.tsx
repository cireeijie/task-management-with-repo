import React from "react";
import { auth } from "@clerk/nextjs";

export default async function Admin() {
  const { userId } = auth();

  return (
    <div>
      <div className="flex-[0.8]">content</div>
    </div>
  );
}
