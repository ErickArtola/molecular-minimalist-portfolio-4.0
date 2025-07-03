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
  { label: 'AI ThoughtCast', href: '/thought-cast' },
  { label: 'Oncogenomics', href: '/oncogenomics' },
]

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className={isHome ? 'absolute inset-x-0 top-0 z-20 bg-hero-gray' : 'bg-hero-gray'}>
      <div className="container-scientific flex items-center justify-between py-6 lg:py-8 text-hero-text">
        <Link href="/" className="font-bold">
          <span className="text-hero-text">EGA</span>
        </Link>
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-body font-medium transition-colors duration-200 ${
                  isActive ? 'underline decoration-accent decoration-2' : 'hover:underline'
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