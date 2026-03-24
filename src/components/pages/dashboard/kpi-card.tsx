"use client"
import { Badge } from "@/components/ui/badge";
import { DashboardKPI } from "@/lib/mock-api";
import { TrendingDown, TrendingUp } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const KPICard = ({
  label,
  value,
  trend,
  trendDirection,
  sparklineData,
}: DashboardKPI) => {

  const formattedData = sparklineData.map((value, index) => ({
    name: index,
    value,
  }));

  return (
    <div className="flex justify-between items-center bg-[var(--bg-surface)] rounded-xl shadow-[var(--drop-shadow)] p-4"> 
      {/* Left */}
      <div>
        <h2 className="text-sm text-[var(--content-subtle)]">{label}</h2>
        <span className="text-[var(--content-emphasis)] font-bold text-lg desktop-sm:text-xl">
          {value}
        </span>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end gap-2">

        {/* Sparkline */}
        <ResponsiveContainer width={100} height={40}>
          <LineChart data={formattedData}>
            <defs>
            <filter id="lineShadowSpark" x="0%" y="-10%" width="140%" height="140%">
                <feDropShadow 
                dx="0" 
                dy="8" 
                stdDeviation="6" 
                floodColor="#000" 
                floodOpacity="0.3" 
                />
            </filter>
            </defs>
            <Line
              type="monotone"
              dataKey="value"
              stroke={
                trendDirection === "up"
                  ? "var(--content-badge-up)"
                  : "var(--content-badge-down)"
              }
              strokeWidth={2}
              dot={false}
              style={{ filter: "url(#lineShadowSpark)" }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Badge */}
        {trendDirection === "up" ? (
          <Badge className="text-[var(--content-badge-up)] bg-[var(--bg-badge-up)] flex items-center gap-1">
            <TrendingUp size={14} /> +{trend}%
          </Badge>
        ) : (
          <Badge className="text-[var(--content-badge-down)] bg-[var(--bg-badge-down)] flex items-center gap-1">
            <TrendingDown size={14} /> -{trend}%
          </Badge>
        )}
      </div>
    </div>
  );
};

export default KPICard;