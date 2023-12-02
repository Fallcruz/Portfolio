import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='grid grid-cols-2 px-4 mt-6'>
            <div className='flex flex-col items-start justify-center ms-12 me-0 gap-5'>
                <h3 className='text-2xl font-semibold uppercase tracking-wide'>Rizky Khoiruddin</h3>
                <h1 className='text-blue text-5xl font-bold'>Fullstack Developer</h1>
                <p className='text-lg leading-7'>
                    Saya menerapkan desain antarmuka pengguna dan memecahkan masalah pengguna dengan HTML, CSS, Javascript dan PHP serta menguasai Framework Laravel yang sudah saya implementasikan ke dalam beberapa project yang sudah saya buat.
                </p>
                <Link href='/projects' className='bg-blue text-white font-bold px-4 py-2 rounded'>Contact With Me</Link>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <Image src='/img/pic-profile.png' width={360} height={360} alt='logo' priority={true} />
            </div>
        </div>
    )
}

export default Header