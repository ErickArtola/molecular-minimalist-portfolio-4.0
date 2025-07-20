'use client'

import React, { useState } from 'react'

interface S3VideoPlayerProps {
  src: string
  poster?: string | undefined
  title?: string | undefined
  className?: string | undefined
}

export default function S3VideoPlayer({ src, poster, title, className = '' }: S3VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleLoadedData = () => {
    setIsLoading(false)
  }

  // Simplified error handler without logging
  const handleError = () => {
    setIsLoading(false)
    setError('Failed to load video. Please try again later.')
  }

  return (
    <div className={`relative ${className}`} style={{ height: '100%' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 rounded-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-10 rounded-lg text-white p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p>{error}</p>
        </div>
      )}
      
      <video 
        src={src} 
        poster={poster}
        controls 
        className="w-full h-full rounded-lg bg-black object-contain"
        onLoadedData={handleLoadedData}
        onError={handleError}
        preload="metadata"
        title={title}
        playsInline
        disablePictureInPicture
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}