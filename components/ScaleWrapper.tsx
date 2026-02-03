"use client"

import { useEffect, useRef } from 'react'

export default function ScaleWrapper({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const designWidth = 1200 // change this to your desktop design width

    function updateScale() {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const scale = Math.min(1, vw / designWidth)
      if (rootRef.current) {
        rootRef.current.style.setProperty('--site-scale', String(scale))
      }
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div id="site-root" ref={rootRef} style={{ transform: 'scale(var(--site-scale,1))' }}>
      {children}
    </div>
  )
}
