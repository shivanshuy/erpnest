import type { NavLink } from '../../../shared/types'
import { cn } from '../../../shared/utils/cn'

type DesktopNavProps = {
  links: NavLink[]
  activeHref: string
  onNavigate: (href: string) => void
}

export function DesktopNav({ links, activeHref, onNavigate }: DesktopNavProps) {
  return (
    <div className="header-nav-pill hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center">
      <ul className="flex items-center">
        {links.map((item) => {
          const isActive = activeHref === item.href

          return (
            <li key={item.label}>
              <button
                type="button"
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onNavigate(item.href)}
                className={cn('header-nav-link', isActive && 'is-active')}
              >
                {item.label}
                <span className="header-nav-underline" aria-hidden="true" />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
