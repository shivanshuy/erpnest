/** Shared Tailwind class groups for UI primitives */
export const layout = {
  container: 'max-w-7xl mx-auto px-6',
  section: 'py-32 relative overflow-hidden',
} as const

export const badge = {
  base: 'inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6',
  primary: 'bg-primary-500/10 border border-primary-500/20',
  accent: 'bg-accent-500/10 border border-accent-500/20',
  glass: 'glass-effect mb-8 animate-fade-in',
  labelPrimary: 'text-primary-400 text-sm font-medium',
  labelAccent: 'text-accent-400 text-sm font-medium',
} as const

export const button = {
  base: 'inline-flex items-center gap-2 font-semibold transition-all',
  primary:
    'px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-500 hover:to-primary-600 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25',
  primaryCompact:
    'px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-500 hover:to-primary-600',
  outline:
    'px-8 py-4 rounded-full border border-gray-600 text-gray-300 hover:border-primary-500 hover:text-white',
  submit:
    'w-full px-8 py-4 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold hover:from-primary-500 hover:to-primary-600 transition-all transform hover:scale-[1.02]',
  subscribe:
    'px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium hover:from-primary-500 hover:to-primary-600 transition-all',
} as const

export const card = {
  glass: 'glass-effect rounded-2xl p-8',
  glassHover: 'glass-effect rounded-2xl p-8 hover-lift',
  glassBorder: 'glass-effect rounded-2xl p-8 border-2 border-dark-700',
  glassSm: 'glass-effect rounded-xl p-6',
} as const

export const form = {
  label: 'block text-sm font-medium text-gray-300 mb-2',
  control:
    'w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors',
  controlPlain:
    'flex-1 px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors',
} as const

export const typography = {
  sectionTitle: 'text-4xl md:text-5xl font-bold text-white mb-6',
  sectionDesc: 'text-gray-400 text-lg max-w-2xl mx-auto',
  sectionDescLg: 'text-gray-400 text-xl max-w-2xl mx-auto',
  body: 'text-gray-400 leading-relaxed',
} as const
