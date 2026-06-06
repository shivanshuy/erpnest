import { footerServices, quickLinks, contactInfo } from '../../../shared/data'
import { scrollToSection } from '../../../shared/utils/scroll'
import { Button, Logo, MailIcon, NewsletterInput, PhoneIcon } from '../../../ui'
import { FooterLinkColumn } from './FooterLinkColumn'

export function Footer() {
  return (
    <footer className="pt-20 pb-8 bg-[#0a2540] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="inline-flex mb-6 group" aria-label="ERPNest home">
              <div className="transform group-hover:scale-105 transition-transform">
                <Logo iconClassName="w-8 h-8 lg:w-9 lg:h-9" compact wordmark="brand" />
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
                <PhoneIcon className="w-4 h-4 shrink-0" />
                {contactInfo.phone}
              </a>
              <a
                href="tel:+917263945337"
                className="flex items-center gap-2 text-gray-400 hover:text-primary-300 transition-colors"
              >
                <PhoneIcon className="w-4 h-4 shrink-0" />
                {contactInfo.phone2}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-primary-300 transition-colors break-all"
              >
                <MailIcon className="w-4 h-4 shrink-0" />
                {contactInfo.email}
              </a>
            </div>

            <div className="mt-8">
              <p className="text-white font-medium mb-4">Subscribe to Our Newsletter</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <NewsletterInput type="email" placeholder="Enter your email" aria-label="Email for newsletter" />
                <Button variant="subscribe">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="footer-columns">
            <FooterLinkColumn title="Quick Links" links={quickLinks} onNavigate={scrollToSection} />
            <FooterLinkColumn
              title="Services"
              links={footerServices}
              onNavigate={scrollToSection}
              className="footer-col-right"
            />
          </div>
        </div>

        <div className="pt-8 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
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
