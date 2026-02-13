import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
<section className="relative px-6 md:px-10 lg:px-40 py-20 lg:py-32 overflow-hidden">
<div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-6 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                                Available for projects
                            </div>
<h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-white">
                                Building digital experiences <span className="text-primary">with code.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                                Hi, I’m Rene. I like building things that actually work — from responsive web apps with Next.js and Tailwind to backend services, data-focused projects, and self-hosted systems.
                            </p>
<div className="flex flex-wrap gap-4 pt-4">
<Link className="flex items-center justify-center rounded-lg h-14 px-8 bg-primary text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all" href={"/Works"}>
View My Work
</Link>
<Link className="flex items-center justify-center rounded-lg h-14 px-8 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-all" href={"/Contact"}>
Let's Talk</Link>
</div>
</div>
<div className="hidden lg:block relative group">
<div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="relative bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">
<div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="mx-auto text-slate-400 text-xs">zsh — 80×24</div>
</div>
<div className="p-6 text-slate-300">
<div className="flex gap-3">
<span className="text-primary">➜</span>
<span className="text-emerald-400">~</span>
<span>whoami</span>
</div>
<div className="mt-1 text-slate-400">Rene_Rodriguez</div>
<div className="flex gap-3 mt-4">
<span className="text-primary">➜</span>
<span className="text-emerald-400">~</span>
<span>ls skills/</span>
</div>
<div className="mt-1 grid grid-cols-2 gap-x-4 text-slate-400">
<span>python</span>
<span>typescript</span>
<span>node.js</span>
<span>mongodb</span>
<span>next.js</span>
<span>docker</span>
<span>express.js</span>
<span>mysql</span>
<span>php</span>
<span>wordpress</span>
<span>c++</span>
</div>
<div className="flex gap-3 mt-4">
<span className="text-primary">➜</span>
<span className="text-emerald-400">~</span>
<span className="animate-pulse">|</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="px-6 md:px-10 lg:px-40 py-20 bg-slate-900/50">
<div className="max-w-[1200px] mx-auto">
<div className="flex items-end justify-between mb-12">
<div className="flex flex-col gap-2">
<h2 className="text-3xl font-bold dark:text-white tracking-tight">Featured Projects</h2>
<p className="text-slate-500 dark:text-slate-400">Selection of recent works and open-source contributions.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all" href="#">
                                View all projects <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group flex flex-col gap-4">
<div className="relative overflow-hidden rounded-xl aspect-video bg-slate-200 dark:bg-slate-800">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: "url('./brownissues.png')"}}>
</div>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<div className="flex gap-4">
<div className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-lg cursor-pointer">
<Link className="flex items-center justify-center" href={"https://brownissuestv.org/"}>
<span className="material-symbols-outlined">link</span>
</Link>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">WordPress</span>
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">PHP</span>
</div>
<h3 className="text-xl font-bold dark:text-white group-hover:text-primary transition-colors">Brown Issues</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                        A nonprofit WordPress website featuring custom PHP development, client-side JavaScript enhancements, and responsive front-end layouts built with HTML and CSS.
                                    </p>
</div>
</div>
<div className="group flex flex-col gap-4">
<div className="relative overflow-hidden rounded-xl aspect-video bg-slate-200 dark:bg-slate-800">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: "url('./impactpage.png')"}}>
</div>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<div className="flex gap-4">
<div className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-lg cursor-pointer">
<Link className="flex items-center justify-center" href={"https://digitalnest.org/our-impact/"}>
<span className="material-symbols-outlined">link</span>
</Link>
</div>
<div className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-lg cursor-pointer">
<Link className="flex justify-center items-center" href={"https://github.com/BizzNEST/Avada-child"}>
<span className="material-symbols-outlined">code</span>
</Link>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">wordpress</span>
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">JavaScript</span>
</div>
<h3 className="text-xl font-bold dark:text-white group-hover:text-primary transition-colors">Digital Nest Impact Page</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                        A dynamic WordPress page section that visualizes nonprofit metrics through programmatically generated SVG groups, responsive placement, and scroll-activated animation sequences.
                                    </p>
</div>
</div>
<div className="group flex flex-col gap-4">
<div className="relative overflow-hidden rounded-xl aspect-video bg-slate-200 dark:bg-slate-800">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: "url('./aihub.png')"}}>
</div>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<div className="flex gap-4">
<div className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-lg cursor-pointer">
<Link className="flex items-center justify-center" href={"https://ai-learning-hub.bnaccounts.workers.dev/"}>
<span className="material-symbols-outlined">link</span>
</Link>
</div>
<div className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-lg cursor-pointer">
<Link className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-lg cursor-pointer" href={"https://github.com/BizzNEST/AI-Learning-Hub"}>
<span className="material-symbols-outlined">code</span>
</Link>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Nextjs</span>
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Typescript</span>
</div>
<h3 className="text-xl font-bold dark:text-white group-hover:text-primary transition-colors">AI Learning Hub</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                        Lightweight Next.js + TypeScript microsite for hosting AI prompt recipes, workshops, and curated resources. Content lives in Markdown files inside the repo—no CMS or auth.
                                    </p>
</div>
</div>
<div className="group flex flex-col gap-4">
<div className="relative overflow-hidden rounded-xl aspect-video bg-slate-200 dark:bg-slate-800">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: "url('./ai-image-generator.png')"}}>
</div>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<div className="flex gap-4">
<Link href={"https://ai-generated-images-eosin.vercel.app/"}className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-lg cursor-pointer">
<span className="material-symbols-outlined">link</span>
</Link>
<Link href={"https://github.com/rodriguezr1016/ai-generated-images"} className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-lg cursor-pointer">
<span className="material-symbols-outlined">code</span>
</Link>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">express</span>
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">cloudinary</span>
</div>
<h3 className="text-xl font-bold dark:text-white group-hover:text-primary transition-colors">Open AI Image Generator</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                        A full‑stack web app where users generate images from text prompts, share them to a community feed, and manage their own posts and likes.
                                    </p>
</div>
</div>
</div>
</div>
</section>
<section className="px-6 md:px-10 lg:px-40 py-20">
<div className="max-w-[1200px] mx-auto">
<h2 className="text-2xl font-bold text-white mb-10 text-center">My Tech Stack</h2>
<div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[#f1f5f9] opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
<span className="material-symbols-outlined text-3xl">data_object</span>
<span className="text-lg font-bold">JavaScript</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
<span className="material-symbols-outlined text-3xl">terminal</span>
<span className="text-lg font-bold">NEXT.JS</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
<span className="material-symbols-outlined text-3xl">database</span>
<span className="text-lg font-bold">MySQL</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
<span className="material-symbols-outlined text-3xl">code_blocks</span>
<span className="text-lg font-bold">WordPress</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
<span className="material-symbols-outlined text-3xl">settings_input_component</span>
<span className="text-lg font-bold">Node.js</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
<span className="material-symbols-outlined text-3xl">view_quilt</span>
<span className="text-lg font-bold">Tailwind</span>
</div>
</div>
</div>
</section>
</main>
  );
}
