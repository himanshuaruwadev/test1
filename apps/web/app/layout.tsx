import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Turborepo Web",
  description: "Next.js app powered by Turborepo"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
