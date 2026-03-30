"use client"
import { Badge } from "@/components/ui/badge";
import { DashboardKPI } from "@/lib/mock-api";
import { TrendingDown, TrendingUp } from "lucide-react";
import SparklineChart from "./sparkline-chart";
import Counter from "@/components/ui/counter";
type FormattedData = {
        name: number,
        value: number
    }[]

const KPICard = ({
  label,
  value,
  trend,
  trendDirection,
  sparklineData,
}: DashboardKPI) => {

  const formattedData: FormattedData = sparklineData.map((value, index) => ({
    name: index,
    value,
  }));
  const positionStyles = {
    up: "text-[var(--content-badge-up)] bg-[var(--bg-badge-up)]",
    down: "text-[var(--content-badge-down)] bg-[var(--bg-badge-down)]",
  }
  return (
    <div className="flex justify-between items-center bg-[var(--bg-default)] rounded-md w-full h-[58px]
            shadow-[0px_1px_0px_rgba(26,26,26,0),0px_1px_0px_rgba(204,204,204,0.4),0px_-1px_0px_rgba(0,0,0,0.07),-1px_0px_0px_rgba(0,0,0,0.03),1px_0px_0px_rgba(0,0,0,0.03)] py-[12px] px-[16px]
    "> 
      {/* Left */}
      <div className="flex flex-col ">
        <h2 className="text-xxs tablet-md:text-xs font-[450] text-[#5F5F5F] leading-[20px]">{label}</h2>
        {/* Counter for Values */}
        <div className="text-[var(--black)] font-[650] text-xs mobile-md:text-sm tablet-md:text-base leading-[20px]">
          <Counter
            value={Number(value)}
            prefix={label === "Revenue YTD" ? "AED " : ""}
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end">

        {/* Sparkline */}
       <SparklineChart trendDirection={trendDirection} data={formattedData}/>

        {/* Badge */}
          <Badge variant="default" className={`${positionStyles[trendDirection]} flex items-center h-[14.67px] w-[54.56px]`}>
            {trendDirection === "down" ? <TrendingDown className="size-[10px]"/>:<TrendingUp className="size-[10px]" />} {trendDirection === "up" && "+"}{trend}%
          </Badge>
      </div>
    </div>
  );
};

export default KPICard;