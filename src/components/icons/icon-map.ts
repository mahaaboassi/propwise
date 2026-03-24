import { dashboardIcons } from "./dashbaord-icons";
import { sidebarIcons } from "./sidebar-icons";
import { ComponentType, SVGProps } from "react";
// To read String and Icon values
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const iconMap:Record<string, IconComponent>  = {
    ...sidebarIcons,
    ...dashboardIcons
} ;

export type IconName = keyof typeof iconMap;