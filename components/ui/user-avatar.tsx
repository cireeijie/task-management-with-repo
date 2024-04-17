import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { currentUser } from "@clerk/nextjs";

export default async function UserAvatar() {
  const user = await currentUser();
  return (
    <div className="flex gap-3 items-center">
      <Avatar>
        <AvatarImage
          src={user?.imageUrl}
          alt="user"
          className="bg-transparent"
        />
        <AvatarFallback>UU</AvatarFallback>
      </Avatar>
      <span>{user?.firstName}</span>
    </div>
  );
}
