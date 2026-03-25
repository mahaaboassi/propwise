"use client"

import { useEffect, useState } from "react"
import { animate } from "framer-motion"

type Props = {
  value: number
  prefix?: string
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
      {displayValue.toLocaleString()}
    </span>
  )
}

export default Counter