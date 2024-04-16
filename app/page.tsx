import LoginForm from "@/components/ui/login-form";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="">
      <LoginForm />
      <Toaster />
    </main>
  );
}
