import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Showcase from './components/Showcase'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Industries from './components/Industries'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#070c18] text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <Showcase />
      <Features />
      <HowItWorks />
      <Industries />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App