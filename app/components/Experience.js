import Image from 'next/image'
import React from 'react'

function Experience() {
    return (
        <div className='flex flex-col items-center mt-14 gap-6'>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='lg:text-6xl text-5xl font-extrabold uppercase tracking-wide'>Experience</h1>
                <h4 className='text-lg font-semibold uppercase tracking-[0.8rem] linear-blue text-transparent'>Explore Now</h4>
                {/* <hr className='w-10 border-t-[3px] border-white rounded' /> */}
            </div>
            <div className='w-full flex flex-col items-center lg:px-6 mt-6 gap-14'>
                <div className='lg:w-[80%] w-full flex flex-col gap-5'>
                    <div className='flex items-center lg:gap-6 gap-4'>
                        <Image className='w-auto lg:h-16 h-12 rounded-lg' src='/img/sinarmas_land_logo.jpg' width={500} height={500} quality={100} alt='logo-sinarmas-land'/>
                        <h2 className='lg:text-4xl text-3xl font-bold text-linear-blue'>Sinarmas Land</h2>
                    </div>
                    <div className='flex lg:flex-row flex-col lg:items-center lg:justify-between lg:gap-0 gap-2'>
                        <div className='flex items-center'>
                            <h2 className='lg:text-2xl text-xl font-semibold'>OutSystems Developer</h2>
                        </div>
                        <div>
                            <h3 className='lg:text-xl text-lg font-semibold'>June 2024 - Present, Internship, Hybrid</h3>
                        </div>
                    </div>
                    <div className=''>
                        <ol className='list-disc list-inside lg:text-lg text-base flex flex-col gap-2'>
                            <li>lorem ipsum</li>
                        </ol>
                    </div>
                    <div className='flex items-center flex-wrap gap-3'>
                        <div className='px-4 py-2 border-linear-blue rounded-[2rem]'>
                            <h3 className='text-base font-semibold'>OutSystems</h3>
                        </div>
                        {/* <div className='px-4 py-2 border-linear-blue rounded-[2rem]'>
                            <h3 className='text-base font-semibold'>PHP</h3>
                        </div>
                        <div className='px-4 py-2 border-linear-blue rounded-[2rem]'>
                            <h3 className='text-base font-semibold'>JavaScript</h3>
                        </div>
                        <div className='px-4 py-2 border-linear-blue rounded-[2rem]'>
                            <h3 className='text-base font-semibold'>SQL</h3>
                        </div>
                        <div className='px-4 py-2 border-linear-blue rounded-[2rem]'>
                            <h3 className='text-base font-semibold'>Bootstrap</h3>
                        </div> */}
                    </div>
                </div>
                <div className='lg:w-[80%] w-full flex flex-col gap-5'>
                    <div className='flex items-center lg:gap-6 gap-4'>
                        <Image className='w-auto lg:h-16 h-12 rounded-lg' src='/img/all_in_eduspace_logo.jpg' width={500} height={500} quality={100} alt='logo-allin-eduspace'/>
                        <h2 className='lg:text-4xl text-3xl font-bold text-linear-blue'>ALL-in Eduspace</h2>
                    </div>
                    <div className='flex lg:flex-row flex-col lg:items-center lg:justify-between lg:gap-0 gap-2'>
                        <div className='flex items-center'>
                            <h2 className='lg:text-2xl text-xl font-semibold'>Fullstack Web Developer</h2>
                        </div>
                        <div>
                            <h3 className='lg:text-xl text-lg font-semibold italic'>July 2022 - January 2024, Intership, Hybrid</h3>
                        </div>
                    </div>
                    <div className=''>
                        <ol className='list-disc list-inside lg:text-lg text-base flex flex-col gap-2'>
                            <li>Create UI/UX Design for several Landing Pages, Websites and Web Applications</li>
                            <li>Building a database using MySQL</li>
                            <li>Building Websites and Web Applications using the Laravel framework</li>
                            <li>Updating existing Websites and Web Applications</li>
                        </ol>
                    </div>
                    <div className='flex items-center flex-wrap gap-3'>
                        <div className='px-4 py-2 border-linear-blue rounded-[2rem]'>
                            <h3 className='text-base font-semibold'>Laravel</h3>
                        </div>
                        <div className='px-4 py-2 border-linear-blue rounded-[2rem]'>
                            <h3 className='text-base font-semibold'>PHP</h3>
                        </div>
                        <div className='px-4 py-2 border-linear-blue rounded-[2rem]'>
                            <h3 className='text-base font-semibold'>JavaScript</h3>
                        </div>
                        <div className='px-4 py-2 border-linear-blue rounded-[2rem]'>
                            <h3 className='text-base font-semibold'>SQL</h3>
                        </div>
                        <div className='px-4 py-2 border-linear-blue rounded-[2rem]'>
                            <h3 className='text-base font-semibold'>Bootstrap</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience