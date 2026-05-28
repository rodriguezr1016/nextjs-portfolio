import Link from 'next/link'
import React from 'react'
import ClickableCard from '../components/ClickableCard'

const soundCanvasTags = ['React', 'TypeScript', 'Tone.js', 'MediaPipe', 'Vercel']

const page = () => {
  return (
    <main className="flex flex-1 flex-col items-center">
	<div className="layout-content-container flex flex-col max-w-[1000px] w-full px-6 md:px-10 py-12">

<div className="flex flex-col gap-3 mb-16">
<h1 className="text-[#111318] dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">Selected Works</h1>
<p className="text-[#616f89] dark:text-white/60 text-lg font-normal max-w-2xl">
                        A complete archive of software development projects.
                    </p>
</div>

	<div className="flex flex-col gap-24">

	<ClickableCard ariaLabel="View SoundCanvas case study" href="/case-studies/soundcanvas" className="group flex flex-col md:flex-row items-center gap-10">
	<div className="w-full md:w-1/2 aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-300 overflow-hidden" data-alt="Interactive SoundCanvas music interface with browser audio controls" style={{backgroundImage: 'url("./soundcanvas-ambient.png")'}}>
	</div>
	<div className="w-full md:w-1/2 flex flex-col gap-6">
	<div className="flex flex-col gap-2">
	<span className="text-primary text-xs font-bold uppercase tracking-widest">Featured Project</span>
	<h3 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">SoundCanvas</h3>
	<div className="flex items-center gap-3 text-[#616f89] dark:text-white/50 text-sm font-medium">
	<span>2026</span>
	<span className="size-1 rounded-full bg-[#616f89]/30"></span>
	<span>Full Stack Developer</span>
	</div>
	</div>
	<p className="text-[#616f89] dark:text-white/70 text-base leading-relaxed">
	                                A collection of browser-based music experiments exploring gesture capture, generative melody, ambient game scoring, and responsive audio controls.
	                            </p>
	<div className="flex flex-wrap gap-2">
	{soundCanvasTags.map((tag) => (
	  <span key={tag} className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">{tag}</span>
	))}
	</div>
	<div className="flex flex-wrap gap-4 pt-2">
	<Link href={"https://ambient-game-music.vercel.app"} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#111318] dark:bg-white dark:text-[#111318] text-white text-sm font-bold hover:bg-black dark:hover:bg-white/90 transition-all">
	<span className="material-symbols-outlined text-lg">visibility</span>
	                                    View Demo
	                                </Link>
	<Link href={"https://github.com/rodriguezr1016/ambient-game-music"} className="flex items-center gap-2 px-5 py-2 rounded-lg border border-[#f0f2f4] dark:border-white/20 text-[#111318] dark:text-white text-sm font-bold hover:bg-[#f0f2f4] dark:hover:bg-white/5 transition-all">
	<span className="material-symbols-outlined text-lg">code</span>
	                                    GitHub
	                                </Link>
	</div>
	</div>
	</ClickableCard>

	<ClickableCard ariaLabel="View AI video detection research case study" href="/case-studies/ai-video-detection-research" className="group flex flex-col md:flex-row items-center gap-10">
<div className="w-full md:w-1/2 aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-300 overflow-hidden" data-alt="Research survey website for comparing human and AI video detection accuracy" style={{backgroundImage: 'url("./ai-video-detection.png")'}}>
</div>
<div className="w-full md:w-1/2 flex flex-col gap-6">
<div className="flex flex-col gap-2">
<span className="text-primary text-xs font-bold uppercase tracking-widest">Research / Featured Project</span>
<h3 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">Can AI Differentiate Between Recorded Video and Generated Video?</h3>
<div className="flex items-center gap-3 text-[#616f89] dark:text-white/50 text-sm font-medium">
<span>2025</span>
<span className="size-1 rounded-full bg-[#616f89]/30"></span>
<span>AI/ML Research + Web Development</span>
</div>
</div>
<p className="text-[#616f89] dark:text-white/70 text-base leading-relaxed">
                                Built and analyzed a research system comparing human judgment against AI detection models for identifying AI-generated video. I helped develop the randomized survey website, store results in MongoDB, and run SuSy, VideoMAE, and MINTIME against the same video set.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">React/Next.js</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">MongoDB</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">Python</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">AI/ML Models</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">Data Visualization</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">Vercel</span>
</div>
<div className="flex flex-wrap gap-4 pt-2">
<Link href={"https://ai-detector-survey-urid.vercel.app/"} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#111318] dark:bg-white dark:text-[#111318] text-white text-sm font-bold hover:bg-black dark:hover:bg-white/90 transition-all">
<span className="material-symbols-outlined text-lg">visibility</span>
                                    Live Survey
                                </Link>
<Link href={"https://github.com/rodriguezr1016/AI-vs-Human-Data"} className="flex items-center gap-2 px-5 py-2 rounded-lg border border-[#f0f2f4] dark:border-white/20 text-[#111318] dark:text-white text-sm font-bold hover:bg-[#f0f2f4] dark:hover:bg-white/5 transition-all">
<span className="material-symbols-outlined text-lg">star</span>
                                    Data/Code
                                </Link>
</div>
</div>
</ClickableCard>

<ClickableCard ariaLabel="View Brown Issues case study" href="/case-studies/brown-issues" className="group flex flex-col md:flex-row items-center gap-10">
<div className="w-full md:w-1/2 aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-300 overflow-hidden" data-alt="Modern analytics dashboard with clean charts and dark mode interface" style={{backgroundImage: 'url("./brownissues.png'}}>
</div>
<div className="w-full md:w-1/2 flex flex-col gap-6">
<div className="flex flex-col gap-2">
<span className="text-primary text-xs font-bold uppercase tracking-widest">Featured Project</span>
<h3 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">Brown Issues</h3>
<div className="flex items-center gap-3 text-[#616f89] dark:text-white/50 text-sm font-medium">
<span>2025</span>
<span className="size-1 rounded-full bg-[#616f89]/30"></span>
<span>Front-End Developer</span>
</div>
</div>
<p className="text-[#616f89] dark:text-white/70 text-base leading-relaxed">
                                A nonprofit WordPress website featuring custom PHP development, client-side JavaScript enhancements, and responsive front-end layouts built with HTML and CSS.

                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">WordPress</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">PHP</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">JavaScript</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">CSS</span>
</div>
<div className="flex gap-4 pt-2">
<Link href={"https://brownissuestv.org/"} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#111318] dark:bg-white dark:text-[#111318] text-white text-sm font-bold hover:bg-black dark:hover:bg-white/90 transition-all">

<span className="material-symbols-outlined text-lg">visibility</span>
                                    View Live
                                </Link>
</div>
</div>
</ClickableCard>

<ClickableCard ariaLabel="View Digital Nest Impact Page case study" href="/case-studies/digital-nest-impact-page" className="group flex flex-col md:flex-row-reverse items-center gap-10">
<div className="w-full md:w-1/2 aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-300 overflow-hidden" data-alt="Code editor showing complex neural network architecture and data structures" style={{backgroundImage: 'url("./impactpage.png")'}}>
</div>
<div className="w-full md:w-1/2 flex flex-col gap-6">
<div className="flex flex-col gap-2">
<span className="text-primary text-xs font-bold uppercase tracking-widest">Featured Project</span>
<h3 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">Digital Nest Impact Page</h3>
<div className="flex items-center gap-3 text-[#616f89] dark:text-white/50 text-sm font-medium">
<span>2025</span>
<span className="size-1 rounded-full bg-[#616f89]/30"></span>
<span>Front-End Developer</span>
</div>
</div>
<p className="text-[#616f89] dark:text-white/70 text-base leading-relaxed">
                                Built a responsive “Economic Prosperity” section in WordPress using JavaScript to generate and animate SVG-based visuals. Used DOM manipulation and IntersectionObserver to trigger sequential animations and color changes on scroll, with a mobile carousel layout for smaller screens.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">WordPress</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">JavaScript</span>
</div>
<div className="flex gap-4 pt-2">
<Link href={"https://github.com/BizzNEST/Avada-child"} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#111318] dark:bg-white dark:text-[#111318] text-white text-sm font-bold hover:bg-black dark:hover:bg-white/90 transition-all">
<span className="material-symbols-outlined text-lg">visibility</span>
                                    View Live
                                </Link>
<Link href={"https://digitalnest.org/our-impact/"}className="flex items-center gap-2 px-5 py-2 rounded-lg border border-[#f0f2f4] dark:border-white/20 text-[#111318] dark:text-white text-sm font-bold hover:bg-[#f0f2f4] dark:hover:bg-white/5 transition-all">
<span className="material-symbols-outlined text-lg">star</span>
                                    GitHub
                                </Link>
</div>
</div>
</ClickableCard>

<ClickableCard ariaLabel="View OpenAI Image Generator case study" href="/case-studies/openai-image-generator" className="group flex flex-col md:flex-row items-center gap-10">
<div className="w-full md:w-1/2 aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-300 overflow-hidden" data-alt="Abstract data visualization with flowing lines and vibrant nodes" style={{backgroundImage: "url('./ai-image-generator.png')"}}>
</div>
<div className="w-full md:w-1/2 flex flex-col gap-6">
<div className="flex flex-col gap-2">
<span className="text-primary text-xs font-bold uppercase tracking-widest">Featured Project</span>
<h3 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">OpenAI Image Generator</h3>
<div className="flex items-center gap-3 text-[#616f89] dark:text-white/50 text-sm font-medium">
<span>2024</span>
<span className="size-1 rounded-full bg-[#616f89]/30"></span>
<span>Full-Stack Developer</span>
</div>
</div>
<p className="text-[#616f89] dark:text-white/70 text-base leading-relaxed">
                                A full‑stack web app that lets users turn text prompts into AI‑generated images, then publish them to a community gallery where others can browse, search, and like creations. Users can register and log in with JWT‑based authentication, generate images via the OpenAI Images API, and share them as posts stored in MongoDB and hosted on Cloudinary. The app includes a personal profile view for managing your own posts and a likes collection, plus a responsive React UI for discovery and creation.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">React</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">Cloudinary</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">Node.js</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">Express</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">MongoDB</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">Tailwind</span>
</div>
<div className="flex gap-4 pt-2">
<Link href={"https://ai-generated-images-eosin.vercel.app/"} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#111318] dark:bg-white dark:text-[#111318] text-white text-sm font-bold hover:bg-black dark:hover:bg-white/90 transition-all">
<span className="material-symbols-outlined text-lg">visibility</span>
                                    View Live
                                </Link>
<Link href={"https://github.com/rodriguezr1016/ai-generated-images"} className="flex items-center gap-2 px-5 py-2 rounded-lg border border-[#f0f2f4] dark:border-white/20 text-[#111318] dark:text-white text-sm font-bold hover:bg-[#f0f2f4] dark:hover:bg-white/5 transition-all">
<span className="material-symbols-outlined text-lg">star</span>
                                    GitHub
                                </Link>
</div>
</div>
</ClickableCard>
{/*--------------------------------------------------------------------------------------------- */}
<ClickableCard ariaLabel="View Classic Tree Service case study" href="/case-studies/classic-tree-service" className="group flex flex-col md:flex-row items-center gap-10">
<div className="w-full md:w-1/2 aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-300 overflow-hidden" data-alt="Modern analytics dashboard with clean charts and dark mode interface" style={{backgroundImage: 'url("./classictree.png'}}>
</div>
<div className="w-full md:w-1/2 flex flex-col gap-6">
<div className="flex flex-col gap-2">
<span className="text-primary text-xs font-bold uppercase tracking-widest">Featured Project</span>
<h3 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">Classic Tree Service</h3>
<div className="flex items-center gap-3 text-[#616f89] dark:text-white/50 text-sm font-medium">
<span>2025</span>
<span className="size-1 rounded-full bg-[#616f89]/30"></span>
<span>Full-Stack Developer</span>
</div>
</div>
<p className="text-[#616f89] dark:text-white/70 text-base leading-relaxed">
                                A full-stack Next.js application built for a local tree service business, featuring an image upload pipeline powered by EdgeStore. Users can submit job requests with photos and additional details, with uploaded images stored securely and their returned URLs persisted in MongoDB alongside customer form data through custom API routes.

                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">NextJS</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">MongoDB</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">TypeScript</span>
</div>
<div className="flex gap-4 pt-2">
<Link href={"https://www.classic-tree-service.com/"} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#111318] dark:bg-white dark:text-[#111318] text-white text-sm font-bold hover:bg-black dark:hover:bg-white/90 transition-all">

<span className="material-symbols-outlined text-lg">visibility</span>
                                    View Live
                                </Link>
<Link href={"https://github.com/rodriguezr1016/classic-tree-service"} className="flex items-center gap-2 px-5 py-2 rounded-lg border border-[#f0f2f4] dark:border-white/20 text-[#111318] dark:text-white text-sm font-bold hover:bg-[#f0f2f4] dark:hover:bg-white/5 transition-all">
<span className="material-symbols-outlined text-lg">star</span>
                                    GitHub
                                </Link>
</div>
</div>
</ClickableCard>
{/*-----------------------------------------------------------------------------*/}
<ClickableCard ariaLabel="View AI Learning Hub case study" href="/case-studies/ai-learning-hub" className="group flex flex-col md:flex-row items-center gap-10">
<div className="w-full md:w-1/2 aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-300 overflow-hidden" data-alt="Modern analytics dashboard with clean charts and dark mode interface" style={{backgroundImage: 'url("./aihub.png'}}>
</div>
<div className="w-full md:w-1/2 flex flex-col gap-6">
<div className="flex flex-col gap-2">
<span className="text-primary text-xs font-bold uppercase tracking-widest">Featured Project</span>
<h3 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">AI Learning Hub</h3>
<div className="flex items-center gap-3 text-[#616f89] dark:text-white/50 text-sm font-medium">
<span>2025</span>
<span className="size-1 rounded-full bg-[#616f89]/30"></span>
<span>Front-End Developer</span>
</div>
</div>
<p className="text-[#616f89] dark:text-white/70 text-base leading-relaxed">
                                A lightweight Next.js + TypeScript microsite designed to host AI prompt recipes, workshop materials, and curated resources. Content is managed through Markdown files stored directly in the repository, enabling a simple, version-controlled workflow without the need for a CMS or authentication layer. The site prioritizes fast performance, clean navigation, and maintainable content structure.

                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">NextJS</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">TypeScript</span>
<span className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold">Tailwind</span>
</div>
<div className="flex gap-4 pt-2">
<Link href={"https://ai-learning-hub.bnaccounts.workers.dev/"} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#111318] dark:bg-white dark:text-[#111318] text-white text-sm font-bold hover:bg-black dark:hover:bg-white/90 transition-all">

<span className="material-symbols-outlined text-lg">visibility</span>
                                    View Live
                                </Link>
<Link href={"https://github.com/BizzNEST/AI-Learning-Hub"} className="flex items-center gap-2 px-5 py-2 rounded-lg border border-[#f0f2f4] dark:border-white/20 text-[#111318] dark:text-white text-sm font-bold hover:bg-[#f0f2f4] dark:hover:bg-white/5 transition-all">
<span className="material-symbols-outlined text-lg">star</span>
                                    GitHub
                                </Link>
</div>
</div>
</ClickableCard>
{/*-----------------------------------------------------------------------------*/}
</div>

<div className="mt-24 pt-16 border-t border-[#f0f2f4] dark:border-white/10 text-center flex flex-col items-center gap-8">
<h4 className="text-2xl font-bold text-[#111318] dark:text-white">Have a project in mind?</h4>
<p className="text-[#616f89] dark:text-white/60 max-w-md">
                        I'm currently available for freelance projects and full-time software engineering roles.
                    </p>
<div className="flex gap-4">
<Link href={"/Contact"} className="px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                            Let's Chat
                        </Link>
<Link href={"/Resume"} className="px-8 py-4 bg-[#f0f2f4] dark:bg-white/5 text-[#111318] dark:text-white rounded-xl font-bold hover:bg-[#e4e7eb] dark:hover:bg-white/10 transition-colors">
                            View Resume
                        </Link>
</div>
</div>
</div>
</main>
  )
}

export default page
