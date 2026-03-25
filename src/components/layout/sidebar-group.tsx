import { ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { iconMap, IconName } from "../icons/icon-map"
import { SidebarChild, SidebarSubChild, SidebarTypes } from "@/types/dashboard"

export type SidebarGroupProps = {
  item: SidebarTypes
  pathname: string
  openItems: Record<string, boolean>
  toggleItem: (key: string) => void
}

const SidebarGroup = ({ item, pathname, openItems, toggleItem }: SidebarGroupProps) => {
//   const isOpen = openItems[item.name] || false

  return (
    <div className="mb-2">
      <div className="text-[var(--content-subtle)] px-2 mb-2">
        {item.name}
      </div>

      {item.children.map((child: SidebarChild) => {
        const ChildIcon = child.icon ? iconMap[child.icon as IconName] : null
        const isActive = pathname === child.link
        const hasChildren = child.children && child.children?.length > 0
        const isChildOpen = openItems[child.name]
        return (
          <Collapsible
            key={`${child.name}_Child_Sidebar`}
            open={isChildOpen}
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
                    className={`transition-transform ${isChildOpen ? "rotate-90" : ""}`}
                  />
                )}
              </div>
            </CollapsibleTrigger>

            {hasChildren && (
              <CollapsibleContent className="ml-6 flex flex-col gap-1 mt-1">
                {child?.children && child?.children.map((sub: SidebarSubChild) => {
                  const isSubActive = pathname === sub.link

                  return (
                    <div
                      key={`${sub.name}_Sub_child_Sidebar`}
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
  )
}

export default SidebarGroup