import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'small' | 'medium' | 'large'
  onClick?: () => void
  hover?: boolean
}

export default function Card({ 
  children, 
  className = '',
  variant = 'default',
  padding = 'medium',
  onClick,
  hover = false
}: CardProps) {
  const baseClasses = 'rounded-lg transition-all duration-200'
  
  const variantClasses = {
    default: 'bg-white border border-scientific-100 shadow-molecular-sm',
    elevated: 'bg-white shadow-molecular-md',
    outlined: 'bg-white border-2 border-scientific-200'
  }

  const paddingClasses = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  }

  const hoverClasses = hover || onClick 
    ? 'hover:shadow-molecular-md hover:border-scientific-200 cursor-pointer' 
    : ''

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${hoverClasses}
    ${className}
  `.trim()

  if (onClick) {
    return (
      <div
        onClick={onClick}
        className={combinedClasses}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick()
          }
        }}
      >
        {children}
      </div>
    )
  }

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  )
}