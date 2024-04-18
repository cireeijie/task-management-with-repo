import React from "react";
import { Button } from "./button";
import { PlusIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {} from "@radix-ui/react-popover";
import AddTaskForm from "./add-task-form";

export default function PopoverForm() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="p-2">
          <PlusIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <AddTaskForm />
      </PopoverContent>
    </Popover>
  );
}
