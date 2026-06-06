import type { NavLink } from '../../../shared/types'

type DesktopNavProps = {
  links: NavLink[]
  onNavigate: (href: string) => void
}

export function DesktopNav({ links, onNavigate }: DesktopNavProps) {
  return (
    <ul className="hidden lg:flex items-center gap-8 flex-1 justify-center">
      {links.map((item) => (
        <li key={item.label}>
          <button
            type="button"
            onClick={() => onNavigate(item.href)}
            className="text-gray-300 hover:text-white transition-colors relative group py-2"
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300" />
          </button>
        </li>
      ))}
    </ul>
  )
}
