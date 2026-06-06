import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { cn } from '../../shared/utils/cn'
import { form } from '../styles/classes'

type FieldProps = {
  id: string
  label: ReactNode
  children: ReactNode
  className?: string
}

export function Field({ id, label, children, className }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className={form.label}>
        {label}
      </label>
      {children}
    </div>
  )
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(form.control, className)} {...props} />
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(form.control, className)} {...props} />
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(form.control, 'resize-none', className)} {...props} />
}

export function NewsletterInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(form.controlPlain, className)} {...props} />
}
