"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CommandList } from "cmdk";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Filter({ items }: { items: any }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const pathname = usePathname();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full mb-3 justify-between"
        >
          {value ? value && value : "Find task..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search task..." />
          <CommandList>
            {items.map((item: any) => (
              <CommandItem
                key={item.id}
                value={item.title}
                aria-disabled={false}
                className="cursor-pointer"
                onSelect={(currentValue: any) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Link
                  href={`${pathname}?id=${item.id}`}
                  className="flex items-center w-full"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span>{item.title}</span>
                </Link>
              </CommandItem>
            ))}
          </CommandList>
          <CommandEmpty>No Task found.</CommandEmpty>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
