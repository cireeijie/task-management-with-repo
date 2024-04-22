import React from "react";
import { Button } from "./button";
import { PlusIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {} from "@radix-ui/react-popover";
import CreateForm from "./create-form";

export default function PopoverForm() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="p-2">
          <PlusIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <CreateForm />
      </PopoverContent>
    </Popover>
  );
}
