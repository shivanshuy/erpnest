import { useEffect, useState } from 'react'
import type { NavLink } from '../../../shared/types'
import { cn } from '../../../shared/utils/cn'

type MobileNavProps = {
  links: NavLink[]
  activeHref: string
  onNavigate: (href: string, onComplete?: () => void) => void
}

export function MobileNav({ links, activeHref, onNavigate }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const close = () => setOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="lg:hidden ml-auto shrink-0 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors relative z-50"
      >
        <span className={cn('w-5 h-0.5 bg-white transition-all', open && 'rotate-45 translate-y-2')} />
        <span className={cn('w-5 h-0.5 bg-white transition-all', open && 'opacity-0')} />
        <span className={cn('w-5 h-0.5 bg-white transition-all', open && '-rotate-45 -translate-y-2')} />
      </button>

      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="lg:hidden header-mobile-backdrop"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={cn(
          'lg:hidden header-mobile-panel overflow-hidden transition-all duration-300',
          open ? 'max-h-[min(24rem,70vh)] py-3 opacity-100 visible' : 'max-h-0 py-0 opacity-0 invisible pointer-events-none',
        )}
      >
        <ul className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 gap-1">
          {links.map((item) => {
            const isActive = activeHref === item.href

            return (
              <li key={item.label}>
                <button
                  type="button"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => onNavigate(item.href, () => setOpen(false))}
                  className={cn('header-mobile-link', isActive && 'is-active')}
                >
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
