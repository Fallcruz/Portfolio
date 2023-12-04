import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='flex lg:flex-row flex-col-reverse lg:px-0 px-0 lg:ms-6 ms-0 mt-6 lg:gap-0 gap-12'>
            <div className='flex flex-col basis-[50%] items-start justify-center lg:ms-10 ms-0 me-0 gap-5'>
                <h1 className='text-2xl font-semibold uppercase tracking-wide'>Rizky Khoiruddin</h1>
                <h2 className='text-blue text-5xl font-bold'>Fullstack Developer</h2>
                <p className='lg:text-lg text-base lg:leading-[30px] leading-7'>
                Saya memiliki latar belakang ranah teknologi digital, fokus utama saya adalah Frontend Developer dan UI Design. Saya adalah tipe orang yang menggunakan waktu kosong untuk belajar suatu hal yang belum pernah saya coba, maka dari itu saya suka dengan hal baru. Dari sana, saya mendapat tekanan lebih untuk belajar dengan cepat dan mendapatkan banyak pengalaman baru.
                </p>
                <p className='lg:text-lg text-base lg:leading-[30px] leading-7'>
                Saya menerapkan desain antarmuka pengguna dan memecahkan masalah pengguna dengan HTML, CSS, Javascript dan PHP serta menguasai Framework Laravel yang sudah saya implementasikan kedalam beberapa project yang sudah saya buat. Selain itu saya juga belajar bahasa pemrograman Python, Golang, C++ dan Java.
                </p>
            </div>
            <div className='flex flex-row basis-[50%] items-center justify-center'>
                <Image className='lg:w-auto w-72 lg:h-96 h-auto' src='/img/pic-profile.png' width={500} height={500} quality={100} alt='logo' priority={true}/>
            </div>
        </div>
    )
}

export default page