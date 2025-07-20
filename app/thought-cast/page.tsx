'use client'

import React, { useState, useRef } from 'react'
import Card from '@/components/ui/Card'
import PageWrapper from '@/components/layout/PageWrapper'
import S3VideoPlayer from '@/components/ui/S3VideoPlayer'

interface EpisodeProps {
  id: number
  title: string
  description: string
  audioUrl?: string
  publishDate?: string
  duration?: string
  status: 'published' | 'coming-soon'
  imageUrl?: string
  videoUrl?: string
  videoType?: 's3' | 'youtube'
}

const EpisodeCard: React.FC<EpisodeProps & { isPlaying: boolean; onPlay: () => void }> = (props) => {
  const { 
    title, 
    description, 
    audioUrl, 
    publishDate, 
    duration,
    status,
    isPlaying,
    onPlay,
    imageUrl,
    videoUrl,
    videoType = 's3'
  } = props;
  
  return (
  <Card 
    as="article" 
    variant="elevated" 
    size="medium" 
    animation="hover"
    className="space-y-6"
  >
    {/* Episode Image or Video */}
    {status === 'published' && (
      <div className="w-full rounded-lg mb-4">
        {videoUrl ? (
          <div className="aspect-video w-full relative">
            {videoType === 's3' ? (
              <S3VideoPlayer 
                src={videoUrl} 
                poster={imageUrl} 
                title={title}
              />
            ) : (
              <iframe 
                src={videoUrl} 
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title={title}
              />
            )}
          </div>
        ) : imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`${title} episode artwork`} 
            className="w-full object-contain transition-transform hover:scale-105 duration-500"
          />
        ) : null}
      </div>
    )}
    
    {/* Episode Header */}
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-h2 font-medium text-hero-text flex-1">{title}</h3>
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
      
      {publishDate && (
        <p className="text-small text-hero-text">
          {publishDate}
        </p>
      )}
      
      {description && (
        <p className="text-body text-hero-text leading-relaxed">
          {description}
        </p>
      )}
    </div>

    {/* Audio Player */}
    {audioUrl && status === 'published' && (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          {/* <h4 className="text-body font-medium text-hero-text">Listen to Episode</h4> */}
          <button 
            onClick={onPlay}
            className={`flex items-center justify-center p-3 rounded-full transition-colors ${isPlaying ? 'bg-accent text-white' : 'bg-scientific-100 hover:bg-scientific-200 text-hero-text'}`}
            aria-label={isPlaying ? 'Pause episode' : 'Play episode'}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </button>
        </div>
        {isPlaying && (
          <audio 
            controls 
            className="w-full"
            preload="metadata"
            autoPlay
            src={audioUrl}
          >
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    )}

    {/* No accent line */}
  </Card>
  );
}

export default function ThoughtCastPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [playingEpisodeId, setPlayingEpisodeId] = useState<number | null>(null)
  const audioRefs = useRef<{[key: number]: HTMLAudioElement | null}>({})

  const episodes: EpisodeProps[] = [
    {
      id: 1,
      title: "AI as Utopia",
      description: "A visual exploration of AI as a utopian force in society.",
      audioUrl: "/podcast/utopia.mp3",
      publishDate: "July 18, 2025",
      duration: "3 min",
      status: "published",
      // Image generation prompt: "A futuristic utopian city with advanced AI integration, showing harmony between humans and technology, with floating buildings and lush greenery, digital neural networks visible in the sky, photorealistic style"
      imageUrl: "/podcast/images/utopia.jpg" // Make sure this file exists in public/podcast/images/
    },
    {
      id: 2,
      title: "On the Requirements of Artificial General Intelligence",
      description: "",
      audioUrl: "/podcast/agi.mp3",
      // publishDate: "-----",
      duration: "35 min",
      status: "coming-soon",
      // Image generation prompt: "A sophisticated robot with human-like features engaged in multiple tasks simultaneously - painting art, solving equations on a digital board, and building structures, with neural network patterns glowing subtly within its transparent sections, photorealistic style"
      imageUrl: "/podcast/images/agi.jpg",
      // Example of how to use S3 for videos
      // videoUrl: "https://tears-are-data.s3.us-east-1.amazonaws.com/videos/agi-requirements.mp4",
      // videoType: "s3"
    },
    {
      id: 3,
      title: "On the Requirements of Artificial Super Intelligence",
      description: "",
      // publishDate: "-----",
      duration: "40 min",
      status: "coming-soon",
      // Image generation prompt: "An abstract visualization of superintelligence - a vast, complex network of light extending beyond human comprehension, with smaller human figures for scale, showing the vastness of ASI compared to human intelligence, digital art style with deep blues and purples"
      imageUrl: "/podcast/images/asi.jpg"
    },
    {
      id: 4,
      title: "Agency is Inherent to Intelligence",
      description: "",
      // publishDate: "-----",
      duration: "32 min",
      status: "coming-soon",
      // Image generation prompt: "A philosophical visualization of agency and intelligence - a humanoid figure at a crossroads making a decision, with visible thought patterns and decision trees emanating from its head, half-digital and half-organic in appearance, minimalist style with selective color"
      imageUrl: "/podcast/images/agency.jpg"
    },
    {
      id: 5,
      title: "AI is a Mirror",
      description: "",
      // publishDate: "-----",
      duration: "25 min",
      status: "coming-soon",
      // Image generation prompt: "A reflective scene showing a human looking into a digital mirror, but instead of their reflection, they see an AI version of themselves with subtle differences that reflect human biases and values, artistic style with symbolic elements"
      imageUrl: "/podcast/images/mirror.jpg"
    }
  ]

  const filteredEpisodes = episodes.filter(episode =>
    episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    episode.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <PageWrapper 
      width="default"
      heroImage="/molecular-network.jpg"
      heroTitle="AI Podcast"
      heroSubtitle="AI Philosophy • Future Technology • Scientific Discourse"
    >
      <div className="space-y-16">
        {/* Search Section */}
        <section className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search episodes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 text-body bg-white border border-scientific-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-6">
              <svg className="w-5 h-5 text-hero-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Episodes Section */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-h2 font-semibold text-hero-text mb-4">
              Episodes
            </h2>
            <p className="text-body text-hero-text">
              {filteredEpisodes.length} episode{filteredEpisodes.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          <div className="space-y-8">
            {filteredEpisodes.map((episode) => (
              <EpisodeCard 
                key={episode.id} 
                {...episode} 
                isPlaying={playingEpisodeId === episode.id}
                onPlay={() => {
                  if (playingEpisodeId === episode.id) {
                    setPlayingEpisodeId(null);
                  } else {
                    setPlayingEpisodeId(episode.id);
                  }
                }}
              />
            ))}
          </div>

          {filteredEpisodes.length === 0 && (
            <Card variant="outlined" size="large" className="text-center">
              <div className="space-y-3">
                <h3 className="text-h3 font-medium text-hero-text">No episodes found</h3>
                <p className="text-body text-hero-text">
                  Try adjusting your search terms or browse all episodes.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="btn-secondary"
                >
                  Clear Search
                </button>
              </div>
            </Card>
          )}
        </section>

        {/* Topics Section */}
        <section className="section-spacing border-t border-scientific-100">
          <div className="text-center space-y-8">
            <h2 className="text-h2 font-semibold text-hero-text">
              Featured Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Artificial Intelligence",
                  description: "The future of AGI and ASI, alignment challenges, and societal impact",
                  icon: "AI"
                },
                {
                  title: "Biotechnology",
                  description: "Genomics, molecular biology, and the intersection with AI",
                  icon: "Bio"
                },
                {
                  title: "Philosophy of Mind",
                  description: "Consciousness, agency, and what it means to be intelligent",
                  icon: "Phil"
                }
              ].map((topic, index) => (
                <Card 
                  key={index}
                  variant="outlined" 
                  size="medium" 
                  animation="hover"
                  className="text-center"
                >
                  <div className="text-xl font-bold mb-3 bg-scientific-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">{topic.icon}</div>
                  <h4 className="text-h3 font-medium text-hero-text mb-2">{topic.title}</h4>
                  <p className="text-small text-hero-text">{topic.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Follow Section */}
        <section className="text-center space-y-6 section-spacing bg-gradient-scientific rounded-lg">
          <h2 className="text-h2 font-semibold text-hero-text">
            Stay Updated
          </h2>
          <p className="text-body text-hero-text max-w-2xl mx-auto">
            Follow me on LinkedIn to get notified when new episodes are released. I regularly share updates 
            about upcoming episodes and related content in the fields of AI, biotechnology, and philosophy.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/in/erick-artola/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Follow on LinkedIn
            </a>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}