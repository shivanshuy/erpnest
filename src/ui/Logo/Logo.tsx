import { cn } from '../../shared/utils/cn'
import { LogoMark } from './LogoMark'

type LogoProps = {
  className?: string
  iconClassName?: string
}

export function Logo({ className, iconClassName = 'w-10 h-10' }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <LogoMark className={iconClassName} />
      <span className="text-xl font-bold text-white tracking-tight">ERPNest</span>
    </div>
  )
}
