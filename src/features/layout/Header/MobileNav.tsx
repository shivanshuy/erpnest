import { useState } from 'react'
import type { NavLink } from '../../../shared/types'
import { cn } from '../../../shared/utils/cn'

type MobileNavProps = {
  links: NavLink[]
  onNavigate: (href: string, onComplete?: () => void) => void
}

export function MobileNav({ links, onNavigate }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 ml-auto"
      >
        <span className={cn('w-6 h-0.5 bg-white transition-all', open && 'rotate-45 translate-y-2')} />
        <span className={cn('w-6 h-0.5 bg-white transition-all', open && 'opacity-0')} />
        <span className={cn('w-6 h-0.5 bg-white transition-all', open && '-rotate-45 -translate-y-2')} />
      </button>

      <div
        className={cn(
          'lg:hidden glass-effect border-t border-white/10 overflow-hidden transition-all duration-300 absolute left-0 right-0 top-full',
          open ? 'max-h-96 py-4' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col px-6 gap-2">
          {links.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                onClick={() => onNavigate(item.href, () => setOpen(false))}
                className="w-full text-left py-3 text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
