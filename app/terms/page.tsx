import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service | GGIT Systems',
  description: 'Terms of Service for GGIT Systems.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <div className="container mx-auto px-6 py-32 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-cyan transition-colors mb-12 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Terms of Service<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span>
        </h1>
        <p className="text-gray-500 text-sm font-mono mb-12">Last updated: April 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement</h2>
            <p>
              By accessing and using the GGIT Systems website (&quot;the Site&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
            <p>
              GGIT Systems provides technology consulting, software development, and fractional CTO services. The specific scope, deliverables, and terms of any engagement will be defined in a separate agreement between GGIT Systems and the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, and design — is the property of GGIT Systems and is protected by Australian and international copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Limitation of Liability</h2>
            <p>
              The information on this website is provided &quot;as is&quot; without warranties of any kind. GGIT Systems shall not be liable for any damages arising from the use of this website or reliance on its content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. External Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Victoria, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of Victoria.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Changes</h2>
            <p>
              We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
            <p>
              For questions about these terms, contact us at:<br />
              <a href="mailto:gabriel.gimenes@ggitsystems.com.au" className="text-brand-cyan hover:underline">gabriel.gimenes@ggitsystems.com.au</a><br />
              King Street, Melbourne, VIC, Australia
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
