// Sidebar Types
export interface SidebarSubChild {
    name: string;
    icon: string;
    link: string
    }
export interface SidebarChild {
  name: string;
  icon: string;
  link: string;
  children?: SidebarSubChild[]
}

export interface SidebarTypes {
  name: string;
  key: string;
  icon?: string;
  link?: string;
  children: SidebarChild[];
}
export interface Menu {
    name: string,
    key: string,
    link: string,
    icon: string,
    badge: string,
}
