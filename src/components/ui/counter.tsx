"use client"

import { useEffect, useState } from "react"
import { animate } from "framer-motion"

type Props = {
  value: number
  prefix?: string
}
const formatNumber = (num: number) => {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + "M"
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K"
  return num.toString()
}
const Counter = ({ value, prefix = "" }: Props) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.2,
      onUpdate(latest) {
        setDisplayValue(Math.floor(latest))
      },
    })

    return () => controls.stop()
  }, [value])

  return (
    <span>
      {prefix}
      {formatNumber(displayValue)}
    </span>
  )
}

export default Counter