import React from 'react'
import Card from '@/components/ui/Card'
import PageWrapper from '@/components/layout/PageWrapper'
import Link from 'next/link'
import { courses } from '../../../config/courses'

const CourseCard: React.FC<{ course: any }> = ({ course }) => (
  <Card 
    as="article" 
    variant="elevated" 
    size="medium" 
    animation="hover"
    className="space-y-6"
  >
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-h3 font-medium text-hero-text flex-1">{course.title}</h3>
        <div className="flex flex-col items-end gap-2">
          <span className={`text-small font-medium px-3 py-1 rounded-full ${
            course.status === 'published' 
              ? 'bg-green-100 text-green-800' 
              : course.status === 'in-progress'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-scientific-100 text-hero-text'
          }`}>
            {course.status === 'published' ? 'Published' : course.status === 'in-progress' ? 'In Progress' : 'Planned'}
          </span>
          <span className={`text-small font-medium px-3 py-1 rounded-full ${
            course.difficulty === 'beginner' 
              ? 'bg-green-50 text-green-700' 
              : course.difficulty === 'intermediate'
              ? 'bg-yellow-50 text-yellow-700'
              : 'bg-red-50 text-red-700'
          }`}>
            {course.difficulty}
          </span>
        </div>
      </div>
      
      <p className="text-body text-hero-text leading-relaxed">
        {course.description}
      </p>
      
      <div className="space-y-2">
        <h4 className="text-body font-medium text-hero-text">Learning Objectives</h4>
        <ul className="space-y-1">
          {course.learningObjectives.slice(0, 3).map((objective: string, index: number) => (
            <li key={index} className="text-body text-hero-text flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>{objective}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-4 text-small text-hero-text">
          <span>{course.modules.length} modules</span>
          <span>{course.duration}</span>
        </div>
        {course.status === 'published' ? (
          <Link 
            href={`/oncogenomics/courses/${course.id}`}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-small font-medium"
          >
            Start Course
          </Link>
        ) : (
          <span className="px-4 py-2 bg-scientific-100 text-hero-text rounded-lg text-small font-medium">
            Coming Soon
          </span>
        )}
      </div>
    </div>
  </Card>
)

export default function CoursesPage() {
  return (
    <PageWrapper 
      width="default"
      heroImage="/oncogenomics-hub-hero.jpg"
      heroTitle="Oncogenomics Learning Hub"
      heroSubtitle="Comprehensive Courses in Cancer Genomics"
    >
      <div className="space-y-16">
        <nav className="text-small">
          <Link href="/oncogenomics" className="text-blue-600 hover:underline">
            Oncogenomics
          </Link>
          <span className="text-hero-text mx-2">&gt;</span>
          <span className="text-hero-text">Learning Hub</span>
        </nav>

        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-h2 font-semibold text-hero-text mb-4">
              Available Courses
            </h2>
            <p className="text-body text-hero-text max-w-3xl mx-auto leading-relaxed">
              These courses represent advanced learning resources developed for educational exploration of cancer biology and genomics. All materials are designed for my personal study for understanding purposes only. Course content is not intended for medical diagnosis, treatment planning, or clinical decision-making.
              Information should not be used as a substitute for professional medical consultation.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}