'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type ClickableCardProps = {
  ariaLabel: string
  children: React.ReactNode
  className: string
  href: string
}

const ClickableCard = ({ ariaLabel, children, className, href }: ClickableCardProps) => {
  const router = useRouter()

  const openCaseStudy = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) {
      return
    }

    router.push(href)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      router.push(href)
    }
  }

  return (
    <div
      aria-label={ariaLabel}
      className={`${className} cursor-pointer`}
      onClick={openCaseStudy}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
    >
      {children}
    </div>
  )
}

export default ClickableCard
