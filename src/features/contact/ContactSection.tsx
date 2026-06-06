import { Container, Section, SectionHeader } from '../../ui'
import { ContactForm } from './ContactForm'
import { ContactInfoPanel } from './ContactInfoPanel'

export function ContactSection() {
  return (
    <Section id="contact" className="section-contact">
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="CONTACT US"
          title={
            <>
              Get in <span className="text-gradient">Touch</span>
            </>
          }
          description="Ready to transform your SAP landscape? Contact us today to discuss your requirements."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfoPanel className="space-y-8 animate-on-scroll" />
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  )
}
