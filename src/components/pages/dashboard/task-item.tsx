"use client"

import { Task } from "@/lib/mock-api"
import { Clock } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { appToast } from "@/lib/toast"

type Props = {
  task: Task
}

const TaskItem = ({ task }: Props) => {
  const [isChecked, setIsChecked] = useState(task.completed)


  // unique id per task
  const checkboxId = `task-${task.id}`

  const priorityStyles = {
    low: "text-[var(--content-badge-up)] bg-[var(--bg-badge-up)]",
    med: "text-[var(--content-badge-med)] bg-[var(--bg-badge-med)]",
    high: "text-[var(--content-badge-down)] bg-[var(--bg-badge-down)]",
  }

  const changeValue = (val:boolean)=>{
    if(val){
      appToast.action({
          message: "Task is completed.",
          label: "Undo",
          type: "success",
          onAction: () => {
          setIsChecked(false) 
        }
      })
    }else{
      appToast.action({
          message: "Task marked as incomplete.",
          label: "Undo",
          type: "neutral",
          onAction: () => {
          setIsChecked(true) 
        }
      })
    }
    
    setIsChecked(!!val)
  }
  return (
    <li className="flex flex-col mobile-sm:flex-row mobile-md:flex-col desktop-sm:flex-row justify-between gap-2">
      
      <FieldGroup>
        <Field className="items-start" orientation="horizontal">
          
          <Checkbox
            id={checkboxId}
            checked={isChecked}
            onCheckedChange={(val:boolean) => changeValue(val)}
            className="rounded-full"
          />

          <div className="flex flex-col gap-1">
            <Label
              htmlFor={checkboxId}
              className={`${isChecked ? "line-through" : ""} text-xs desktop-sm:text-base`}
            >
              {task.title}
            </Label>

            <div className="flex gap-2 items-center text-[0.7rem] desktop-sm:text-xs text-[var(--content-muted)] font-medium">
              <Clock size={14} />
              {task.dueLabel} task
            </div>
          </div>

        </Field>
      </FieldGroup>

      {/* Badge */}
      <Badge className={`${priorityStyles[task.priority]} flex items-center gap-1 rounded-md`}>
        {task.priority}
      </Badge>

    </li>
  )
}

export default TaskItem