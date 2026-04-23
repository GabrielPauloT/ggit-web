import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | GGIT Systems',
  description: 'Privacy Policy for GGIT Systems.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <div className="container mx-auto px-6 py-32 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-cyan transition-colors mb-12 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Privacy Policy<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span>
        </h1>
        <p className="text-gray-500 text-sm font-mono mb-12">Last updated: April 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              GGIT Systems (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This policy describes how we collect, use, and protect your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Contact information you provide via email (name, email address, project details)</li>
              <li>Usage data collected through cookies and analytics tools (pages visited, time on site, browser type)</li>
              <li>Language preference stored locally in your browser</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Respond to your enquiries and provide our services</li>
              <li>Improve our website and user experience</li>
              <li>Analyse website traffic and usage patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Cookies</h2>
            <p>
              Our website uses cookies to remember your preferences (such as language selection) and to analyse site traffic. You can control cookie settings through your browser. We will ask for your consent before setting non-essential cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Third-Party Services</h2>
            <p>
              We may use third-party services (such as analytics providers) that collect and process data on our behalf. These services have their own privacy policies governing the use of your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Security</h2>
            <p>
              We take reasonable steps to protect your personal information from misuse, loss, unauthorised access, modification, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>
              Under the Australian Privacy Principles, you have the right to access and correct your personal information. To make a request, contact us at{' '}
              <a href="mailto:gabriel.gimenes@ggitsystems.com.au" className="text-brand-cyan hover:underline">gabriel.gimenes@ggitsystems.com.au</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at:<br />
              <a href="mailto:gabriel.gimenes@ggitsystems.com.au" className="text-brand-cyan hover:underline">gabriel.gimenes@ggitsystems.com.au</a><br />
              King Street, Melbourne, VIC, Australia
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
