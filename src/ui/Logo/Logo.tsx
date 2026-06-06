import { cn } from '../../shared/utils/cn'
import { LogoMark } from './LogoMark'

type LogoProps = {
  className?: string
  iconClassName?: string
  compact?: boolean
}

export function Logo({ className, iconClassName = 'w-10 h-10', compact = false }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2 sm:gap-3', className)}>
      <LogoMark className={iconClassName} />
      <span
        className={cn(
          'font-logo font-semibold text-white tracking-[0.03em]',
          compact ? 'text-base lg:text-lg' : 'text-xl',
        )}
      >
        ERPNest
      </span>
    </div>
  )
}
