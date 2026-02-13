'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
const page = () => {
  const initialState = {
  name: "",
  email: "",
  message: "",
};
  const [form, setForm] = useState(initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/resend", {
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(form)
    }).then (()=>{
      setForm(initialState);
    })
  }
  return (
    <main className="flex-1 flex flex-col items-center px-6 lg:px-40 py-12 md:py-20">
<div className="w-full max-w-[960px]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-7 flex flex-col">
<h1 className="text-slate-900 dark:text-white text-[40px] md:text-[56px] font-bold leading-tight tracking-tight mb-6 font-display">
                            Let's build something together.
                        </h1>
<p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-lg">
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities.
                        </p>
<form onSubmit={sendEmail} className="space-y-6 w-full max-w-[540px]">
<div className="flex flex-col gap-2">
<label className="text-slate-700 dark:text-slate-200 text-sm font-semibold font-display">Name</label>
<input name='name' onChange={handleChange} value={form.name} className="w-full rounded-lg border border-slate-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 text-base transition-all placeholder:text-slate-400 dark:placeholder:text-[#9da6b9]" placeholder="Enter your name" required type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-slate-700 dark:text-slate-200 text-sm font-semibold font-display">Email</label>
<input name='email' value={form.email} onChange={handleChange} className="w-full rounded-lg border border-slate-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 text-base transition-all placeholder:text-slate-400 dark:placeholder:text-[#9da6b9]" placeholder="your.email@example.com" required type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-slate-700 dark:text-slate-200 text-sm font-semibold font-display">Message</label>
<textarea name='message' value={form.message} onChange={handleChange} className="w-full rounded-lg border border-slate-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary min-h-[160px] p-4 text-base transition-all placeholder:text-slate-400 dark:placeholder:text-[#9da6b9] resize-none" placeholder="Tell me about your project..."></textarea>
</div>
<button className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95" type="submit">
                                Send Message
                            </button>
</form>
</div>
<div className="lg:col-span-5 flex flex-col gap-12 lg:pt-8">
<div>
<h3 className="text-slate-900 dark:text-white text-xl font-bold mb-4 font-display">Contact Details</h3>
<div className="space-y-4">
<div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-primary">mail</span>
<Link className="hover:text-primary transition-colors" href="mailto:r.rodri101611@gmail.com">r.rodri101611@gmail.com</Link>
</div>
<div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-primary">location_on</span>
<span>Modesto, California</span>
</div>
</div>
</div>
<div>
<h3 className="text-slate-900 dark:text-white text-xl font-bold mb-6 font-display">Connect</h3>
<div className="flex flex-wrap gap-4">
<Link className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-[#24292e] hover:text-white transition-all" href="https://github.com/rodriguezr1016/" title="GitHub">
<svg className="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
</Link>
<Link className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-[#0077b5] hover:text-white transition-all" href={"https://www.linkedin.com/in/rene-rodriguez-570648329/"} title="LinkedIn">
<svg className="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.771-.773 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z"></path></svg>
</Link>
</div>
<div className="mt-8 space-y-4">
<Link className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors group" href="https://github.com/rodriguezr1016/">
<span className="font-medium text-white">GitHub</span>
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
</Link>
<Link className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors group" href="https://www.linkedin.com/in/rene-rodriguez-570648329/">
<span className="font-medium text-white">LinkedIn</span>
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
</Link>
</div>
</div>
<div className="mt-auto hidden lg:block">
<div className="w-full h-40 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center overflow-hidden">
<div className="text-center p-6">
<p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Availability</p>
<p className="text-slate-900 dark:text-white font-medium text-white">Currently open to freelance and full-time opportunities.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
  )
}

export default page