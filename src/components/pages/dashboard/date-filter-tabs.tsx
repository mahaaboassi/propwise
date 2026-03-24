"use client"

import { useState } from "react"

const DateFilterTabs = ()=>{
    const dates = ["Today", "This Week", "This Quarter", "This Year", "Custom"]
    const [ currentDate, setCurrentDate] = useState(0)
    return<div>
        <ul className="flex gap-2 p-1.5 h-[50px] bg-[var(--bg-subtle)] rounded-xl w-fit text-base font-normal text-[#9CA3AF] date-filter-tab">
            {dates.map((date,idx)=>(<li onClick={()=>setCurrentDate(idx)} className={`${currentDate === idx ? "active" : ""} flex-center`} 
                key={`Date_${date}_${idx}`}>{date}</li>))}
        </ul>
    </div>
}
export default DateFilterTabs