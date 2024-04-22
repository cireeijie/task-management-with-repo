"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "./textarea";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/api/firebase";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().optional(),
  content: z.string().optional(),
});

export default function CreateForm() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    let message = "";

    try {
      const docRef = await addDoc(collection(db, "repositories"), data);
      const formName = pathname.includes("tasks") ? "Task" : "Repository";

      message = `${formName} created successfully!`;
    } catch (e) {
      message = "An error occured. Please try again.";
    } finally {
      setLoading(false);
    }
    toast({
      title: message,
    });
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">
        {pathname.includes("tasks") && "Add task"}
        {pathname.includes("repository") && "Add repository"}
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    className="w-full"
                    placeholder="Add title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={loading}
                    placeholder="Add description"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={loading}
                    placeholder="Add content"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading
              ? `Adding ${pathname.includes("tasks") ? "task" : ""}${
                  pathname.includes("repository") ? "repository" : ""
                }...`
              : `Add ${pathname.includes("tasks") ? "task" : ""} ${
                  pathname.includes("repository") ? "repository" : ""
                }`}
          </Button>
        </form>
      </Form>
    </div>
  );
}
