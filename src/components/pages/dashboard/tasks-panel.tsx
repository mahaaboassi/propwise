"use client"
import { Card } from "@/components/ui/card"
import Header from "@/components/ui/header"
import { Plus } from "lucide-react"
import TaskItem from "./task-item"
import { useDashboard } from "@/hooks/use-dashboard"
import Skeleton from "./dashboard-skeleton"
import { motion } from "framer-motion"

const TasksPanel = ()=>{
    const { loading, data } = useDashboard()
    return(<Card className="bg-[var(--bg-surface)] border-[#E1E4ED] border-[0.77px] rounded-lg">
        <div className="pt-[16px] px-[19.99px] h-[85px] border-b-[0.77px] border-[#F1F3F7] flex flex-col gap-[8px]">
            <div className="flex gap-2 flex-col desktop-sm:flex-row desktop-sm:items-center justify-between w-full ">
                <Header
                title="Tasks & Reminders"
                className="font-bold font-heading leading-[20.8px] text-sm"
                level={2}/>

                <div className="link flex items-center gap-[3px] 
                                text-[#3567FF] text-xs leading-[18px] font-semibold"
                >
                <Plus className="size-[13.99px]"/> Quick Add
                </div>
                
            </div>

            {loading? <Skeleton className="h-12 w-full" /> : <div className="flex items-center gap-1">
                {data?.tasks && <div className="flex-1 h-[6px] bg-[#F1F3F7] rounded-[2.5px] ">
                    <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                        width: `${(data.tasks.completed * 100) / data.tasks.total}%`,
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-[var(--green-700)] rounded-md"
                    />
                </div>}
                <div className="text-xxs font-semibold leading-[15px] text-[#A0A9BD]">
                    {data?.tasks?.completed}/{data?.tasks?.total} done
                </div>
            </div>}
        </div>
        <ul className="px-[19.99px] pt-[12px]">
            {loading ? Array.from({ length: 4 }).map((_,i)=><li key={`Sketlon_Task_${i}`}><Skeleton className="h-16 w-full" /></li>)
            : data?.tasks.items.map((task,i)=><TaskItem task={task} key={`Task_${task.title}_${i}`}/>)}
        </ul>
        
    </Card>)
}
export default TasksPanel