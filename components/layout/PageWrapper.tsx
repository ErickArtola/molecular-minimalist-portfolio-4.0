import { ReactNode } from 'react'
import Image from 'next/image'

interface PageWrapperProps {
  children: ReactNode
  className?: string
  width?: 'default' | 'narrow' | 'wide'
  heroImage?: string
  heroTitle?: string
  heroSubtitle?: string
}

export default function PageWrapper({ 
  children, 
  className = '',
  width = 'default',
  heroImage,
  heroTitle,
  heroSubtitle
}: PageWrapperProps) {
  const widthClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl'
  }

  // If hero props are provided, render with hero section
  if (heroImage && heroTitle) {
    return (
      <>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={`${heroTitle} - Scientific background`}
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
          
          {/* Text Content - Positioned in lower left */}
          <div className="absolute bottom-0 left-0 p-8 lg:p-12 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-display font-bold text-white leading-tight">
                {heroTitle}
              </h1>
              {heroSubtitle && (
                <p className="text-h2 text-white/90 leading-relaxed">
                  {heroSubtitle}
                </p>
              )}
            </div>
          </div>
          
          {/* Optional: Scientific accent elements */}
          <div className="absolute top-8 right-8 opacity-20">
            <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full opacity-60"></div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className={`
          min-h-[calc(100vh-400px)]
          py-12 lg:py-16
          ${className}
        `}>
          <div className={`
            ${widthClasses[width]}
            mx-auto
            px-4 sm:px-6 lg:px-8
          `}>
            {children}
          </div>
        </div>
      </>
    )
  }

  // Fallback for pages without hero (like current homepage)
  return (
    <div className={`
      min-h-[calc(100vh-400px)]
      py-12 lg:py-16
      ${className}
    `}>
      <div className={`
        ${widthClasses[width]}
        mx-auto
        px-4 sm:px-6 lg:px-8
      `}>
        {children}
      </div>
    </div>
  )
}