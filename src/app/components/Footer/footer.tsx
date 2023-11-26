'use client';

import './footer.css'

export default function Footer() {
    return (
        <div className='flex w-full flex flex-col sm:flex-row items-center justify-between p-2 px-5 text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 font-mono'>
            <div className='text-sm'>
                {/*  dark:bg-[#8E9CB0] */}
                <div>
                    Copyright &copy; {new Date().getFullYear()} Varsha C L
                </div>
                <div>
                    All rights reserved
                </div>
            </div>

            <div className='p-4 flex items-center'>
                <a href='https://www.linkedin.com/in/varshacl/' target="_blank" className='px-2'>

                    <picture>
                        <source srcSet="/images/dark-linkedin.svg" media="(prefers-color-scheme: light)" width={40} height={40} />
                        <source srcSet="/images/linkedin.svg" media="(prefers-color-scheme: dark)" width={40} height={40} />
                        <img src="/images/linkedin.svg" alt="LinkedIn" />
                    </picture>
                </a>

                <a href='https://github.com/varsha1998' target="_blank" className='px-2'>

                    <picture>
                        <source srcSet="/images/dark-github.svg" media="(prefers-color-scheme: light)" width={40} height={40} />
                        <source srcSet="/images/github.svg" media="(prefers-color-scheme: dark)" width={40} height={40} />
                        <img src="/images/github.svg" alt="Github" />
                    </picture>
                </a>

                <a href="mailto:varshac3@illinois.edu" target="_blank" className='px-2'>
                    <picture>
                        <source srcSet="/images/dark-email.svg" media="(prefers-color-scheme: light)" width={40} height={40} />

                        <source srcSet="/images/email.svg" media="(prefers-color-scheme: dark)" width={40} height={40} />

                        <img src="/images/email.svg" alt="Email" />
                    </picture>
                </a>
            </div>
        </div>
    )
}