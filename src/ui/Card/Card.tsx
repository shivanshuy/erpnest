import type { ReactNode } from 'react'
import { cn } from '../../shared/utils/cn'
import { card } from '../styles/classes'

type CardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
  bordered?: boolean
  compact?: boolean
}

export function Card({ children, className, hover, bordered, compact }: CardProps) {
  const base = compact ? card.glassSm : bordered ? card.glassBorder : hover ? card.glassHover : card.glass
  return <div className={cn(base, className)}>{children}</div>
}
