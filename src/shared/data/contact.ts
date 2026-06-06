export const contactInfo = {
  phone: '+91 93540 27976',
  phone2: '+91 7263945337',
  email: 'kris01@erpnest.co.in',
  globalCoverage:
    'We provide comprehensive SAP Basis consulting services worldwide with 24/7 support capabilities.',
} as const

export const enquiryOptions = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'service', label: 'Service Request' },
  { value: 'partnership', label: 'Partnership' },
] as const

export const requestOptions = [
  { value: 'question', label: 'Question' },
  { value: 'information', label: 'Information Request' },
  { value: 'consultation', label: 'Consultation' },
] as const

export const initialContactForm = {
  name: '',
  email: '',
  enquiryType: 'general',
  requestType: 'question',
  message: '',
} as const
