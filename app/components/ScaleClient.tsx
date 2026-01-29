'use client'

import { useEffect } from 'react'

export default function ScaleClient() {
  useEffect(() => {
    const desktopWidth = 1366 // target desktop width in px
    function updateScale() {
      const vw = window.innerWidth
      const scale = Math.min(1, vw / desktopWidth)
      document.documentElement.style.setProperty('--site-scale', String(scale))
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return null
}
