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
    <div className="flex flex-col gap-[12px]">
      <div className="text-gray-500 text-xs font-normal leading-[12px] ">
        {item.name}
      </div>
      <div className="flex flex-col gap-[2px]">
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
                  <div className={`item-menu item-nav flex justify-between items-center  ${isActive ? "active" : ""}`}>
                    <div className="flex gap-[8px] items-center">
                      {ChildIcon && <ChildIcon className="icon-menu" />}
                      <span>{child.name}</span>
                    </div>

                    {hasChildren && (
                      <ChevronRight
                        className={`transition-transform size-[12.99px] ${isChildOpen ? "rotate-90" : ""}`}
                      />
                    )}
                  </div>
                </CollapsibleTrigger>

                {hasChildren && (
                  <CollapsibleContent className="ml-6 item-nav flex flex-col gap-[2px] ">
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

    </div>
  )
}

export default SidebarGroup