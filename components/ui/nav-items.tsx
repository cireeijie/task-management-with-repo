"use client";

import React from "react";
import { ClipboardCheck, SquareDashedBottomCode } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Todos",
    href: "/admin/todos",
    icon: <ClipboardCheck className="h-5 w-5" />,
  },
  {
    title: "Repository",
    href: "/admin/repository",
    icon: <SquareDashedBottomCode className="h-5 w-5" />,
  },
];

export default function NavItems({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            pathname === item.href ? "bg-[#27272A]" : "bg-transparent"
          } p-3 rounded-md flex gap-3`}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
