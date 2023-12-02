import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen max-w-[1600px] mx-auto lg:px-20 px-4 gap-4">
            <Navbar/>
            <div className='min-h-[120px]'></div>
            <Jumbotron/>
        </main>
    )
}
