import { footerServices, quickLinks, contactInfo } from '../../../shared/data'
import { scrollToSection } from '../../../shared/utils/scroll'
import { Button, Logo, MailIcon, NewsletterInput, PhoneIcon } from '../../../ui'
import { FooterLinkColumn } from './FooterLinkColumn'

export function Footer() {
  return (
    <footer className="pt-20 pb-8 bg-dark-950 relative overflow-hidden border-t border-dark-800">
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex mb-6 group" aria-label="ERPNest home">
              <div className="transform group-hover:scale-105 transition-transform">
                <Logo />
              </div>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Leading SAP Basis consulting services with global coverage and expertise in SAP
              S/4HANA, BTP, and RISE with SAP.
            </p>

            <div className="space-y-2">
              <a
                href="tel:+919354027976"
                className="flex items-center gap-2 text-gray-400 hover:text-primary-300 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                {contactInfo.phone}
              </a>
              <a
                href="tel:+917263945337"
                className="flex items-center gap-2 text-gray-400 hover:text-primary-300 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                {contactInfo.phone2}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-primary-300 transition-colors"
              >
                <MailIcon className="w-4 h-4" />
                {contactInfo.email}
              </a>
            </div>

            <div className="mt-8">
              <p className="text-white font-medium mb-4">Subscribe to Our Newsletter</p>
              <div className="flex gap-2">
                <NewsletterInput type="email" placeholder="Enter your email" aria-label="Email for newsletter" />
                <Button variant="subscribe">Subscribe</Button>
              </div>
            </div>
          </div>

          <FooterLinkColumn title="Quick Links" links={quickLinks} onNavigate={scrollToSection} />
          <FooterLinkColumn title="Services" links={footerServices} onNavigate={scrollToSection} />
        </div>

        <div className="pt-8 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            Copyright {new Date().getFullYear()}, ERP Nest Pvt. Ltd. | Designed by{' '}
            <span className="text-primary-400">Neurosentia</span>
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
