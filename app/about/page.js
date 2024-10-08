import Image from 'next/image'
import Link from 'next/link'

function page() {
    return (
        <div className='flex lg:flex-row flex-col-reverse lg:px-0 px-0 lg:ms-6 ms-0 mt-6 lg:gap-0 gap-12'>
            <div className='flex flex-col basis-[50%] items-start justify-center lg:ms-10 ms-0 me-0 gap-5'>
                <h1 className='text-2xl font-bold uppercase tracking-normal'>Rizky Khoiruddin</h1>
                <h2 className='linear-blue text-5xl font-bold tracking-tight pb-1'>Fullstack Developer</h2>
                <p className='lg:text-base text-base lg:leading-[30px] leading-7'>
                    Saya menerapkan desain antarmuka pengguna dan memecahkan masalah pengguna dengan HTML, CSS, Javascript dan PHP serta menguasai Framework Laravel yang sudah saya implementasikan ke dalam beberapa project yang sudah saya buat.
                </p>
                <p className='lg:text-base text-base lg:leading-[30px] leading-7'>
                Saya menerapkan desain antarmuka pengguna dan memecahkan masalah pengguna dengan HTML, CSS, Javascript dan PHP serta menguasai Framework Laravel yang sudah saya implementasikan kedalam beberapa project yang sudah saya buat. Selain itu saya juga belajar bahasa pemrograman Python, Golang, C++ dan Java.
                </p>
            </div>
            <div className='flex flex-row basis-[50%] items-center justify-center'>
                <Image className='lg:w-auto w-72 lg:h-96 h-auto' src='/img/pic-profile-linear.png' width={500} height={500} quality={100} alt='logo' priority={true}/>
            </div>
        </div>
    )
}

export default page