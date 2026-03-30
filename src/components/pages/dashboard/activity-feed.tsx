"use client"
import { Card } from "@/components/ui/card"
import Header from "@/components/ui/header"
import ActivityEntryComponent from "./activity-entry"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useDashboard } from "@/hooks/use-dashboard"
import Skeleton from "./dashboard-skeleton"
import { useEffect, useState } from "react"
import { ActivityEntry } from "@/lib/mock-api"
import { getRandom, randomEntries } from "@/lib/mock-data"

const ActivityFeed = ()=>{
    const { loading, data } = useDashboard()

    const [ activities, setActivities] = useState<
    { label: string; entries: ActivityEntry[] }[]
    >(data?.activities.groups || [])
    
    useEffect(()=>{
        // setActivities([])
        // Wait until data be not null
        setTimeout(()=>{
            if (data?.activities.groups) {
            setActivities(data.activities.groups)
            }
        },500)
    },[data])
    // Activity feed auto-refresh with simulated real-time updates 
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     setActivities((prev)  => {
    //     if (!prev) return prev
    //     const numberRandom = getRandom(0,4)
    //     const newEntry : ActivityEntry = {
    //         id: Date.now().toLocaleString(),
    //         message: randomEntries[numberRandom].msg,
    //         highlights: [{ text: randomEntries[numberRandom].name, type: "person" }],
    //         timestamp: "Just now",
    //         relativeTime: "now",
    //         icon: randomEntries[numberRandom].icon ,
    //     }

    //     return prev.map((group, index) => {
    //         if (index === 0) {
    //         return {
    //             ...group,
    //             entries: [newEntry, ...group.entries].slice(0, 3), // limit
    //         }
    //         }

    //         return group
    //     })
    //     })
    // }, 10000)

    // return () => clearInterval(interval)
    // }, [])
    
    if(activities.length==0 || !data?.activities.groups) return(<Card className="bg-[var(--content-inverted)] py-4 !gap-0">
        <div className="px-4">
            <Header level={2} title="Activity Feed" />
        </div>
        <div>
            {<div className="flex flex-col gap-3 p-4">
                {Array.from({ length: 3 }).map((_,i)=><Skeleton className="h-20 w-full" key={`Sketlon_Activity_${i}`}/>)}
            </div> }
        </div>
        <div>
            <Link href={"#"} className="link flex-center w-full px-4 gap-2 pt-4 ">
            View full activity log <ArrowUpRight size={17} />
            </Link>
        </div>
    </Card>)

    return(<Card className="bg-[var(--bg-surface)] h-[347.98px] border-[#E1E4ED] border-[0.77px] rounded-lg">
        <div className="px-[19.99px] h-[51px] flex items-center border-b-[0.77px] border-[#F1F3F7] ">
            <Header level={2} title="Activity Feed" className="font-heading font-medium text-base leading-[20.8px] text-[#091026] " />
        </div>
        {/* Content  */}
        <div className="div-scroll overflow-y-auto h-[253.93px] ">
            <div >
                {loading? <div className="flex flex-col gap-3 px-[19.99px] pt-3">
                    {Array.from({ length: 4 }).map((_,i)=><Skeleton className="h-[50px] w-full rounded-md" key={`Sketlon_Activity_${i}`}/>)}
                </div> : activities.length>0 && activities.map((group,idx)=>(<div key={`Activity_Group_${group.label}_${idx}`} >
                    <h3 className="bg-[#FAFBFF] border-b-[0.77px] border-[#F1F3F7] px-[19.99px] h-[37px] flex items-center
                                    text-xxs text-[var(--content-subtle)] leading-[15px] tracking-[0.5px] uppercase font-bold ">{group.label}</h3>
                    <ul >
                            {group.entries.map((entry,i)=>(<li className="h-[62.46px] flex items-center relative px-[33.98px]" key={`Activity_Group_Entry_${entry.message}_${i}`} >
                                <ActivityEntryComponent entry={entry} />
                            </li>))}
                        </ul>
                </div>))}
            </div>
        </div>

        <div className="flex items-center justify-center h-[43px] border-t-[0.77px] border-[#F1F3F7]">
            <Link href={"#"} className="link flex items-center gap-[4px]  font-heading
                        text-[#3567FF] text-xs leading-[18px] font-semibold">
            View full activity log <ArrowUpRight className="size-[12px]" />
            </Link>
        </div>
    </Card>)
}
export default ActivityFeed