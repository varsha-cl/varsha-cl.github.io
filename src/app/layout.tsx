'use client';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from './components/Sidebar/sidebar'
import Footer from './components/Footer/footer'

import LocalFont from "next/font/local";
import Header from './components/Header/header'
import { Providers } from './providers/providers';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head>
        <title>Varsha's Portfolio</title>
        <meta name='description' content='Turning ideas into reality' />
      </head>
      <body className={[inter.variable, calSans.variable].join(" ")}>
        <Providers>
          <main className='w-full min-h-screen flex flex-col font-sans antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900'>
            <Header />
            <div className='flex grow items-center flex-col lg:flex-row'>
              <SideBar />
              {children}
            </div>
            <Footer />
          </main>

        </Providers>
      </body>
    </html>

  )
}
