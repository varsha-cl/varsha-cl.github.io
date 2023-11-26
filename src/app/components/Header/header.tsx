'use client';

import Image from 'next/image';
import './header.css'

export default function Header() {
    return (
        <div className='flex w-full lg:flex-col items-end justify-end p-10'>
            <Image
            width="20"
            height="20"
            src="/images/moon.svg"
            alt='Switch to dark mode'
            />
        </div>
    )
}
