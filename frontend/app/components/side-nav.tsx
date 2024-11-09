'use client';

import React, {useState} from 'react';

import Link from 'next/link';
import {usePathname} from 'next/navigation';


import {Icon} from '@iconify/react';
import {SideNavItem} from "@/app/types";
import {SIDENAV_ITEMS} from "@/app/constants";

const SideNav = () => {
    return (
        <div className="header-bar md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
            <div className="flex flex-col space-y-6 w-full">
                <Link
                    href="/"
                    className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
                >
                    <span className="font-bold text-xl hidden md:flex">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="1em" height="1em"
                             viewBox="0 0 24 24"><path fill="none"
                                                       stroke="currentColor"
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       strokeWidth={1.5}
                                                       d="M3 12c0-3.857 1.286-9 3.857-9c3.857 0 6.429 18 10.286 18C19.714 21 21 15.857 21 12M3 12h2m14 0h2m-5.5 0h1m-9 0h1"></path></svg></span>
                    Q-R-N-G
                </Link>

                <div className="flex flex-col space-y-2  md:px-6 ">
                    {SIDENAV_ITEMS.map((item, idx) => {
                        return <MenuItem key={idx} item={item}/>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default SideNav;

const MenuItem = ({item}: { item: SideNavItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div className="">
            {item.submenu ? (
                <>
                    <button
                        onClick={toggleSubMenu}
                        className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
                            pathname.includes(item.path) ? 'bg-zinc-100' : ''
                        }`}
                    >
                        <div className="flex flex-row space-x-4 items-center">
                            {item.icon}
                            <span className="font-semibold text-xl  flex">{item.title}</span>
                        </div>

                        <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                            <Icon icon="lucide:chevron-down" width="24" height="24"/>
                        </div>
                    </button>

                    {subMenuOpen && (
                        <div className="my-2 ml-12 flex flex-col space-y-4">
                            {item.subMenuItems?.map((subItem, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={subItem.path}
                                        className={`${
                                            subItem.path === pathname ? 'font-bold' : ''
                                        }`}
                                    >
                                        <span>{subItem.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </>
            ) : (
                <Link
                    href={item.path}
                    className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
                        item.path === pathname ? 'bg-zinc-100' : ''
                    }`}
                >
                    {item.icon}
                    <span className="font-semibold text-xl flex">{item.title}</span>
                </Link>
            )}
        </div>
    );
};