import React from 'react';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import PageWrapper from '@/components/layout/PageWrapper';
import { CertificationBadge } from '@/components/content/CertificationBadge';

export default function HomePage() {
  return (
    <div className="bg-hero-gray min-h-screen">
      {/* Hero Section with Extended Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* DNA Background Image - Extended beyond viewport */}
        <div className="absolute inset-0 h-[150vh]">
          <Image
            src="/dna.png"
            alt="DNA Helix - representing genomics research"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Gradient overlays for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          {/* Extended gradient for smooth blend to matching background */}
          <div className="absolute inset-x-0 bottom-0 h-[80vh] bg-gradient-to-b from-transparent via-hero-gray/30 to-hero-gray" />
        </div>
        
        {/* Text Content - Positioned in lower left with more vertical centering */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="p-8 lg:p-12 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-display font-bold text-white leading-tight">
                Erick Geovany Artola
              </h1>
              <p className="text-h2 text-white/90 leading-relaxed">
                AI/ML Engineer • Genomics Researcher • Technical Account Manager
              </p>
            </div>
          </div>
        </div>
        
        {/* Optional: Scientific accent elements */}
        <div className="absolute top-8 right-8 opacity-20">
          <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Content sections with matching background */}
      <div className="bg-hero-gray">
        <PageWrapper>
          {/* About Section */}
          <section className="py-16 lg:py-24">
            <h2 className="text-h1 font-semibold text-white mb-12">About</h2>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <Card variant="elevated" size="medium" className="bg-hero-gray border-white/20 shadow-lg space-y-6">
                <div className="space-y-4">
                  <h3 className="text-h2 font-medium text-white">Background</h3>
                  <p className="text-body text-white/90 leading-relaxed">
                    Originally from Nicaragua and now based in Costa Rica, I bring a unique perspective to the intersection 
                    of technology and life sciences. My journey from Central America to the forefront of AI and genomics 
                    research reflects my commitment to leveraging cutting-edge technology for global impact.
                  </p>
                  <p className="text-body text-white/90 leading-relaxed">
                    As an AWS Technical Account Manager, I help organizations architect and optimize their cloud infrastructure 
                    for AI/ML workloads, particularly in the healthcare and biotech sectors. This role allows me to stay at 
                    the cutting edge of cloud computing while directly supporting genomics research initiatives.
                  </p>
                </div>
              </Card>
              
              <Card variant="elevated" size="medium" className="bg-hero-gray border-white/20 shadow-lg space-y-6">
                <div className="space-y-4">
                  <h3 className="text-h2 font-medium text-white">Research Interests</h3>
                  <p className="text-body text-white/90 leading-relaxed">
                    My primary focus lies in applying artificial intelligence to genomics, particularly in understanding 
                    oncogenic pathways and developing computational methods for cancer research. I'm passionate about 
                    creating AI models that can identify patterns in genomic data that might lead to breakthrough treatments.
                  </p>
                  <p className="text-body text-white/90 leading-relaxed">
                    Beyond technical pursuits, I maintain a deep interest in robotics and postmodern literature, believing 
                    that interdisciplinary thinking is crucial for innovation. This diverse intellectual foundation informs 
                    my approach to complex problems in computational biology.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="py-16 lg:py-24">
            <h2 className="text-h1 font-semibold text-white mb-12">Professional Journey</h2>
            
            <div className="space-y-8">
              {/* Current Role */}
              <div className="relative pl-8 pb-8 border-l-2 border-white/30 last:border-l-0">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full border-4 border-hero-gray shadow-lg" />
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-h2 font-medium text-white">Technical Account Manager</h3>
                    <span className="text-small text-white/70">2023 - Present</span>
                  </div>
                  <p className="text-body text-white font-medium">Amazon Web Services (AWS)</p>
                  <p className="text-body text-white/80 leading-relaxed">
                    Leading technical strategy for enterprise healthcare and biotech clients, specializing in architecting 
                    cloud solutions for genomics pipelines, ML model training, and high-performance computing workloads. 
                    Key achievements include optimizing genomic analysis workflows resulting in 60% cost reduction and 
                    3x performance improvement.
                  </p>
                </div>
              </div>
              
              {/* Research Focus */}
              <div className="relative pl-8 pb-8 border-l-2 border-white/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full border-4 border-hero-gray shadow-lg" />
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-h2 font-medium text-white">Independent Research</h3>
                    <span className="text-small text-white/70">2022 - Present</span>
                  </div>
                  <p className="text-body text-white font-medium">AI Applications in Oncogenomics</p>
                  <p className="text-body text-white/80 leading-relaxed">
                    Developing machine learning models for identifying cancer biomarkers and predicting treatment responses. 
                    Current projects include deep learning approaches for analyzing tumor heterogeneity and transformer-based 
                    models for genomic sequence analysis.
                  </p>
                </div>
              </div>
              
              {/* Education/Early Career */}
              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white/70 rounded-full border-4 border-hero-gray shadow-lg" />
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-h2 font-medium text-white">Technical Foundation</h3>
                    <span className="text-small text-white/70">2020 - 2022</span>
                  </div>
                  <p className="text-body text-white/80 leading-relaxed">
                    Built comprehensive technical expertise through intensive self-directed learning and professional 
                    certifications. Focused on cloud architecture, machine learning, and bioinformatics to prepare 
                    for the intersection of AI and genomics.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="py-16 lg:py-24">
            <h2 className="text-h1 font-semibold text-scientific-950 mb-12">Technical Certifications</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CertificationBadge
                title="AWS Certified Solutions Architect"
                issuer="Amazon Web Services"
                date="2023"
                credentialId="AWS-SAA-C03"
              />
              <CertificationBadge
                title="AWS Certified Machine Learning"
                issuer="Amazon Web Services"
                date="2023"
                credentialId="AWS-MLS-C01"
              />
              <CertificationBadge
                title="Google IT Support Professional"
                issuer="Google"
                date="2022"
                credentialId="COURSERA-CERT"
              />
              <CertificationBadge
                title="IBM AI Engineering Professional"
                issuer="IBM"
                date="2022"
                credentialId="IBM-AI-ENG"
              />
              <CertificationBadge
                title="AWS Certified Cloud Practitioner"
                issuer="Amazon Web Services"
                date="2022"
                credentialId="AWS-CLF-C01"
              />
              <CertificationBadge
                title="Deep Learning Specialization"
                issuer="DeepLearning.AI"
                date="2022"
                credentialId="COURSERA-DL"
              />
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 lg:py-24 border-t border-scientific-100">
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-h1 font-semibold text-scientific-950">
                Let's Advance Science Together
              </h2>
              <p className="text-h3 text-scientific-700 leading-relaxed">
                I'm always interested in collaborating on projects at the intersection of AI and genomics. 
                Whether you're working on computational biology challenges, need cloud architecture expertise 
                for life sciences applications, or want to discuss the future of AI in healthcare, I'd love to connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  View Research Projects
                </button>
                <button className="btn-secondary">
                  Get in Touch
                </button>
              </div>
            </div>
          </section>
        </PageWrapper>
      </div>
    </div>
  );
}