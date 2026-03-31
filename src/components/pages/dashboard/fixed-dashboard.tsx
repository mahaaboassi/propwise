"use client"
import { CircleQuestionMark } from "lucide-react"
import { useTheme } from "next-themes"

const FixedInDashboard = ()=>{
    const { theme } = useTheme()
    return(<div>
        <div className={theme === "dark" ? "blur-dark" : "blur-div"}>
        </div>
        <div className={`fixed z-50 bottom-[26px] right-[21px] bg-[var(--content-emphasis)] text-[var(--content-inverted)] flex-center h-[32px] w-[32px] rounded-full cursor-pointer`}>
            <CircleQuestionMark className="size-[16px]" />
        </div>
    </div>)
}
export default FixedInDashboard