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
        <main className="flex p-2 mobile-md:p-5">
            <div className="relative">
              <Sidebar/>
            </div>
            <Card className="bg-[var(--content-inverted)] p-4 tablet-md:p-7 w-full mt-20 tablet-md:ml-5 tablet-md:mt-0">
                {children}
            </Card>
        </main>
      </body>
    </html>
  );
}