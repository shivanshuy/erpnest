import { cn } from '../../shared/utils/cn'
import { LogoMark } from './LogoMark'

type LogoProps = {
  className?: string
  iconClassName?: string
  compact?: boolean
  wordmark?: 'default' | 'brand'
}

export function Logo({
  className,
  iconClassName = 'w-10 h-10',
  compact = false,
  wordmark = 'default',
}: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2 sm:gap-3', className)}>
      <LogoMark className={iconClassName} />
      {wordmark === 'brand' ? (
        <span className={cn('logo-wordmark', compact && 'logo-wordmark-compact')}>
          <span className="logo-wordmark-erp">ERP</span>
          <span className="logo-wordmark-nest">Nest</span>
        </span>
      ) : (
        <span
          className={cn(
            'font-logo font-semibold text-white tracking-[0.03em]',
            compact ? 'text-base lg:text-lg' : 'text-xl',
          )}
        >
          ERPNest
        </span>
      )}
    </div>
  )
}
