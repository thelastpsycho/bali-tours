import { cn } from '@/lib/utils'

export interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'standard' | 'featured' | 'subtle'
}

export default function Card({ children, className, variant = 'standard' }: CardProps) {
  const variantStyles = {
    standard: 'bg-white rounded-2xl border border-tours-neutral-200 p-6 transition-all duration-300 hover:border-tours-neutral-300 hover:shadow-elegant-md',
    featured: 'bg-white rounded-2xl overflow-hidden shadow-elegant transition-all duration-300 hover:shadow-elegant-lg hover:-translate-y-1',
    subtle: 'bg-tours-neutral-50 rounded-2xl p-6 transition-all duration-300 hover:bg-tours-neutral-100',
  }

  return (
    <div className={cn(variantStyles[variant], className)}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mt-6 pt-4 border-t border-tours-neutral-200', className)}>{children}</div>
}