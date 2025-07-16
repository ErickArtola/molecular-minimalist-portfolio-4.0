'use client'

import React, { useState } from 'react'
import Card from '@/components/ui/Card'
import PageWrapper from '@/components/layout/PageWrapper'

interface EpisodeProps {
  id: number
  title: string
  description: string
  content?: string
  audioUrl?: string
  publishDate?: string
  duration?: string
  status: 'published' | 'coming-soon'
}

const EpisodeCard: React.FC<EpisodeProps> = ({ 
  title, 
  description, 
  content, 
  audioUrl, 
  publishDate, 
  duration,
  status 
}) => (
  <Card 
    as="article" 
    variant="elevated" 
    size="medium" 
    animation="hover"
    className="space-y-6"
  >
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
      
      <p className="text-body text-hero-text leading-relaxed">
        {description}
      </p>
    </div>

    {/* Episode Content */}
    {content && (
      <div className="prose prose-scientific max-w-none">
        <div className="text-body text-hero-text leading-relaxed whitespace-pre-line">
          {content}
        </div>
      </div>
    )}

    {/* Audio Player */}
    {audioUrl && status === 'published' && (
      <div className="space-y-3">
        <h4 className="text-body font-medium text-hero-text">Listen to Episode</h4>
        <audio 
          controls 
          className="w-full"
          preload="metadata"
        >
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    )}

    {/* Molecular accent line */}
    <div className="h-0.5 bg-gradient-to-r from-accent to-secondary rounded-full opacity-30" />
  </Card>
)

export default function ThoughtCastPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const episodes: EpisodeProps[] = [
    {
      id: 1,
      title: "AI as Utopia",
      description: "I would like to talk about the ideas of AI as a means to achieving eutopia.",
      content: `AI is a technology that will be able to exist in anything that is digital. Computer science's solution to intelligence. All the pieces are present to generate such intelligence.

Our AI solution should be trying to heal the sick, curing diseases, helping us explore our solar system. AI will solve work for humanity, AI will remove drudgery from human existence. Food will be abundant, and crime will be nonexistent. Humans will be able to concentrate on becoming self-actualized. AI will be used to expand human aging with the help of stem cell, molecular biology, genetic engineering.

AI will be able to help us invent new solutions, things we may not have even imagined. AI will be able to provide true companionship, empathy and help you become more educated, expressive, and help you form stronger emotional connections. AI will become installed in robots and will be seen everywhere, like we see cars today. AI will be everywhere because robots and digital devices will be everywhere. AI will be so efficient that it will not be contained to one nation.  AI will be adopted by people of all ages, walk of life because of the ever presence of digital life and digital life forms walking among us and with organic beings. Humans will become self-actualized, pursue their truest passions because AI will make life across the Earth more efficient, resulting in more happiness for humans. Humans will no longer feel a need to disrespect others, they will be able to truly care and understand others. Humans will begin to help all and ensure that everyone is living in dignity. AI will make all this possible and more.`,
      audioUrl: "path/to/audio/file.mp3",
      publishDate: "-----",
      duration: "28 min",
      status: "coming-soon"
    },
    {
      id: 2,
      title: "On the Requirements of Artificial General Intelligence",
      description: "Pending",
      // content: `Complete any task a human can complete. It must have agency and memory. This means a singular being that can do all human tasks, from manual work like farming, house chores and construction, to the creation of art utilizing real world material, its own desires as an endeavor to be pursued for its sake, resolve any computational task that a human can compute. Our current state requires that more generalized and at the same time highly adept robots. This will require large amounts of computational power which can use current cloud vendors to architect the code.`, Complete any task a human can complete. It must have agency and memory.
      audioUrl: "path/to/audio/file.mp3",
      publishDate: "-----",
      duration: "35 min",
      status: "coming-soon"
    },
    {
      id: 3,
      title: "On the Requirements of Artificial Super Intelligence",
      description: "Pending",
      //content: "Exploring what comes after AGI and the implications for humanity.""
      publishDate: "-----",
      duration: "40 min",
      status: "coming-soon"
    },
    {
      id: 4,
      title: "Agency is Inherent to Intelligence",
      description: "Pending.",
      //content: `The relationship between consciousness and agency is a fundamental aspect of artificial intelligence (AI) and the field of cognitive science. Consciousness refers to the state of being, including consciousness, awareness, and the ability to perceive, reason, and make decisions. Agency, in turn, refers to the ability of consciousness to perceive, reason, and make decisions. AI is a technology that aims to replicate or simulate the behavior of consciousness and agency. The relationship between consciousness and agency is crucial for the development of AI, as it allows AI to reason, make decisions, and perceive the world around it.`,
      publishDate: "-----",
      duration: "32 min",
      status: "coming-soon"
    },
    {
      id: 5,
      title: "AI is a Mirror",
      description: "Pending",
      //content: "The problem of alignment is not technical. The problem of alignment is that AI will always be a mirror of its maker.",
      publishDate: "-----",
      duration: "25 min",
      status: "coming-soon"
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
      heroTitle="Thought-cast"
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
              <EpisodeCard key={episode.id} {...episode} />
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
                  icon: "🧠"
                },
                {
                  title: "Biotechnology",
                  description: "Genomics, molecular biology, and the intersection with AI",
                  icon: "🧬"
                },
                {
                  title: "Philosophy of Mind",
                  description: "Consciousness, agency, and what it means to be intelligent",
                  icon: "🤔"
                }
              ].map((topic, index) => (
                <Card 
                  key={index}
                  variant="outlined" 
                  size="medium" 
                  animation="hover"
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{topic.icon}</div>
                  <h4 className="text-h3 font-medium text-hero-text mb-2">{topic.title}</h4>
                  <p className="text-small text-hero-text">{topic.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="text-center space-y-6 section-spacing bg-gradient-scientific rounded-lg">
          <h2 className="text-h2 font-semibold text-hero-text">
            Stay Updated
          </h2>
          <p className="text-body text-hero-text max-w-2xl mx-auto">
            New episodes explore cutting-edge topics in AI, biotechnology, and the future of human-machine collaboration. 
            Join the conversation about technology's role in shaping our future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-body bg-white border border-scientific-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <button type="button" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}