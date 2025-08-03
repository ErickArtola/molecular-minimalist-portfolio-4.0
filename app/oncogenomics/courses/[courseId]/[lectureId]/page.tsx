import React from 'react'
import Card from '@/components/ui/Card'
import PageWrapper from '@/components/layout/PageWrapper'
import Link from 'next/link'
import { courses } from '../../../../../config/courses'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const params = []
  for (const course of courses) {
    for (const lecture of course.lectures) {
      params.push({
        courseId: course.id,
        lectureId: lecture.id,
      })
    }
  }
  return params
}

export default function LecturePage({ params }: { params: { courseId: string; lectureId: string } }) {
  const course = courses.find(c => c.id === params.courseId)
  const lecture = course?.lectures.find(l => l.id === params.lectureId)
  
  if (!course || !lecture) {
    notFound()
  }

  const currentIndex = course.lectures.findIndex(l => l.id === params.lectureId)
  const previousLecture = currentIndex > 0 ? course.lectures[currentIndex - 1] : null
  const nextLecture = currentIndex < course.lectures.length - 1 ? course.lectures[currentIndex + 1] : null

  return (
    <PageWrapper 
      width="default"
      heroImage="/oncogenomics-hub-hero.jpg"
      heroTitle={lecture.title}
      heroSubtitle={`${course.title} • Lecture ${currentIndex + 1} of ${course.lectures.length}`}
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
          <Link href={`/oncogenomics/courses/${course.id}`} className="text-blue-600 hover:underline">
            {course.title}
          </Link>
          <span className="text-hero-text mx-2">&gt;</span>
          <span className="text-hero-text">{lecture.title}</span>
        </nav>

        <section className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="text-h2 font-semibold text-hero-text mb-4">Lecture Overview</h2>
                <p className="text-body text-hero-text leading-relaxed">{lecture.description}</p>
              </div>

              {lecture.embedUrl && (
                <div className="space-y-4">
                  <h3 className="text-h3 font-medium text-hero-text">Presentation</h3>
                  <div className="w-full">
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                      <iframe 
                        src={lecture.embedUrl}
                        className="absolute top-0 left-0 w-full h-full" 
                        frameBorder="0" 
                        scrolling="no"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}

              {lecture.audioUrl && (
                <div className="space-y-4">
                  <h3 className="text-h3 font-medium text-hero-text">Audio Narration</h3>
                  <audio controls className="w-full" preload="auto" controlsList="nodownload">
                    <source src={lecture.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
            
            <Card variant="outlined" size="medium" className="space-y-6">
              <h3 className="text-h3 font-medium text-hero-text">Lecture Details</h3>
              <div className="space-y-3 text-body">
                <div className="flex justify-between">
                  <span className="text-hero-text">Duration:</span>
                  <span className="text-hero-text font-medium">{lecture.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hero-text">Status:</span>
                  <span className={`font-medium ${
                    lecture.status === 'published' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {lecture.status === 'published' ? 'Available' : 'Coming Soon'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hero-text">Lecture:</span>
                  <span className="text-hero-text font-medium">{currentIndex + 1} of {course.lectures.length}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-scientific-100 space-y-3">
                <h4 className="text-body font-medium text-hero-text">Navigation</h4>
                <div className="space-y-2">
                  {previousLecture && (
                    <Link 
                      href={`/oncogenomics/courses/${course.id}/${previousLecture.id}`}
                      className="block w-full px-3 py-2 text-small bg-scientific-100 text-hero-text rounded-lg hover:bg-scientific-200 transition-colors"
                    >
                      ← Previous: {previousLecture.title}
                    </Link>
                  )}
                  {nextLecture && (
                    <Link 
                      href={`/oncogenomics/courses/${course.id}/${nextLecture.id}`}
                      className="block w-full px-3 py-2 text-small bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      Next: {nextLecture.title} →
                    </Link>
                  )}
                  <Link 
                    href={`/oncogenomics/courses/${course.id}`}
                    className="block w-full px-3 py-2 text-small border border-scientific-200 text-hero-text rounded-lg hover:bg-scientific-50 transition-colors text-center"
                  >
                    Back to Course
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}