"use client"

import { useDashboard } from "@/hooks/use-dashboard"
import { useState } from "react"
type Date = {
    label: string,
    value: "today" | "this_week" | "this_month" | "this_quarter" | "this_year" | "custom"
}
const DateFilterTabs = ()=>{
    const { changePeriod } = useDashboard()
    const dates: Date[] = [
        {label: "Today", value: "today"},
        {label: "This Week", value: "this_week"},
        {label: "This Quarter", value: "this_month"},
        {label: "This Year", value: "this_year"},
        {label: "Custom", value: "custom"}
    ]
    const [ currentDate, setCurrentDate] = useState<number>(0)
    const change = (index:number,date:Date)=>{
        setCurrentDate(index)
        changePeriod(date.value)
    }
    return<div>
        <ul className="flex gap-2 p-1.5 h-[50px] bg-[var(--bg-subtle)] rounded-xl w-fit text-base font-normal text-[#9CA3AF] date-filter-tab">
            {dates.map((date,idx)=>(<li onClick={()=>change(idx,date)} className={`${currentDate === idx ? "active" : ""} flex-center`} 
                key={`Date_${date}_${idx}`}>{date.label}</li>))}
        </ul>
    </div>
}
export default DateFilterTabs