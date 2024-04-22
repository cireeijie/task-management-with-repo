"use client";

import { NotepadText, SquareDashedBottomCode, Trash2 } from "lucide-react";
import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { deleteDataById } from "@/actions/actions";
import { toast } from "./use-toast";

export default function InnerNav({
  className,
  navItems,
}: {
  className: string;
  navItems: any;
}) {
  const [data, setData] = useState(navItems);

  let path = "";
  let collection = "";
  const pathname = usePathname();

  if (pathname.includes("tasks")) {
    path = "/admin/tasks";
    collection = "tasks";
  }
  if (pathname.includes("repository")) {
    path = "/admin/repository";
    collection = "repositories";
  }

  const handleDelete = async (id: string) => {
    await deleteDataById(collection, id);
    const newData = data.filter((item: any) => item.id !== id);

    setData(newData);
  };

  return (
    <nav className={className}>
      {data.map((item: any) => (
        <div key={item.id} className="flex flex-1 group">
          <Link
            href={`${path}/${item.id}`}
            className={`${
              pathname.includes(item.id)
                ? "bg-[#27272A] text-white"
                : "bg-transparent text-[#27272A]"
            } py-2 px-3  rounded-md flex gap-3 items-center flex-1 group-hover:rounded-tr-none group-hover:rounded-br-none`}
          >
            {pathname.includes("tasks") ? (
              <NotepadText size={22} />
            ) : (
              <SquareDashedBottomCode size={22} />
            )}

            <span className="text-sm">{item.title}</span>
          </Link>
          <div
            className="bg-red-500 text-white rounded-tr-md rounded-br-md w-0 cursor-pointer group-hover:w-[auto] group-hover:p-2 ease-linear duration-100 flex items-center justify-center"
            onClick={() => handleDelete(item.id)}
          >
            <Trash2 size={17} color="#FFFFFF" />
          </div>
        </div>
      ))}
    </nav>
  );
}
