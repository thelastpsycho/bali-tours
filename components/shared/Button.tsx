import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  as?: React.ElementType
  href?: string
  target?: string
  rel?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    as: Component = 'button',
    href,
    children,
    ...props
  }, ref) => {
    const baseStyles = cn(
      'font-medium rounded-lg transition-all duration-300 active:scale-[0.98] inline-flex items-center justify-center'
    )

    const variantStyles = {
      primary: 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-elegant-md',
      secondary: 'bg-white text-slate-900 border border-neutral-300 hover:border-slate-900 hover:shadow-elegant',
      ghost: 'text-slate-900 hover:bg-neutral-100',
      accent: 'bg-amber-500 text-slate-950 hover:bg-amber-400 hover:shadow-elegant-lg font-semibold',
      outline: 'bg-transparent text-slate-900 border border-slate-900 hover:bg-slate-900 hover:text-white',
    }

    const sizeStyles = {
      sm: 'px-6 py-2.5 text-sm',
      md: 'px-8 py-3.5',
      lg: 'px-10 py-4 text-lg',
    }

    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

    if (Component === Link && href) {
      return (
        <Link href={href} className={classes} {...props as any}>
          {children}
        </Link>
      )
    }

    return (
      <Component className={classes} ref={ref} {...props}>
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'

export default Button