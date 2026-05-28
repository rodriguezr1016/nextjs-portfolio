import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-1 flex-col items-center px-6 md:px-10 py-12 md:py-16">
      <div className="w-full max-w-[1000px] flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Resume</span>
            <h1 className="text-[#111318] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Rene Rodriguez
            </h1>
          </div>
          <Link
            href="/Contact"
            className="w-fit px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-all"
          >
            Contact Me
          </Link>
        </div>

        <div className="w-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white shadow-sm">
          <iframe
            src="/resume.pdf"
            title="Rene Rodriguez Resume Preview"
            className="h-[75vh] min-h-[640px] w-full"
          />
        </div>
      </div>
    </main>
  )
}

export default page
