import { Button } from "@/components/ui/button";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default async function Auth() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-500">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className,
          )}
        >
          Name
        </h1>
        <p className="text-center text-lg text-white">Description</p>
      </div>
    </main>
  );
}
