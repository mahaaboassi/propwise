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
          message: "Task completed.",
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
    <li className="flex justify-between gap-[12px] h-[65.94px]">
      
      <FieldGroup>
        <Field className="items-start" orientation="horizontal">
          <Checkbox
            id={checkboxId}
            checked={isChecked}
            onCheckedChange={(val:boolean) => changeValue(val)}
            className="rounded-full h-[17.99px] w-[17.99px] text-white"
          />

          <div className="flex flex-col gap-[3.99px]">
            <Label
              htmlFor={checkboxId}
              className={`${isChecked ? "line-through" : ""} text-[13px] font-medium leading-[18.2px]`}
            >
              {task.title}
            </Label>

            <div className="flex gap-[4px] items-center text-[#6E7991]">
              <Clock className="size-[12px]" />
              <span className="text-[11px] font-normal leading-[16.5px] ">{task.dueLabel} </span>
              <span className="font-semibold leading-[15px] text-xxs capitalize">{task.type}</span>
            </div>
          </div>

        </Field>
      </FieldGroup>

      {/* Badge */}
      <Badge  className={`${priorityStyles[task.priority]} px-[5px] py-[1px] !text-xxs font-semibold leading-[15px] rounded-md`}>
        {task.priority}
      </Badge>

    </li>
  )
}

export default TaskItem