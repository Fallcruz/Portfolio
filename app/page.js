import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen max-w-[1600px] mx-auto px-20 gap-4">
            <Navbar/>
            <div className='min-h-[120px]'></div>
            <Jumbotron/>
        </main>
    )
}
