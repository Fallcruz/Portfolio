import Image from 'next/image'
import React from 'react'

function Skills() {
    const listSkills = [
        { label: 'html', src: '/img/html.svg', alt: 'html' },
        { label: 'css', src: '/img/css.svg', alt: 'css' },
        { label: 'js', src: '/img/js.svg', alt: 'js' },
        { label: 'python', src: '/img/python.svg', alt: 'python' },
        { label: 'bootstrap', src: '/img/bootstrap.svg', alt: 'bootstrap' },
        { label: 'tailwind', src: '/img/tailwind.svg', alt: 'tailwind' },
        { label: 'php', src: '/img/php.svg', alt: 'php' },
        { label: 'laravel', src: '/img/laravel.svg', alt: 'laravel' },
        { label: 'reactjs', src: '/img/reactjs.svg', alt: 'reactjs' },
        { label: 'nextjs', src: '/img/nextjs.svg', alt: 'nextjs' },
        { label: 'outsystems', src: '/img/outsystems.svg', alt: 'outsystems' },
    ]
    return (
        <div className='flex flex-col items-center mt-20 gap-6'>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='lg:text-6xl text-5xl font-extrabold uppercase tracking-wide'>Skills</h1>
                <h4 className='lg:text-lg text-base font-semibold uppercase tracking-[0.8rem] linear-blue text-transparent ms-2'>Explore Now</h4>
            </div>
            <div className='w-full flex flex-row flex-wrap items-center justify-center rounded-lg lg:gap-4 gap-4 lg:px-8 px-5 py-5'>
                {listSkills.map((data, index) => {
                    return (
                        <div className='p-3 bg-white rounded-xl' aria-label={data.label} key={index}>
                            <Image className='w-auto lg:h-12 h-10' src={data.src} width={500} height={500} quality={100} alt={data.alt}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills