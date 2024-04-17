import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-[100vh] flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <h1>Welcome to Task Management App</h1>
        <div className="flex gap-3">
          <Link
            href="/sign-in"
            className="bg-black text-white p-3 rounded-sm border-[1px] border-black flex-1 text-center hover:opacity-80 transition-all"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="bg-transparent text-black p-3 rounded-sm border-[1px] border-black flex-1 text-center hover:bg-black hover:text-white transition-all"
          >
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}
