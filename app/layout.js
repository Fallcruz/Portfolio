// import './globals.css'
import './style.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import { Analytics } from '@vercel/analytics/react';

export const metadata = {
    title: 'Portfolio - Rizky Khoiruddin',
    description: 'Portfolio - Rizky Khoiruddin',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="./" sizes="any" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/1.35.0/iconfont/tabler-icons.min.css" defer />
            </head>
            <body>
                <main className="flex flex-col min-h-screen max-w-[1600px] mx-auto gap-4">
                    <Navbar />
                    <div className='lg:min-h-[120px] min-h-[80px]'></div>
                    <div className='lg:px-16 px-8'>
                        {children}
                    </div>
                    <div className='min-h-[80px]'></div>
                    <Footer />
                </main>
                {/* <Analytics /> */}
            </body>
        </html>
    )
}
