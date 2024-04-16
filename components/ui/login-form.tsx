"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import React, { useEffect, useState } from "react";

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
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/app/api/firebase";
import { LoaderCircle } from "lucide-react";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(1, {
    message: "Please enter your password",
  }),
});

export default function LoginForm() {
  const [formType, setFormType] = useState<"login" | "signup">("login");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    let result: any = null;

    try {
      if (formType === "login") {
        const response = await createUserWithEmailAndPassword(
          auth,
          data.username,
          data.password
        );
        result = response;
      }

      if (formType === "signup") {
        const response = await createUserWithEmailAndPassword(
          auth,
          data.username,
          data.password
        );

        result = response;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      toast({
        title:
          formType === "login"
            ? "Loggin successful!"
            : "Account created successfully!",
        description:
          formType === "login"
            ? "Redirecting to home page"
            : "Redirecting to home page",
      });
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log("User:", user);
    });
  });

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold pb-4 capitalize text-center">
          {formType}
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="emai@yourdomain.com"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <span className="flex items-center">
                  <LoaderCircle
                    className="mr-2 h-4 w-4 animate-spin"
                    size={24}
                  />
                  {formType === "login" ? "Logging in..." : "Signing up..."}
                </span>
              ) : (
                <span>{formType === "login" ? "Login" : "Signup"}</span>
              )}
            </Button>
          </form>
        </Form>
        <div className="pt-4 text-center">
          {formType === "login" ? (
            <p>
              Don't have an account?{" "}
              <a
                href="#"
                className="underline"
                onClick={() => setFormType("signup")}
              >
                Signup
              </a>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <a
                href="#"
                className="underline"
                onClick={() => setFormType("login")}
              >
                Login
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
