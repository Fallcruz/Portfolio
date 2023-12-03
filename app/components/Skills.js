import Image from 'next/image'
import React from 'react'

function Skills() {
    return (
        <div className='flex flex-col items-center mt-12 gap-4'>
            <h1 className='text-2xl font-medium'>My Skills</h1>
            <hr className='w-10 border-t-[3px] border-white rounded' />
            <div className='w-fit flex flex-row flex-wrap items-center justify-center bg-white rounded-lg lg:gap-12 gap-6 px-8 py-5'>
                <div aria-label='html'>
                    <Image className='w-auto lg:h-16 h-10' src='/img/html.svg' width={500} height={500} quality={100} alt='html'/>
                </div>
                <div aria-label='css'>
                    <Image className='w-auto lg:h-16 h-10' src='/img/css.svg' width={500} height={500} quality={100} alt='css'/>
                </div>
                <div aria-label='js'>
                    <Image className='w-auto lg:h-16 h-10' src='/img/js.svg' width={500} height={500} quality={100} alt='js'/>
                </div>
                <div aria-label='python'>
                    <Image className='w-auto lg:h-16 h-10' src='/img/python.svg' width={500} height={500} quality={100} alt='python'/>
                </div>
                <div aria-label='bootstrap'>
                    <Image className='w-auto lg:h-16 h-10' src='/img/bootstrap.svg' width={500} height={500} quality={100} alt='bootstrap'/>
                </div>
                <div aria-label='tailwind'>
                    <Image className='w-auto lg:h-16 h-10' src='/img/tailwind.svg' width={500} height={500} quality={100} alt='tailwind'/>
                </div>
                <div aria-label='laravel'>
                    <Image className='w-auto lg:h-16 h-10' src='/img/laravel.svg' width={500} height={500} quality={100} alt='laravel'/>
                </div>
                <div aria-label='reactjs'>
                    <Image className='w-auto lg:h-16 h-10' src='/img/reactjs.svg' width={500} height={500} quality={100} alt='reactjs'/>
                </div>
                <div aria-label='nextjs'>
                    <Image className='w-auto lg:h-16 h-10' src='/img/nextjs.svg' width={500} height={500} quality={100} alt='nextjs'/>
                </div>
            </div>
        </div>
    )
}

export default Skills