"use client";

import { getDataById } from "@/actions/actions";
import { useSearchParams } from "next/navigation";
import React from "react";

export default async function Repository() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const data = await getDataById("repositories", id as string);

  console.log(data);

  return (
    <div>
      <div className="w-full h-[58px] flex items-center">
        <h1 className="text-2xl font-bold">Title: {data?.title}</h1>
        <p>Description: {data?.description}</p>
        <p>Content: {data?.Content}</p>
      </div>
    </div>
  );
}
