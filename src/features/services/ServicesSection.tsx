import { services } from '../../shared/data'
import { Container, Section, SectionHeader } from '../../ui'
import { ServiceCard } from './ServiceCard'

export function ServicesSection() {
  return (
    <Section id="services" className="section-services">
      <div className="absolute inset-0 geo-pattern" aria-hidden="true" />
      <Container className="relative z-10">
        <SectionHeader
          className="mb-20"
          tone="accent"
          eyebrow="OUR SERVICES"
          title={
            <>
              Comprehensive SAP <span className="text-gradient">Solutions</span>
            </>
          }
          description="Comprehensive SAP Basis consulting services designed to optimize, secure, and transform your enterprise systems."
          descriptionClassName="text-lg max-w-2xl mx-auto"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
