"use client"
import { Card } from "@/components/ui/card"
import Header from "@/components/ui/header"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useDashboard } from "@/hooks/use-dashboard"
import Skeleton from "./dashboard-skeleton"
import { useEffect } from "react"

const calculateNumber = (number: number) => {
    if (number > 1000) {
        return `${(number / 1000).toFixed(1)}K`;
    }
    return number;
};
const PipelineSummary = () => {
  const { loading, data, refetch } = useDashboard()
  useEffect(()=>{refetch()},[refetch])

  return (
    <Card className="bg-[var(--bg-default)] border-[var(--custom-border)] border-[0.77px] rounded-md
            shadow-[0px_1px_0px_rgba(26,26,26,0),0px_1px_0px_rgba(204,204,204,0.4),0px_-1px_0px_rgba(0,0,0,0.07),-1px_0px_0px_rgba(0,0,0,0.03),1px_0px_0px_rgba(0,0,0,0.03)] 
            p-[20px] gap-[20px] tablet-md:gap-[26px]">

      <div className="flex gap-2 flex-col desktop-sm:flex-row justify-between w-full">
        <Header
          title="Pipeline Summary"
          level={2}
          className="font-heading text-base font-medium leading-[20.8px] text-[var(--custom-surface)]"
          paragraph={data
              ? `${data.pipeline.totalDeals} deals across ${data.pipeline.totalStages} stages · ${data.pipeline.totalValue} total value`
              : ""}
        />

        <Link
          href="#"
          className="link flex items-center justify-between w-[53.27px] font-heading
                        text-[#3567FF] text-xs leading-[18px] font-semibold"
        >
          Details <ArrowUpRight className="size-[12px]" />
        </Link>
      </div>

      <div className="flex flex-col gap-[6px]">
        { loading ? Array.from({ length: 6 }).map((_,i)=><Skeleton className="h-[29.99px] w-full" key={`Sketlon_Pipeline_${i}`}/>) :
         data?.pipeline.stages.map((stage, idx) => {
              const maxCount = Math.max(
                ...data.pipeline.stages.map((s) => s.count)
              );
          return (
            <div key={`Stage_${stage.stage}_${idx}`} className="flex flex-col gap-[2px] tablet-md:flex-row tablet-md:gap-2 tablet-md:items-center">
              <div className="w-[87.99px] flex tablet-md:justify-end font-medium leading-[18px] text-xs text-[#3D4A65]">{stage.stage}</div>
              <div className="flex-1">
                <motion.div
                    className="bg-[var(--brand-800)] h-[29.99px] py-[3px] pl-[3px] rounded-xs"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(stage.count / maxCount) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div style={{background:"rgba(255, 255, 255, 0.2)"}} className="font-heading w-fit py-[3px] px-[6px]  h-full flex items-center gap-[8px] rounded-xs ">
                    <span className="font-bold text-xxs mobile-md:text-xs leading-[18px] text-[#FFFFFF]">{stage.count}</span>
                    <span style={{color: "rgba(255,255,255,0.7)"}} className="font-medium text-[8px] mobile-md:text-[11px] leading-[16.5px]">{stage.currency} {calculateNumber(stage.value)}</span>
                  </div>
                </motion.div>
              </div>

            </div>
          );
        })}
      </div>
    </Card>
  )
}

export default PipelineSummary