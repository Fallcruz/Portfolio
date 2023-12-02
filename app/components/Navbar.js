'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const handleNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    // console.log(showNavbar);
    return (
        <nav className='flex flex-row items-center justify-between fixed top-0 left-0 right-0 py-3 lg:px-14 px-6 bg-soft-black'>
            <div className='flex flex-row items-center gap-1'>
                <Image className='lg:w-[72px] lg:h-[72px] w-16 h-16' src='/img/round-profile.png' width={500} height={500} quality={100} alt='logo' priority={true} />
                <h1 className='mt-1 lg:text-[3.5rem] text-[2.5rem] font-rakkas leading-none lg:tracking-[-0.5rem] tracking-[-0.3rem]'>RK</h1>
            </div>
            <ul className={`navbar-menu ${showNavbar ? 'flex' : 'hidden'} lg:flex flex-row lg:w-fit w-[95%] bg-soft-black items-center lg:justify-end justify-center lg:pt-0 lg:pb-0 pt-4 pb-6 gap-12`}>
                <li className='w-fit'>
                    <Link href='/' className='font-plus-jakarta-sans text-base font-medium hover:text-gray active'>Home</Link>
                </li>
                <li className='w-fit'>
                    <Link href='/' className='font-plus-jakarta-sans text-base font-medium hover:text-gray'>Projects</Link>
                </li>
                <li className='w-fit'>
                    <Link href='/' className='font-plus-jakarta-sans text-base font-medium hover:text-gray'>About</Link>
                </li>
                <li className='w-fit'>
                    <Link href='/' className='font-plus-jakarta-sans text-base font-medium hover:text-gray'>Contacts</Link>
                </li>
            </ul>
            <div className='flex lg:hidden items-center justify-center'>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2 cursor-pointer" width={32} height={32} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={() => handleNavbar()}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg> */}
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