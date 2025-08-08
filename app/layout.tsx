import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

// Initialize Inter font with variable weights
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Erick Geovany Artola - AI & Genomics Research',
  description: 'AWS Technical Account Manager exploring AI applications in genomics research',
  keywords: ['AI', 'machine learning', 'genomics', 'oncogenomics', 'bioinformatics', 'AWS'],
  authors: [{ name: 'Erick Geovany Artola' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Erick Geovany Artola - AI & Genomics Research',
    description: 'AWS Technical Account Manager exploring AI applications in genomics research',
    type: 'website',
    url: 'https://erickgeovany.com',
    images: '/og-image.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-scientific-900 min-h-screen flex flex-col relative">
        {/* Fixed Background Image */}
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'url("/bg-image.jpg")',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-white/70" />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}