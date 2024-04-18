import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import UserAvatar from "./user-avatar";
import { SignOutButton } from "@clerk/nextjs";
import { LogOutIcon, Settings } from "lucide-react";
import Link from "next/link";

export default function UserMenu() {
  return (
    <Menubar className="p-0 border-[0] h-[auto] bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="p-2 w-full border-[#E2E8F0] border-[1px] rounded-md cursor-pointer">
          <UserAvatar />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <span className="flex gap-3 items-center">
              <Settings size={14} />
              <span>Settings</span>
            </span>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <SignOutButton>
              <Link
                href="/sign-in"
                className="flex gap-3 items-center h-[100%] w-full"
              >
                <LogOutIcon size={14} />
                <span>Logout</span>
              </Link>
            </SignOutButton>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
