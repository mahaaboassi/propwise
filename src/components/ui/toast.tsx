"use client"

import { CircleCheckIcon, OctagonXIcon, RotateCcw, X } from "lucide-react"
import { toast } from "sonner"

type CustomToastProps = {
  t: string | number
  message: string,
  type:  "success" | "error" | "info" | "neutral",
  label: string,
  onAction?: () => void
}

export function CustomToast({ t,label, type, message, onAction }: CustomToastProps) {
  return (
    <div className={`flex items-center justify-between gap-[8px]  !rounded-[6px] !h-[36px]  pr-[12px] pl-[16px] ${type === "error"? "cn-toast-error" : "cn-toast"}`}>
      {
        type === "success" && <CircleCheckIcon className="size-[16px]" />
      }
      {
        type === "error" && <OctagonXIcon className="size-[16px]" />
      }
      <span className="font-semibold text-[14px] leading-[16px]">{message}</span>

      <div className="flex items-center gap-2">
        
        {onAction && label && (
          <button
            onClick={() => {
              onAction()
              toast.dismiss(t)
            }}
            className="flex items-center gap-1 font-semibold text-[14px] leading-[16px]"
          >
            | <RotateCcw className="size-[16px]" />
             {label}
          </button>
        )}

        <button onClick={() => toast.dismiss(t)}>
          <X className="size-[16px]" />
        </button>

      </div>
    </div>
  )
}