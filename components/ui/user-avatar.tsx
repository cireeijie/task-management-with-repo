import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { currentUser } from "@clerk/nextjs";
import { ArrowDown, ChevronDown } from "lucide-react";

export default async function UserAvatar() {
  const user = await currentUser();
  return (
    <div className="flex gap-3 items-center w-full">
      <Avatar>
        <AvatarImage
          src={user?.imageUrl}
          alt="user"
          className="bg-transparent"
        />
        <AvatarFallback>UU</AvatarFallback>
      </Avatar>
      <span className="text-[#27272A] flex-1 text-start">
        {user?.firstName}
      </span>
      <ChevronDown color="#0D142780" size={22} />
    </div>
  );
}
