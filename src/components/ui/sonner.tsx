"use client"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-[16px]" />
        ),
        info: (
          <InfoIcon className="size-[16px]" />
        ),
        warning: (
          <TriangleAlertIcon className="size-[16px]" />
        ),
        error: (
          <OctagonXIcon className="size-[16px]" />
        ),
        loading: (
          <Loader2Icon className="size-[16px] animate-spin" />
        ),
      }}
      toastOptions={{
        classNames: {
          // toast: "cn-toast",
          // error: "cn-toast-error",

        },
      }}
      {...props}
    />
  )
}

export { Toaster }
