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
  const lectures: LectureProps[] = [
    {
      id: 5,
      title: "Lecture 5: Coming Soon",
      description: "Additional content in the Advanced Molecular Mechanisms in Cancer Development series.",
      duration: "TBD",
      status: "coming-soon"
    },
    {
      id: 6,
      title: "Lecture 6: Coming Soon", 
      description: "Additional content in the Advanced Molecular Mechanisms in Cancer Development series.",
      duration: "TBD",
      status: "coming-soon"
    },
    {
      id: 7,
      title: "Lecture 7: Coming Soon",
      description: "Additional content in the Advanced Molecular Mechanisms in Cancer Development series.", 
      duration: "TBD",
      status: "coming-soon"
    }
  ]

  return (
    <PageWrapper 
      width="default"
      heroImage="/oncogenomics-hub-hero.jpg"
      heroTitle="Oncogenomics Learning Hub"
      heroSubtitle="Advanced Molecular Mechanisms in Cancer Development"
    >
      <div className="space-y-16">
        {/* Breadcrumb */}
        <nav className="text-small">
          <Link href="/oncogenomics" className="text-blue-600 hover:underline">
            Oncogenomics
          </Link>
          <span className="text-hero-text mx-2">></span>
          <span className="text-hero-text">Learning Hub</span>
        </nav>

        {/* Course Information */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-h2 font-semibold text-hero-text mb-4">
              Advanced Molecular Mechanisms in Cancer Development
            </h2>
            <p className="text-body text-hero-text">
              Lectures 1-4 are available on the <Link href="/oncogenomics" className="text-blue-600 hover:underline">main Oncogenomics page</Link>.
            </p>
          </div>
        </section>

        {/* Lectures Grid */}
        <section className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {lectures.map((lecture) => (
              <LectureCard key={lecture.id} {...lecture} />
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}