"use client";

import { Card } from "@/components/ui/card";
import Header from "./dashboard-header";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid 
} from "recharts";
import { useState } from "react";
import { useDashboard } from "@/hooks/use-dashboard";
import Skeleton from "./dashboard-skeleton";

const RevenueForecast = () => {
    const [showThisYear, setShowThisYear] = useState(true);
    const [showLastYear, setShowLastYear] = useState(false);
    const { loading, data } = useDashboard()
  return (
    <Card className="bg-[var(--bg-surface)] p-4 !gap-4">
      <Header level={2} title="Revenue Forecast" className="!text-[var(--content-grey)]" />

      {/* Top Section */}
      {loading? <Skeleton className="h-10 w-1/2" /> :<div className="flex gap-2 items-center">
        <span className="text-[var(--content-emphasis)] font-bold text-4xl">
          {data?.revenue.total}
        </span>

        <Badge className="text-[var(--content-badge-up)] bg-[var(--bg-badge-up)] flex items-center gap-1">
          <TrendingUp size={14} /> +{data?.revenue.trend}%
        </Badge>

        <span className="text-[var(--content-muted)] text-sm">
          vs last year
        </span>
      </div>}
      {/* Control in Showing   */}
      {loading? <div className="flex gap-4 ">
        <Skeleton className="w-20 h-6" />
        <Skeleton className="w-20 h-6" />
      </div> :<div className="flex gap-4 text-sm text-[var(--content-subtle)]">
            <div
                onClick={() => setShowThisYear(!showThisYear)}
                className={`flex items-center cursor-pointer gap-2 ${
                showThisYear ? "opacity-100" : "opacity-40"
                }`}
            >
                <span className="w-4 h-1.5 rounded-full bg-[var(--color-chart-1)]" />
                This Year
            </div>

            <div
                onClick={() => setShowLastYear(!showLastYear)}
                className={`flex items-center cursor-pointer gap-2 ${
                showLastYear ? "opacity-100" : "opacity-40"
                }`}
            >
                <span className="w-4 h-1.5 rounded-full bg-[var(--color-chart-2)]" />
                Last Year
            </div>
        </div>}
      {/* Chart */}
      {loading? <Skeleton className="w-full h-50" /> : <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          {data && <LineChart data={data.revenue.data}>
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
              fontSize={12}
            />

            <YAxis
                stroke="var(--content-muted)"
                fontSize={12}
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
              stroke="var(--color-chart-1)"
              strokeWidth={2}
              dot={false}
              style={{ filter: "url(#lineShadow)" }}
            />}

            {/* Last Year */}
            {showLastYear && <Line
              type="monotone"
              dataKey="lastYear"
              stroke="var(--color-chart-2)"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
            />}
          </LineChart>}
        </ResponsiveContainer>
      </div>}
    </Card>
  );
};

export default RevenueForecast;