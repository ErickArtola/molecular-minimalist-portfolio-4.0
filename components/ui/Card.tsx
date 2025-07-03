import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react'

interface BaseCardProps {
  children: ReactNode
  variant: 'default' | 'elevated' | 'outlined' | 'ghost'
  size: 'small' | 'medium' | 'large' | 'none'
  animation?: 'none' | 'fadeIn' | 'slideUp' | 'float' | 'hover' | 'pulse'
  interactive?: boolean
  className?: string
}

type PolymorphicCardProps<T extends ElementType> = BaseCardProps & {
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, keyof BaseCardProps>

export default function Card<T extends ElementType = 'div'>({
  children,
  as,
  variant,
  size,
  animation = 'none',
  interactive = false,
  className = '',
  ...props
}: PolymorphicCardProps<T>) {
  const Component = as || 'div'

  const variantClasses = {
    default: 'bg-bg-primary border border-border-light shadow-sm',
    elevated: 'bg-bg-primary shadow-md',
    outlined: 'bg-bg-primary border-2 border-border-medium',
    ghost: 'bg-transparent border border-dashed border-border-light'
  }

  const sizeClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
    none: ''
  }

  const animationClasses = {
    none: '',
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    float: 'animate-float',
    hover: 'hover:scale-105 hover:shadow-lg transform transition-all duration-300',
    pulse: 'hover:animate-pulse'
  }

  const interactiveClasses = interactive 
    ? 'cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent ring-offset-2 ring-offset-bg-primary' 
    : ''

  const combinedClasses = `
    rounded-lg transition-all duration-250
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${animationClasses[animation]}
    ${interactiveClasses}
    ${className}
  `.trim()

  return (
    <Component 
      className={combinedClasses}
      tabIndex={interactive ? 0 : undefined}
      role={interactive ? 'button' : undefined}
      {...props}
    >
      {children}
    </Component>
  )
}