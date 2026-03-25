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
    <div className={`flex items-center text-[13px] border border-[var(--toast-border)] font-medium justify-between gap-3 p-4 ${type === "error"? "cn-toast-error" : "cn-toast"}`}>
      {
        type === "success" && <CircleCheckIcon className="size-4" />
      }
      {
        type === "error" && <OctagonXIcon className="size-4" />
      }
      <span>{message}</span>

      <div className="flex items-center gap-2">
        
        {onAction && (
          <button
            onClick={() => {
              onAction()
              toast.dismiss(t)
            }}
            className="flex items-center gap-1 "
          >
            <RotateCcw className="size-4" />
            {label}
          </button>
        )}

        <button onClick={() => toast.dismiss(t)}>
          <X className="size-4" />
        </button>

      </div>
    </div>
  )
}