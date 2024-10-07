import Image from 'next/image'
import Link from 'next/link'

function page({ params }) {
    const listProjects = [
        {
            label: 'website-helby',
            src: '/img/helby-full.png',
            alt: 'website-helby', 
            title: 'Website Helby',
            desc: 'Link : https://helby.vercel.app/',
            tools: {
                language: 'Bahasa Pemorograman : HTML, CSS, Javascript',
                framework: 'Framework : NextJS dan Tailwind CSS',
                editor: 'Code Editor : Visual Studio Code',
            },
            source: 'https://helby.vercel.app/',
        },
        {
            label: 'website-portal-berita',
            src: '/img/portal-berita-full.png',
            alt: 'website-portal-berita', 
            title: 'Website Portal Berita Indonesia',
            desc: 'Link : https://portal-berita-indonesia.vercel.app/',
            tools: {
                language: 'Bahasa Pemorograman : HTML, CSS, Javascript',
                framework: 'Framework : NextJS dan Tailwind CSS',
                editor: 'Code Editor : Visual Studio Code',
            },
            source: 'https://portal-berita-indonesia.vercel.app/',
        },
        {
            label: 'website-newsify',
            src: '/img/newsify-full.png',
            alt: 'website-newsify', 
            title: 'Website Newsify',
            desc: 'Link : https://newsify-smoky.vercel.app/',
            tools: {
                language: 'Bahasa Pemorograman : HTML, CSS, Javascript',
                framework: 'Framework : NextJS dan Tailwind CSS',
                editor: 'Code Editor : Visual Studio Code',
            },
            source: 'https://newsify-smoky.vercel.app/',
        },
        {
            label: 'website-estatein',
            src: '/img/estatein-full.png',
            alt: 'website-estatein', 
            title: 'Website Estatein',
            desc: 'Link : https://estatein.vercel.app/',
            tools: {
                language: 'Bahasa Pemorograman : HTML, CSS, Javascript',
                framework: 'Framework : NextJS dan Tailwind CSS',
                editor: 'Code Editor : Visual Studio Code',
            },
            source: 'https://estatein.vercel.app',
        },
        {
            label: 'website-sobatkerja',
            src: '/img/sobatkerja-full.png',
            alt: 'website-sobatkerja', 
            title: 'Website SobatKerja',
            desc: 'SobatKerja adalah sebuah website yang kami buat untuk mencari pekerjaan dan dapat membuka lowongan pekerjaan. Website ini dibangun menggunakan bahasa pemrograman HTML, CSS, Javascript dan PHP serta dibantu dengan Framework Laravel dan Bootstrap. Website ini belum 100% selesai karena masih dalam tahap pembangunan atau pengembangan.',
            tools: {
                language: 'Bahasa Pemorograman : HTML, CSS, Javascript dan PHP',
                framework: 'Framework : Laravel dan Bootstrap',
                editor: 'Code Editor : Visual Studio Code',
            },
            source: 'https://github.com/Fallcruz/Website-SobatKerja',
        },
        {
            label: 'website-travi',
            src: '/img/travi-full.png',
            alt: 'website-travi',
            title: 'Website Travi (Travel Village)',
            desc: 'Travi atau Travel Village merupakan sebuah website yang menawarkan paket berwisata di tempat pedesaan yang masih jarang dikunjungi wisatawan. Selain itu, website ini juga membantu travel untuk menawarkan paket wisata sesuai dengan keinginan mereka. Website ini dibangun menggunakan bahasa pemrograman HTML, CSS, Javascript dan PHP serta dibantu dengan Framework Laravel dan Bootstrap. Website ini sudah 100% selesai tetapi saya tidak mempublishnya.',
            tools: {
                language: 'Bahasa Pemorograman : HTML, CSS, Javascript dan PHP',
                framework: 'Framework : Laravel dan Bootstrap',
                editor: 'Code Editor : Visual Studio Code',
            },
            source: 'https://github.com/Fallcruz/Website-Travi',
        },
        {
            label: 'sobatkerja-application',
            src: '/img/sobatkerja-mobile-full.png',
            alt: 'sobatkerja-application',
            title: 'SobatKerja Application',
            desc: 'SobatKerja Application ini adalah sebuah website SobatKerja namun dalam bentuk aplikasi mobile. Untuk sementara ini saya baru membuat UI nya saja namun untuk kedepannya mungkin saya akan mengimplementasikan UI tersebut menjadi aplikasi mobile.',
            tools: {
                design_tools: 'Design Tools : Figma',
            },
            source: 'https://www.figma.com/file/dUcJCKXDTICvRymKq7dAR8/SobatKerja?node-id=0%3A1',
        },
        {
            label: 'redesign-website-iflab',
            src: '/img/iflab-full.png',
            alt: 'redesign-website-iflab',
            title: 'Redesign Website IFLAB',
            desc: 'Redesign Website IFLAB ini adalah sebuah tugas dari Telkom University untuk merubah tampilan yang lebih menarik dari sebelumnya. Redesign ini hanyalah sekedar UI saja dan tidak akan saya implementasikan ke dalam bentuk website.',
            tools: {
                design_tools: 'Design Tools : Figma',
            },
            source: 'https://www.figma.com/file/MakC0a10rb0KDnEXzyLa11/Website-IFLAB?node-id=0%3A1',
        },
    ]
    const dataProject = listProjects.filter(data => data.label === params.slug)[0]
    return (
        <div className='flex flex-col gap-8'>
            <Link className='w-fit flex flex-row items-center gap-2' href={`/projects`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left cursor-pointer lg:w-6 md:w-6 w-4 h-auto" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M5 12l6 6" />
                    <path d="M5 12l6 -6" />
                </svg>
                <p className='text-lg font-semibold leading-tight'>Back</p>
            </Link>
            <div className='w-full flex flex-col gap-8'>
                <Image className='w-full h-[25rem] object-cover object-top rounded-3xl' src={dataProject.src} width={1000} height={1000} sizes='100vw' quality={100} alt={dataProject.alt} />
                <h1 className='lg:text-3xl text-xl font-semibold'>{dataProject.title}</h1>
                <div className='flex flex-col gap-3'>
                    <h2 className='lg:text-xl text-lg font-medium'>Deskripsi</h2>
                    <p className='text-gray text-base leading-7'>{dataProject.desc}</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='lg:text-xl text-lg font-medium'>Tools</h2>
                    <ul className='list-disc list-inside'>
                        {Object.keys(dataProject.tools).map((key) => {
                            return (
                                <li key={key} className='text-gray text-base leading-7'>{dataProject.tools[key]}</li>
                            );
                        })}
                    </ul>
                </div>
                <Link href={dataProject.source} className='w-fit bg-blue text-sm text-white font-semibold px-4 py-2 rounded-lg' target='_blank'>View Source</Link>
            </div>
        </div>
    )
}

export default page