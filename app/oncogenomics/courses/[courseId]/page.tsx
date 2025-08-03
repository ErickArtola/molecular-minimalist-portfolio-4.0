import React from 'react'
import Card from '@/components/ui/Card'
import PageWrapper from '@/components/layout/PageWrapper'
import Link from 'next/link'
import { courses } from '../../../../config/courses'
import { notFound } from 'next/navigation'

const LectureCard: React.FC<{ lecture: any; courseId: string }> = ({ lecture, courseId }) => (
  <Card 
    as="article" 
    variant="elevated" 
    size="medium" 
    animation="hover"
    className="space-y-4"
  >
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-body font-medium text-hero-text flex-1">{lecture.title}</h4>
        <div className="flex flex-col items-end gap-1">
          <span className={`text-small font-medium px-2 py-1 rounded-full ${
            lecture.status === 'published' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-scientific-100 text-hero-text'
          }`}>
            {lecture.status === 'published' ? 'Available' : 'Coming Soon'}
          </span>
          <span className="text-small text-hero-text">{lecture.duration}</span>
        </div>
      </div>
      
      <p className="text-small text-hero-text leading-relaxed">
        {lecture.description}
      </p>
      
      {lecture.status === 'published' && lecture.embedUrl && (
        <div className="space-y-2">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-sm">
            <iframe 
              src={lecture.embedUrl}
              className="absolute top-0 left-0 w-full h-full" 
              frameBorder="0" 
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          
          {lecture.audioUrl && (
            <audio controls className="w-full" preload="auto" controlsList="nodownload">
              <source src={lecture.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      )}
    </div>
  </Card>
)

export async function generateStaticParams() {
  return courses.map((course) => ({
    courseId: course.id,
  }))
}

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = courses.find(c => c.id === params.courseId)
  
  if (!course) {
    notFound()
  }

  const lecturesPerRow = 2
  const totalRows = Math.ceil(course.lectures.length / lecturesPerRow)
  const visibleRows = 2

  return (
    <PageWrapper 
      width="default"
      heroImage="/oncogenomics-hub-hero.jpg"
      heroTitle={course.title}
      heroSubtitle={`${course.lectures.length} lectures • ${course.duration} • ${course.difficulty}`}
    >
      <div className="space-y-16">
        <nav className="text-small">
          <Link href="/oncogenomics" className="text-blue-600 hover:underline">
            Oncogenomics
          </Link>
          <span className="text-hero-text mx-2">&gt;</span>
          <Link href="/oncogenomics/courses" className="text-blue-600 hover:underline">
            Learning Hub
          </Link>
          <span className="text-hero-text mx-2">&gt;</span>
          <span className="text-hero-text">{course.title}</span>
        </nav>

        <section className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-h2 font-semibold text-hero-text mb-4">Course Overview</h2>
                <p className="text-body text-hero-text leading-relaxed">{course.description}</p>
              </div>
              
              <div>
                <h3 className="text-h3 font-medium text-hero-text mb-3">Learning Objectives</h3>
                <ul className="space-y-2">
                  {course.learningObjectives.map((objective, index) => (
                    <li key={index} className="text-body text-hero-text flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Card variant="outlined" size="medium" className="space-y-4">
              <h3 className="text-h3 font-medium text-hero-text">Course Details</h3>
              <div className="space-y-3 text-body">
                <div className="flex justify-between">
                  <span className="text-hero-text">Duration:</span>
                  <span className="text-hero-text font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hero-text">Difficulty:</span>
                  <span className="text-hero-text font-medium capitalize">{course.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hero-text">Lectures:</span>
                  <span className="text-hero-text font-medium">{course.lectures.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hero-text">Status:</span>
                  <span className={`font-medium capitalize ${
                    course.status === 'published' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {course.status}
                  </span>
                </div>
              </div>
              
              {course.prerequisites && course.prerequisites.length > 0 && (
                <div className="pt-4 border-t border-scientific-100">
                  <h4 className="text-body font-medium text-hero-text mb-2">Prerequisites</h4>
                  <ul className="space-y-1">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index} className="text-small text-hero-text">• {prereq}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-h2 font-semibold text-hero-text">Course Content</h2>
          
          <div className="space-y-6">
            {Array.from({ length: Math.min(visibleRows, totalRows) }, (_, rowIndex) => {
              const startIndex = rowIndex * lecturesPerRow
              const endIndex = Math.min(startIndex + lecturesPerRow, course.lectures.length)
              const rowLectures = course.lectures.slice(startIndex, endIndex)
              
              return (
                <div key={rowIndex} className="space-y-4">
                  <h3 className="text-h3 font-medium text-hero-text">
                    Lectures {startIndex + 1}-{endIndex}
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {rowLectures.map((lecture) => (
                      <LectureCard key={lecture.id} lecture={lecture} courseId={course.id} />
                    ))}
                  </div>
                </div>
              )
            })}
            

          </div>
        </section>
      </div>
    </PageWrapper>
  )
}