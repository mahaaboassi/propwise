"use client"
// -------- Important Note ---------
// Renamed this file from index.ts to index.tsx to enable React JSX support.
// This component serves as the main Dashboard page container.
// It is responsible for triggering the initial data fetch via the useDashboard hook.
//
// The refetch is executed inside useEffect on component mount to ensure that:
// - The dashboard always loads with fresh data
// - Data remains consistent across all child components
// - We maintain a single source of truth via global state (useDashboard)
//
// Child components are kept presentational and do not handle data fetching.

import  DateFilterTabs  from "./date-filter-tabs"
import  KPICards  from "./kpi-cards";
import  RevenueForecast  from "./revenue-forecast";
import  ActivityFeed  from "./activity-feed";
import  PipelineSummary  from "./pipeline-summary";
import  TasksPanel  from "./tasks-panel"
import { useDashboard } from "@/hooks/use-dashboard";
import { useEffect } from "react";
import { CircleQuestionMark } from "lucide-react";
import { useTheme } from "next-themes"
import HeaderDashboard from "./dashboard-header";

const DashbaordPage = ()=>{
    const { refetch } = useDashboard()
    useEffect(()=>{refetch()},[refetch])
    const { theme } = useTheme()
    return(<div className="space-y-5">
        <HeaderDashboard/>
        <DateFilterTabs/>
        <KPICards/>
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 mobile-md:col-span-2">
                <RevenueForecast/>
            </div>
            <div className="col-span-3 mobile-md:col-span-1">
                <ActivityFeed/>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 mobile-md:col-span-2">
                <PipelineSummary/>
            </div>
            <div className="col-span-3 mobile-md:col-span-1">
                <TasksPanel/>
            </div>
        </div>
        <div className={theme === "dark" ? "blur-dark" : "blur-div"}>
        </div>
        <div className={`fixed z-60 bottom-6 right-6 bg-[var(--content-emphasis)] text-[var(--content-inverted)] flex-center h-12 w-12 rounded-full cursor-pointer`}>
            <CircleQuestionMark />
        </div>
    </div>)
}
export default DashbaordPage