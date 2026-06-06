import { aboutContent, serviceHighlights } from '../../shared/data'
import { ArrowRightIcon, Card, CheckIcon, Container, LinkButton, Section, SectionHeader } from '../../ui'

const pillars = [
  {
    title: 'Our Mission',
    content: aboutContent.mission,
    icon: (
      <svg className="w-7 h-7 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <circle cx="12" cy="12" r="6" strokeWidth={2} />
        <circle cx="12" cy="12" r="2" strokeWidth={2} />
      </svg>
    ),
    iconBox: 'bg-primary-500/10',
  },
  {
    title: 'Our Expertise',
    content: aboutContent.expertise,
    icon: (
      <svg className="w-7 h-7 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    iconBox: 'bg-accent-500/10',
  },
  {
    title: 'Our Approach',
    content: aboutContent.approach,
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    iconBox: 'bg-green-500/10',
  },
]

function AboutGridPattern() {
  return (
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-500" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-grid)" />
      </svg>
    </div>
  )
}

function AboutPillars() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {pillars.map((pillar, index) => (
        <div key={pillar.title} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
          <Card>
            <div className={`w-14 h-14 rounded-lg ${pillar.iconBox} flex items-center justify-center mb-6`}>
              {pillar.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
            <p className="text-gray-400 leading-relaxed">{pillar.content}</p>
          </Card>
        </div>
      ))}
    </div>
  )
}

function AboutHighlight() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
      <div className="relative animate-on-scroll">
        <div className="gradient-border p-8 rounded-2xl">
          <div className="bg-dark-900/50 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4" aria-hidden="true">🖥️</div>
            <h3 className="text-2xl font-bold text-white mb-2">SAP Infrastructure</h3>
            <p className="text-gray-400">Enterprise-grade solutions</p>
          </div>
        </div>
        <div
          className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center animate-float"
          aria-hidden="true"
        >
          <span className="text-2xl">🚀</span>
        </div>
      </div>

      <div className="animate-on-scroll">
        <h3 className="text-3xl font-bold text-white mb-6">Comprehensive SAP Solutions</h3>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          From S/4HANA migrations to AI-powered innovations with Joule, we provide end-to-end SAP
          Basis consulting services tailored to your business needs.
        </p>
        <ul className="space-y-4 mb-8">
          {serviceHighlights.map((item) => (
            <li key={item} className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <CheckIcon className="text-primary-400" />
              </div>
              {item}
            </li>
          ))}
        </ul>
        <LinkButton href="#services" variant="primaryCompact">
          View All Services
          <ArrowRightIcon />
        </LinkButton>
      </div>
    </div>
  )
}

function AboutStory() {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
      <h3 className="text-2xl font-bold text-white mb-6">Excellence in SAP Basis Consulting</h3>
      <p className="text-gray-400 text-lg mb-4">
        Delivering transformative solutions for enterprise SAP landscapes
      </p>
      <div className="space-y-6 text-left">
        {aboutContent.description.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="text-gray-400 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export function AboutSection() {
  return (
    <Section id="about" variant="gradient">
      <AboutGridPattern />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="ABOUT ERPNEST"
          title={
            <>
              Leading the way in <span className="text-gradient">SAP Basis Consulting</span>
            </>
          }
          description="Expertise, innovation, and a commitment to excellence."
        />
        <AboutPillars />
        <AboutHighlight />
        <AboutStory />
      </Container>
    </Section>
  )
}
