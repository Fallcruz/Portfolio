import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='flex flex-row items-center justify-between py-4'>
            <div className='flex flex-row items-center gap-1'>
                <Image className='' src='/img/round-profile.png' width={72} height={72} alt='logo' priority={true} />
                <h1 className='mt-1 text-[3.5rem] font-rakkas leading-none tracking-[-0.5rem]'>RK</h1>
            </div>
            <ul className='hidden lg:flex flex-row items-center justify-end gap-12'>
                <li>
                    <Link href='/' className='font-plus-jakarta-sans text-base font-medium hover:text-gray active'>Home</Link>
                </li>
                <li>
                    <Link href='/' className='font-plus-jakarta-sans text-base font-medium hover:text-gray'>Projects</Link>
                </li>
                <li>
                    <Link href='/' className='font-plus-jakarta-sans text-base font-medium hover:text-gray'>About</Link>
                </li>
                <li>
                    <Link href='/' className='font-plus-jakarta-sans text-base font-medium hover:text-gray'>Contacts</Link>
                </li>
            </ul>
            <div className='flex lg:hidden items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
            </div>
        </nav>
    )
}

export default Navbar