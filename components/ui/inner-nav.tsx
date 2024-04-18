"use client";

import { NotepadText } from "lucide-react";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PopoverForm from "./popover-form";

export default function InnerNav({
  className,
  navItems,
}: {
  className: string;
  navItems: any;
}) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {navItems.map((item: any) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            pathname === item.href
              ? "bg-[#27272A] text-white"
              : "bg-transparent text-[#27272A]"
          } py-2 px-3  rounded-md flex gap-3 items-center`}
        >
          <NotepadText size={22} />
          <span className="text-sm">{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
