import type { Metadata } from "next";
import { Inter, Figtree } from "next/font/google";
import Sidebar from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Propwise | Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="flex p-5">
            <Sidebar/>
            <Card className="bg-[var(--content-inverted)] p-7 w-full h-screen ml-5">
                {children}
            </Card>
        </main>
      </body>
    </html>
  );
}