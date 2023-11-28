import React from "react";
import TimeLine from "../components/Timeline/timeline";
import Image from "next/image";

export default function Education() {

    const educationData: { duration: string, contentHeader: string, contents: string[], contentImagePath: string, contentImageSize: number }[] = [
        {
            duration: "Jan 2024 - May 2025",
            contentHeader:
                "University of Illinois Urbana-Champaign",
            contents: ["Master's in Computer Science", "Urbana, United States"],
            contentImagePath: "images/UIUC-I-primary.png",
            contentImageSize: 50
        },
        {
            duration: "Aug 2016 - Aug 2020",
            contentHeader:
                "RV College of Engineering",
            contents: ["Bachelor of Engineering in Computer Science", "Bengaluru, India", "CGPA - 9.24"],
            contentImagePath: "images/rvce-logo.png",
            contentImageSize: 75
        }
    ];


    return (
        <main className="flex flex-col items-start p-1 sm:py-5 sm:px-10 w-full">
            <div className="z-10 max-w-5xl w-full text-sm">
                <div className="flex items-center text-3xl font-bold pb-5 lg:py-5 text-slate-700 dark:text-white">
                    <div className="mr-5">
                        Academic Voyage
                    </div>
                    <Image
                        width={50}
                        height={50}
                        src={"images/graduation-cap-indigo.svg"}
                        alt='Education'
                        className='dark:hidden'
                    />
                    <Image
                        width={50}
                        height={50}
                        src={"images/graduation-cap.svg"}
                        alt='Education'
                        className='hidden dark:flex'
                    />
                </div>
            </div>
            <div className="sm:p-5">
                <TimeLine data={educationData} />
            </div>
        </main>
    )
}