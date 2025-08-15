'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  // { label: 'Oncogenomics', href: '/oncogenomics' },
  { label: 'AI Podcast', href: '/thought-cast' },
  { label: 'Projects', href: '/projects' },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const heroPages = ['/', '/projects', '/thought-cast', '/oncogenomics', '/oncogenomics/library']
  const hasHero = heroPages.includes(pathname) || pathname.startsWith('/oncogenomics/courses')
  
  // Check if we're on a specific course page (not courses index or oncogenomics main)
  const isCoursePage = pathname.match(/^\/oncogenomics\/courses\/[^\/]+$/)

  return (
    <header
      className={
        hasHero ? 'absolute inset-x-0 top-0 z-50' : 'bg-white border-b border-scientific-100'
      }
    >
      <div
        className={`container-scientific flex items-center justify-end py-6 lg:py-8 ${
          hasHero ? 'text-white' : ''
        }`}
      >
        {/* Hamburger menu for course pages on mobile */}
        {isCoursePage ? (
          <>
            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} />
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} />
              </div>
            </button>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm md:hidden">
                <nav className="flex flex-col p-4 space-y-4">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-body font-medium py-2 px-1 transition-colors ${
                          isActive ? 'text-white underline decoration-2' : 'text-white/90 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            )}

            {/* Desktop navigation */}
            <nav className="hidden md:flex flex-wrap gap-x-8 gap-y-3 pointer-events-auto">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-body font-medium transition-colors duration-200 cursor-pointer py-2 px-1 ${
                      hasHero ? 'text-white hover:underline' : ''
                    } ${
                      isActive
                        ? hasHero
                          ? 'underline decoration-2'
                          : 'text-scientific-950 underline underline-offset-4 decoration-2 decoration-accent'
                        : !hasHero
                        ? 'text-scientific-700 hover:text-scientific-950 hover:underline hover:underline-offset-4 hover:decoration-1'
                        : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </>
        ) : (
          /* Regular navigation for all other pages */
          <nav className="flex flex-wrap gap-x-8 gap-y-3 pointer-events-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-body font-medium transition-colors duration-200 cursor-pointer py-2 px-1 ${
                    hasHero ? 'text-white hover:underline' : ''
                  } ${
                    isActive
                      ? hasHero
                        ? 'underline decoration-2'
                        : 'text-scientific-950 underline underline-offset-4 decoration-2 decoration-accent'
                      : !hasHero
                      ? 'text-scientific-700 hover:text-scientific-950 hover:underline hover:underline-offset-4 hover:decoration-1'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}