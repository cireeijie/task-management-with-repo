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

export default function UserMenu() {
  return (
    <Menubar className="p-0 border-[0] h-[auto] bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="bg-black focus:bg-black p-2 w-full border-[#27272A] border-[1px] rounded-md">
          <UserAvatar />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <span className="flex gap-3 items-center">
              <Settings size={14} />
              <span>Settings</span>
            </span>
          </MenubarItem>
          <MenubarSeparator color="#27272A" />
          <MenubarItem>
            <SignOutButton>
              <span className="flex gap-3 items-center">
                <LogOutIcon size={14} />
                <span>Logout</span>
              </span>
            </SignOutButton>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
