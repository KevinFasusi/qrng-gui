import React from "react";

export type SideNavItem = {
    title: string;
    path: string;
    icon?:React.JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
}