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
        <aside className="fixed w-[224px] z-[100] tablet-md:z-0">
          <Sidebar />
        </aside>
        {/* 
          1- For layout Dashboard 
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
        <div className="flex pr-[9px] pl-[9px] pt-[11px] -top-[2px] relative 
                        tablet-md:justify-end tablet-md:mr-[10px] tablet-md:pr-[0px] 
                       tablet-md:ml-[217px] tablet-md:flex-1">
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