import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='flex flex-row items-center justify-between px-9 py-4'>
            <div className='flex flex-row items-center gap-1'>
                <Image className='' src='/img/round-profile.png' width={72} height={72} alt='logo' priority={true} />
                <h1 className='mt-1 text-[3.5rem] font-rakkas leading-none tracking-[-0.5rem]'>RK</h1>
            </div>
            <ul className='flex flex-row items-center justify-end gap-10'>
                <li>
                    <Link href='/' className='text-lg font-medium hover:text-gray'>Home</Link>
                </li>
                <li>
                    <Link href='/' className='text-lg font-medium hover:text-gray'>Projects</Link>
                </li>
                <li>
                    <Link href='/' className='text-lg font-medium hover:text-gray'>About</Link>
                </li>
                <li>
                    <Link href='/' className='text-lg font-medium hover:text-gray'>Contacts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar