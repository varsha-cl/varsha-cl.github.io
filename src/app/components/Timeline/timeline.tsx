import Image from 'next/image';
import './timeline.css'

export default function TimeLine({ data }: { data: { duration: string, contentHeader: string, contents: string[], contentImagePath: string, contentImageSize: number }[] }) {
    return (
        <div className="inline-block">
            <div className="flex flex-col items-start justify-center timeline w-full dark:dark-timeline">
                {data.map((block, index) => {
                    return <TimeLineBlock data={block} isFirst={index == 0} key={block.contentHeader} />;
                })}
            </div>
        </div>
    );
}

function TimeLineBlock({ data, isFirst }: { data: { duration: string, contentHeader: string, contents: string[], contentImagePath: string, contentImageSize: number }, isFirst: boolean }) {
    return (
        <div className={`flex w-full my-10 container dark:dark-container ${isFirst ? 'selected-container dark:dark-selected-container' : ''}`}>
            <div className={`timeline-duration text-center p-1 sm:py-2 sm:px-4 rounded-lg font-bold text-sm mx-2 h-fit ${isFirst ? 'bg-primary dark:bg-primary-dark text-white' : 'border-2 border-solid border-primary dark:border-primary-dark text-primary dark:text-primary-dark'}`}>
                {data.duration}
            </div>
            <div className="timeline-content mx-5 flex flex-col sm:flex-row border-2 border-solid border-gray-200 dark:border-gray-700 rounded-lg bg-slate-200 dark:bg-slate-800 p-4 grow">
                <div className='pr-2 w-[75px]'>
                    <Image
                        src={data.contentImagePath}
                        width={data.contentImageSize}
                        height={data.contentImageSize}
                        alt="University logo">
                    </Image>
                </div>
                <div>
                    <div className="text-lg text-gray-700 font-bold dark:text-white">
                        {data.contentHeader}
                    </div>
                    {
                        data.contents.map((content) => (
                            <div key={content}>
                                {content}
                            </div>)
                        )
                    }
                </div>
            </div>
        </div>
    );
}
