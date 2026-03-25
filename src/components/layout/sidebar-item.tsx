import { SidebarTypes } from "@/types/dashboard"
import { iconMap, IconName } from "../icons/icon-map"

const SidebarItem = ({ item, pathname }: {item: SidebarTypes, pathname: string}) => {
  const Icon = item.icon ? iconMap[item.icon as IconName] : null
  const isActive = pathname === item.link

  return (
    <div className={`item-menu flex gap-2 items-center pl-4 ${isActive ? "active" : ""}`}>
      {Icon && <Icon className="icon-menu" />}
      {item.name}
    </div>
  )
}

export default SidebarItem