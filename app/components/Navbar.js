'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Navbar() {
    const pathname = usePathname()
    const [showNavbar, setShowNavbar] = useState(false)
    const handleNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    useEffect(() => {
        setShowNavbar(false)
    }, [pathname]);

    return (
        <nav className='flex flex-row items-center justify-between fixed top-0 left-0 right-0 lg:py-3 py-2 lg:px-14 px-6 bg-black-secondary/60 backdrop-blur-lg z-50 max-w-[1600px] mx-auto'>
            <Link className='flex flex-row items-center gap-1' href='/'>
                <Image className='lg:w-[72px] lg:h-[72px] w-14 h-14' src='/img/round-profile.png' width={500} height={500} quality={100} alt='logo' priority={true} />
                <h1 className='mt-1 lg:text-[3.5rem] text-[2.2rem] font-rakkas leading-none lg:tracking-[-0.5rem] tracking-[-0.3rem]'>RK</h1>
            </Link>
            <ul className={`navbar-menu ${showNavbar ? 'flex' : 'hidden'} lg:flex flex-row lg:w-fit w-[98%] lg:bg-[#ffffff00] bg-black-secondary items-center lg:justify-end justify-center lg:pt-0 lg:pb-0 pt-5 pb-5 lg:gap-8 gap-2`}>
                <li className={`w-fit ${pathname === '/' ? 'active' : ''}`}>
                    <Link href='/' className='font-plus-jakarta-sans lg:text-base text-sm font-medium hover:text-gray'>Home</Link>
                </li>
                <li className={`w-fit ${pathname.startsWith('/projects') ? 'active' : ''}`}>
                    <Link href='/projects' className='font-plus-jakarta-sans lg:text-base text-sm font-medium hover:text-gray'>Projects</Link>
                </li>
                <li className={`w-fit ${pathname === '/about' ? 'active' : ''}`}>
                    <Link href='/about' className='font-plus-jakarta-sans lg:text-base text-sm font-medium hover:text-gray'>About</Link>
                </li>
                {/* <li className='w-fit'>
                    <Link href='' className='font-plus-jakarta-sans lg:text-base text-sm font-medium hover:text-gray pointer-events-none'>Contacts</Link>
                </li> */}
            </ul>
            <div className='flex lg:hidden items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-deep cursor-pointer" width={32} height={32} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={() => handleNavbar()}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6h16" />
                    <path d="M7 12h13" />
                    <path d="M10 18h10" />
                </svg>
            </div>
        </nav>
    )
}

export default Navbar