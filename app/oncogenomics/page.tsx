import React from 'react'
import Card from '@/components/ui/Card'
import PageWrapper from '@/components/layout/PageWrapper'

interface ResearchProjectProps {
  title: string
  description: string
  status: 'active' | 'completed' | 'planning'
  technologies: string[]
  collaborators?: string[]
}

interface ProjectCardProps extends ResearchProjectProps {
  achievements?: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  status, 
  technologies, 
  collaborators,
  achievements
}) => (
  <Card 
    as="article" 
    variant="elevated" 
    size="medium" 
    animation="hover"
    className="space-y-6"
  >
    <div className="space-y-4">
      {/* Project Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-h2 font-medium text-hero-text flex-1">{title}</h3>
        <span className={`text-small font-medium px-3 py-1 rounded-full ${
          status === 'active' 
            ? 'bg-green-100 text-green-800' 
            : status === 'completed'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-scientific-100 text-hero-text'
        }`}>
          {status === 'active' ? 'Active' : status === 'completed' ? 'Completed' : 'Planning'}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-body text-hero-text leading-relaxed">
        {description}
      </p>
      
      {/* Key Achievements */}
      {achievements && achievements.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-body font-medium text-hero-text">Key Achievements</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-body text-hero-text flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Technologies */}
      <div className="space-y-2">
        <h4 className="text-body font-medium text-hero-text">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-small px-3 py-1 bg-scientific-100 text-hero-text rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Collaborators */}
      {collaborators && collaborators.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-body font-medium text-hero-text">Collaborators</h4>
          <div className="flex flex-wrap gap-2">
            {collaborators.map((collaborator, index) => (
              <span 
                key={index}
                className="text-small px-3 py-1 bg-accent/10 text-accent rounded-full"
              >
                {collaborator}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
    
    {/* Molecular accent line */}
    <div className="h-0.5 bg-gradient-to-r from-accent to-secondary rounded-full opacity-30" />
  </Card>
)

export default function OncogenomicsPage() {
  const researchAreas = [
    {
      title: "AI-Driven Cancer Genomics Analysis",
      description: "Developing machine learning pipelines for the analysis of large-scale cancer genomic datasets, utilizing cloud computing infrastructure to process multi-omics data and identify novel therapeutic targets.",
      icon: "🧠"
    },
    {
      title: "Cloud-Based Genomic Data Processing",
      description: "Architecting scalable cloud solutions for genomic data storage, processing, and analysis, enabling researchers to handle the computational demands of modern cancer genomics research.",
      icon: "☁️"
    },
    {
      title: "Precision Medicine Applications",
      description: "Exploring the application of artificial intelligence in personalizing cancer treatment strategies based on individual genomic profiles and tumor characteristics.",
      icon: "🎯"
    }
  ]

  const researchProjects: ProjectCardProps[] = [
    {
      title: "ARTEMIS: Advanced Real-Time Expert Medical Intelligent System",
      description: "Developing of a cutting-edge AI-powered cancer treatment recommendation system using Amazon Web Services (AWS) and Nova multimodal AI capabilities. This comprehensive solution processes diverse patient data types including medical imaging, genomic sequences, and clinical records to deliver personalized treatment recommendations. ",
      status: "active",
      technologies: ["AWS Bedrock", "Amazon Nova", "Lambda", "Step Functions", "OpenSearch", "Cloudwatch", "S3", ],
      collaborators: ["Stanford Genomics Lab", "AWS Healthcare Team"],
      achievements: [
        "Implemented advanced RAG (Retrieval-Augmented Generation) system integrating current medical protocols and research",
        "Developed automated clinical workflow agents using Amazon Bedrock",
        "Created robust testing framework ensuring 85%+ recommendation accuracy",
        "Engineered HIPAA-compliant architecture with end-to-end security",
        "Integrated continuous prompt optimization for enhanced accuracy"
      ]
    },
    {
      title: "Cloud Infrastructure for Oncogenomics Research",
      description: "Designing and implementing scalable cloud architectures specifically optimized for cancer genomics workflows, enabling efficient processing of large-scale sequencing data and facilitating collaborative research.",
      status: "active",
      technologies: ["AWS", "Kubernetes", "Terraform", "GATK", "Nextflow"],
      collaborators: ["Cancer Research Institute", "Broad Institute"]
    }
    // {
    //   title: "Oncogenomics Review",
    //   description: "Designing and implementing scalable cloud architectures specifically optimized for cancer genomics workflows, enabling efficient processing of large-scale sequencing data and facilitating collaborative research.",
    //   status: "active",
    //   technologies: ["AWS", "Kubernetes", "Terraform", "GATK", "Nextflow"],
    //   collaborators: ["Cancer Research Institute", "Broad Institute"]
    // }
  ]

  return (
    <PageWrapper 
      width="default"
      heroImage="/cell-structure.jpg"
      heroTitle="Oncogenomics Research"
      heroSubtitle="AI-Driven Cancer Genomics • Precision Medicine • Cloud Computing"
    >
      <div className="space-y-16">
        {/* Research Focus */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-h2 font-semibold text-hero-text mb-4">
              Research Focus
            </h2>
            <p className="text-body text-hero-text max-w-3xl mx-auto leading-relaxed">
              My research interests lie at the convergence of computational methods and cancer biology, 
              leveraging cloud-scale computing and machine learning to understand the genomic landscape 
              of cancer. This interdisciplinary approach combines my technical expertise in cloud 
              architecture with emerging opportunities in precision oncology.
            </p>
          </div>
        </section>

        {/* Current Research Areas */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-h2 font-semibold text-hero-text mb-4">
              Current Research Areas
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, index) => (
              <Card 
                key={index}
                variant="outlined" 
                size="medium" 
                animation="hover"
                className="text-center space-y-4"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-h3 font-medium text-hero-text">{area.title}</h3>
                <p className="text-body text-hero-text leading-relaxed">{area.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Projects */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-h2 font-semibold text-hero-text mb-4">
              Research Projects
            </h2>
            <p className="text-body text-hero-text">
              Current and planned research initiatives at the intersection of AI and genomics
            </p>
          </div>
          
          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Methodology Section */}
        <section className="section-spacing border-t border-scientific-100">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-h2 font-semibold text-hero-text">
                Research Methodology
              </h2>
              <div className="space-y-4">
                <p className="text-body text-hero-text leading-relaxed">
                  My approach combines computational genomics with cloud-native architectures, 
                  enabling scalable analysis of large genomic datasets. I leverage machine learning 
                  to identify patterns in cancer genomics data that traditional methods might miss.
                </p>
                <p className="text-body text-hero-text leading-relaxed">
                  The integration of AWS cloud services allows for processing of multi-terabyte 
                  genomic datasets, while advanced AI models help identify potential therapeutic 
                  targets and biomarkers for precision medicine applications.
                </p>
              </div>
            </div>
            
            <Card variant="elevated" size="medium" className="space-y-6">
              <h3 className="text-h3 font-medium text-hero-text">Key Technologies</h3>
              <div className="grid grid-cols-2 gap-4 text-small">
                <div className="space-y-2">
                  <h4 className="font-medium text-hero-text">AI/ML Frameworks</h4>
                  <ul className="text-hero-text space-y-1">
                    <li>• TensorFlow & PyTorch</li>
                    <li>• Scikit-learn</li>
                    <li>• Transformers</li>
                    <li>• BioPython</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-hero-text">Cloud & Infrastructure</h4>
                  <ul className="text-hero-text space-y-1">
                    <li>• AWS SageMaker</li>
                    <li>• AWS Batch</li>
                    <li>• Kubernetes</li>
                    <li>• Docker</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-hero-text">Genomics Tools</h4>
                  <ul className="text-hero-text space-y-1">
                    <li>• GATK</li>
                    <li>• Nextflow</li>
                    <li>• Bioconductor</li>
                    <li>• IGV</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-hero-text">Data Analysis</h4>
                  <ul className="text-hero-text space-y-1">
                    <li>• R & Python</li>
                    <li>• Jupyter Notebooks</li>
                    <li>• Apache Spark</li>
                    <li>• SQL/NoSQL</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-h2 font-semibold text-hero-text mb-4">
              Collaborations & Future Work
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Card variant="outlined" size="medium" className="space-y-4">
              <h3 className="text-h3 font-medium text-hero-text">Open to Collaboration</h3>
              <p className="text-body text-hero-text leading-relaxed">
                I'm actively seeking collaborations with cancer research institutions, 
                biotechnology companies, and academic researchers working at the intersection 
                of genomics, artificial intelligence, and cloud computing.
              </p>
              <div className="space-y-2">
                <h4 className="text-body font-medium text-hero-text">Areas of Interest:</h4>
                <ul className="text-small text-hero-text space-y-1">
                  <li>• Multi-omics data integration</li>
                  <li>• Drug discovery pipelines</li>
                  <li>• Biomarker identification</li>
                  <li>• Clinical trial optimization</li>
                </ul>
              </div>
            </Card>
            
            <Card variant="outlined" size="medium" className="space-y-4">
              <h3 className="text-h3 font-medium text-hero-text">Publications & Presentations</h3>
              <p className="text-body text-hero-text leading-relaxed">
                Research publications and conference presentations will be listed here as they 
                become available. Currently preparing manuscripts on AI applications in 
                cancer genomics and cloud architectures for precision medicine.
              </p>
              <div className="space-y-2">
                <h4 className="text-body font-medium text-hero-text">Upcoming:</h4>
                <ul className="text-small text-hero-text space-y-1">
                  <li>• ASHG 2025 Conference</li>
                  <li>• Nature Biotechnology (In Review)</li>
                  <li>• AWS re:Invent Healthcare Track</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6 section-spacing bg-gradient-scientific rounded-lg">
          <h2 className="text-h2 font-semibold text-hero-text">
            Advancing Precision Medicine Through AI
          </h2>
          <p className="text-body text-hero-text max-w-2xl mx-auto">
            Interested in collaborating on cutting-edge research that combines artificial intelligence 
            with cancer genomics? Let's explore how we can accelerate the development of personalized 
            treatments and improve patient outcomes together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="btn-primary">
              View Research Proposals
            </button>
            <button type="button" className="btn-secondary">
              Contact for Collaboration
            </button>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}