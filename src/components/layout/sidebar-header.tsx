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
        <div className="flex gap-1 items-center text-[#909BB2]">
            {Icon && <Icon className="icon-menu size-[13.99px] " />}
            <span className="text-[12.5px] text-[#5A6478] font-normal leading-[18.75px]">{name}</span>
        </div>
        {badge && <Badge className="font-medium text-xs leading-[12px] text-[var(--attention-content)] bg-[var(--bg-error)] h-[16px] w-[16px] rounded-full">{badge}</Badge>}
        </div>)
}
const SidebarHeader = ({onClick}: Props)=>{
    return(<div className="fixed z-50 left-0 right-0 top-0 bg-[var(--content-inverted)] flex items-center
                      tablet-md:shadow-none tablet-md:bg-background tablet-md:p-0 tablet-md:items-start tablet-md:static tablet-md:flex-col">

        {/* Avatar */}
        <div className="pt-[16px] px-[12px] pb-[12px] h-[72px] w-full">
          <Popover>
            <PopoverTrigger  className="tablet-md:hover:bg-stone-200 h-[44px] w-[204px] transition-all duration-30 rounded-xs p-[4px] cursor-pointer" asChild>
                <div className="flex gap-[8px] items-center w-full">
                  <div className="relative">
                    <Avatar className="w-[32px] h-[32px]">
                      <AvatarImage className="object-cover" src="/images/image.jpg" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="absolute -right-1 bottom-0">
                      <Avatar className="w-[16px] h-[16px] border border-[0.8] border-[#E8EBF2]">
                        <AvatarImage className="object-cover" src="/images/company-logo.png" />
                      </Avatar>
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col ">
                      <h2 className="text-[var(--content-default)] font-medium leading-[16px] text-sm">
                        Lina Rahman
                      </h2>
                      <p className="flex items-center gap-1 text-xs text-[#687287]">
                        Atlas Estates
                        <Badge className="bg-[var(--bg-info)] text-[9.75px] leading-[9.75px] text-[var(--content-info)] rounded-[3.25px]">
                          Pro
                        </Badge>
                      </p>
                    </div>

                    <div className="hidden text-[rgba(141, 143, 147, 1)] tablet-md:flex text-[var(--icon-color)]">
                      <ChevronsUpDown  className="size-[16px]" />
                    </div>
                  </div>
                </div>
            </PopoverTrigger>
            <PopoverContent side="bottom" align="start" sideOffset={8} alignOffset={0} 
                className="w-[231.25px] h-[233.27px] rounded-lg outline-none !p-0 bg-[#FFFFFF]">
                  <div className="flex items-center gap-[8px] h-[56.5px] px-[12px] border-b-[0.77px] border-[#F0F1F5]">
                      <div className="w-[31.49px] h-[32px] !rounded-xl overflow-hidden">
                        <Image className="object-contain" width={100} height={100} alt="logo" src={"/images/company_logo_2.png" } />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-[12.5px] text-[#12204C] leading-[18.75px]">Atlas Estates</div>
                        <div className="font-400 text-xxs text-[#A0A9BD] leading-[15px]">Business · 12 members</div>
                      </div>
                  </div>
                  
                  <div className="px-[7.9px] h-[37.95px] flex items-center justify-between ">
                        <div className="flex gap-1 items-center">
                          <div className="h-[8.99px] w-[8.99px] rounded-full bg-[var(--green-700)]"></div>
                          <span className="font-normal text-[12.5px] text-[#5A6478 leading-[18.75px]">Online</span>
                        </div>
                        <Badge className="uppercase text-[var(--content-badge-up)] bg-[var(--bg-badge-up)] text-[9px] leading-[13.5px] font-bold font-heading px-[5px] py-[1px] rounded-[4px]">active</Badge>
                    </div>
                    <div className="h-[97px] flex items-center w-full border-t-[0.77px] border-[#F0F1F5]">
                        <div className="px-[6.7px] flex flex-col w-full">
                          {
                            menuAvatar.map((item:Menu,idx:number)=>(<ItemMenu key={`Menu_Item_${item.name}_${idx}`} icon={item.icon} badge={item.badge} name={item.name} />))
                          }
                        </div>
                    </div>
                    
                    <div className="px-[6px] pt-[2.76px] h-[39.51px] border-t-[0.77px] border-[#F0F1F5]">
                      <ItemMenu name="Sign out" badge="" icon={"signOut"}/>
                    </div>
                    
            </PopoverContent>
          </Popover>
        </div>
        

        {/* Search */}
        <div className="hidden tablet-md:flex px-[12px]">
          <div className="bg-[var(--content-inverted)] flex border-xs border-[0.77px] h-[35.01px] rounded-xs p-[6px]">
            <div className="flex items-center gap-[2px]">
              <Search className="size-[13.99px] text-[var(--icon-color)]" size={20} />
              <Input  placeholder="Search" className="w-full h-full pl-[6px] bg-transparent border-none outline-none ring-0 focus:ring-0
              text-[13px] placeholder:text-[13px] placeholder:text-[rgba(160,160,160,1)] placeholder:font-[400]" />
            </div>
            <div className="flex gap-[2.99px] items-center text-[var(--icon-color)]">
              <div className="icon-cover flex-center">⌘</div>
              <div className="icon-cover flex-center">K</div>
            </div>
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