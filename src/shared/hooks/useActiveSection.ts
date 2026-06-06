import { useEffect, useState } from 'react'

export function useActiveSection(hrefs: string[], offset = 120) {
  const [activeHref, setActiveHref] = useState(hrefs[0] ?? '')

  useEffect(() => {
    const sections = hrefs
      .map((href) => ({ href, el: document.querySelector(href) as HTMLElement | null }))
      .filter((section): section is { href: string; el: HTMLElement } => section.el !== null)

    if (!sections.length) return

    const updateActive = () => {
      let current = sections[0].href

      for (const section of sections) {
        if (section.el.getBoundingClientRect().top <= offset) {
          current = section.href
        }
      }

      setActiveHref(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)

    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [hrefs, offset])

  return activeHref
}
