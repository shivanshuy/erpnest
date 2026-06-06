import type { NavLink } from '../../../shared/types'

type FooterLinkColumnProps = {
  title: string
  links: NavLink[]
  onNavigate: (href: string) => void
}

export function FooterLinkColumn({ title, links, onNavigate }: FooterLinkColumnProps) {
  return (
    <div>
      <h4 className="text-white font-bold mb-6">{title}</h4>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.label}>
            <button
              type="button"
              onClick={() => onNavigate(item.href)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
