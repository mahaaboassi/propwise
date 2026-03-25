import React from "react";
import Sidebar from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex p-2 mobile-md:p-5">
        <div className="relative ">
          <Sidebar />
        </div>

        <Card className="bg-[var(--content-inverted)] p-4 tablet-md:p-7 w-full mt-20 tablet-md:ml-5 tablet-md:mt-0">
          {children}
        </Card>
      </main>

      
    </>
  );
}