import { useScrollToTopVisibility } from '../../../shared/hooks/useScrollPosition'
import { ChevronUpIcon } from '../../../ui'

export function ScrollToTop() {
  const visible = useScrollToTopVisibility()

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 flex items-center justify-center hover:from-primary-500 hover:to-primary-600 transition-all transform hover:scale-110 z-50"
    >
      <ChevronUpIcon />
    </button>
  )
}
