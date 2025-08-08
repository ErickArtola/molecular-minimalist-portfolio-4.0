export interface Lecture {
  id: string
  title: string
  description: string
  audioUrl?: string
  embedUrl?: string
  duration: string
  status: 'published' | 'coming-soon'
}

export interface Course {
  id: string
  title: string
  description: string
  status: 'published' | 'in-progress' | 'planned'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  lectures: Lecture[]
  prerequisites?: string[]
  learningObjectives: string[]
}

export const courses: Course[] = [
  {
    id: 'advanced-molecular-mechanisms',
    title: 'Advanced Molecular Mechanisms in Cancer Development',
    description: 'Deep dive into the molecular mechanisms driving cancer development, including oncogenes, tumor suppressors, and cellular pathways.',
    status: 'published',
    difficulty: 'advanced',
    duration: 'TBD',
    prerequisites: ['Basic molecular biology', 'Cell biology fundamentals'],
    learningObjectives: [
      'Understand chromosomal instability in cancer',
      'Analyze the hallmarks of cancer framework',
      'Explore RAS and MYC signaling pathways',
      'Examine tumor suppressor mechanisms'
    ],
    lectures: [
      {
        id: 'chromosomal-chaos',
        title: 'From Chromosomal Chaos to Molecular Precision',
        description: 'Introduction to chromosomal instability and its role in cancer development.',
        embedUrl: 'https://1drv.ms/p/c/e38e37d6ed9af814/IQRwSTPVxRr2S7AuSh77r9R9AXnyAx_enP0vKVTessiIp8I',
        audioUrl: '/oncogenomics/advanced-molecular-mechanisms-in-cancer-development/1.1from-chromosomal-chaos-to-molecular-precision.mp3',
        duration: '15 min',
        status: 'published'
      },
      {
        id: 'hallmarks-framework',
        title: 'The Hallmarks of Cancer: From Concept to Clinical Reality',
        description: 'Comprehensive overview of the hallmarks of cancer and their clinical implications.',
        embedUrl: 'https://1drv.ms/p/c/e38e37d6ed9af814/IQSjCp7hjP27QbH3e2u0fF4rAcGsoE8YvqMGmSww7dXau0Y',
        audioUrl: '/oncogenomics/advanced-molecular-mechanisms-in-cancer-development/1.2-the-hallmarks-framework.mp3',
        duration: '23 min',
        status: 'published'
      },
      {
        id: 'ras-myc-signaling',
        title: 'RAS and MYC Signaling in Cancer',
        description: 'Detailed analysis of RAS and MYC oncogenes and their signaling pathways.',
        embedUrl: 'https://1drv.ms/p/c/e38e37d6ed9af814/IQTBWX5kGNKAT75pshE66lTmAcC8YXX_NRMAB2DLaOpJFhU?em=2&wdAr=1.7777777777777777',
        audioUrl: '/oncogenomics/advanced-molecular-mechanisms-in-cancer-development/2.1-ras-myc-version2-version2.mp3',
        duration: '27 min',
        status: 'published'
      },
      {
        id: 'tumor-suppressors',
        title: 'Tumor Suppressors',
        description: 'Comprehensive study of tumor suppressor genes and their mechanisms of action.',
        embedUrl: 'https://1drv.ms/p/c/e38e37d6ed9af814/IQScw3jwpQEPTI5NTaIT-MStAeVfWvgi1PevXH_KDodDMt4?em=2&wdAr=1.7777777777777777',
        audioUrl: '/oncogenomics/advanced-molecular-mechanisms-in-cancer-development/ElevenLabs_Lecture_2.2.pdf.mp3',
        duration: '36 min',
        status: 'published'
      },
      {
        id: 'genomic-instability',
        title: 'Genomic Instability - The Mutational Engine',
        description: 'Additional content in the Advanced Molecular Mechanisms in Cancer Development series.',
        embedUrl: 'https://1drv.ms/p/c/e38e37d6ed9af814/IQTWCNplZCC6RYHJp6EbfH2lAVebWI70ux5qzacyCNuNtQs?em=2&wdAr=1.7777777777777777',
        audioUrl: '/oncogenomics/advanced-molecular-mechanisms-in-cancer-development/3.1-genomic-instability-ver-3.mp3',
        duration: '1 hr 27 min',
        status: 'published'
      },
      {
        id: 'lecture-6',
        title: 'Lecture 6: Coming Soon',
        description: 'Additional content in the Advanced Molecular Mechanisms in Cancer Development series.',
        duration: 'TBD',
        status: 'coming-soon'
      }
    ]
  },
  {
    id: 'cancer-genomics-fundamentals',
    title: 'Cancer Genomics Fundamentals',
    description: 'Essential concepts in cancer genomics for beginners and intermediate learners.',
    status: 'planned',
    difficulty: 'beginner',
    duration: '6 hours',
    prerequisites: [],
    learningObjectives: [
      'Understand basic cancer biology',
      'Learn genomic instability concepts',
      'Explore tumor microenvironment',
      'Master molecular techniques'
    ],
    lectures: [
      {
        id: 'intro-cancer-biology',
        title: 'Introduction to Cancer Biology',
        description: 'Foundational concepts in cancer biology and genomics.',
        duration: '40 min',
        status: 'coming-soon'
      },
      {
        id: 'genomic-instability',
        title: 'Genomic Instability and Mutations',
        description: 'Understanding how genomic instability drives cancer progression.',
        duration: '45 min',
        status: 'coming-soon'
      },
      {
        id: 'tumor-microenvironment',
        title: 'Tumor Microenvironment',
        description: 'The role of the tumor microenvironment in cancer development.',
        duration: '50 min',
        status: 'coming-soon'
      },
      {
        id: 'molecular-techniques',
        title: 'Basic Molecular Techniques',
        description: 'Laboratory techniques used in cancer genomics research.',
        duration: '45 min',
        status: 'coming-soon'
      }
    ]
  },
  {
    id: 'ai-precision-medicine',
    title: 'AI in Precision Medicine',
    description: 'Application of artificial intelligence and machine learning in personalized cancer treatment.',
    status: 'planned',
    difficulty: 'advanced',
    duration: '10 hours',
    prerequisites: ['Machine learning basics', 'Cancer genomics fundamentals'],
    learningObjectives: [
      'Apply ML to genomic data',
      'Discover biomarkers using AI',
      'Identify drug targets',
      'Build clinical decision support systems'
    ],
    lectures: [
      {
        id: 'ml-genomics',
        title: 'Machine Learning in Genomics',
        description: 'Applying machine learning techniques to genomic data analysis.',
        duration: '60 min',
        status: 'coming-soon'
      },
      {
        id: 'biomarker-discovery',
        title: 'Biomarker Discovery',
        description: 'Using AI to identify novel biomarkers for cancer diagnosis and prognosis.',
        duration: '55 min',
        status: 'coming-soon'
      },
      {
        id: 'drug-target-identification',
        title: 'Drug Target Identification',
        description: 'AI-driven approaches to identifying new therapeutic targets.',
        duration: '50 min',
        status: 'coming-soon'
      },
      {
        id: 'clinical-decision-support',
        title: 'Clinical Decision Support Systems',
        description: 'Building AI systems to support clinical decision-making.',
        duration: '65 min',
        status: 'coming-soon'
      }
    ]
  }
]