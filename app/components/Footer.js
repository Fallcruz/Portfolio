import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className=' bg-black-primary py-6 px-6'>
            <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-2 gap-4'>
                <div className='flex flex-row items-center'>
                    <h1 className='mt-1 lg:text-[3rem] text-[2rem] font-rakkas leading-none lg:tracking-[-0.4rem] tracking-[-0.3rem]'>RK</h1>
                </div>
                <div className='flex flex-row items-center lg:justify-center justify-end gap-5'>
                    <Link href='/'>
                        <svg className='w-auto lg:h-8 h-7 fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </Link>
                    <Link href='/'>
                        <svg className='w-auto lg:h-8 h-7 fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </Link>
                    <Link href='/'>
                        <svg className='w-auto lg:h-8 h-7 fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    </Link>
                </div>
                <div className='flex items-center lg:justify-end justify-start lg:col-auto col-span-2'>
                    <p className='text-xs tracking-wide'>© 2023 <span className='font-bold'>Rizky Khoiruddin</span>. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer