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
    <div style={{ boxShadow: "var(--drop-shadow)" }} className="flex justify-between items-center bg-[var(--content-inverted)] rounded-xl p-4"> 
      {/* Left */}
      <div>
        <h2 className="text-sm text-[var(--content-subtle)]">{label}</h2>
        {/* Counter for Values */}
        <div className="text-[var(--content-emphasis)] font-bold text-lg desktop-sm:text-xl">
          <Counter
            value={Number(value)}
            prefix={label === "Revenue YTD" ? "AED " : ""}
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end gap-2">

        {/* Sparkline */}
       <SparklineChart trendDirection={trendDirection} data={formattedData}/>

        {/* Badge */}
          <Badge className={`${positionStyles[trendDirection]} flex items-center gap-1 rounded-md`}>
            {trendDirection === "down" ? <TrendingDown/>:<TrendingUp size={14} />} {trend}%
          </Badge>
      </div>
    </div>
  );
};

export default KPICard;