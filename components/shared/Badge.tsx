import { cn } from '@/lib/utils'

export interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'accent' | 'secondary'
}

export default function Badge({ children, className, variant = 'primary' }: BadgeProps) {
  const variantStyles = {
    primary: 'inline-flex items-center px-3 py-1 rounded-full bg-tours-primary-100 text-tours-primary-900 text-sm font-medium',
    accent: 'inline-flex items-center px-3 py-1 rounded-full bg-tours-accent-100 text-tours-accent-900 text-sm font-medium',
    secondary: 'inline-flex items-center px-3 py-1 rounded-full bg-tours-secondary-100 text-tours-secondary-900 text-sm font-medium',
  }

  return (
    <span className={cn(variantStyles[variant], className)}>
      {children}
    </span>
  )
}