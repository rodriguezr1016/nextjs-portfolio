import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import BackButton from '../../components/BackButton'
import { caseStudies, getCaseStudy } from '../../data/caseStudies'

type CaseStudyPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const generateStaticParams = () =>
  caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))

const CaseStudyPage = async ({ params }: CaseStudyPageProps) => {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <main className="flex flex-1 flex-col items-center">
      <div className="layout-content-container flex flex-col max-w-[1000px] w-full px-6 md:px-10 py-12 md:py-16">
        <BackButton />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">{caseStudy.eyebrow}</span>
            <h1 className="text-[#111318] dark:text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[#616f89] dark:text-white/50 text-sm font-medium">
              <span>{caseStudy.year}</span>
              <span className="size-1 rounded-full bg-[#616f89]/30"></span>
              <span>{caseStudy.role}</span>
            </div>
            <p className="text-[#616f89] dark:text-white/70 text-lg leading-relaxed max-w-3xl">
              {caseStudy.summary}
            </p>
          </div>

          <div
            className="w-full aspect-[16/9] bg-center bg-no-repeat bg-cover rounded-xl shadow-sm border border-slate-200 dark:border-slate-800"
            style={{ backgroundImage: `url("${caseStudy.image}")` }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <section className="lg:col-span-8 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#111318] dark:text-white text-2xl font-bold">Overview</h2>
                <p className="text-[#616f89] dark:text-white/70 text-base leading-relaxed">
                  {caseStudy.overview}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-[#111318] dark:text-white text-2xl font-bold">What I Worked On</h2>
                <ul className="flex flex-col gap-3">
                  {caseStudy.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-[#616f89] dark:text-white/70 leading-relaxed">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

	              <div className="flex flex-col gap-4">
	                <h2 className="text-[#111318] dark:text-white text-2xl font-bold">Outcome</h2>
	                <p className="text-[#616f89] dark:text-white/70 text-base leading-relaxed">
	                  {caseStudy.outcome}
	                </p>
	              </div>

		            </section>

            <aside className="lg:col-span-4 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#111318] dark:text-white text-xl font-bold">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((technology, index) => (
                    <span
                      key={technology}
                      className={
                        index === 0
                          ? 'px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold'
                          : 'px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold'
                      }
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {caseStudy.links.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      index === 0
                        ? 'flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#111318] dark:bg-white dark:text-[#111318] text-white text-sm font-bold hover:bg-black dark:hover:bg-white/90 transition-all'
                        : 'flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#f0f2f4] dark:border-white/20 text-[#111318] dark:text-white text-sm font-bold hover:bg-[#f0f2f4] dark:hover:bg-white/5 transition-all'
                    }
                  >
                    <span className="material-symbols-outlined text-lg">{index === 0 ? 'visibility' : 'star'}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
	            </aside>
	          </div>

	          {caseStudy.demos ? (
	            <section className="flex flex-col gap-6">
	              <div className="flex flex-col gap-2">
	                <h2 className="text-[#111318] dark:text-white text-2xl font-bold">Demos</h2>
	                <p className="text-[#616f89] dark:text-white/70 text-base leading-relaxed max-w-3xl">
	                  Five live prototypes from the SoundCanvas exploration, each testing a different musical interaction pattern.
	                </p>
	              </div>

	              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
	                {caseStudy.demos.map((demo) => (
	                  <article
	                    key={demo.liveUrl}
	                    className="group overflow-hidden rounded-xl border border-[#f0f2f4] dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-sm hover:shadow-xl transition-all duration-300"
	                  >
	                    <div
	                      className="aspect-[16/10] bg-center bg-cover bg-no-repeat border-b border-[#f0f2f4] dark:border-white/10"
	                      style={{ backgroundImage: `url("${demo.image}")` }}
	                    />
	                    <div className="flex flex-col gap-4 p-5">
	                      <div className="flex flex-col gap-2">
	                        <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
	                          {demo.title}
	                        </h3>
	                        <p className="text-[#616f89] dark:text-white/70 text-sm leading-relaxed">
	                          {demo.description}
	                        </p>
	                      </div>

	                      <div className="flex flex-wrap gap-2">
	                        {demo.tags.map((tag) => (
	                          <span
	                            key={tag}
	                            className="px-3 py-1 rounded-full bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-xs font-semibold"
	                          >
	                            {tag}
	                          </span>
	                        ))}
	                      </div>

	                      <div className="flex flex-wrap gap-3 pt-1">
	                        <Link
	                          href={demo.liveUrl}
	                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111318] dark:bg-white dark:text-[#111318] text-white text-sm font-bold hover:bg-black dark:hover:bg-white/90 transition-all"
	                        >
	                          <span className="material-symbols-outlined text-lg">visibility</span>
	                          View Live
	                        </Link>
	                        <Link
	                          href={demo.githubUrl}
	                          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#f0f2f4] dark:border-white/20 text-[#111318] dark:text-white text-sm font-bold hover:bg-[#f0f2f4] dark:hover:bg-white/5 transition-all"
	                        >
	                          <span className="material-symbols-outlined text-lg">code</span>
	                          GitHub
	                        </Link>
	                      </div>
	                    </div>
	                  </article>
	                ))}
	              </div>
	            </section>
	          ) : null}
	        </div>
      </div>
    </main>
  )
}

export default CaseStudyPage
