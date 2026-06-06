import type { HeroStat, Service } from '../types'

export const heroStats: HeroStat[] = [
  {
    value: 'Expert Consulting',
    label:
      'Specialized SAP Basis consulting with deep technical expertise and industry best practices.',
  },
  {
    value: 'Global Coverage',
    label:
      'Comprehensive support across multiple regions with 24/7 availability for critical systems.',
  },
  {
    value: 'Security First',
    label:
      'Advanced SAP security and compliance solutions to protect your business-critical data.',
  },
]

export const serviceHighlights = [
  'SAP S/4HANA Migration & Support',
  'SAP BASIS Administration',
  'SAP BTP Implementation',
  'RISE with SAP Consulting',
  'SAP Basis/Security',
  'AI & Joule Integration',
] as const

export const services: Service[] = [
  {
    id: 's4hana',
    title: 'SAP S/4HANA',
    description:
      'End-to-end S/4HANA migration, implementation, and optimization services to modernize your SAP landscape.',
    icon: '🚀',
    badge: 'Migration',
    features: [
      'System conversion and migration',
      'Greenfield implementations',
      'Performance optimization',
      'Post-migration support',
    ],
  },
  {
    id: 'sap-basis',
    title: 'SAP BASIS',
    description:
      'Comprehensive BASIS administration services ensuring optimal performance, reliability, and availability of your SAP systems.',
    icon: '🖥️',
    badge: 'Administration',
    features: [
      'System administration',
      'Transport management',
      'Patch and upgrade management',
      'System monitoring and tuning',
    ],
  },
  {
    id: 'sap-btp',
    title: 'SAP BTP',
    description:
      'Leverage SAP Business Technology Platform to build, extend, and integrate cloud-native applications.',
    icon: '☁️',
    badge: 'Cloud',
    features: [
      'BTP architecture design',
      'Integration services',
      'Extension development',
      'Cloud migration',
    ],
  },
  {
    id: 'rise-with-sap',
    title: 'RISE with SAP',
    description:
      'Accelerate your cloud transformation journey with RISE with SAP consulting and implementation services.',
    icon: '📊',
    badge: 'Transformation',
    features: [
      'RISE assessment and planning',
      'Cloud migration strategy',
      'Business process optimization',
      'Managed services',
    ],
  },
  {
    id: 'sap-security',
    title: 'SAP Basis/Security',
    description:
      'Protect your SAP environment with advanced security solutions, compliance management, and risk mitigation.',
    icon: '🔒',
    badge: 'Security',
    features: [
      'Security assessments',
      'Authorization management',
      'Compliance monitoring',
      'Vulnerability management',
    ],
  },
  {
    id: 'ai-joule',
    title: 'AI & Joule',
    description:
      'Harness the power of AI and SAP Joule to drive intelligent automation and enhanced decision-making.',
    icon: '🧠',
    badge: 'Innovation',
    features: [
      'AI strategy and roadmap',
      'Joule implementation',
      'Intelligent automation',
      'Predictive analytics',
    ],
  },
]
