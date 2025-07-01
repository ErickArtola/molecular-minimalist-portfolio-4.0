import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
  width?: 'default' | 'narrow' | 'wide'
}

export default function PageWrapper({ 
  children, 
  className = '',
  width = 'default' 
}: PageWrapperProps) {
  const widthClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl'
  }

  return (
    <div
      className={`flex min-h-full flex-col py-12 lg:py-16 ${className}`}
    >
      <div
        className={`
          ${widthClasses[width]}
          flex-1
          mx-auto
          px-4 sm:px-6 lg:px-8
        `}
      >
        {children}
      </div>
    </div>
  )
}