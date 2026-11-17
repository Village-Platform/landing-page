import { useEffect, useState } from 'react'
import { NAV, LINKS } from '../content'
import Icon from './Icon'
import { Logo } from './ui'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])

  const solid = scrolled || open
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${open ? 'bg-cream-50' : solid ? 'border-b border-forest-900/10 bg-cream-50/85 shadow-soft backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="container-x flex h-[4.5rem] items-center justify-between gap-6" aria-label="التنقل الرئيسي">
        <Logo light={!solid} />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${solid ? 'text-forest-900/80 hover:bg-forest-900/5 hover:text-forest-950' : 'text-cream-100/80 hover:bg-white/10 hover:text-white'}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={LINKS.playStore} target="_blank" rel="noopener" className="btn-primary hidden !px-5 !py-2.5 !text-[15px] sm:inline-flex">
            <Icon name="download" className="h-4 w-4" /> حمّل التطبيق
          </a>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${solid ? 'text-forest-950 hover:bg-forest-900/5' : 'text-cream-100 hover:bg-white/10'}`}>
            <Icon name={open ? 'x' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-forest-900/10 bg-cream-50 lg:hidden">
        <div className="container-x h-[calc(100dvh-4.5rem)] overflow-y-auto pb-10 pt-4">
          <ul className="space-y-1">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium text-forest-950 hover:bg-forest-900/5">
                  {l.label} <Icon name="arrow" className="h-4 w-4 text-mint-600" />
                </a>
              </li>
            ))}
          </ul>
          <a href={LINKS.playStore} target="_blank" rel="noopener" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full">
            <Icon name="download" className="h-5 w-5" /> حمّل التطبيق مجانًا
          </a>
        </div>
      </div>
    </header>
  )
}
