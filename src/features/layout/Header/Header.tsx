import { navLinks } from '../../../shared/data'
import { useScrollPosition } from '../../../shared/hooks/useScrollPosition'
import { cn } from '../../../shared/utils/cn'
import { scrollToSection } from '../../../shared/utils/scroll'
import { Logo } from '../../../ui'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

export function Header() {
  const scrolled = useScrollPosition(50)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative',
        scrolled ? 'glass-effect py-3' : 'bg-transparent py-5',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center" aria-label="Main navigation">
        <a href="#" className="flex items-center group shrink-0" aria-label="ERPNest home">
          <div className="transform group-hover:scale-105 transition-transform">
            <Logo />
          </div>
        </a>

        <DesktopNav links={navLinks} onNavigate={scrollToSection} />
        <div className="hidden lg:block w-[180px]" />
        <MobileNav links={navLinks} onNavigate={scrollToSection} />
      </nav>
    </header>
  )
}
