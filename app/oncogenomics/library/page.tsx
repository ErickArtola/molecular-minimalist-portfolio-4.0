import React from 'react'
import Card from '@/components/ui/Card'
import PageWrapper from '@/components/layout/PageWrapper'
import Link from 'next/link'

interface LectureProps {
  id: number
  title: string
  description: string
  audioUrl?: string
  duration?: string
  status: 'published' | 'coming-soon'
  embedUrl?: string
}

const LectureCard: React.FC<LectureProps> = ({ 
  title, 
  description, 
  audioUrl, 
  duration,
  status,
  embedUrl
}) => (
  <Card 
    as="article" 
    variant="elevated" 
    size="medium" 
    animation="hover"
    className="space-y-6"
  >
    {/* Lecture Header */}
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-h3 font-medium text-hero-text flex-1">{title}</h3>
        <div className="flex flex-col items-end gap-2">
          <span className={`text-small font-medium px-3 py-1 rounded-full ${
            status === 'published' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-scientific-100 text-hero-text'
          }`}>
            {status === 'published' ? 'Published' : 'Coming Soon'}
          </span>
          {duration && (
            <span className="text-small text-hero-text">{duration}</span>
          )}
        </div>
      </div>
      
      {description && (
        <p className="text-body text-hero-text leading-relaxed">
          {description}
        </p>
      )}
    </div>

    {/* Presentation Embed */}
    {embedUrl && status === 'published' && (
      <div className="w-full">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
          <iframe 
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full" 
            frameBorder="0" 
            scrolling="no"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    )}

    {/* Audio Player */}
    {audioUrl && status === 'published' && (
      <div className="w-full">
        <audio controls className="w-full" preload="auto" controlsList="nodownload">
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    )}
  </Card>
)

export default function OncogenomicsLearningHubPage() {
  return (
    <PageWrapper 
      width="default"
      heroImage="/oncogenomics-hub-hero.jpg"
      heroTitle="Oncogenomics Learning Hub"
      heroSubtitle="Redirecting to New Course Structure"
    >
      <div className="space-y-16">
        {/* Breadcrumb */}
        <nav className="text-small">
          <Link href="/oncogenomics" className="text-blue-600 hover:underline">
            Oncogenomics
          </Link>
          <span className="text-hero-text mx-2">&gt;</span>
          <span className="text-hero-text">Learning Hub</span>
        </nav>

        {/* Redirect Notice */}
        <section className="space-y-8">
          <Card variant="elevated" size="large" className="text-center space-y-6">
            <h2 className="text-h2 font-semibold text-hero-text">
              Learning Hub Has Been Restructured
            </h2>
            <p className="text-body text-hero-text max-w-3xl mx-auto leading-relaxed">
              We've reorganized our learning content into comprehensive courses. 
              All lectures and materials are now available in our new course structure 
              with better organization and navigation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                href="/oncogenomics/courses"
                className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
              >
                View All Courses
              </Link>
              <Link 
                href="/oncogenomics/courses/advanced-molecular-mechanisms"
                className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/5 transition-colors font-medium"
              >
                Go to Advanced Course
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </PageWrapper>
  )
}