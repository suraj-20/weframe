"use client";

import { Urbanist } from "next/font/google";
import "../styles/index.css";
import Sidebar from "@/components/Sidebar";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${urbanist.className}`}>
        <div className="relative flex h-screen">
          <Sidebar />

          {/* Main content: pushes right only on desktop */}
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
