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
  { label: 'Thought-cast', href: '/thought-cast' },
  { label: 'Oncogenomics', href: '/oncogenomics' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-scientific-100">
      <div className="container-scientific">
        <div className="py-6 lg:py-8">
          {/* Site Title and Tagline */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-h1 lg:text-display text-scientific-950 font-semibold">
              Erick Geovany Artola
            </h1>
            <p className="text-body lg:text-h3 text-scientific-700 mt-2">
              AI's application to study genomics
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-body font-medium transition-colors duration-200
                    ${isActive 
                      ? 'text-scientific-950 underline underline-offset-4 decoration-2 decoration-accent' 
                      : 'text-scientific-700 hover:text-scientific-950 hover:underline hover:underline-offset-4 hover:decoration-1'
                    }
                  `}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}