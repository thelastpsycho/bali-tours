import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7)

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-tours-primary-900 mb-2"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={cn(
            'w-full px-4 py-3 border border-tours-neutral-300 rounded-lg bg-white text-tours-primary-900 placeholder:text-tours-neutral-400 focus:outline-none focus:ring-2 focus:ring-tours-primary-900 focus:ring-offset-2 focus:border-transparent transition-all duration-200',
            error && 'border-tours-error-500 focus:ring-tours-error-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-tours-error-600">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input