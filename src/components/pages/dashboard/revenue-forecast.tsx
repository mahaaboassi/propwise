"use client";

import { Card } from "@/components/ui/card";
import Header from "@/components/ui/header"
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, TrendingUp } from "lucide-react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid 
} from "recharts";
import { useEffect, useState } from "react";
import { useDashboard } from "@/hooks/use-dashboard";
import Skeleton from "./dashboard-skeleton";
import Link from "next/link";


const axisTickStyle = {
  fill: "#A0A9BD",
  fontSize: 11,
  fontWeight: 400,
}

const RevenueForecast = () => {
    const [showThisYear, setShowThisYear] = useState(true);
    const [showLastYear, setShowLastYear] = useState(false);
    const { loading, data, refetch } = useDashboard()
    useEffect(()=>{refetch()},[refetch])
  return (
    <Card className="bg-[var(--bg-default)] h-[347.98px] border-[var(--custom-border)]  border-[0.77px] rounded-md flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[4px] px-[20px] mt-[15px]">
        <div className="flex justify-between ">
          <Header level={2} title="Revenue Forecast" className="text-[#686868] font-normal text-sm tablet-md:text-[14px] leading-[20.8px]" />
          <Link
            href="#"
            className="link flex items-center justify-between w-[53.44px] font-heading
                        text-[#3567FF] text-xs leading-[18px] font-semibold"
          >
            Report
            <ArrowUpRight className="size-[12px]" />
          </Link>
        </div>
        

        {/* Top Section */}
        {loading? <Skeleton className="h-10 w-1/2" /> :<div className="flex flex-wrap desktop-sm:justify-between gap-[2px] desktop-sm:gap-0 desktop-sm:w-[313.56px] items-center">
          <span className="text-[var(--custom-surface)] font-bold text-[20px] desktop-sm:text-[28px] leading-[28px] font-heading">
            {data?.revenue.total}
          </span>

          <Badge variant={"default"} className="text-[var(--content-badge-up)] bg-[var(--bg-badge-up)] flex items-center h-[14.67px] w-[54.56px]">
            <TrendingUp className="size-[10px]" /> +{data?.revenue.trend}%
          </Badge>

          <span className="text-[#A0A9BD] text-xs leading-[18px] font-normal">
            vs last year
          </span>
        </div>}
      </div>

      {/* Control in Showing   */}

      {loading? <div className="px-[20.76px] flex gap-[19.99px]">
        <Skeleton className="w-20 h-6" />
        <Skeleton className="w-20 h-6" />
      </div> :<div className="flex gap-4 px-[20.76px] flex gap-[19.99px]
                    font-medium text-[11px] text-[#6E7991] font-heading leading-[16.5px]">
            <div
                onClick={() => setShowThisYear(!showThisYear)}
                className={`flex items-center cursor-pointer gap-[6px] `}
            >
                 <span className={`w-[12px] h-[2.99px] rounded-[2.5px] ${
                showThisYear ? "bg-[var(--chart-2)]" : "bg-[var(--custom-border)]"
                }`} />
                This Year
            </div>

            <div
                onClick={() => setShowLastYear(!showLastYear)}
                className={`flex items-center cursor-pointer gap-[6px]`}
            >
                <span className={`w-[12px] h-[2.99px] rounded-[2.5px]  ${
                showLastYear ? "bg-[var(--chart-2)]" : "bg-[var(--custom-border)]"
                }`} />
                Last Year
            </div>
        </div>}
      {/* Chart */}
      {loading? <div className="px-[27px]"><Skeleton className="w-full h-[207px]" /></div> : data && <div className="w-full h-[207px] px-[27px]">
        <ResponsiveContainer width="100%" height="100%">
           <LineChart data={data?.revenue?.data}>
            <defs>
            <filter id="lineShadow" x="-0.5%" y="0%" width="200%" height="300%">
                <feDropShadow 
                dx="0" 
                dy="17" 
                stdDeviation="15" 
                floodColor="#000" 
                floodOpacity="1" 
                />
            </filter>
            </defs>
           <CartesianGrid
                stroke="#dadee8"
                strokeDasharray="3 3"
                vertical={false}
                /> 
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              stroke="var(--content-muted)"
              tick={axisTickStyle}
              
            />

            <YAxis
                stroke="var(--content-muted)"
                tick={axisTickStyle}
                axisLine={false}
                tickLine={false}
                width={40}
                domain={[0, 240]}
                ticks={[0, 60, 120, 180, 240]}
                interval={0}
                tickFormatter={(value) => `$${value}K`}
            />

            <Tooltip   contentStyle={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "8px",
            }}
            labelStyle={{ color: "var(--content-emphasis)" }} />

            {/* This Year */}
            { showThisYear && <Line
              type="monotone"
              dataKey="thisYear"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={false}
              style={{ filter: "url(#lineShadow)" }}
            />}

            {/* Last Year */}
            {showLastYear && <Line
              type="monotone"
              dataKey="lastYear"
              stroke="var(--chart-3)"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
            />}
          </LineChart>
        </ResponsiveContainer>
      </div>}
    </Card>
  );
};

export default RevenueForecast;