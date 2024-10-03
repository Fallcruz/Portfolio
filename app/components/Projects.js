import Image from 'next/image'
import React from 'react'

function Projects() {
    const listProjects = [
        { label: 'website-portal-berita', src: '/img/portal-berita.png', alt: 'website-portal-berita', title: 'Website Portal Berita Indonesia' },
        { label: 'website-newsify', src: '/img/newsify.png', alt: 'website-newsify', title: 'Website Newsify' },
        { label: 'website-estatein', src: '/img/estatein.png', alt: 'website-estatein', title: 'Website Estatein' },
        { label: 'website-sobatkerja', src: '/img/sobatkerja.png', alt: 'website-sobatkerja', title: 'Website SobatKerja' },
        { label: 'website-travi', src: '/img/travi.png', alt: 'website-travi', title: 'Website Travi (Travel Village)' },
        { label: 'sobatkerja-application', src: '/img/sobatkerja-mobile.png', alt: 'sobatkerja-application', title: 'SobatKerja Application' },
        { label: 'redesign-website-iflab', src: '/img/iflab.png', alt: 'redesign-website-iflab', title: 'Redesign Website IFLAB' },
    ]
    return (
        <div className='flex flex-col items-center mt-20 lg:gap-8 gap-12'>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='lg:text-6xl text-5xl font-extrabold uppercase tracking-wide'>Projects</h1>
                <h4 className='lg:text-lg text-base font-semibold uppercase tracking-[0.8rem] linear-blue text-transparent'>Explore Now</h4>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full justify-center items-center gap-8 lg:px-6'>
                {listProjects.map((data, index) => {
                    return (
                        <div className='flex flex-col items-center justify-start lg:p-4 gap-5' aria-label={data.label} key={index}>
                            <Image className='w-auto h-auto rounded-3xl hover:brightness-90' src={data.src} width={500} height={500} sizes='100vw' quality={100} alt={data.alt}/>
                            <h1 className='lg:text-lg text-base font-medium'>{data.title}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects