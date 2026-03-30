import type { Metadata } from "next";
import { Inter, Figtree } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes"
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Propwise Platform",
  description: "Propwise CRM platform",
  icons: {
    icon: "/logo.png"
  },
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
      <body className="min-h-full flex flex-col max-w-[1440px] bg-zinc-900 mx-auto">
        <ThemeProvider  attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster/>
        </ThemeProvider>

      </body>
    </html>
  );
}