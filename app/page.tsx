import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'

import About from '@/components/sections/About'
import TechStack from '@/components/sections/TechStack'
import LiveDemo from '@/components/sections/LiveDemo'
import DirectContact from '@/components/sections/DirectContact'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Portfolio from '@/components/sections/Portfolio'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-brand-blue/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <LiveDemo />
      <DirectContact />
      <Services />
      <Process />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  )
}
