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
          <h3 className="text-h2 font-medium text-scientific-950">{title}</h3>
          <span className="text-small text-accent font-medium bg-scientific-50 px-3 py-1 rounded-full">
            {technology}
          </span>
        </div>
        <p className="text-body text-scientific-700 leading-relaxed">
          {description}
        </p>
      </div>

      {videoUrl && (
        <div className="aspect-video bg-scientific-100 rounded-lg overflow-hidden">
          <video 
            className="w-full h-full object-cover" 
            controls 
            poster="/api/placeholder/640/360"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {features && features.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-body font-medium text-scientific-800">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-small text-scientific-700 flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {highlights && highlights.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-body font-medium text-scientific-800">Technical Highlights:</h4>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-small text-scientific-700 flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-3 pt-4 border-t border-scientific-100">
        {demoUrl && (
          <button className="btn-primary text-small py-2 px-4">
            View Demo
          </button>
        )}
        {githubUrl && (
          <button className="btn-secondary text-small py-2 px-4">
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
      description: "An impressive interactive audio-visual experience that combines the power of sound analysis with creative graphics programming. The project showcases a variety of visualizations that respond dynamically to music, creating an immersive and engaging user interface.",
      videoUrl: "https://your-s3-bucket-name.s3.amazonaws.com/path/to/your/video.mp4",
      features: [
        "Multiple visualization modes, including Spectrum, WavePattern, Needles, Ridge, and Snake",
        "Real-time audio analysis using Fast Fourier Transform (FFT) to extract frequency data",
        "3D graphics rendering using WebGL mode in p5.js",
        "Interactive controls allowing users to play/pause music and switch between visualizations",
        "Responsive design that adapts to window resizing"
      ],
      highlights: [
        "Utilizes noise functions to generate organic, flowing shapes",
        "Incorporates 3D transformations and lighting effects",
        "Dynamically responds to bass and treble frequencies",
        "Applies textures and materials for enhanced visual appeal"
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
    <PageWrapper width="wide">
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-h1 font-semibold text-scientific-950">
            Projects
          </h1>
          <p className="text-h3 text-scientific-700 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative projects spanning AI development, interactive media, 
            and software engineering. Each project demonstrates technical expertise and 
            creative problem-solving in different domains.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="space-y-12">
          <div className="grid gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard {...project} />
                {index < projects.length - 1 && (
                  <div className="mt-12 border-t border-scientific-100" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack Overview */}
        <section className="section-spacing border-t border-scientific-100">
          <div className="text-center space-y-8">
            <h2 className="text-h2 font-semibold text-scientific-950">
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
                  <h4 className="font-medium text-scientific-950 mb-1">{tech.name}</h4>
                  <p className="text-small text-scientific-600">{tech.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6 section-spacing bg-gradient-scientific rounded-lg">
          <h2 className="text-h2 font-semibold text-scientific-950">
            Interested in Collaboration?
          </h2>
          <p className="text-body text-scientific-700 max-w-2xl mx-auto">
            I'm always excited to work on innovative projects that combine technology 
            with real-world impact. Let's build something amazing together.
          </p>
          <button className="btn-primary">
            Get in Touch
          </button>
        </section>
      </div>
    </PageWrapper>
  )
}