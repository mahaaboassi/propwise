"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useDashboard } from "@/hooks/use-dashboard"
import { appToast } from "@/lib/toast"
import { X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const VALID_PERIODS = [
  "today",
  "this_week",
  "this_month",
  "this_quarter",
  "this_year",
  "custom",
] as const

type Period = typeof VALID_PERIODS[number]

type DateType = {
  label: string
  value: Period
}

const DateFilterTabs = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { changePeriod } = useDashboard()

  const periodParam = searchParams.get("period")

  const period: Period = VALID_PERIODS.includes(periodParam as Period)
    ? (periodParam as Period)
    : "today"

  const dates: DateType[] = [
    { label: "Today", value: "today" },
    { label: "This Week", value: "this_week" },
    { label: "This Month", value: "this_month" },
    { label: "This Quarter", value: "this_quarter" },
    { label: "This Year", value: "this_year" },
    { label: "Custom", value: "custom" },
  ]

  const initialIndex = dates.findIndex((d) => d.value === period)

  const [currentDate, setCurrentDate] = useState<number>(
    initialIndex !== -1 ? initialIndex : 0
  )

  const tabsRef = useRef<(HTMLButtonElement | null)[]>([])

  // Sync with URL
  useEffect(() => {
    changePeriod(period)
  }, [period])

  const change = (index: number, date: DateType) => {
    setCurrentDate(index)
    changePeriod(date.value)

    const params = new URLSearchParams(searchParams.toString())
    params.set("period", date.value)

    router.push(`?${params.toString()}`, { scroll: false })

    appToast.action({
          message: `Dashboard updated to [${date.value}]`,
          label: "",
          type: "neutral",
          onAction: async () =>{}
      })
  }

  // Keyboard navigation for date filter tabs
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number
  ) => {
    let newIndex = idx

    switch (e.key) {
      case "ArrowRight":
        newIndex = (idx + 1) % dates.length
        break

      case "ArrowLeft":
        newIndex = (idx - 1 + dates.length) % dates.length
        break

      case "Enter":
      case " ":
        change(idx, dates[idx])
        return

      default:
        return
    }

    e.preventDefault()

    setCurrentDate(newIndex)
    tabsRef.current[newIndex]?.focus()
  }

  return (
    <div>
      <ul
        role="tablist"
        className="flex h-[35px] p-[4px] text-xs desktop-md:text-[13px] leading-[20px] font-[550] bg-[var(--bg-subtle)] whitespace-nowrap overflow-x-auto w-full rounded-sm mobile-md:w-fit text-[#9CA3AF]"
      >
        {dates.map((date, idx) => (
          <li key={date.value}>
            <button
              ref={(el) => {
                tabsRef.current[idx] = el
              }}
              role="tab"
              aria-selected={currentDate === idx}
              tabIndex={currentDate === idx ? 0 : -1}
              onClick={() => change(idx, date)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`hover:!bg-[var(--bg-surface)] 
                rounded-[6px] flex-center cursor-pointer transition-all duration-300
                ${
                  currentDate === idx
                    ? "text-[var(--content-emphasis)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_0px_2px_0px_rgba(0,0,0,0.06)] bg-[var(--bg-default)]"
                    : "hover:text-[var(--content-subtle)]"
                }
                h-full px-[12px] py-[9px] !text-[#9CA3AF] w-[80px] desktop-md:w-[91.67px] h-[27px]
                focus:outline-none focus:ring-1 focus:ring-[var(--content-subtle)]
              `}
            >
              {date.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DateFilterTabs