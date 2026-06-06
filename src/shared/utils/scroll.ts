export function scrollToSection(href: string, onComplete?: () => void) {
  if (!href.startsWith('#') || href.length <= 1) return
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  onComplete?.()
}
