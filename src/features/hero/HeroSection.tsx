import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden geo-pattern"
    >
      <HeroBackground />
      <HeroContent />
    </section>
  )
}
