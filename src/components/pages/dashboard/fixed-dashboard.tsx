"use client"
import { CircleQuestionMark } from "lucide-react"
import { useTheme } from "next-themes"

const FixedInDashboard = ()=>{
    const { theme } = useTheme()
    return(<div>
        <div className={theme === "dark" ? "blur-dark" : "blur-div"}>
        </div>
        <div className={`fixed z-50 bottom-6 right-6 bg-[var(--content-emphasis)] text-[var(--content-inverted)] flex-center h-12 w-12 rounded-full cursor-pointer`}>
            <CircleQuestionMark />
        </div>
    </div>)
}
export default FixedInDashboard