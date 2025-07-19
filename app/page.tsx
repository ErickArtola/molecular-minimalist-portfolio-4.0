import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import PageWrapper from '@/components/layout/PageWrapper';
import { CertificationBadge } from '@/components/content/CertificationBadge';

export default function HomePage() {
  return (
    <div className="bg-[#989898] min-h-screen">
      {/* Hero Section with Extended Background */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
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
          <div className="absolute inset-x-0 bottom-0 h-[80vh] bg-gradient-to-b from-transparent via-[#989898]/30 to-[#989898]" />
        </div>
        
        {/* Text Content - Positioned in lower left */}
        <div className="absolute bottom-0 left-0 p-8 lg:p-12 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-display font-bold text-white leading-tight">
              Erick Geovany Artola
            </h1>
            <p className="text-h2 text-white/90 leading-relaxed">
              AI/ML Engineer • Genomics Researcher • Technical Account Manager
            </p>
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
      <div className="bg-[#989898]">
        <PageWrapper>
          {/* About Section */}
          <section className="py-16 lg:py-24">
            <h2 className="text-h1 font-semibold text-white mb-12">About</h2>
            
            <div className="grid gap-8 lg:grid-cols-2">
              {/* UPDATED: Changed to match oncogenomics page styling */}
              <Card 
                variant="elevated" 
                size="medium" 
                animation="hover"
                className="bg-[#989898] border border-white/20 shadow-lg space-y-6"
              >
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
              
              {/* UPDATED: Changed to match oncogenomics page styling */}
              <Card 
                variant="elevated" 
                size="medium" 
                animation="hover"
                className="bg-[#989898] border border-white/20 shadow-lg space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-h2 font-medium text-white">Research Interests</h3>
                  <p className="text-body text-white/90 leading-relaxed">
                    My primary focus lies in applying artificial intelligence to genomics, particularly in understanding 
                    oncogenic pathways and developing computational methods for cancer research. I'm passionate about 
                    creating AI models that can identify patterns in genomic data that might lead to breakthrough treatments.
                  </p>
                  <p className="text-body text-white/90 leading-relaxed">
                    Beyond technical pursuits, I maintain a deep interest in robotics, bioinformatics, stem cell technology, genetic engineering, believing 
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
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full border-4 border-[#989898] shadow-lg" />
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
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full border-4 border-[#989898] shadow-lg" />
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
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full border-4 border-[#989898] shadow-lg" />
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
            <h2 className="text-h1 font-semibold text-white mb-12">Technical Certifications</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* UPDATED: Custom certification badges with matching page background and white borders */}
              <div className="group relative bg-[#989898] border border-white/20 hover:border-white/40 hover:shadow-lg rounded-lg p-6 transition-all duration-250">
                <div className="space-y-3">
                  <h3 className="text-h3 font-medium text-white group-hover:text-white transition-colors duration-250">
                    AWS Certified Solutions Architect
                  </h3>
                  <p className="text-body text-white/80">
                    Amazon Web Services
                  </p>
                  <div className="space-y-1">
                    <p className="text-small text-white/70">
                      Issued: 2023
                    </p>
                    <p className="text-small text-white/60">
                      ID: AWS-SAA-C03
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#989898] border border-white/20 hover:border-white/40 hover:shadow-lg rounded-lg p-6 transition-all duration-250">
                <div className="space-y-3">
                  <h3 className="text-h3 font-medium text-white group-hover:text-white transition-colors duration-250">
                    AWS Certified Machine Learning
                  </h3>
                  <p className="text-body text-white/80">
                    Amazon Web Services
                  </p>
                  <div className="space-y-1">
                    <p className="text-small text-white/70">
                      Issued: 2023
                    </p>
                    <p className="text-small text-white/60">
                      ID: AWS-MLS-C01
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#989898] border border-white/20 hover:border-white/40 hover:shadow-lg rounded-lg p-6 transition-all duration-250">
                <div className="space-y-3">
                  <h3 className="text-h3 font-medium text-white group-hover:text-white transition-colors duration-250">
                    Google IT Support Professional
                  </h3>
                  <p className="text-body text-white/80">
                    Google
                  </p>
                  <div className="space-y-1">
                    <p className="text-small text-white/70">
                      Issued: 2022
                    </p>
                    <p className="text-small text-white/60">
                      ID: COURSERA-CERT
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#989898] border border-white/20 hover:border-white/40 hover:shadow-lg rounded-lg p-6 transition-all duration-250">
                <div className="space-y-3">
                  <h3 className="text-h3 font-medium text-white group-hover:text-white transition-colors duration-250">
                    IBM AI Engineering Professional
                  </h3>
                  <p className="text-body text-white/80">
                    IBM
                  </p>
                  <div className="space-y-1">
                    <p className="text-small text-white/70">
                      Issued: 2022
                    </p>
                    <p className="text-small text-white/60">
                      ID: IBM-AI-ENG
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#989898] border border-white/20 hover:border-white/40 hover:shadow-lg rounded-lg p-6 transition-all duration-250">
                <div className="space-y-3">
                  <h3 className="text-h3 font-medium text-white group-hover:text-white transition-colors duration-250">
                    AWS Certified Cloud Practitioner
                  </h3>
                  <p className="text-body text-white/80">
                    Amazon Web Services
                  </p>
                  <div className="space-y-1">
                    <p className="text-small text-white/70">
                      Issued: 2022
                    </p>
                    <p className="text-small text-white/60">
                      ID: AWS-CLF-C01
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#989898] border border-white/20 hover:border-white/40 hover:shadow-lg rounded-lg p-6 transition-all duration-250">
                <div className="space-y-3">
                  <h3 className="text-h3 font-medium text-white group-hover:text-white transition-colors duration-250">
                    Deep Learning Specialization
                  </h3>
                  <p className="text-body text-white/80">
                    DeepLearning.AI
                  </p>
                  <div className="space-y-1">
                    <p className="text-small text-white/70">
                      Issued: 2022
                    </p>
                    <p className="text-small text-white/60">
                      ID: COURSERA-DL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 lg:py-24 border-t border-scientific-100 bg-gradient-scientific rounded-lg">
  <div className="text-center space-y-8 max-w-3xl mx-auto">
    <h2 className="text-h1 font-semibold text-hero-text">
      Let's Advance Science Together
    </h2>
    <p className="text-h3 text-hero-text leading-relaxed">
      I'm always interested in collaborating on projects at the intersection of AI and genomics.
      Whether you're working on computational biology challenges, need cloud architecture expertise
      for life sciences applications, or want to discuss the future of AI in healthcare, I'd love to connect.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button type="button" className="btn-primary">
        View Research Projects
      </button>
      <button type="button" className="btn-secondary">
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