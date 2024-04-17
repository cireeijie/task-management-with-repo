import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <UserButton />
    </div>
  );
}
