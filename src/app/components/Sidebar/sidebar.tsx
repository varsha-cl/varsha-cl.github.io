'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './sidebar.css'

export default function SideBar() {
    const pathname = usePathname()
    return (
        <div className='flex w-full lg:flex-col items-start justify-center p-10'>
            <CustomLink isActive={pathname === '/'} text="Home" linkPath="/" />
            <CustomLink isActive={pathname === '/education'} text="Education" linkPath="/education" />
            <CustomLink isActive={pathname === '/work-experience'} text="Experience" linkPath="/work-experience" />
        </div>
    )
}

function CustomLink({
    isActive, text, linkPath
}: {
    isActive: Boolean,
    text: string,
    linkPath: string
}) {
    return (
        <Link className={`link p-2 lg:border-l-4 border-b-4 border-transparent lg:flex ${isActive ?
            'active font-bold border-b-sky-500 dark:border-b-sky-400 lg:border-b-transparent lg:border-l-sky-500 lg:dark:border-l-sky-400 text-xl text-sky-500 dark:text-sky-400'
            : ''}`} href={linkPath}>
            {text} {" "}
            {
                isActive && (
                    <span className="hidden lg:flex">
                        -&gt;
                    </span>
                )
            }
        </Link>
    )

}