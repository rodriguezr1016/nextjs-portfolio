import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='sticky top-0 z-50 flex '>
        <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
            rel="stylesheet"/>
            <div className='dark w-full'>
              <header className='w-full flex flex-col gap-4 md:block border-b border-slate-200 dark:border-slate-800 bg-background-dark/80 backdrop-blur-md px-6 md:px-10 lg:px-20 pt-4 md:py-4'>
                <div className='flex items-center gap-4 w-full justify-between mx-auto'>
                  <Link href={"/"} className='flex items-center gap-3'>
                    <div className='size-8 bg-primary rounded-lg flex items-center justify-center'>
                    <span className="material-symbols-outlined text-white text-xl">terminal</span>
                    </div>
                    <h2 className='text-xl font-bold leading-tight tracking-tight dark:text-white'>Rene Rodriguez</h2>
                  </Link>
                  <div className='flex items-center gap-3 md:gap-8'>
                    <nav className='hidden md:flex items-center gap-8'>
                      <Link className="text-sm text-white font-medium hover:text-primary transition-colors" href={"/About"}>About</Link>
                      <Link className="text-sm text-white font-medium hover:text-primary transition-colors" href={"/Works"}>Projects</Link>
                      <Link className="text-sm text-white font-medium hover:text-primary transition-colors" href={"/Contact"}>Contact</Link>
                    </nav>
                    <Link href={"./resume.pdf"} download={"Rene_Rodriguez_Resume.pdf"} className='flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all'>Resume</Link>
                  </div>
                </div>
                <div className="flex px-10 w-full md:hidden">
            <ul className="flex w-full justify-center items-center gap-8 pb-1">
    <li className='flex grow justify-center'><Link className="text-lg text-white font-bold hover:text-primary transition-colors" href={"/About"}>About</Link></li>
    <li className='flex grow justify-center'><Link className="text-lg text-white font-bold hover:text-primary transition-colors" href={"/Works"}>Projects</Link></li>
    <li className='flex grow justify-center'><Link className="text-lg text-white font-bold hover:text-primary transition-colors" href={"/Contact"}>Contact</Link></li>
  </ul>
</div>
              </header>
            </div>
    </div>
  )
}

export default Header