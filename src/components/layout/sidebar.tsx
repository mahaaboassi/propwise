import { sidebarData } from "@/lib/mock-data";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { iconMap, IconName } from "../icons/icon-map";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { ChevronRight, ChevronsUpDown, Command, Search } from "lucide-react";

const Sidebar = () =>{
    return(<aside className={`side flex flex-col gap-4`}>
        {/* Avatar */}
        <div className="avatar-div flex gap-3 items-center w-full">
            <div className="relative">
                <Avatar className="w-11 h-11">
                    <AvatarImage
                    src="/images/image.jpg"
                    alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                
                {/* Company Logo */}
                <div className="absolute -right-2 bottom-0">
                    <Avatar className="w-6 h-6">
                        <AvatarImage
                        src="/images/company-logo.png"
                        alt="@shadcn"
                        />
                    </Avatar>
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="w-full">
                    <h2 className="text-[var(--content-default)] text-md font-medium">Lina Rahman</h2>
                    <p className="flex items-center gap-1 text-xs text-[#687287]">Atlas Estates 
                        <Badge className="bg-[var(--bg-info)] text-xs text-[var(--content-info)]">Pro</Badge>
                    </p>
                </div>
                <div className="text-[var(--icon-color)]">
                    <ChevronsUpDown size={15} />
                </div>        
            </div>
            
           
        </div>

        {/* Search Input */}
        <div className="relative">
            <Search className="center-vertical !left-1.5 text-[var(--icon-color)]" size={20} />
            <Input placeholder="Search" />
            <div className="flex gap-1 items-center text-[var(--icon-color)] right-1.5 center-vertical">
                <div className="icon-cover flex-center"><Command size={15} /></div>
                <div className="icon-cover flex-center">K</div>
            </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-1 text-md font-normal">
           {sidebarData.map((sideItem, idx) => {
            const Icon = sideItem.icon ? iconMap[sideItem.icon as IconName] : null;

            return (
                <div key={`Menu_${sideItem.name}_${idx}`}>
                {sideItem.children.length === 0 ? (
                    <div className="flex items-center gap-2 item-menu">
                    {Icon && <Icon  className="icon-menu" />}
                    <span>{sideItem.name}</span>
                    </div>
                ) : (
                    <div className="mb-2">
                        <div className="text-gray-500">{sideItem.name}</div>
                        {sideItem.children.map((child, i) => {
                        const ChildIcon = child.icon ? iconMap[child.icon as IconName] : null;

                        return (<div className="flex items-center justify-between item-menu" key={`Menu_Child_${child.name}_${i}`} >
                            <div className="flex items-center gap-2">
                                {ChildIcon && <ChildIcon className="icon-menu" />}
                                <span>{child.name}</span>
                            </div>
                            {child?.children && child?.children.length > 0 && <div className="text-[var(--icon-color)]"><ChevronRight size={15} /></div>}
                        </div>
                        );
                        })}
                    </div>
                )}
                </div>
  );
})}
        </div>
    </aside>)
}
export default Sidebar