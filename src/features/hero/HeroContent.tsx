import { heroStats } from '../../shared/data'
import { cn } from '../../shared/utils/cn'
import { ArrowRightIcon, Card, Container, LinkButton } from '../../ui'
import { badge } from '../../ui/styles/classes'

const statIcons = [
  'M13 10V3L4 14h7v7l9-11h-7z',
  'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
]

export function HeroContent() {
  return (
    <Container className="relative z-10 py-32 text-center">
      <div className={cn(badge.base, badge.glass)}>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm text-gray-300">SAP Basis Consulting</span>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up">
        <span className="text-white">Transform Your</span>
        <br />
        <span className="text-gradient">SAP Infrastructure</span>
      </h1>

      <p
        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up"
        style={{ animationDelay: '0.2s' }}
      >
        Expert SAP Basis consulting services to optimize, secure, and modernize your enterprise
        systems. Delivery with Excellence.
      </p>

      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-slide-up"
        style={{ animationDelay: '0.4s' }}
      >
        <LinkButton href="#services" variant="primary">
          Explore Services
          <ArrowRightIcon />
        </LinkButton>
        <LinkButton href="#contact" variant="outline">
          Contact Us
        </LinkButton>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-scale-in"
        style={{ animationDelay: '0.6s' }}
      >
        {heroStats.map((stat, index) => (
          <div key={stat.value} className="relative group" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
            <Card hover className="h-full text-left">
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={statIcons[index]} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{stat.value}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.label}</p>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  )
}
