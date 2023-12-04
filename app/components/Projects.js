import Image from 'next/image'
import React from 'react'

function Projects() {
    const listProjects = [
        { label: 'website-sobatkerja', src: '/img/sobatkerja.png', alt: 'website-sobatkerja', title: 'Website SobatKerja' },
        { label: 'website-travi', src: '/img/travi.png', alt: 'website-travi', title: 'Website Travi (Travel Village)' },
        { label: 'sobatkerja-application', src: '/img/sobatkerja-mobile.png', alt: 'sobatkerja-application', title: 'SobatKerja Application' },
        { label: 'redesign-website-iflab', src: '/img/iflab.png', alt: 'redesign-website-iflab', title: 'Redesign Website IFLAB' },
    ]
    return (
        <div className='flex flex-col items-center mt-16 gap-6'>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-2xl font-medium'>My Projects</h1>
                <hr className='w-10 border-t-[3px] border-white rounded' />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full justify-center items-center gap-14 px-6'>
                {listProjects.map((data, index) => {
                    return (
                        <div className='flex flex-col items-center justify-start gap-5' aria-label={data.label} key={index}>
                            <Image className='w-auto h-auto rounded-3xl hover:brightness-90' src={data.src} width={500} height={500} quality={100} alt={data.alt}/>
                            <h1 className='lg:text-lg text-base font-medium'>{data.title}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects