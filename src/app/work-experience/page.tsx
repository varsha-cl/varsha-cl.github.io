import React from "react";
import TimeLine from "../components/Timeline/timeline";
import Image from "next/image";

export default function WorkExperience() {

    const workData: { duration: string, contentHeader: string, contents: string[], contentImagePath: string, contentImageSize: number }[] = [
        {
            duration: "Nov 2022 - Dec 2023",
            contentHeader:
                "McKinsey & Company",
            contents: ["Engineer II", "Bengaluru, India","Senior Backend Developer: Engineered healthcare microservices, integrated AWS S3, led recruitments, and directed intranet portal development for a US Pharma client"],
            contentImagePath: "/images/mckinsey_logo.jpeg",
            contentImageSize: 50
        },
        {
            duration: "Nov 2021 - Oct 2022",
            contentHeader:
                "McKinsey & Company",
            contents: ["Engineer I", "Bengaluru, India","Senior Backend Developer: Engineered healthcare microservices, integrated AWS S3, led recruitments, and directed intranet portal development for a US Pharma client"],
            contentImagePath: "/images/mckinsey_logo.jpeg",
            contentImageSize: 50
        },
        {
            duration: "July 2020 - Oct 2021",
            contentHeader:
                "McKinsey & Company",
            contents: ["Junior Engineer", "Bengaluru, India","Senior Backend Developer: Engineered healthcare microservices, integrated AWS S3, led recruitments, and directed intranet portal development for a US Pharma client"],
            contentImagePath: "/images/mckinsey_logo.jpeg",
            contentImageSize: 50
        },
        {
            duration: "Jan 2020 - June 2020",
            contentHeader:
                "McKinsey & Company",
            contents: ["Software Intern", "Bengaluru, India","Senior Backend Developer: Engineered healthcare microservices, integrated AWS S3, led recruitments, and directed intranet portal development for a US Pharma client"],
            contentImagePath: "/images/mckinsey_logo.jpeg",
            contentImageSize: 50
        },
        {
            duration: "Aug 2016 - Aug 2020",
            contentHeader: "AirAsia Tech",
            contents: ["Software Intern", "Bengaluru, India", "Created a map-based flight search feature using JavaScript, seamlessly integrated with Google Maps, enriching user experience and visualizing AirAsia's connectivity."],
            contentImagePath: "/images/airasiatech_logo.jpeg",
            contentImageSize: 75
        }
    ];


    return (
        <main className="flex flex-col items-start p-1 sm:py-5 sm:px-10 w-full">
            <div className="z-10 max-w-5xl w-full text-sm">
                <div className="flex items-center text-3xl font-bold pb-5 lg:py-5 text-slate-700 dark:text-white">
                    <div className="mr-5">
                        Professional Odyssey
                    </div>
                    <Image
                        width={50}
                        height={50}
                        src={"/images/work-indigo.svg"}
                        alt='Work'
                        className='dark:hidden'
                    />
                    <Image
                        width={50}
                        height={50}
                        src={"/images/work.svg"}
                        alt='Work'
                        className='hidden dark:flex'
                    />
                </div>
            </div>
            <div className="sm:p-5">
                <TimeLine data={workData} />
            </div>
        </main>
    )
}