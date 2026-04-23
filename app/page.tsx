import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'

import DirectContact from '@/components/sections/DirectContact'
import Services from '@/components/sections/Services'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-brand-blue/30 selection:text-white">
      <Navbar />
      <Hero />
      <DirectContact />
      <Services />
      <CTA />
      <Footer />
    </main>
  )
}
