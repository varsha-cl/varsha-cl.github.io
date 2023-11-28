'use client';
import Image from 'next/image'
import './page.css'


import { TypeAnimation } from 'react-type-animation';
import { skills, summary } from './data/home';

export default function Home() {
  return (
    <main className="flex h-full items-center justify-between flex-col lg:flex-row">
      <div className='p-2 lg:w-2/4'>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono lg:flex">
          <div className="p-5 left-0 top-0 w-full justify-center from-zinc-200 lg:pb-6 lg:pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:p-4">
            <div className='text-3xl font-bold text-slate-900 dark:text-slate-200'>
              I&apos;M VARSHA!
            </div>
            <div className='font-semibold text-primary dark:text-primary-dark break-words'>
              <TypeAnimation
                cursor={false}
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'FRONTEND DEVELOPER',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'BACKEND DEVELOPER',
                  1000,
                  'FULLSTACK DEVELOPER',
                  1000,
                ]}
                wrapper="div"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={0}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col place-items-start p-4">
          <div className='p-2 text-justify'>
            {summary}
          </div>
          <div className='mt-10'>
            <div className='font-bold text-xl text-primary dark:text-primary-dark'>
              MY SKILLS
            </div>
            <div className='flex flex-wrap m-2'>
              {
                skills.map((skill, index) => <div key={index} className='text-sm p-1 px-2 bg-slate-200 m-1 rounded text-slate-600 dark:bg-slate-800 dark:text-slate-400'>{skill}</div>)
              }
            </div>
          </div>
          {/* move to right */}
          <div className='mt-10 flex items-center justify-end w-full'>
            <div className=''>
              Want to know more?
            </div>
            <a href='/resume.pdf' target="#" className='font-bold rounded p-2 ml-2 border-2 border-solid border-indigo-600 text-indigo-600 dark:border-indigo-300 dark:text-indigo-300'>
              View Resume
            </a>
          </div>
        </div>
      </div>
      <div className='flex lg:w-2/4 bg-blackh-full items-center justify-center bg-gradient-to-r bg-black-950 main-laptop-image'>
        <Image
          src="images/girl-with-laptop.jpg"
          alt="Varsha"
          width="0"
          height="0"
          sizes="1000vw"
          className="w-auto h-auto"
          priority
        />

      </div>
    </main>
  )
}
