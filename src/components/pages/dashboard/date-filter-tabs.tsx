"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useDashboard } from "@/hooks/use-dashboard"
import { appToast } from "@/lib/toast"
import { X } from "lucide-react"
import { useEffect, useState } from "react"


const VALID_PERIODS = [
  "today",
  "this_week",
  "this_month",
  "this_quarter",
  "this_year",
  "custom",
] as const

type Period = typeof VALID_PERIODS[number]

type Date = {
    label: string,
    value: "today" | "this_week" | "this_month" | "this_quarter" | "this_year" | "custom"
}
const DateFilterTabs = ()=>{
    const router = useRouter()
    const { changePeriod } = useDashboard()
    // Get period params from URL
    const searchParams = useSearchParams()
    const periodParam = searchParams.get("period")

    const period: Period = VALID_PERIODS.includes(periodParam as Period)
    ? (periodParam as Period)
    : "today"
    
    useEffect(() => {
        if (!period) return
        changePeriod(period)
    }, [period, changePeriod])

    const dates: Date[] = [
        {label: "Today", value: "today"},
        {label: "This Week", value: "this_week"},
        {label: "This Quarter", value: "this_month"},
        {label: "This Year", value: "this_year"},
        {label: "Custom", value: "custom"}
    ]
    // Update the index deponds on period params
    const initialIndex = dates.findIndex((d) => d.value === period)
    const [currentDate, setCurrentDate] = useState<number>(
    initialIndex !== -1 ? initialIndex : 0
    )  


  
    const change = (index:number,date:Date)=>{
        setCurrentDate(index)
        changePeriod(date.value)

        const params = new URLSearchParams(searchParams.toString())
        params.set("period", date.value)

        router.push(`?${params.toString()}`, { scroll: false })

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