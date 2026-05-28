type CaseStudyDemo = {
  title: string
  description: string
  image: string
  liveUrl: string
  githubUrl: string
  tags: string[]
}

type CaseStudy = {
  slug: string
  title: string
  eyebrow: string
  year: string
  role: string
  image: string
  summary: string
  overview: string
  details: string[]
  outcome: string
  technologies: string[]
  links: Array<{
    label: string
    href: string
  }>
  demos?: CaseStudyDemo[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'soundcanvas',
    title: 'SoundCanvas',
    eyebrow: 'Featured Project',
    year: '2026',
    role: 'Full Stack Developer',
    image: '/soundcanvas-ambient.png',
    summary:
      'A collection of browser-based music experiments exploring gesture capture, generative melody, ambient game scoring, and responsive audio controls.',
    overview:
      'SoundCanvas brings together interactive web audio experiments that turn browser input into musical systems. The project explores gesture-driven playback, generative melody, ambient scoring, and responsive controls using modern front-end tooling. Each demo tests a different interaction pattern, from 50s/60s-inspired melodic phrases to softer ambient game-music environments.',
    details: [
      'Built a family of browser-based audio experiments with React, TypeScript, Vite, and Tone.js.',
      'Explored gesture capture as a musical input for melody, chord movement, intensity, and ambient texture.',
      'Created separate demos for retro melodic phrasing, ambient game scoring, gesture capture, and watercolor-inspired interface direction.',
      'Captured each version as a deployable Vercel demo with its own GitHub repository for iteration and comparison.',
    ],
    outcome:
      'The project became a flexible sandbox for testing how gesture, interface design, and generative audio can work together in a browser.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tone.js', 'MediaPipe', 'SoundFont', 'Vercel'],
    links: [
      { label: 'View Demo', href: 'https://ambient-game-music.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/rodriguezr1016/ambient-game-music' },
    ],
    demos: [
      {
        title: '50s/60s Gesture Melody',
        description:
          'A browser-based generative music toy that turns hand gesture signals into retro-inspired melodic phrases, chord motion, and responsive playback controls.',
        image: '/soundcanvas-gesture-trigger.png',
        liveUrl: 'https://50s-60s-music-gesture-trigger-versi.vercel.app',
        githubUrl: 'https://github.com/rodriguezr1016/50s-60s-music-gesture-trigger-version',
        tags: ['React', 'Vite', 'Tone.js', 'MediaPipe'],
      },
      {
        title: '50s/60s Music Copy',
        description:
          'A variation of the 50s/60s music interface focused on close-harmony movement, simple hooks, and browser-native audio interaction.',
        image: '/soundcanvas-50s-copy.png',
        liveUrl: 'https://50s-60s-music-copy.vercel.app',
        githubUrl: 'https://github.com/rodriguezr1016/50s-60s-music-copy',
        tags: ['React', 'TypeScript', 'SoundFont', 'Tone.js'],
      },
      {
        title: 'Ambient Game Music Gesture Capture',
        description:
          'An ambient game-music instrument that reacts to captured gestures, shifting musical texture and energy through a compact control surface.',
        image: '/soundcanvas-ambient-gesture.png',
        liveUrl: 'https://ambient-game-music-gesture-capture.vercel.app',
        githubUrl: 'https://github.com/rodriguezr1016/ambient-game-music-gesture-capture',
        tags: ['React', 'Vite', 'MediaPipe', 'Generative Audio'],
      },
      {
        title: 'Ambient Game Music Watercolor Capture',
        description:
          'A watercolor-styled ambient sound experiment pairing gesture-driven music controls with a softer visual treatment for mood-based play.',
        image: '/soundcanvas-watercolor.png',
        liveUrl: 'https://ambient-game-music-watercolor-captu.vercel.app',
        githubUrl: 'https://github.com/rodriguezr1016/ambient-game-music-watercolor-capture',
        tags: ['React', 'TypeScript', 'Vite', 'Interactive Music'],
      },
      {
        title: 'Ambient Game Music',
        description:
          'A generative ambient music playground for exploring game-style moods, texture changes, and layered browser audio patterns.',
        image: '/soundcanvas-ambient.png',
        liveUrl: 'https://ambient-game-music.vercel.app',
        githubUrl: 'https://github.com/rodriguezr1016/ambient-game-music',
        tags: ['React', 'Tone.js', 'SoundFont', 'Vercel'],
      },
    ],
  },
  {
    slug: 'ai-video-detection-research',
    title: 'Can AI Differentiate Between Recorded Video and Generated Video?',
    eyebrow: 'Research / Featured Project',
    year: '2025',
    role: 'AI/ML Research + Web Development',
    image: '/ai-video-detection.png',
    summary:
      'A research system comparing human judgment against publicly available AI detection models for identifying AI-generated video.',
    overview:
      'This project explored how free AI detection models compare to humans when classifying AI-generated versus real videos. Our team built a timed survey platform, stored anonymous participant results in MongoDB, and evaluated AI detection models on the same video set.',
    details: [
      'Built a randomized video-classification survey website.',
      'Stored anonymous participant responses and model results in MongoDB.',
      'Ran SuSy, VideoMAE, and MINTIME on the same set of short videos.',
      'Compared human accuracy and response time against AI model performance.',
      'Organized findings into tables and visualizations for analysis.',
    ],
    outcome:
      'Human accuracy was about 83.5%, while average AI model accuracy was about 46%, creating a strong basis for a deeper research case study.',
    technologies: ['React/Next.js', 'MongoDB', 'Python', 'AI/ML Models', 'Data Visualization', 'Vercel'],
    links: [
      { label: 'Live Survey', href: 'https://ai-detector-survey-urid.vercel.app/' },
      { label: 'Data/Code', href: 'https://github.com/rodriguezr1016/AI-vs-Human-Data' },
    ],
  },
  {
    slug: 'brown-issues',
    title: 'Brown Issues',
    eyebrow: 'Featured Project',
    year: '2025',
    role: 'Front-End Developer',
    image: '/brownissues.png',
    summary:
      'A nonprofit WordPress website featuring custom PHP development, JavaScript enhancements, and responsive front-end layouts.',
    overview:
      'Brown Issues is a nonprofit WordPress website project focused on improving a public-facing media and community platform with maintainable front-end updates.',
    details: [
      'Built responsive front-end layouts with HTML and CSS.',
      'Added client-side JavaScript enhancements.',
      'Worked inside a WordPress and PHP theme environment.',
    ],
    outcome:
      'The project helped deliver a cleaner and more usable web presence for a nonprofit media organization.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    links: [{ label: 'View Live', href: 'https://brownissuestv.org/' }],
  },
  {
    slug: 'digital-nest-impact-page',
    title: 'Digital Nest Impact Page',
    eyebrow: 'Featured Project',
    year: '2025',
    role: 'Front-End Developer',
    image: '/impactpage.png',
    summary:
      'A responsive WordPress impact section using generated SVG visuals, scroll-triggered animation, and mobile carousel behavior.',
    overview:
      'This project turned an Economic Prosperity content section into a more visual, interactive experience for communicating nonprofit impact metrics.',
    details: [
      'Generated and animated SVG-based visual elements with JavaScript.',
      'Used DOM manipulation and IntersectionObserver for scroll-triggered sequences.',
      'Adapted the experience into a mobile carousel layout for smaller screens.',
    ],
    outcome:
      'The finished section made impact data more engaging and easier to scan across desktop and mobile layouts.',
    technologies: ['WordPress', 'JavaScript'],
    links: [
      { label: 'View Live', href: 'https://github.com/BizzNEST/Avada-child' },
      { label: 'GitHub', href: 'https://digitalnest.org/our-impact/' },
    ],
  },
  {
    slug: 'openai-image-generator',
    title: 'OpenAI Image Generator',
    eyebrow: 'Featured Project',
    year: '2024',
    role: 'Full-Stack Developer',
    image: '/ai-image-generator.png',
    summary:
      'A full-stack app where users generate AI images, publish them to a gallery, and manage posts and likes.',
    overview:
      'OpenAI Image Generator combines prompt-based image generation with a community gallery, authentication, profile management, and cloud-hosted image storage.',
    details: [
      'Integrated image generation through the OpenAI Images API.',
      'Built JWT-based authentication and user profile flows.',
      'Stored posts in MongoDB and hosted generated images on Cloudinary.',
      'Created a responsive React UI for discovery, creation, and profile management.',
    ],
    outcome:
      'The app delivered an end-to-end create-and-share workflow, from text prompt to public image gallery.',
    technologies: ['React', 'Cloudinary', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    links: [
      { label: 'View Live', href: 'https://ai-generated-images-eosin.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/rodriguezr1016/ai-generated-images' },
    ],
  },
  {
    slug: 'classic-tree-service',
    title: 'Classic Tree Service',
    eyebrow: 'Featured Project',
    year: '2025',
    role: 'Full-Stack Developer',
    image: '/classictree.png',
    summary:
      'A local service business website with job-request forms, customer photo uploads, and MongoDB-backed submissions.',
    overview:
      'Classic Tree Service is a full-stack website designed around local customer lead capture and photo-backed job requests.',
    details: [
      'Built a Next.js application for a local tree service business.',
      'Implemented an image upload pipeline powered by EdgeStore.',
      'Stored customer form data and uploaded image URLs in MongoDB.',
    ],
    outcome:
      'The site gave customers a direct way to request work and send project photos before an estimate.',
    technologies: ['NextJS', 'MongoDB', 'TypeScript'],
    links: [
      { label: 'View Live', href: 'https://www.classic-tree-service.com/' },
      { label: 'GitHub', href: 'https://github.com/rodriguezr1016/classic-tree-service' },
    ],
  },
  {
    slug: 'ai-learning-hub',
    title: 'AI Learning Hub',
    eyebrow: 'Featured Project',
    year: '2025',
    role: 'Front-End Developer',
    image: '/aihub.png',
    summary:
      'A lightweight resource hub for AI prompt recipes, workshop materials, and Markdown-managed learning content.',
    overview:
      'AI Learning Hub is a fast microsite for publishing AI learning resources without the overhead of a CMS or authentication system.',
    details: [
      'Built a Next.js and TypeScript resource site.',
      'Used repository-managed Markdown content for a simple publishing workflow.',
      'Focused on clean navigation, fast performance, and maintainable content structure.',
    ],
    outcome:
      'The site provides an easy-to-update home for workshop materials, prompt examples, and curated AI resources.',
    technologies: ['NextJS', 'TypeScript', 'Tailwind'],
    links: [
      { label: 'View Live', href: 'https://ai-learning-hub.bnaccounts.workers.dev/' },
      { label: 'GitHub', href: 'https://github.com/BizzNEST/AI-Learning-Hub' },
    ],
  },
]

export const getCaseStudy = (slug: string) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug)
