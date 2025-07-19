'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'AI Podcast', href: '/thought-cast' },
  { label: 'Oncogenomics', href: '/oncogenomics' },
]

export default function Header() {
  const pathname = usePathname()
  const heroPages = ['/', '/projects', '/thought-cast', '/oncogenomics']
  const hasHero = heroPages.includes(pathname)

  return (
    <header
      className={
        hasHero ? 'absolute inset-x-0 top-0 z-50' : 'bg-white border-b border-scientific-100'
      }
    >
      <div
        className={`container-scientific flex items-center justify-between py-6 lg:py-8 ${
          hasHero ? 'text-white' : ''
        }`}
      >
        <Link href="/" className="font-bold">
          <span
            className={hasHero ? 'bg-black/70 px-3 py-1 rounded text-white' : 'text-scientific-950'}
          >
            EGA
          </span>
        </Link>
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
      </div>
    </header>
  )
}