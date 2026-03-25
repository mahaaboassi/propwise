"use client"
import { Card } from "@/components/ui/card"
import Header from "@/components/ui/header"
import ActivityEntryComponent from "./activity-entry"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useDashboard } from "@/hooks/use-dashboard"
import Skeleton from "./dashboard-skeleton"

const ActivityFeed = ()=>{
    const { loading, data } = useDashboard()
    return(<Card className="bg-[var(--content-inverted)] py-4 !gap-0">
        <div className="px-4">
            <Header level={2} title="Activity Feed" />
        </div>
        <div>
            {loading? <div className="flex flex-col gap-3 p-4">
                {Array.from({ length: 3 }).map((_,i)=><Skeleton className="h-20 w-full" key={`Sketlon_Activity_${i}`}/>)}
            </div> : data?.activities.groups.map((group,idx)=>(<div key={`Activity_Group_${group.label}_${idx}`} >
                <h3 className="bg-[var(--border-muted)] border-t border-b border-[var(--border-default)] px-4 py-2 text-xs desktop-sm:text-sm text-[var(--content-subtle)] uppercase font-medium mt-4">{group.label}</h3>
                <div className="px-4">
                    <ul className="border-l-2 border-[var(--border-default)] flex flex-col gap-3 pt-4">
                        {group.entries.map((entry,i)=>(<ActivityEntryComponent  key={`Activity_Group_Entry_${entry.message}_${i}`} entry={entry} />))}
                    </ul>
                </div>
            </div>))}
        </div>
        <div>
            <Link href={"#"} className="link flex-center w-full px-4 gap-2 pt-4 ">
            View full activity log <ArrowUpRight size={17} />
            </Link>
        </div>
    </Card>)
}
export default ActivityFeed