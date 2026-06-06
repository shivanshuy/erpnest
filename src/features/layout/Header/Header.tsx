import { navLinks } from '../../../shared/data'
import { useActiveSection } from '../../../shared/hooks/useActiveSection'
import { useScrollPosition } from '../../../shared/hooks/useScrollPosition'
import { cn } from '../../../shared/utils/cn'
import { scrollToSection } from '../../../shared/utils/scroll'
import { Logo } from '../../../ui'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

const sectionHrefs = navLinks.map((link) => link.href)

export function Header() {
  const scrolled = useScrollPosition(50)
  const activeHref = useActiveSection(sectionHrefs)

  return (
    <header
      className={cn(
        'site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'header-scrolled py-4 lg:py-5' : 'bg-transparent py-5 lg:py-7',
      )}
    >
      <nav
        className="relative max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a href="#home" className="flex items-center group shrink-0 min-w-0" aria-label="ERPNest home">
          <div className="transform group-hover:scale-105 transition-transform duration-300">
            <Logo iconClassName="w-8 h-8 lg:w-9 lg:h-9" compact />
          </div>
        </a>

        <DesktopNav links={navLinks} activeHref={activeHref} onNavigate={scrollToSection} />
        <MobileNav links={navLinks} activeHref={activeHref} onNavigate={scrollToSection} />
      </nav>
    </header>
  )
}
