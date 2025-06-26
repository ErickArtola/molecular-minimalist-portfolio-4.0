import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/ui/Card'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with overlay navigation */}
      <section className="relative h-screen w-full">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80"
          alt="Abstract lab imagery"
          width={1950}
          height={1300}
          priority
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Navigation Bar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="container-scientific flex items-center justify-between py-4">
            <div className="bg-white text-scientific-950 font-semibold px-4 py-2 rounded shadow-molecular">
              EGA
            </div>
            <nav className="flex gap-6">
              <Link href="/" className="text-white font-medium hover:text-accent transition-colors">Home</Link>
              <Link href="/projects" className="text-white font-medium hover:text-accent transition-colors">Projects</Link>
              <Link href="/thought-cast" className="text-white font-medium hover:text-accent transition-colors">Thought-cast</Link>
              <Link href="/oncogenomics" className="text-white font-medium hover:text-accent transition-colors">Oncogenomics</Link>
            </nav>
          </div>
        </div>

        {/* Tagline */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
          <div>
            <h1 className="text-display font-semibold text-white drop-shadow-md">
              Accelerating Genomic Insights with AI
            </h1>
            <p className="text-h2 text-white mt-4 drop-shadow-md">
              Exploring machine learning at the molecular level
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 lg:py-24 bg-bg-secondary">
        <div className="container-scientific grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="relative p-0 overflow-hidden" hover>
            <Image
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80"
              alt="Research"
              fill
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-h3 font-medium text-scientific-950">Research Blog</h3>
            </div>
          </Card>

          <Card className="relative p-0 overflow-hidden md:col-span-2" hover>
            <Image
              src="https://images.unsplash.com/photo-1504904126297-1ce789964136?auto=format&fit=crop&w=1200&q=80"
              alt="Featured"
              fill
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-h3 font-medium text-scientific-950">Featured Project</h3>
            </div>
          </Card>

          <Card className="relative p-0 overflow-hidden" hover>
            <Image
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
              alt="Publications"
              fill
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-h3 font-medium text-scientific-950">Publications</h3>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
