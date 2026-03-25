"use client"
import { Card } from "@/components/ui/card"
import Header from "./dashboard-header"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useDashboard } from "@/hooks/use-dashboard"
import Skeleton from "./dashboard-skeleton"

const calculateNumber = (number: number) => {
    if (number > 1000) {
        return `${(number / 1000).toFixed(1)}K`;
    }
    return number;
};
const PipelineSummary = () => {
  const { loading, data } = useDashboard()

  return (
    <Card className="bg-[var(--content-inverted)] p-4 !gap-4">

      <div className="flex gap-2 flex-col desktop-sm:flex-row justify-between w-full">
        <Header
          title="Pipeline Summary"
          level={2}
          paragraph={data
              ? `${data.pipeline.totalDeals} deals across ${data.pipeline.totalStages} stages · ${data.pipeline.totalValue} total value`
              : ""}
        />

        <Link
          href="#"
          className="link desktop-sm:flex-center flex  gap-2 "
        >
          Details <ArrowUpRight size={17} />
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        { loading ? Array.from({ length: 4 }).map((_,i)=><Skeleton className="h-15 w-full" key={`Sketlon_Pipeline_${i}`}/>) :
         data?.pipeline.stages.map((stage, idx) => {
              const maxCount = Math.max(
                ...data.pipeline.stages.map((s) => s.count)
              );
          return (
            <div key={`Stage_${stage.stage}_${idx}`} className="flex flex-col gap-1 tablet-md:flex-row tablet-md:gap-2 tablet-md:items-center">
              <div className="w-[80px] tablet-md:w-[100px] text-sm">{stage.stage}</div>
              <div className="flex-1">
                <motion.div
                    className="bg-[var(--brand-800)] h-[40px] p-1 rounded-lg"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(stage.count / maxCount) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="bg-[var(--bg-surface-opactity)] text-white w-fit h-full flex items-center rounded-lg px-2 text-[0.6rem] desktop-sm:text-xs">
                    <span className="font-medium">{stage.count}</span>
                    &nbsp; {stage.currency} {calculateNumber(stage.value)}
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