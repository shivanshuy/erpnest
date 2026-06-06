import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../shared/utils/cn'
import { button } from '../styles/classes'

type ButtonVariant = 'primary' | 'primaryCompact' | 'outline' | 'submit' | 'subscribe'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

const variants: Record<ButtonVariant, string> = {
  primary: button.primary,
  primaryCompact: button.primaryCompact,
  outline: button.outline,
  submit: button.submit,
  subscribe: button.subscribe,
}

export function Button({ variant = 'primary', children, className, type = 'button', ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(button.base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

type LinkButtonProps = {
  href: string
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

export function LinkButton({ href, variant = 'primary', children, className }: LinkButtonProps) {
  return (
    <a href={href} className={cn(button.base, variants[variant], className)}>
      {children}
    </a>
  )
}
