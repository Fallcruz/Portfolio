import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='flex lg:flex-row flex-col-reverse lg:px-4 px-0 mt-6 lg:gap-0 gap-12'>
            <div className='flex flex-col basis-[50%] items-start justify-center lg:ms-10 ms-0 me-0 gap-5'>
                <h3 className='text-2xl font-semibold uppercase tracking-wide'>Rizky Khoiruddin</h3>
                <h1 className='text-blue text-5xl font-bold'>Fullstack Developer</h1>
                <p className='lg:text-lg text-base leading-7'>
                    Saya menerapkan desain antarmuka pengguna dan memecahkan masalah pengguna dengan HTML, CSS, Javascript dan PHP serta menguasai Framework Laravel yang sudah saya implementasikan ke dalam beberapa project yang sudah saya buat.
                </p>
                <Link href='/projects' className='bg-blue text-base text-white font-bold px-4 py-2 rounded'>Contact With Me</Link>
            </div>
            <div className='flex flex-row basis-[50%] items-center justify-center'>
                <Image className='lg:w-auto w-80 lg:h-96 h-auto' src='/img/pic-profile.png' width={500} height={500} quality={100} alt='logo' priority={true}/>
            </div>
        </div>
        // <div className='grid lg:grid-cols-2 grid-cols-1 flex-col-reverse lg:px-4 px-0 mt-6 lg:gap-0 gap-6'>
        //     <div className='flex flex-col items-start justify-center lg:ms-12 ms-0 me-0 gap-5'>
        //         <h3 className='text-2xl font-semibold uppercase tracking-wide'>Rizky Khoiruddin</h3>
        //         <h1 className='text-blue text-5xl font-bold'>Fullstack Developer</h1>
        //         <p className='text-lg leading-7'>
        //             Saya menerapkan desain antarmuka pengguna dan memecahkan masalah pengguna dengan HTML, CSS, Javascript dan PHP serta menguasai Framework Laravel yang sudah saya implementasikan ke dalam beberapa project yang sudah saya buat.
        //         </p>
        //         <Link href='/projects' className='bg-blue text-base text-white font-bold px-4 py-2 rounded'>Contact With Me</Link>
        //     </div>
        //     <div className='flex flex-row items-center justify-center'>
        //         <Image className='w-auto lg:h-96 h-52' src='/img/pic-profile.png' width={500} height={500} quality={100} alt='logo' priority={true}/>
        //     </div>
        // </div>
    )
}

export default Header