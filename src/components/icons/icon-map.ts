import { sidebarIcons } from "./sidebar-icons";

export const iconMap = {
    ...sidebarIcons
} as const;

export type IconName = keyof typeof iconMap;