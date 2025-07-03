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
    default: 'bg-hero-gray border border-scientific-100 shadow-molecular-sm',
    elevated: 'bg-hero-gray shadow-molecular-md',
    outlined: 'bg-hero-gray border-2 border-scientific-200',
    ghost: 'bg-transparent border border-dashed border-scientific-300'
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
    float: 'animate-molecular-float',
    hover: 'hover:scale-105 hover:shadow-molecular-md transform transition-all duration-300',
    pulse: 'hover:animate-pulse'
  }

  const interactiveClasses = interactive 
    ? 'cursor-pointer hover:shadow-molecular-md focus:outline-none focus:ring-2 focus:ring-accent ring-offset-2 ring-offset-bg-primary' 
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