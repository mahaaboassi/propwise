import { SidebarTypes } from "@/types/dashboard"
import { iconMap, IconName } from "../icons/icon-map"

const SidebarItem = ({ item, pathname }: {item: SidebarTypes, pathname: string}) => {
  const Icon = item.icon ? iconMap[item.icon as IconName] : null
  const isActive = pathname === item.link

  return ((item.key === "team" || item.key === "settings") ? <div className={`${item.key === "team"? "bottom-20":"bottom-10 "} w-[224px] tablet-md:bg-[var(--bg-muted)] tablet-md:fixed item-menu flex gap-2 items-center pl-4 ${isActive ? "active" : ""}`}>
      {Icon && <Icon className="icon-menu" />}
      {item.name}
    </div>:
    <div className={`item-menu flex gap-2 items-center pl-4 ${isActive ? "active" : ""}`}>
      {Icon && <Icon className="icon-menu" />}
      {item.name}
    </div>
  )
}

export default SidebarItem