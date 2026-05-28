'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {
  const router = useRouter()

  const goBack = () => {
    if (window.history.length > 1) {
      router.back()
      return
    }

    router.push('/Works')
  }

  return (
    <button
      className="mb-10 flex w-fit items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
      onClick={goBack}
      type="button"
    >
      <span className="material-symbols-outlined">arrow_back</span>
      Back to projects
    </button>
  )
}

export default BackButton
