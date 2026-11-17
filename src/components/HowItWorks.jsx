import { useRef, useState } from 'react'
import { STEPS } from '../content'
import Icon from './Icon'
import { Reveal, SectionHeader } from './ui'

const tabs = [
  { key: 'residents', label: 'لأهل القرية' },
  { key: 'business', label: 'لأصحاب الأنشطة' },
]

export default function HowItWorks() {
  const [active, setActive] = useState('residents')
  const refs = useRef([])

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern, RTL-aware).
  const onKeyDown = (e, i) => {
    const dir = e.key === 'ArrowLeft' ? 1 : e.key === 'ArrowRight' ? -1 : 0
    if (!dir) return
    const next = (i + dir + tabs.length) % tabs.length
    setActive(tabs[next].key)
    refs.current[next]?.focus()
  }

  return (
    <section id="how" aria-labelledby="how-title" className="relative overflow-hidden bg-cream-200/60 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader id="how-title" eyebrow="٣ خطوات بس" title="أسهل من إنك تسأل الجيران"
          text="مفيش تسجيل معقد ولا خطوات كتير. اختار إنت مين، وشوف بنفسك." />

        <div role="tablist" aria-label="إزاي بيشتغل" className="mx-auto mt-10 flex w-fit rounded-full bg-white p-1.5 shadow-soft">
          {tabs.map((t, i) => (
            <button key={t.key} ref={(el) => (refs.current[i] = el)} role="tab" type="button"
              id={`tab-${t.key}`} aria-selected={active === t.key} aria-controls={`panel-${t.key}`}
              tabIndex={active === t.key ? 0 : -1} onClick={() => setActive(t.key)} onKeyDown={(e) => onKeyDown(e, i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition sm:px-7 sm:text-base ${active === t.key ? 'bg-forest-900 text-cream-100 shadow-soft' : 'text-forest-900/70 hover:text-forest-950'}`}>
              {t.label}
            </button>
          ))}
        </div>

        {tabs.map((t) => (
          <div key={t.key} role="tabpanel" id={`panel-${t.key}`} aria-labelledby={`tab-${t.key}`} hidden={active !== t.key}>
            <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
              <div className="absolute inset-x-[16%] top-10 hidden border-t-2 border-dashed border-forest-900/15 md:block" aria-hidden="true" />
              {STEPS[t.key].map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 120} className="relative text-center">
                  <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-[1.75rem] bg-white text-forest-900 shadow-lift">
                    <Icon name={s.icon} className="h-8 w-8" />
                    <span className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-mint-500 font-display text-sm font-bold text-forest-950 ring-4 ring-cream-200">
                      {['١', '٢', '٣'][i]}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs leading-relaxed text-forest-900/70">{s.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  )
}
