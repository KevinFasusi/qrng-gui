import {Icon} from "@iconify/react";
import {SideNavItem} from "@/app/types";


export const SIDENAV_ITEMS: SideNavItem [] = [
    {
        title: "Home",
        path: "/home",
        icon: <Icon icon="lucide:home" width="24" height="24"/>
    },
    {
        title: "Statistics",
        path: "/statistics",
        icon: <Icon icon="bx:stats" width="24" height="24"/>
    },
    {
        //stream, private keys
        title: "Generate",
        path: "/generate",
        icon: <Icon icon="jam:key" width="24" height="24"/>,
        submenu: true,
        subMenuItems: [
            {title: "Keys", path: "/generate/keys"},
            {title: "Sha256", path: "/generate/sha"},
            {title: "Integers", path: "/generate/integers"},
            {title: "Stream", path: "/generate/stream"},
        ]
    },
    {
        //stream, private keys
        title: "Settings",
        path: "/settings",
        icon: <Icon icon="lucide:settings" width="24" height="24"/>,
    },
    {
        //system versions (cli, firmware, gui)
        title: "Help",
        path: "/help",
        icon: <Icon icon="lucide:help-circle" width="24" height="24"/>,
    }
]