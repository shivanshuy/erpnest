import { cn } from '../../shared/utils/cn'

type LogoMarkProps = {
  className?: string
}

export function LogoMark({ className = 'w-10 h-10' }: LogoMarkProps) {
  return (
    <img
      src="/logo-mark.svg"
      alt=""
      aria-hidden="true"
      className={cn('shrink-0', className)}
    />
  )
}
