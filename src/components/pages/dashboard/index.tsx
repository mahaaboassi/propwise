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

import Header from "./dashboard-header";
import  DateFilterTabs  from "./date-filter-tabs"
import  KPICards  from "./kpi-cards";
import  RevenueForecast  from "./revenue-forecast";
import  ActivityFeed  from "./activity-feed";
import  PipelineSummary  from "./pipeline-summary";
import  TasksPanel  from "./tasks-panel"
import { useDashboard } from "@/hooks/use-dashboard";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CircleQuestionMark, Eclipse, Moon, Plus, Sun } from "lucide-react";
import { useTheme } from "next-themes"

const DashbaordPage = ()=>{
    const { refetch } = useDashboard()
    useEffect(()=>{refetch()},[refetch])
    const { theme, setTheme } = useTheme()
    return(<div className="space-y-5">
        <div className="flex flex-col gap-5 tablet-md:flex-row justify-between">
            <Header level={1} title="Dashborad" paragraph="Here's your pipeline health and sales activity at a glance." />
            <div className="flex gap-2">
                <Button className="">
                    <Plus className="" size={15}/> <span className="-mt-1">Create</span>
                </Button>
                <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="">
                    {theme === "dark" ? <Sun size={15} /> : <Moon size={15} /> } <span className="-mt-1">Theme</span>
                </Button>
            </div>
        </div>
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