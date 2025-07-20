import React from 'react'
import Card from '@/components/ui/Card'
import PageWrapper from '@/components/layout/PageWrapper'

interface ProjectProps {
  title: string
  technology: string
  description: string
  features?: string[]
  highlights?: string[]
  videoUrl?: string
  videoType?: 's3' | 'local' | 'youtube' | 'vimeo'
  youtubeId?: string
  demoUrl?: string
  githubUrl?: string
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  technology, 
  description, 
  features, 
  highlights,
  videoUrl,
  videoType = 'local',
  youtubeId,
  demoUrl,
  githubUrl 
}) => (
  <Card 
    as="article" 
    variant="elevated" 
    size="medium" 
    animation="hover"
    className="h-full"
  >
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-h2 font-medium text-hero-text">{title}</h3>
          <span className="text-small text-accent font-medium bg-scientific-50 px-3 py-1 rounded-full">
            {technology}
          </span>
        </div>
        <p className="text-body text-hero-text leading-relaxed">
          {description}
        </p>
      </div>

      {/* Video Section - Support for videos, Vimeo and YouTube embeds */}
      {videoUrl && videoType !== 'vimeo' && (
        <div className="aspect-video bg-scientific-100 rounded-lg overflow-hidden" style={{ maxHeight: '400px' }}>
          <video 
            className="w-full h-full object-contain" 
            controls 
            muted
            playsInline
            disablePictureInPicture
            preload="auto"
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {videoType === 'vimeo' && videoUrl && (
        <div className="flex justify-center items-center bg-bg-primary rounded-lg py-8 px-4 md:px-0" style={{ minHeight: '300px', maxHeight: '400px' }}>
          <div className="w-full max-w-[640px] h-auto aspect-video">
            <iframe 
              src={videoUrl}
              className="w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              title={title}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
      {youtubeId && (
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`}
            title={`${title} Demo Video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {features && features.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-body font-medium text-hero-text">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-small text-hero-text flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {highlights && highlights.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-body font-medium text-hero-text">Technical Highlights:</h4>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-small text-hero-text flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-3 pt-4">
        {demoUrl && (
          <button type="button" className="btn-primary text-small py-2 px-4">
            View Demo
          </button>
        )}
        {githubUrl && (
          <button type="button" className="btn-secondary text-small py-2 px-4">
            View Code
          </button>
        )}
      </div>
    </div>
  </Card>
)

export default function ProjectsPage() {
  const projects: ProjectProps[] = [
    {
      title: "Amazon Q Business Chatbot",
      technology: "AI Development",
      description: "An intelligent chatbot solution utilizing Amazon Q Business to provide sophisticated conversational AI capabilities. This project demonstrates the integration of advanced AI services with business applications.",
      features: [
        "Natural language processing for complex queries",
        "Integration with business data sources",
        "Context-aware conversation management",
        "Scalable cloud-based architecture"
      ],
      highlights: [
        "AWS AI/ML services integration",
        "Custom prompt engineering for domain-specific responses",
        "Real-time data retrieval and processing",
        "Enterprise-grade security and compliance"
      ]
    },
    
    {
      title: "Music Visualizer",
      technology: "JavaScript",
      description: "The Music Visualizer is an immersive audio-visual experience that transforms your music into stunning visual displays. At its heart, the application offers a suite of mesmerizing visualization modes that bring your music to life. As you play your favorite tracks, you can watch as the Spectrum analyzer creates dynamic patterns that pulse with the frequencies, or switch to the fluid WavePattern that ebbs and flows with the music's rhythm. The hypnotic Needles visualization responds to every beat, while the Ridge pattern creates an otherworldly 3D landscape that morphs with the sound. The Snake visualization, despite its name, creates an abstract collection of intersecting white lines that dance and scatter beneath a textured spherical object, creating a dynamic contrast between the organic movement of the sphere and the geometric patterns below. \n\nThe interface is designed with user experience in mind, featuring intuitive playback controls that let you easily manage your music. As you interact with the visualizer, it responds smoothly to both mouse and keyboard inputs, allowing you to seamlessly switch between different visualization styles. The application adapts beautifully to any window size, ensuring an optimal viewing experience on any display.",
      videoUrl: "https://player.vimeo.com/video/1102853940?h=c9c9f9f9f9&autoplay=0&loop=0&title=0&byline=0&portrait=0",
      videoType: "vimeo",
      features: [],
      highlights: [
        "Audio Processing: Integration with p5.sound.js library for audio analysis, Real-time Fast Fourier Transform (FFT) implementation, Audio buffer management and processing",
        "Graphics Implementation: Built using p5.js framework, WebGL mode support for 3D visualizations, Dynamic canvas sizing and viewport management, Custom rendering pipeline for each visualization type",
        "Architecture: Modular code structure with separate files for each visualization, Object-oriented design patterns, Event-driven architecture for user interactions, Efficient memory management for real-time performance",
        "Assets Management: Custom font integration (Inter.ttf), Image asset handling (ngc604.jpg, sun.jpg), Audio file management (Dot2.mp3, stomper_reggae_bit.mp3)"
      ]
    },
    {
      title: "DJ Application",
      technology: "C++",
      description: "A comprehensive DJ application built using C++ that employs advanced object-oriented programming techniques. This application provides professional-grade audio mixing capabilities with an intuitive user interface.",
      features: [
        "Real-time audio mixing and crossfading",
        "Beat matching and synchronization",
        "Audio effects processing",
        "Playlist management system"
      ],
      highlights: [
        "Object-oriented architecture for maintainable code",
        "Low-latency audio processing",
        "Memory-efficient data structures",
        "Cross-platform compatibility"
      ]
    }
    
  ]

  return (
    <PageWrapper 
      width="wide"
      heroImage="/circuit-board.jpg"
      heroTitle="Projects"
      heroSubtitle="AI Development • Interactive Media • Software Engineering"
    >
      <div className="space-y-16">
        {/* Projects Grid */}
        <section className="space-y-12">
          <div className="grid gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard {...project} />
                {/* No divider */}
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack Overview */}
        <section className="section-spacing border-t border-scientific-100">
          <div className="text-center space-y-8">
            <h2 className="text-h2 font-semibold text-hero-text">
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { name: "JavaScript", description: "Interactive web applications" },
                { name: "C++", description: "Performance-critical applications" },
                { name: "Java", description: "Enterprise software solutions" },
                { name: "AI/ML", description: "Intelligent systems development" },
                { name: "WebGL", description: "3D graphics and visualization" },
                { name: "AWS", description: "Cloud infrastructure & AI services" },
                { name: "React", description: "Modern user interfaces" },
                { name: "Node.js", description: "Server-side development" }
              ].map((tech, index) => (
                <Card 
                  key={index}
                  variant="outlined" 
                  size="small" 
                  animation="hover"
                  className="text-center"
                >
                  <h4 className="font-medium text-hero-text mb-1">{tech.name}</h4>
                  <p className="text-small text-hero-text">{tech.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6 section-spacing bg-gradient-scientific rounded-lg">
          <h2 className="text-h2 font-semibold text-hero-text">
            Interested in Collaboration?
          </h2>
          <p className="text-body text-hero-text max-w-2xl mx-auto">
            I'm always excited to work on innovative projects that combine technology 
            with real-world impact. Let's build something amazing together.
          </p>
          <a href="https://www.linkedin.com/in/erick-artola/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            Get in Touch
          </a>
        </section>
      </div>
    </PageWrapper>
  )
}