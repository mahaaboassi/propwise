import { toast } from "sonner"
import { CustomToast } from "@/components/ui/toast"
import React from "react"

type ToastType = "success" | "error" | "info" | "neutral"
type ActionOptions = {
  label: React.ReactNode
  onClick: () => void
}
type ActionFunProps = {
  message: string,
  label: string, 
  type: ToastType, 
  onAction: () => void
}
export const appToast = {
  // Neutral state with 1 action ( Cancel )
  neutral: (msg: string,    
    options?: {
      action?: ActionOptions
    }) => 
      toast(msg,{
      action: options?.action,
  }),

  // Info state with 1 action ( Cancel )
  info: (msg: string,
    options?: {
      action?: ActionOptions
    }
  ) => 
    toast.info(msg,{
      action: options?.action,
    }),

  // Success state with 1 action ( Cancel )
  success: (
    msg: string,
    options?: {
      action?: ActionOptions
    }
  ) =>
    toast.success(msg, {
      action: options?.action,
    }),

  // error state with 1 action ( Cancel )
  error: (msg: string,    
    options?: {
      action?: ActionOptions
    }) => toast.error(msg, {
      action: options?.action,
    }),

  // all status with 2 action ( Cancel & Undo )
  action: ({message, label, type, onAction}: ActionFunProps) =>
    toast.custom((t) => (
      <CustomToast type={type} label={label} t={t} message={message} onAction={onAction} />
    )),
}