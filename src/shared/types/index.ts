export type NavLink = {
  label: string
  href: string
}

export type Service = {
  id: string
  title: string
  description: string
  icon: string
  badge: string
  features: readonly string[]
}

export type HeroStat = {
  value: string
  label: string
}

export type ContactFormState = {
  name: string
  email: string
  enquiryType: string
  requestType: string
  message: string
}
