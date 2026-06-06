import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-28"
    >
      <HeroBackground />
      <HeroContent />
    </section>
  )
}
