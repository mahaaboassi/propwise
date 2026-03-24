"use client"
import { Task } from "@/lib/mock-api"
import { Clock } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldGroup,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

type Props = {
    task: Task
}

const TaskItem = ({task}:Props)=>{
    const [ isChecked, setIsChecked] = useState(false)
    useEffect(()=>{setIsChecked(task.completed)},[task.completed])
    return(<li className="flex flex-col mobile-sm:flex-row mobile-md:flex-col desktop-sm:flex-row justify-between gap-2">
    <FieldGroup className="max-w-sm">
      <Field className="items-start" orientation="horizontal">
        <Checkbox onCheckedChange={(val) => setIsChecked(!!val)} checked={isChecked} className="rounded-full" id="terms-checkbox" name={task.title} />
        <div className="flex flex-col gap-2">
            <Label className={`${isChecked?"line-through":""} text-xs desktop-sm:text-base`} htmlFor="terms-checkbox">{task.title}</Label>
            <div className="flex gap-2 items-center text-[0.7rem] desktop-sm:text-xs text-[var(--content-muted)] font-medium">
                <Clock size={16} />
                {task.dueLabel} &nbsp; task
            </div>
        </div>
        
      </Field>
      
      </FieldGroup>
    {/* Badge */}
    {task.priority === "low" && (
        <Badge className="text-[var(--content-badge-up)] bg-[var(--bg-badge-up)] flex items-center gap-1">
        {task.priority}
        </Badge>) 
    }
    {task.priority === "med" && (
        <Badge className="text-[var(--content-badge-med)] bg-[var(--bg-badge-med)] flex items-center gap-1">
        {task.priority}
        </Badge>) 
    }
    {task.priority === "high" && (
        <Badge className="text-[var(--content-badge-down)] bg-[var(--bg-badge-down)] flex items-center gap-1">
        {task.priority}
        </Badge>) 
    }
    </li>)
}
export default TaskItem