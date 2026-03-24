// Sidebar Types
export interface SidebarChild {
  name: string;
  icon: string;
  link: string;
  children?: {
    name: string;
    icon: string;
    link: string
    }[]
}

export interface Sidebar {
  name: string;
  key: string;
  icon?: string;
  link?: string;
  children: SidebarChild[];
}