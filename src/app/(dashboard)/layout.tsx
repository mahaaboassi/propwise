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
        {/* 
          1- For layout Dashboard => how I got w-[calc(100vw - (217px + 10px))] =>
            Fixed Figma Value ( 1213px )
            100vw Full Width
            217 from margin left
            10px = (1440px - (217px + 1213px))
            -------------------------------------
          2- For Content Dashboard 
            Fixed Figma Value ( 1204px )
            layout Dashboard - 9px
            9px = 1213px - 1204px
            Card = fills wrapper width minus 9px gap
        */}
        {/* ---- layout Dashboard */}
        <div className="flex justify-end pl-[9px] w-[calc(100vw - 217px )] mr-[10px] ml-[217px] pt-[11px] -top-[2px] relative">
          {/* ---- Content Dashboard  */}
          <Card className="bg-[var(--bg-default)] w-full mt-20 tablet-md:mt-0 border-[#E9E9E9] border-[1px] rounded-md ">
              <main >
                {children}
              </main>
          </Card>
        </div>


      </div>
    </div>
  );
}