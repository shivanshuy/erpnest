import { useScrollAnimation } from './shared/hooks/useScrollAnimation'
import { AboutSection } from './features/about/AboutSection'
import { ContactSection } from './features/contact/ContactSection'
import { Footer } from './features/layout/Footer/Footer'
import { Header } from './features/layout/Header/Header'
import { ScrollToTop } from './features/layout/ScrollToTop/ScrollToTop'
import { HeroSection } from './features/hero/HeroSection'
import { ServicesSection } from './features/services/ServicesSection'

export default function App() {
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-[#050505]">
      <a href="#home" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
