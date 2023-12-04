import Image from "next/image"
import Link from "next/link"

function page() {
    const listProjects = [
        {
            label: 'website-sobatkerja',
            src: '/img/sobatkerja.png',
            alt: 'website-sobatkerja', 
            title: 'Website SobatKerja',
            desc: 'SobatKerja adalah sebuah website yang kami buat untuk mencari pekerjaan dan dapat membuka lowongan pekerjaan. Website ini dibangun menggunakan bahasa pemrograman HTML, CSS, Javascript dan PHP serta dibantu dengan Framework Laravel dan Bootstrap. Website ini belum 100% selesai karena masih dalam tahap pembangunan atau pengembangan.',
        },
        {
            label: 'website-travi',
            src: '/img/travi.png',
            alt: 'website-travi',
            title: 'Website Travi (Travel Village)',
            desc: 'Travi atau Travel Village merupakan sebuah website yang menawarkan paket berwisata di tempat pedesaan yang masih jarang dikunjungi wisatawan. Selain itu, website ini juga membantu travel untuk menawarkan paket wisata sesuai dengan keinginan mereka. Website ini dibangun menggunakan bahasa pemrograman HTML, CSS, Javascript dan PHP serta dibantu dengan Framework Laravel dan Bootstrap. Website ini sudah 100% selesai tetapi saya tidak mempublishnya.',
        },
        {
            label: 'sobatkerja-application',
            src: '/img/sobatkerja-mobile.png',
            alt: 'sobatkerja-application',
            title: 'SobatKerja Application',
            desc: 'SobatKerja Application ini adalah sebuah website SobatKerja namun dalam bentuk aplikasi mobile. Untuk sementara ini saya baru membuat UI nya saja namun untuk kedepannya mungkin saya akan mengimplementasikan UI tersebut menjadi aplikasi mobile.',
        },
        {
            label: 'redesign-website-iflab',
            src: '/img/iflab.png',
            alt: 'redesign-website-iflab',
            title: 'Redesign Website IFLAB',
            desc: 'Redesign Website IFLAB ini adalah sebuah tugas dari Telkom University untuk merubah tampilan yang lebih menarik dari sebelumnya. Redesign ini hanyalah sekedar UI saja dan tidak akan saya implementasikan ke dalam bentuk website.',
        },
    ]
    return (
        <div className="flex flex-col gap-10">
            <h1 className='lg:text-3xl text-2xl font-semibold'>My Projects</h1>
            <div className="flex flex-col items-start lg:px-0 px-4 lg:gap-10 gap-16">
                {listProjects.map((data, index) => {
                    return (
                        <div className='w-full flex lg:flex-row flex-col items-center lg:justify-start justify-center lg:gap-14 gap-6' aria-label={data.label} key={index}>
                            <Image className='lg:w-96 w-auto lg:h-96 h-auto rounded-3xl hover:brightness-90' src={data.src} width={500} height={500} quality={100} alt={data.alt} />
                            <div className="flex flex-col lg:items-start items-center lg:gap-10 gap-5">
                                <div className="flex flex-col gap-3">
                                    <h1 className='lg:text-2xl text-lg font-semibold'>{data.title}</h1>
                                    <p className="lg:block hidden text-gray text-sm leading-6">{data.desc}</p>
                                </div>
                                <Link href={`/projects/${data.label}`} className='w-fit bg-blue text-sm text-white font-semibold px-4 py-2 rounded-lg'>View Details</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default page