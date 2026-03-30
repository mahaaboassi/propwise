import React from "react";
import Sidebar from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--bg-muted)]">
      <div className="">
        <aside className="fixed w-[200px]">
          <Sidebar />
        </aside>
        <div className="flex justify-end w-[1213px] left-[217px] pt-[11px] -top-[2px] relative">
          <Card className="bg-[var(--bg-default)] w-[1204px] mt-20 tablet-md:mt-0 border-[#E9E9E9] border-[1px] rounded-md ">
              <main >
                {children}
              </main>
          </Card>
        </div>


      </div>
    </div>
  );
}