"use client"
import { Card } from "@/components/ui/card"
import Header from "./dashboard-header"
import { Plus } from "lucide-react"
import TaskItem from "./task-item"
import { useDashboard } from "@/hooks/use-dashboard"
import { useEffect } from "react"
import Skeleton from "./dashboard-skeleton"

const TasksPanel = ()=>{
    const { loading, data, refetch} = useDashboard()
    useEffect(()=>{refetch()},[])
    return(<Card className="bg-[var(--bg-surface)] !gap-4">
        <div className="flex justify-between w-full p-4 border-b-2 border-[var(--border-default)] items-center">
            <Header
            title="Tasks & Reminders"
            className="!font-bold"
            level={2}/>

            <div className="link flex-center flex gap-2"
            >
             <Plus size={17} /> Quick Add
            </div>
        </div>
        <ul className="px-4 flex flex-col gap-4">
            {loading ? [...Array(4)].map((_,i)=><li key={`Sketlon_Task_${i}`}><Skeleton className="h-15 w-full" /></li>)
            : data && data.tasks.items.map((task,i)=><TaskItem task={task} key={`Task_${task.title}_${i}`}/>)}
        </ul>
        
    </Card>)
}
export default TasksPanel