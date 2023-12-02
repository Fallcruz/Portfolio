import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen max-w-[1600px] mx-auto px-8">
            <Navbar/>
        </main>
    )
}
