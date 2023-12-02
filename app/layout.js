// import './globals.css'
import './style.scss'

export const metadata = {
    title: 'Portfolio - Rizky Khoiruddin',
    description: 'Portfolio - Rizky Khoiruddin',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="./" sizes="any" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}
