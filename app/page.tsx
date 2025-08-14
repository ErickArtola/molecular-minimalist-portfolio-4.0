import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import PageWrapper from '@/components/layout/PageWrapper';
import { CertificationBadge } from '@/components/content/CertificationBadge';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Extended Background */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* DNA Background Image - Extended beyond viewport */}
        <div className="absolute inset-0 h-[150vh]">
          <Image
            src="/dna.png?v=1" // Added version parameter to force refresh
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
        

      </section>

       {/* Desktop Portrait - Fixed overlay position */}
      <div className="absolute top-32 right-20 hidden lg:block z-50">
        <div className="bg-white p-2 rounded-lg shadow-lg border border-gray-200">
          <Image
            src="/portrait.jpeg"
            alt="Professional headshot of Erick Geovany Artola"
            width={563}
height={750}
            className="rounded object-cover"
            priority
            quality={90}
          />
        </div>
      </div>

      {/* Content sections */}
      <div>
        <PageWrapper>
          {/* About Section */}
          <section className="py-16 lg:py-24">
            <h2 className="text-h1 font-semibold text-hero-text mb-12">About</h2>

            {/* Mobile Portrait - Shows when overlay is hidden */}
<div className="lg:hidden bg-white p-2 rounded-lg shadow-lg border border-gray-200 mb-8 w-fit mx-auto">
  <Image
    src="/portrait.jpeg"
    alt="Professional headshot of Erick Geovany Artola"
width={563}
height={750}
    className="rounded object-cover"
    priority
    quality={90}
  />
</div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              {/* UPDATED: Changed to match oncogenomics page styling */}
              <Card 
                variant="elevated" 
                size="medium" 
                animation="hover"
                className="bg-[#989898] border border-white/20 shadow-lg space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-h2 font-medium text-hero-text">Background</h3>
                  <p className="text-body text-hero-text leading-relaxed">
                    Originally from Nicaragua and now based in Costa Rica, I bring a unique perspective to the intersection 
                    of technology and life sciences. My journey to the forefront of AI and genomics 
                    research is my commitment to leveraging cutting-edge technology for global societal impact.
                  </p>
                  <p className="text-body ttext-hero-text leading-relaxed">
                    As an AWS Technical Account Manager, I help organizations architect and optimize their cloud infrastructure. 
                    This role allows me to stay at the cutting edge of cloud computing while directly having an impact on small and medium businesses.
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
                  <h3 className="text-h2 font-medium text-hero-text">Research Interests</h3>
                  <p className="text-body text-hero-text leading-relaxed">
                    My primary focus lies in applying artificial intelligence to genomics, particularly in understanding 
                    oncogenic pathways and developing computational methods for cancer research. I'm passionate about 
                    creating AI models that can identify patterns in genomic data that might lead to breakthrough treatments.
                  </p>
                  <p className="text-body text-hero-text leading-relaxed">
                    I also maintain a deep interest in robotics, bioinformatics, stem cell technology, genetic engineering and drug development, believing 
                    that interdisciplinary thinking is crucial for innovation. This diverse intellectual foundation informs 
                    my approach to complex problems in oncogenomics.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="py-16 lg:py-24">
            <h2 className="text-h1 font-semibold text-hero-text mb-12">Professional Journey</h2>
            
            <div className="space-y-8">
              {/* Current Role */}
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
                      <h3 className="text-h2 font-medium text-hero-text">Technical Account Manager</h3>
                      <span className="text-small text-accent font-medium bg-scientific-50 px-3 py-1 rounded-full">
                        2024 - Present
                      </span>
                    </div>
                    <p className="text-body text-hero-text font-medium">Amazon Web Services (AWS)</p>
                    <p className="text-body text-hero-text leading-relaxed">
                      Leading technical strategy for enterprises in the healthcare, automotive, media and entertainment industry to achieve optimized workload environments.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-body font-medium text-hero-text">Key Achievements:</h4>
                    <ul className="space-y-2">
                      <li className="text-small text-hero-text flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        •	Helped formulate a disaster recovery solution that achieved an RTO of 5 minutes by migrating from Amazon RDS MariaDB to RDS Aurora and helped design a solution to provide automatic AWS Cognito replication across regions.
                      </li>
                      <li className="text-small text-hero-text flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        •	Engaged with specialists to help guide customer re-architect their Wordpress server in EC2 instances into a three-tier WAF-protected production environment which helped remediate source code exposure.
                      </li>
                      <li className="text-small text-hero-text flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        •	Utilized CRM in conjunction with LLM to create a detailed implementation guide for financial services that helped reduce their IT and operational documentation for OCC audit by 15 hours, or 30%.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              {/* Research Focus */}
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
                      <h3 className="text-h2 font-medium text-hero-text">Independent Research</h3>
                      <span className="text-small text-accent font-medium bg-scientific-50 px-3 py-1 rounded-full">
                        2025 - Present
                      </span>
                    </div>
                    <p className="text-body text-hero-text font-medium">AI Applications in Oncogenomics</p>
                    <p className="text-body text-hero-text leading-relaxed">
                      Developing AI models for identifying cancer biomarkers, predicting treatment responses, elucidating oncogenomic pathways that lead to cancer development
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-body font-medium text-hero-text">Current Projects:</h4>
                    <ul className="space-y-2">
                      <li className="text-small text-hero-text flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        Deep learning approaches such as computer vision for analyzing tumor heterogeneity for genomic expression
                      </li>
                      <li className="text-small text-hero-text flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        Time-series based models for cancer development elucidation and prediction 
                      </li>
                      <li className="text-small text-hero-text flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        Cloud-based infrastructure for personalized medicine
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              {/* Education/Early Career */}
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
                      <h3 className="text-h2 font-medium text-hero-text">Scientific Foundation</h3>
                      <span className="text-small text-accent font-medium bg-scientific-50 px-3 py-1 rounded-full">
                        2003 - 2007
                      </span>
                    </div>
                    <p className="text-body text-hero-text leading-relaxed">
                      Built comprehensive education in Biochemistry and Molecular Biology from the University of Miami, where I learned about molecular biology principles, perform DNA extractions and sequencing for analysis 
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-body font-medium text-hero-text">Focus Areas:</h4>
                    <ul className="space-y-2">
                      <li className="text-small text-hero-text flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        Carry out experiments in biological, cellular, molecular, and organic chemistry laboratories
                      </li>
                      <li className="text-small text-hero-text flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                         Researched the mechanistic pathway of importin-beta, a protein involved in nuclear transpot
                      </li>
                      <li className="text-small text-hero-text flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        Developed foundations in statistics analysis
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="py-16 lg:py-24">
            <h2 className="text-h1 font-semibold text-hero-text mb-12">Technical Certifications</h2>
            
<div className="mb-8 text-center max-w-3xl mx-auto">
  <p className="text-body text-hero-text leading-relaxed">
    These professional certifications demonstrate my commitment to staying current with cloud technologies, 
    AI/ML practices, and industry best practices. View my complete certification portfolio on{' '}
    <Link 
      href="https://www.credly.com/users/your-profile" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-accent hover:underline font-medium"
    >
      Credly
    </Link>.
  </p>
</div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* UPDATED: Custom certification badges with matching page background and white borders */}
              <div className="group relative bg-[#989898] border border-white/20 hover:border-white/40 hover:shadow-lg rounded-lg p-6 transition-all duration-250">
                <div className="space-y-3">
                  <h3 className="text-h3 font-medium text-hero-text group-hover:text-white transition-colors duration-250">
                    AWS Certified Solutions Architect
                  </h3>
                  <p className="text-body text-hero-text">
                    Amazon Web Services
                  </p>
                  <div className="space-y-1">
                    <p className="text-small text-hero-text">
                      Issued: 2023
                    </p>
                    <p className="text-small text-hero-text">
                      ID: AWS-SAA-C03
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#989898] border border-white/20 hover:border-white/40 hover:shadow-lg rounded-lg p-6 transition-all duration-250">
                <div className="space-y-3">
                  <h3 className="text-h3 font-medium text-hero-text group-hover:text-white transition-colors duration-250">
                    AWS Certified Machine Learning
                  </h3>
                  <p className="text-body text-hero-text">
                    Amazon Web Services
                  </p>
                  <div className="space-y-1">
                    <p className="text-small text-hero-text">
                      Status: In Progress
                    </p>
                    <p className="text-small text-hero-text">
                      ID: AWS-MLS-C01
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#989898] border text-hero-text hover:border-white/40 hover:shadow-lg rounded-lg p-6 transition-all duration-250">
                <div className="space-y-3">
                  <h3 className="text-h3 font-medium text-hero-text group-hover:text-white transition-colors duration-250">
                    Google IT Support Professional
                  </h3>
                  <p className="text-body text-hero-text">
                    Google
                  </p>
                  <div className="space-y-1">
                    <p className="text-small text-hero-text">
                      Issued: 2022
                    </p>
                    <p className="text-small text-hero-text">
                      ID: COURSERA-CERT
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#989898] border text-hero-text hover:border-white/40 hover:shadow-lg rounded-lg p-6 transition-all duration-250">
                <div className="space-y-3">
                  <h3 className="text-h3 font-medium text-hero-text group-hover:text-white transition-colors duration-250">
                    IBM AI Engineering Professional
                  </h3>
                  <p className="text-body text-hero-text">
                    IBM
                  </p>
                  <div className="space-y-1">
                    <p className="text-small text-hero-text">
                      Issued: 2022
                    </p>
                    <p className="text-small ttext-hero-text">
                      ID: IBM-AI-ENG
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#989898] border border-white/20 hover:border-white/40 hover:shadow-lg rounded-lg p-6 transition-all duration-250">
                <div className="space-y-3">
                  <h3 className="text-h3 font-medium text-hero-text group-hover:text-white transition-colors duration-250">
                    AWS Certified Cloud Practitioner
                  </h3>
                  <p className="text-body text-hero-text">
                    Amazon Web Services
                  </p>
                  <div className="space-y-1">
                    <p className="text-small text-hero-text">
                      Issued: 2022
                    </p>
                    <p className="text-small text-hero-text">
                      ID: AWS-CLF-C01
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-[#989898] border border-white/20 hover:border-white/40 hover:shadow-lg rounded-lg p-6 transition-all duration-250">
                <div className="space-y-3">
                  <h3 className="text-h3 font-medium text-hero-text group-hover:text-white transition-colors duration-250">
                    Deep Learning Specialization
                  </h3>
                  <p className="text-body text-hero-text">
                    DeepLearning.AI
                  </p>
                  <div className="space-y-1">
                    <p className="text-small text-hero-text">
                      Status: In Progress
                    </p>
                    <p className="text-small text-hero-text">
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
      <Link href="/oncogenomics" className="btn-primary">
        View My Oncogenomics Page
      </Link>
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