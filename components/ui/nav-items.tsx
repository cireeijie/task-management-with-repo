"use client";

import React from "react";
import {
  ClipboardCheck,
  LayoutDashboard,
  SquareDashedBottomCode,
  SquareTerminal,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Tasks",
    href: "/admin/tasks",
    icon: <ClipboardCheck className="h-5 w-5" />,
  },
  {
    title: "Repository",
    href: "/admin/repository",
    icon: <SquareDashedBottomCode className="h-5 w-5" />,
  },
  {
    title: "Playground",
    href: "/admin/playground",
    icon: <SquareTerminal className="h-5 w-5" />,
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
            pathname.includes(item.href)
              ? "bg-[#27272A] text-white"
              : "bg-transparent text-[#27272A]"
          } p-3 rounded-md flex gap-3 items-center`}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
