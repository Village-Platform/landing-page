import { useEffect, useRef, useState } from 'react'

// Fades children in once they scroll into view. Honors prefers-reduced-motion via CSS.
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setVisible(true)
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect() }
    }, { rootMargin: '0px 0px -10% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

export function SectionHeader({ eyebrow, title, text, id, light = false, className = '' }) {
  return (
    <Reveal className={`mx-auto max-w-2xl text-center ${className}`}>
      {eyebrow && <span className={light ? 'eyebrow !border-mint-400/30 !text-mint-300' : 'eyebrow'}>{eyebrow}</span>}
      <h2 id={id} className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${light ? 'text-cream-100' : 'text-forest-950'}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-cream-200/75' : 'text-forest-900/70'}`}>{text}</p>}
    </Reveal>
  )
}

// Animated number that counts up the first time it is seen.
export function CountUp({ value, decimals = 0, duration = 1600 }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const el = ref.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || reduce || !('IntersectionObserver' in window)) return setN(value)
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / duration, 1)
        setN(value * (1 - Math.pow(1 - p, 3)))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value, duration])
  const fmt = new Intl.NumberFormat('ar-EG', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  return <span ref={ref}>{fmt.format(n)}</span>
}

export function Logo({ light = false }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="أجهور الكبرى — الصفحة الرئيسية">
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:-rotate-6" aria-hidden="true">
        <rect width="64" height="64" rx="18" fill={light ? '#F4ECD9' : '#0B3727'} />
        <path d="M14 44c6-10 12-15 18-15s12 5 18 15" fill="none" stroke="#10B981" strokeWidth="5" strokeLinecap="round" />
        <path d="M32 12v17M24 20c4 0 8 3 8 9M40 20c-4 0-8 3-8 9" fill="none" stroke={light ? '#0B3727' : '#F4ECD9'} strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-lg font-bold ${light ? 'text-cream-100' : 'text-forest-950'}`}>أجهور الكبرى</span>
        <span className={`mt-1 block text-[11px] font-medium tracking-wide ${light ? 'text-mint-300' : 'text-mint-700'}`}>دليل قريتك في جيبك</span>
      </span>
    </a>
  )
}

// Topographic contour lines — a quiet nod to the fields around the village.
export function Contours({ className = '' }) {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 14 }).map((_, i) => (
          <path key={i} d={`M-50 ${80 + i * 38} C 150 ${20 + i * 40}, 300 ${160 + i * 34}, 450 ${90 + i * 38} S 750 ${30 + i * 42}, 860 ${110 + i * 36}`} />
        ))}
      </g>
    </svg>
  )
}
