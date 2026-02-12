import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-white/10 pt-20 pb-8 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-white mb-6 block">
              GGIT<span className="text-brand-blue">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Engineering the future of digital business. We build scalable, high-performance systems for forward-thinking companies.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <Link key={i} href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300 hover:scale-110 border border-white/5 hover:border-brand-blue/50">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-lg">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['Custom Software', 'Mobile Development', 'AI & Automation', 'Industrial IoT'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-brand-cyan transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-lg">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-4 group">
                <MapPin size={20} className="text-brand-blue mt-0.5 group-hover:text-brand-cyan transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">8 A Newton Cres<br/>Melbourne, VIC 3075</span>
              </li>
              <li>
                <a href="mailto:contact@ggit.com" className="hover:text-brand-blue transition-colors text-lg font-medium">contact@ggit.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} GGIT Systems. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
