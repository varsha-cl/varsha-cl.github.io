'use client';

import Image from 'next/image'
import './header.css'
import { useTheme } from "next-themes"
import { useEffect, useState } from 'react';
import { useClickOutside } from '@/app/utils/click-away-listener';

const getThemeImages = (theme: string, selected = false): string => {
    const color = selected ? 'blue' : 'gray';
    switch (theme) {
        case 'light':
            return `/images/sun-${color}.svg`;
        case 'dark':
            return `/images/moon-${color}.svg`;
        default:
            return `/images/system-${color}.svg`;
    }
}

export default function Header() {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    const currentTheme = theme ?? 'system'

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])


    const dropdownRef = useClickOutside(toggleDropdown);

    if (!mounted) {
        return null
    }

    const handleThemeChange = (selectedTheme: string): void => {
        setTheme(selectedTheme)
        toggleDropdown()
    }

    return (
        <div className='p-10 pb-0'>
            <div className='flex w-full lg:flex-col items-end justify-end'>
                <Image
                    width="30"
                    height="30"
                    src={getThemeImages('light', true)}
                    alt='Switch to dark mode'
                    className='dark:hidden cursor-pointer'
                    onClick={toggleDropdown}
                />
                <Image
                    width="30"
                    height="30"
                    src={getThemeImages('dark', true)}
                    alt='Switch to light mode'
                    className='hidden dark:flex cursor-pointer'
                    onClick={toggleDropdown}
                />
            </div>
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 mr-10 w-32 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-800 bg-white text-slate-500 dark:text-white z-20"
                    ref={dropdownRef}>
                    <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <MenuItem handleThemeChange={handleThemeChange} theme='light' selectedTheme={currentTheme} />
                        <MenuItem handleThemeChange={handleThemeChange} theme='dark' selectedTheme={currentTheme} />
                        <MenuItem handleThemeChange={handleThemeChange} theme='system' selectedTheme={currentTheme} />
                    </ul>
                </div>
            )}
        </div>
    )
}


function MenuItem({
    handleThemeChange, theme, selectedTheme
}: {
    handleThemeChange: (selectedTheme: string) => void,
    theme: string,
    selectedTheme: string
}) {
    return (
        <li>
            <a
                href="#"
                className="block px-4 py-2 text-sm dark:text-white text-gray-700 hover:bg-slate-50 hover:dark:bg-slate-500 hover:text-slate-500 capitalize flex"
                onClick={() => handleThemeChange(theme)}
            >
                <Image
                    // width={theme === "light" ? 40 : 20}
                    width={20}
                    height={20}
                    // height={theme === "light" ? 40 : 20}
                    src={getThemeImages(theme, theme == selectedTheme)}
                    alt='Switch to light mode'
                    className='cursor-pointer pr-2 w-1/4'
                />
                <div className={` w-3/4 ${selectedTheme === theme ? 'text-sky-500 dark:text-sky-400 font-bold' : ''}`}>
                    {theme}
                </div>
            </a>
        </li>
    )
}