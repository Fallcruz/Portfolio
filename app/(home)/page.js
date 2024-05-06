import Link from 'next/link'
import Image from 'next/image'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Page() {
    return (
        <>
            <div className='flex lg:flex-row flex-col-reverse lg:px-0 px-0 lg:ms-6 ms-0 mt-6 lg:gap-0 gap-12'>
                <div className='flex flex-col basis-[50%] items-start justify-center lg:ms-10 ms-0 me-0 gap-5'>
                    <h1 className='text-2xl font-bold uppercase tracking-normal'>Rizky Khoiruddin</h1>
                    <h2 className='text-blue text-5xl font-bold tracking-tight'>Fullstack Developer</h2>
                    <p className='lg:text-lg text-base lg:leading-[30px] leading-7'>
                        Saya menerapkan desain antarmuka pengguna dan memecahkan masalah pengguna dengan HTML, CSS, Javascript dan PHP serta menguasai Framework Laravel yang sudah saya implementasikan ke dalam beberapa project yang sudah saya buat.
                    </p>
                    <Link href='/projects' className='bg-blue text-base text-white font-bold px-4 py-2 rounded-lg tracking-tight'>My Projects</Link>
                </div>
                <div className='flex flex-row basis-[50%] items-center justify-center'>
                    <Image className='lg:w-auto w-72 lg:h-96 h-auto' src='/img/pic-profile.png' width={500} height={500} sizes='100vw' quality={100} alt='logo' priority={true}/>
                </div>
            </div>
            <Skills />
            <Projects />
        </>
    )
}
