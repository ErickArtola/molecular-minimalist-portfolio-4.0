import React from 'react';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  className?: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage = "/dna.png",
  className = "" 
}: PageHeroProps) {
  return (
    <section className={`relative min-h-[60vh] overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Scientific background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#989898]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-[60vh] flex items-center">
        <div className="container-scientific">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-h1 font-semibold text-white leading-tight">
              {title}
            </h1>
            <p className="text-h3 text-white/90 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      
      {/* Scientific accent */}
      <div className="absolute top-8 right-8 opacity-20">
        <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}