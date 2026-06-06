import type { ReactNode } from 'react'
import { cn } from '../../shared/utils/cn'
import { layout } from '../styles/classes'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'gradient'
}

const variants = {
  default: '',
  dark: 'section-dark',
  gradient: 'section-gradient',
} as const

export function Section({ id, children, className, variant = 'default' }: SectionProps) {
  return (
    <section id={id} className={cn(layout.section, variants[variant], className)}>
      {children}
    </section>
  )
}
