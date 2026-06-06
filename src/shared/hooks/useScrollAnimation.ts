import { useEffect } from 'react'

export function useScrollAnimation(selector = '.animate-on-scroll') {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    const timeout = window.setTimeout(() => {
      document.querySelectorAll(selector).forEach((element) => observer.observe(element))
    }, 100)

    return () => {
      window.clearTimeout(timeout)
      observer.disconnect()
    }
  }, [selector])
}
