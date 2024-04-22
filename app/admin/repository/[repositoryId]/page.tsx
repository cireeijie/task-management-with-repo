import React from "react";
import { getDataById } from "@/actions/actions";
export default async function RepositoryId({ params }: any) {
  const data = await getDataById("repositories", params.repositoryId);
  return (
    <div className="w-full h-screen overflow-auto px-3 pb-[50px]">
      <div className="w-full h-[58px] flex items-center">
        <h1 className="text-2xl font-bold capitalize">{data?.title}</h1>
      </div>
      <div className="w-full">
        <div className="mb-5">
          <h2 className="font-semibold">Description:</h2>
          <p className="text-sm">{data?.description}</p>
        </div>
        <div>
          <pre className="mt-2 rounded-md bg-slate-950 p-7">
            <code className="text-white whitespace-pre-wrap">
              {data?.content}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
