import { UserButton } from "@clerk/nextjs";
import { ClipboardCheck, SquareDashedBottomCode } from "lucide-react";
import Link from "next/link";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import NavItems from "./nav-items";
import UserMenu from "./user-menu";

export default async function SideNav() {
  return (
    <div className="text-white flex flex-col gap-3 p-3 ">
      <UserMenu />
      <NavItems className="flex flex-col gap-3" />
    </div>
  );
}
