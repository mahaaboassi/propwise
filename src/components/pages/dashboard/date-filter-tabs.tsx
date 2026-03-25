"use client"

import { useDashboard } from "@/hooks/use-dashboard"
import { appToast } from "@/lib/toast"
import { X } from "lucide-react"
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
        appToast.neutral("Fetching data Successfully.",{
            action:{
                label: <X className="size-4" />,
                onClick: ()=>{}
            }
        })
    }
    return<div>
        <ul className="flex gap-2 p-1.5 h-[50px] bg-[var(--bg-subtle)] whitespace-nowrap overflow-x-auto w-full  rounded-xl mobile-md:w-fit text-xs mobile-md:text-sm tablet-md:text-base font-normal text-[#9CA3AF]">
            {dates.map((date,idx)=>(<li onClick={()=>change(idx,date)} className={`${currentDate === idx ? "text-[var(--content-emphasis)] bg-[var(--bg-surface)]" : ""} 
            px-2 mobile-md:px-4 tablet-md:px-6 rounded-md flex-center cursor-pointer hover:text-[var(--content-subtle)] duration-300 transition-all`} 
                key={`Date_${date}_${idx}`}>{date.label}</li>))}
        </ul>
    </div>
}
export default DateFilterTabs