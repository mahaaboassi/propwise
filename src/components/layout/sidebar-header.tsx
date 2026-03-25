import { ChevronsUpDown, Command, Search, TextAlignJustify } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { Badge } from "../ui/badge"
import Image from "next/image"
import { Input } from "../ui/input"
import { menuAvatar } from "@/lib/mock-data"
import { iconMap, IconName } from "../icons/icon-map"
import { Menu } from "@/types/dashboard"
import React from "react"

type Props = {
    onClick : ()=>void
}
type ItemProps = {
    icon: React.ReactNode,
    name: string,
    badge: string,
}
const ItemMenu = ({icon, name, badge }: ItemProps) => {
    const Icon = icon ? iconMap[icon as IconName] : null
    return(<div  className={`flex group items-center justify-between gap-2 cursor-pointer hover:bg-[var(--bg-emphasis)] transition-all duration-300 rounded-md p-1`}>
        <div className="flex gap-1 items-center">
            {Icon && <Icon className="icon-menu size-4" />}
            <span className="text-sm">{name}</span>
        </div>
        {badge && <Badge className="uppercase text-[var(--content-badge-down)] bg-[var(--bg-badge-down)] rounded-md">{badge}</Badge>}
        </div>)
}
const SidebarHeader = ({onClick}: Props)=>{
    return(<div className="fixed z-50 left-0 right-0 top-0 p-4 shadow bg-[var(--content-inverted)] flex items-center gap-4 
                      tablet-md:shadow-none tablet-md:bg-background tablet-md:p-0 tablet-md:items-start tablet-md:static tablet-md:flex-col">

        {/* Avatar */}
        <Popover>
          <PopoverTrigger  className="tablet-md:hover:bg-[var(--bg-emphasis)] transition-all duration-30 rounded-xl p-2 cursor-pointer" asChild>
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
                    <h2 className="text-[var(--content-default)] text-base font-medium">
                      Lina Rahman
                    </h2>
                    <p className="flex items-center gap-1 text-xs text-[#687287]">
                      Atlas Estates
                      <Badge className="bg-[var(--bg-info)] text-xs text-[var(--content-info)] rounded-md">
                        Pro
                      </Badge>
                    </p>
                  </div>

                  <div className="hidden tablet-md:flex text-[var(--icon-color)]">
                    <ChevronsUpDown size={15} />
                  </div>
                </div>
              </div>
          </PopoverTrigger>
          <PopoverContent side="bottom" align="start" sideOffset={8} alignOffset={0} 
              className="w-52 mobile-sm:w-64 outline-none !p-0 bg-[var(--content-inverted)] shadow-dropdown">
                <div className="flex items-center gap-2 py-2 px-4 border-b border-[var(--border-grey)]">
                    <div className="w-8 h-8 !rounded-xl overflow-hidden">
                      <Image className="object-contain" width={100} height={100} alt="logo" src={"/images/company_logo_2.png" } />
                    </div>
                    <div>
                      <div className="text-[var(--font-figtree)] font-medium text-base">Atlas Estates</div>
                      <div className="text-xs text-[var(--content-muted)]">Business · 12 members</div>
                    </div>
                </div>
                
                <div className="px-4 pb-2 flex items-center justify-between gap-2 border-b border-[var(--border-grey)]">
                      <div className="flex gap-1 items-center">
                        <div className="h-3 w-3 rounded-full bg-[var(--green-700)]"></div>
                         <span className="text-sm mobile-sm:text-base">Online</span>
                      </div>
                      <Badge className="uppercase text-[var(--content-badge-up)] bg-[var(--bg-badge-up)]  rounded-md">active</Badge>
                  </div>
                  <div className="px-4 pb-2 flex flex-col gap-2 border-b border-[var(--border-grey)]">
                     {
                      menuAvatar.map((item:Menu,idx:number)=>(<ItemMenu key={`Menu_Item_${item.name}_${idx}`} icon={item.icon} badge={item.badge} name={item.name} />))
                     }

                  </div>
                  <div className="px-4 mb-2">
                    <ItemMenu name="Sign out" badge="" icon={"signOut"}/>
                  </div>
                  
          </PopoverContent>
        </Popover>
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
          <div onClick={onClick} className="icon-cover flex-center">
            <TextAlignJustify />
          </div>
          <div className="icon-cover flex-center">
            <Search />
          </div>
        </div>
      </div>)
}
export default SidebarHeader