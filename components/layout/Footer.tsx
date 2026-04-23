'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

const socialLinks = [
  { icon: Github, href: 'https://github.com/ggit-systems', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/ggit-systems', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:gabriel.gimenes@ggitsystems.com.au', label: 'Email' },
]

const serviceLinks = [
  { key: 0, href: '#discovery-strategy' },
  { key: 1, href: '#mvp-build' },
  { key: 2, href: '#fractional-cto' },
  { key: 3, href: '#scale-migrate' },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="relative bg-[#050505] border-t border-white/10 pt-20 pb-8 text-white overflow-hidden">
      <div className="section-glow absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[150px] bg-brand-blue/[0.03] rounded-full blur-[80px]" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-white mb-6 block">
              GGIT<span className="text-brand-blue">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="p-3 bg-white/5 rounded-full hover:bg-brand-blue hover:text-white transition-colors duration-300 border border-white/5 hover:border-brand-blue/50">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-lg">{t.footer.servicesTitle}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="hover:text-brand-cyan transition-colors">{t.services.items[link.key].title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-lg">{t.footer.contactTitle}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-4 group">
                <MapPin size={20} className="text-brand-blue mt-0.5 group-hover:text-brand-cyan transition-colors flex-shrink-0" />
                <span className="group-hover:text-gray-300 transition-colors">King Street<br/>Melbourne, VIC</span>
              </li>
              <li>
                <a href="mailto:gabriel.gimenes@ggitsystems.com.au" className="hover:text-brand-blue transition-colors text-sm font-medium break-all">gabriel.gimenes@ggitsystems.com.au</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
