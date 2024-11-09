'use client';

import React from 'react';

import Link from 'next/link';
import {useSelectedLayoutSegment} from 'next/navigation';

import useScroll from '@/hooks/use-scroll';
import {cn} from '@/lib/utils';

const Header = () => {
    const scrolled = useScroll(5);
    const selectedLayout = useSelectedLayoutSegment();

    return (
        <div
            className={cn(
                `sticky header-bar  inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
                {
                    'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
                    'border-b border-gray-200 bg-white': selectedLayout,
                },
            )}
        >
            <div className="flex h-[47px] items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <Link
                        href="/"
                        className="flex flex-row space-x-3 items-center justify-center md:hidden"
                    >
                        <span className="font-bold text-xl flex ">                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                                               width="1em" height="1em"
                                                                                               viewBox="0 0 24 24"><path fill="none"
                                                                                                                         stroke="currentColor"
                                                                                                                         strokeLinecap="round"
                                                                                                                         strokeLinejoin="round"
                                                                                                                         strokeWidth={1.5}
                                                                                                                         d="M3 12c0-3.857 1.286-9 3.857-9c3.857 0 6.429 18 10.286 18C19.714 21 21 15.857 21 12M3 12h2m14 0h2m-5.5 0h1m-9 0h1"></path></svg></span>
                    </Link>
                </div>

                <div className="hidden md:block">

                </div>
            </div>
        </div>
    );
};

export default Header;