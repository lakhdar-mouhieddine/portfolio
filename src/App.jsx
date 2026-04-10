import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Metrics from './components/Metrics'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col gap-24 md:gap-32 relative z-10 w-full overflow-hidden pb-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Metrics />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
