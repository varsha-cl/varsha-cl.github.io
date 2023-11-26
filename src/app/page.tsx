'use client';
import Image from 'next/image'
import './page.css'


import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <main className="flex h-full items-center justify-between flex-col lg:flex-row">
      <div className='p-2 lg:w-2/4'>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono lg:flex">
          <div className="p-5 left-0 top-0 w-full justify-center from-zinc-200 lg:pb-6 lg:pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:p-4">
            <div className='text-3xl font-bold text-slate-900 dark:text-slate-200'>
              I'M VARSHA!
            </div>
            <div className='font-semibold text-sky-500 dark:text-sky-400 break-words'>
              <TypeAnimation
                cursor={true}
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
            {/* <code className="font-mono font-bold">src/app/page.tsx</code> */}
          </div>
        </div>
        {/* Image by <a href="https://www.freepik.com/free-photo/cardano-blockchain-platform_42620753.htm#query=blue%20and%20black%20tech%20with%20laptop&position=14&from_view=search&track=ais&uuid=47815749-05b1-4eab-90cb-68db406582da">Freepik</a> */}
        <div className="flex flex-col place-items-start p-4">
          {/* before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]  */}
          <div className='p-2 text-justify'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>
      <div className='flex lg:w-2/4 bg-blackh-full items-center justify-center bg-gradient-to-r bg-black-950 main-laptop-image'>
        <Image
          // src="/images/cardano-blockchain-platform.jpg"
          // src="/images/4142747.jpg"
          // src="/images/_274a022f-10ea-4673-883e-7826717eb74b.jpeg"
          src="/images/ifoto-ai_1700990897124.jpg"
          // src="/images/photo-1564865878688-9a244444042a.png"
          alt="Varsha"
          // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          // layout='fill'
          // objectFit='contain'
          // fill={true}
          width="0"
          height="0"
          sizes="1000vw"
          className="w-auto h-auto"
          priority
        // className='bg-opacity-25'
        />
        {/* <img src="src/app/images"></img> */}

      </div>
    </main>
  )
}

{/* <div>
          <div className='text-slate-950 text-xl font-bold p-2 text-[#191970] flex items-center'>
            <div>
              Lets get in touch {' '}
            </div>
            <div className='px-2'>
              <Image src={"message.svg"} alt="Connect" width={20} height={20} ></Image>
            </div>
          </div>
          <div className='p-4 flex'>
            <a href='https://www.linkedin.com/in/varshacl/' target="_blank" className='px-2'>
              <Image src={"linkedin.svg"} alt="LinkedIn" width={40} height={40}></Image>
            </a>

            <a href='https://github.com/varsha1998' target="_blank" className='px-2'>
              <Image src={"github.svg"} alt="Github" width={40} height={40}></Image>
            </a>

            <a href="mailto:varshac3@illinois.edu" target="_blank" className='px-2'>
              <Image src={"email.svg"} alt="Email" width={40} height={40}></Image>
            </a>
          </div>
        </div> */}

{/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div> */}