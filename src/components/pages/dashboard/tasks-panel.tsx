"use client"
import { Card } from "@/components/ui/card"
import Header from "./dashboard-header"
import { Plus } from "lucide-react"
import TaskItem from "./task-item"
import { useDashboard } from "@/hooks/use-dashboard"
import Skeleton from "./dashboard-skeleton"
import { motion } from "framer-motion"

const TasksPanel = ()=>{
    const { loading, data } = useDashboard()
    return(<Card className="bg-[var(--bg-surface)] !gap-4">
        <div className="p-4 border-b-2 border-[var(--border-default)] flex flex-col gap-2">
            <div className="flex gap-2 flex-col desktop-sm:flex-row desktop-sm:items-center justify-between w-full ">
                <Header
                title="Tasks & Reminders"
                className="!font-bold"
                level={2}/>

                <div className="link desktop-sm:flex-center flex gap-2"
                >
                <Plus size={17} /> Quick Add
                </div>
                
            </div>
            {loading? <Skeleton className="h-10 w-full" /> : <div className="flex items-center gap-1">
                {data?.tasks && <div className="flex-1 h-2 bg-[var(--bg-default)] rounded-md ">
                    <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                        width: `${(data.tasks.completed * 100) / data.tasks.total}%`,
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-[var(--green-700)] rounded-md"
                    />
                </div>}
                <div className="text-xs font-medium text-[var(--content-muted)]">
                    {data?.tasks?.completed}/{data?.tasks?.total} done
                </div>
            </div>}
        </div>
        <ul className="px-4 flex flex-col gap-4">
            {loading ? Array.from({ length: 4 }).map((_,i)=><li key={`Sketlon_Task_${i}`}><Skeleton className="h-15 w-full" /></li>)
            : data?.tasks.items.map((task,i)=><TaskItem task={task} key={`Task_${task.title}_${i}`}/>)}
        </ul>
        
    </Card>)
}
export default TasksPanel