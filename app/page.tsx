import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-brand-blue/30 selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  )
}
