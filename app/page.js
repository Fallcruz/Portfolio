import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen max-w-[1600px] mx-auto gap-4">
            <Navbar />
            <div className='lg:min-h-[120px] min-h-[100px]'></div>
            <div className='lg:px-20 px-8'>
                <Jumbotron />
                <Skills />
                <Projects />
            </div>
            <div className='min-h-[120px]'></div>
            <Footer />
        </main>
    )
}
