import { SidebarTypes } from "@/types/dashboard"
import { iconMap, IconName } from "../icons/icon-map"

const SidebarItem = ({ item, pathname }: {item: SidebarTypes, pathname: string}) => {
  const Icon = item.icon ? iconMap[item.icon as IconName] : null
  const isActive = pathname === item.link

  return ((item.key === "team" || item.key === "settings") ? <div className={`${item.key === "team"? "bottom-[44px] w-[200px] ":"bottom-[12px] w-[200px]"} item-nav  px-[12px] tablet-md:bg-[var(--bg-muted)] tablet-md:fixed item-menu flex gap-[8px] items-center ${isActive ? "active" : ""}`}>
      {Icon && <Icon className="icon-menu" />}
      {item.name}
    </div>:
    <div className={`item-menu flex gap-[8px] items-center item-nav ${isActive ? "active" : ""}`}>
      {Icon && <Icon className="icon-menu" />}
      {item.name}
    </div>
  )
}

export default SidebarItem