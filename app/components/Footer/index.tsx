import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
        <footer className='flex flex-row justify-between border-t border-slate-200 dark:border-slate-800 bg-background-dark px-6 md:px-10 lg:px-40 py-12'>
            <div className=''>
                <Link href={"/"} className='flex items-center gap-3'>
                    <div className='size-6 bg-primary/20 rounded-lg flex items-center justify-center'>
                        <span className='material-symbols-outlined text-primary text-sm'>terminal</span>
                    </div>
                    <span className='font-bold text-white'>Rene Rodriguez</span>
                </Link>
            </div>
            <div className='flex items-center gap-6'>
                <Link className='text-slate-500 hover:text-primary transition-colors' href={"https://github.com/rodriguezr1016/"}>Github</Link>
                <Link className='text-slate-500 hover:text-primary transition-colors' href={"https://www.linkedin.com/in/rene-rodriguez-570648329/"}>LinkedIn</Link>
                <Link className='text-slate-500 hover:text-primary transition-colors' href={"mailto:r.rodri101611@gmail.com"}>Email</Link>
            </div>
        </footer>
  )
}

export default Footer