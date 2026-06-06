export const aboutContent = {
  mission:
    'To empower businesses with world-class SAP Basis consulting services that drive digital transformation and operational excellence.',
  expertise:
    'Deep technical knowledge in SAP S/4HANA, BASIS, BTP, RISE with SAP, security, and cutting-edge AI technologies including Joule.',
  approach:
    'Client-centric methodology combining industry best practices with innovative solutions tailored to your unique business requirements.',
  description: [
    'At ERPNest, we specialize in providing comprehensive SAP Basis consulting services that help organizations optimize their SAP infrastructure, enhance security, and drive digital transformation. Our team of certified experts brings years of experience in managing complex SAP landscapes across diverse industries.',
    "We understand that every business has unique requirements. That's why we take a consultative approach, working closely with our clients to understand their challenges and deliver tailored solutions that align with their strategic objectives. From SAP S/4HANA migrations to implementing cutting-edge AI capabilities with Joule, we're committed to helping you stay ahead in the rapidly evolving digital landscape.",
    'Our expertise spans the entire SAP ecosystem, including SAP BASIS administration, SAP BTP implementation, RISE with SAP consulting, and comprehensive security solutions. With global coverage and 24/7 support capabilities, we ensure your SAP systems run smoothly, securely, and efficiently at all times.',
  ],
} as const

export const aboutPillars = [
  { title: 'Our Mission', content: aboutContent.mission, tone: 'primary' as const },
  { title: 'Our Expertise', content: aboutContent.expertise, tone: 'accent' as const },
  { title: 'Our Approach', content: aboutContent.approach, tone: 'green' as const },
]
