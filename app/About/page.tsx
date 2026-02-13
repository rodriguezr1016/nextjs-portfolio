'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useRef } from 'react';

const About = () => {
    const journey = useRef(".journey");
    const journeyItem = useRef("data-journey-item");
    console.log(journeyItem.current.length);
  return (
    <main className="flex-1 flex justify-center py-10 md:py-20">
<div className="max-w-[1024px] w-full px-6 flex flex-col gap-20">

<section className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-1 border border-primary/10">
<div className="w-full h-full rounded-xl bg-center bg-cover overflow-hidden" data-alt="Professional portrait of a software engineer smiling" style={{backgroundImage: "url('./headshot.JPG')"}}>
</div>
</div>
</div>
<div className="w-full md:w-1/2 flex flex-col gap-6">
<div className="flex flex-col gap-3">
<span className="text-primary font-semibold tracking-wider uppercase text-xs">About Me</span>
<h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Designing systems, coding experiences.</h1>
<p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                    I’m Rene, a developer based in California’s Central Valley with an interest in building reliable, scalable web applications. I focus on front-end development with modern JavaScript and frameworks like Next.js, while also working with backend logic and content-driven systems such as WordPress to support real application needs.
                                </p>
<p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                    My approach is hands on and practical. I aim to write clear, maintainable code, build features end-to-end, and keep learning by experimenting on real projects. Outside of formal work, I spend a lot of time on personal projects building dashboards, exploring data-driven features, and running self-hosted services to better understand how applications behave beyond just the interface.
                                </p>
</div>
<div className="flex gap-4">
<Link href={"/Contact"} className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all flex items-center gap-2">
<span>Let's Talk</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</div>
</section>

<section className="flex flex-col gap-8">
<div className="flex flex-col gap-2">
<h2 className="text-2xl font-bold text-white tracking-tight">Technical Toolkit</h2>
<p className="text-slate-600 dark:text-slate-400">The languages, frameworks, and tools I use to bring ideas to life.</p>
</div>
<div className="flex gap-3 flex-wrap">
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">code</span>
<span className="text-sm text-white font-medium">React</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">data_object</span>
<span className="text-sm text-white font-medium">TypeScript</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">settings_ethernet</span>
<span className="text-sm text-white font-medium">Node.js</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">terminal</span>
<span className="text-sm text-white font-medium">Python</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">layers</span>
<span className="text-sm text-white font-medium">Next.js</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">data_array</span>
<span className="text-sm text-white font-medium">C++</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">database</span>
<span className="text-sm text-white font-medium">MySQL</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">box</span>
<span className="text-sm text-white font-medium">Docker</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">javascript</span>
<span className="text-sm text-white font-medium">Express</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">palette</span>
<span className="text-sm text-white font-medium">Tailwind CSS</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">account_tree</span>
<span className="text-sm text-white font-medium">Git</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">code_blocks</span>
<span className="text-sm text-white font-medium">WordPress</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#232f48] border border-slate-200 dark:border-transparent px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">database</span>
<span className="text-sm text-white font-medium">MongoDB</span>
</div>
</div>
</section>

<section className="flex flex-col gap-10">
<div className="flex flex-col gap-2">
<h2 className="text-2xl text-white font-bold tracking-tight">My Journey</h2>
<p className="text-slate-600 dark:text-slate-400">A timeline of my career milestones and professional growth.</p>
</div>
<div className="relative flex flex-col gap-12 ml-4">

<div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-[#232f48]"></div>
<div className='journey relative flex flex-col gap-12'>
<div className="relative pl-10" data-journey-item="true">
<div className="absolute left-[-4px] top-1.5 size-2 rounded-full bg-primary ring-4 ring-background-light dark:ring-background-dark"></div>
<div className="flex flex-col gap-1">
<span className="text-primary font-bold text-sm">2023 — Present</span>
<h3 className="text-xl font-bold text-white">Mathematics (Associate Degree, In Progress)</h3>
<p className="text-slate-500 dark:text-slate-400 font-medium">Modesto Junior College</p>
<p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
                                        Building a strong foundation in mathematics and computer science while developing practical software skills through coursework and independent projects. Focus areas include calculus, statistics, and problem-solving relevant to data and software development.
                                    </p>
</div>
</div>

<div className="relative pl-10" data-journey-item="true">
<div className="absolute left-[-4px] top-1.5 size-2 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-background-light dark:ring-background-dark"></div>
<div className="flex flex-col gap-1">
<span className="text-slate-500 dark:text-slate-400 font-bold text-sm">2023</span>
<h3 className="text-xl font-bold text-white">Certificate in Full Stack Web Development</h3>
<p className="text-slate-500 dark:text-slate-400 font-medium">UC Davis Continuing and Professional Education</p>
<p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
                                        Completed an intensive coding bootcamp focused on hands-on web development, including JavaScript, modern frontend workflows, and collaborative project development.
                                    </p>
</div>
</div>
<div className="relative pl-10" data-journey-item="true">
<div className="absolute left-[-4px] top-1.5 size-2 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-background-light dark:ring-background-dark"></div>
<div className="flex flex-col gap-1">
<span className="text-slate-500 dark:text-slate-400 font-bold text-sm">2025 — Present</span>
<h3 className="text-xl font-bold text-white">Software Developer</h3>
<p className="text-slate-500 dark:text-slate-400 font-medium">Digital NEST</p>
<p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
                                        Contributing to real-world nonprofit web projects using WordPress, JavaScript, PHP, HTML, and CSS. Collaborating with a development team to build responsive site sections, dynamic components, and interactive visualizations.
                                    </p>
</div>
</div>
<div className="relative pl-10" data-journey-item="true">
<div className="absolute left-[-4px] top-1.5 size-2 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-background-light dark:ring-background-dark"></div>
<div className="flex flex-col gap-1">
<span className="text-slate-500 dark:text-slate-400 font-bold text-sm">2026 (Planned Transfer)</span>
<h3 className="text-xl font-bold text-white">Bachelor’s Degree in Mathematics (Transfer)</h3>
<p className="text-slate-500 dark:text-slate-400 font-medium">California State University, Stanislaus</p>
<p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
                                        Planning to transfer to CSU Stanislaus to continue studying mathematics with an emphasis on applied problem-solving, data, and computational thinking.
                                    </p>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
  )
}

export default About