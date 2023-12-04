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
        { label: 'laravel', src: '/img/laravel.svg', alt: 'laravel' },
        { label: 'reactjs', src: '/img/reactjs.svg', alt: 'reactjs' },
        { label: 'nextjs', src: '/img/nextjs.svg', alt: 'nextjs' },
    ]
    return (
        <div className='flex flex-col items-center mt-14 gap-6'>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-2xl font-medium'>My Skills</h1>
                <hr className='w-10 border-t-[3px] border-white rounded' />
            </div>
            <div className='w-fit flex flex-row flex-wrap items-center justify-center bg-white rounded-lg lg:gap-12 gap-6 lg:px-8 px-5 py-5'>
                {listSkills.map((data, index) => {
                    return (
                        <div aria-label={data.label} key={index}>
                            <Image className='w-auto lg:h-16 h-10' src={data.src} width={500} height={500} quality={100} alt={data.alt}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills