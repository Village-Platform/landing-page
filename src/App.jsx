import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded-full bg-mint-500 px-4 py-2 font-semibold text-forest-950 focus:not-sr-only focus:fixed focus:right-4 focus:top-4">
        تخطَّ إلى المحتوى
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
