// import './globals.css'
import './style.scss'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
    title: 'Portfolio - Rizky Khoiruddin',
    description: 'Portfolio - Rizky Khoiruddin',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="./" sizes="any" />
                {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" defer /> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/1.35.0/iconfont/tabler-icons.min.css" defer />
            </head>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
