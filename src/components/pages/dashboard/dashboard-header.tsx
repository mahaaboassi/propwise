"use client"
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { Moon, Plus, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const HeaderDashboard = ()=>{
  const { theme, setTheme } = useTheme()
  return <div className="flex flex-col gap-5 tablet-md:flex-row justify-between items-center">
            <Header level={1} title="Dashboard" paragraph="Here's your pipeline health and sales activity at a glance." />
            <div className="flex gap-2">
                <Button variant={"default"}>
                    <Plus className="size-[16px]"/> <span>Create</span>
                </Button>
                <Button variant={"default"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="">
                    {theme === "dark" ? <Sun className="size-[16px]"/> : <Moon className="size-[16px]"/> } <span>Theme</span>
                </Button>
            </div>
        </div>
}
export default HeaderDashboard