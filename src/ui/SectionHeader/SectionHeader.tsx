import type { ReactNode } from 'react'
import { cn } from '../../shared/utils/cn'
import { badge, typography } from '../styles/classes'

type SectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  description?: string
  tone?: 'primary' | 'accent'
  className?: string
  descriptionClassName?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  tone = 'primary',
  className,
  descriptionClassName,
}: SectionHeaderProps) {
  const toneClasses =
    tone === 'accent'
      ? { badge: badge.accent, label: badge.labelAccent }
      : { badge: badge.primary, label: badge.labelPrimary }

  return (
    <div className={cn('text-center mb-16 animate-on-scroll', className)}>
      <div className={cn(badge.base, toneClasses.badge)}>
        <span className={toneClasses.label}>{eyebrow}</span>
      </div>
      <h2 className={typography.sectionTitle}>{title}</h2>
      {description && (
        <p className={cn(typography.sectionDescLg, descriptionClassName)}>{description}</p>
      )}
    </div>
  )
}
