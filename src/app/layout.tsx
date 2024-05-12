import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DUNGEON DIVE!",
  description:
    "Remaking the something I've made before but this time in Next with a database.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
