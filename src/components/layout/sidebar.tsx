"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { sidebarData } from "@/lib/mock-data"
import { motion, AnimatePresence } from "framer-motion"

import SidebarHeader from "./sidebar-header"
import SidebarItem from "./sidebar-item"
import SidebarGroup from "./sidebar-group"
import { X } from "lucide-react"
import { SidebarTypes } from "@/types/dashboard"

const Sidebar = () => {
  const pathname = usePathname()

  const [openMenuSmallSize, setOpenMenuSmallSize] = useState(false)
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <nav className="flex flex-col gap-4 tablet-md:w-[224px] tablet-md:sticky top-5">
      {/* Top Bar */}
      <SidebarHeader onClick={()=>setOpenMenuSmallSize(true)}/>

      {/* Sidebar */}
      <AnimatePresence>
        {(openMenuSmallSize || typeof window !== "undefined") && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: openMenuSmallSize ? 224 : 0 }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3,   }}
            className={`sidebar-scroll overflow-y-auto h-screen tablet-md:h-[calc(100vh-250px)] flex-col tablet-md:!w-[224px] w-full gap-1 text-base font-normal
            ${openMenuSmallSize ? "fixed top-0 px-4 bottom-0 right-0 overflow-hidden bg-[var(--content-inverted)] shadow z-50 pt-5 pl-4" : "hidden  tablet-md:flex"}`}
          >

            {/* Close */}
            {openMenuSmallSize && (
              <div onClick={() => setOpenMenuSmallSize(false)} className="flex justify-end mb-4">
                <div className="icon-cover flex-center"><X /></div>
              </div>
            )}

            {/* Menu */}
              <div className="flex flex-col gap-1">
                {sidebarData.map((item: SidebarTypes) =>
                  item.children.length === 0 ? (
                    <SidebarItem
                      key={item.key}
                      item={item}
                      pathname={pathname}
                    />
                  ) : (
                    <SidebarGroup
                      key={item.key}
                      item={item}
                      pathname={pathname}
                      openItems={openItems}
                      toggleItem={toggleItem}
                    />
                  )
                )}
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Sidebar