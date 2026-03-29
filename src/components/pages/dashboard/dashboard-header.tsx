"use client"
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { Moon, Plus, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const HeaderDashboard = ()=>{
  const { theme, setTheme } = useTheme()
  return <div className="flex flex-col gap-5 tablet-md:flex-row justify-between">
            <Header level={1} title="Dashboard" paragraph="Here's your pipeline health and sales activity at a glance." />
            <div className="flex gap-2">
                <Button className="">
                    <Plus className="" size={15}/> <span className="-mt-1">Create</span>
                </Button>
                <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="">
                    {theme === "dark" ? <Sun size={15} /> : <Moon size={15} /> } <span className="-mt-1">Theme</span>
                </Button>
            </div>
        </div>
}
export default HeaderDashboard