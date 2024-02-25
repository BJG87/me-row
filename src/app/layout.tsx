import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar/navbar";

import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Name",
  description: "App Description",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={cn(
            "flex min-h-full w-full flex-col bg-sky-500",
            inter.className,
          )}
        >
          <Toaster />
          <Navbar />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
