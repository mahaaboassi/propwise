"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { sidebarData } from "@/lib/mock-data"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Input } from "../ui/input"
import { iconMap, IconName } from "../icons/icon-map"
import {
  ChevronRight,
  ChevronsUpDown,
  Command,
  Search,
  TextAlignJustify,
  X,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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
    <aside className="flex flex-col gap-4 tablet-md:w-[224px] tablet-md:sticky top-5">
      {/* Top Bar */}
      <div className="fixed z-50 left-0 right-0 top-0 p-4 shadow bg-[var(--content-inverted)] flex items-center gap-4 
                      tablet-md:shadow-none tablet-md:bg-background tablet-md:p-0 tablet-md:items-start tablet-md:static tablet-md:flex-col">

        {/* Avatar */}
        <div className="flex gap-3 items-center w-full">
          <div className="relative">
            <Avatar className="w-11 h-11">
              <AvatarImage src="/images/image.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="absolute -right-2 bottom-0">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/images/company-logo.png" />
              </Avatar>
            </div>
          </div>

          <div className="flex justify-between items-center w-full">
            <div>
              <h2 className="text-[var(--content-default)] text-md font-medium">
                Lina Rahman
              </h2>
              <p className="flex items-center gap-1 text-xs text-[#687287]">
                Atlas Estates
                <Badge className="bg-[var(--bg-info)] text-xs text-[var(--content-info)]">
                  Pro
                </Badge>
              </p>
            </div>

            <div className="hidden tablet-md:flex text-[var(--icon-color)]">
              <ChevronsUpDown size={15} />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative hidden tablet-md:flex w-full">
          <Search className="center-vertical !left-1.5 text-[var(--icon-color)]" size={20} />
          <Input  placeholder="Search" />
          <div className="flex gap-1 items-center text-[var(--icon-color)] right-1.5 center-vertical">
            <div className="icon-cover flex-center"><Command size={15} /></div>
            <div className="icon-cover flex-center">K</div>
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="flex tablet-md:hidden gap-1">
          <div onClick={() => setOpenMenuSmallSize(true)} className="icon-cover flex-center">
            <TextAlignJustify />
          </div>
          <div className="icon-cover flex-center">
            <Search />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(openMenuSmallSize || typeof window !== "undefined") && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: openMenuSmallSize ? 224 : 0 }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3,   }}
            className={`sidebar-scroll overflow-y-auto h-screen tablet-md:h-[calc(100vh-250px)] flex-col tablet-md:!w-[224px] w-full gap-1 text-md font-normal
            ${openMenuSmallSize ? "fixed top-0 px-4 bottom-0 right-0 overflow-hidden bg-[var(--content-inverted)] shadow z-50 pt-5 pl-4" : "hidden  tablet-md:flex"}`}
          >

            {/* Close */}
            {openMenuSmallSize && (
              <div onClick={() => setOpenMenuSmallSize(false)} className="flex justify-end mb-4">
                <div className="icon-cover flex-center"><X /></div>
              </div>
            )}

            {/* Menu */}
            {sidebarData.map((sideItem, idx) => {
              const Icon = sideItem.icon ? iconMap[sideItem.icon as IconName] : null
              const isActive = pathname === sideItem.link

              return (
                <div key={idx}>
                  {/* Single Item */}
                  {sideItem.children.length === 0 ? (
                    <div className={`${sideItem.key == "team"?"tablet-md:fixed z-50 tablet-md:bg-background bg-[var(--content-inverted)]  bottom-20 w-[224px]":(sideItem.key == "settings"?"tablet-md:fixed z-50 tablet-md:bg-background bg-[var(--content-inverted)] bottom-10 w-[224px]":"")} item-menu flex gap-2 items-center pl-4 ${isActive ? "active" : ""}`}>
                      {Icon && <Icon className="icon-menu" />}
                      {sideItem.name}
                    </div>
                  ) : (
                    <div className="mb-2">
                      <div className="text-[var(--content-subtle)] px-2 mb-2">
                        {sideItem.name}
                      </div>
                      {sideItem.children.map((child, i) => {
                        const ChildIcon = child.icon ? iconMap[child.icon as IconName] : null
                        const isActive = pathname === child.link
                        const hasChildren = child.children && child.children?.length > 0
                        const isOpen = openItems[child.name] || false
                        return (
                          <Collapsible
                            key={i}
                            open={isOpen}
                            onOpenChange={() => toggleItem(child.name)}
                          >
                            <CollapsibleTrigger asChild>
                              <div className={`item-menu flex justify-between items-center pl-4 ${isActive ? "active" : ""}`}>
                                <div className="flex gap-2 items-center">
                                  {ChildIcon && <ChildIcon className="icon-menu" />}
                                  <span>{child.name}</span>
                                </div>

                                {hasChildren && (
                                  <ChevronRight
                                    size={15}
                                    className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
                                  />
                                )}
                              </div>
                            </CollapsibleTrigger>

                            {hasChildren && child.children && (
                              <CollapsibleContent className="ml-6 flex flex-col gap-1 mt-1">
                                {child.children.map((sub, j) => {
                                  const isSubActive = pathname === sub.link
                                  return (
                                    <div
                                      key={j}
                                      className={`item-menu text-sm ${isSubActive ? "active" : ""}`}
                                    >
                                      {sub.name}
                                    </div>
                                  )
                                })}
                              </CollapsibleContent>
                            )}
                          </Collapsible>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  )
}

export default Sidebar