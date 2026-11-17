import { useId, useState } from 'react'
import { FAQS, LINKS } from '../content'
import Icon from './Icon'
import { Reveal, SectionHeader } from './ui'

function Item({ q, a, open, onToggle }) {
  const id = useId()
  return (
    <div className={`rounded-2xl border transition-colors ${open ? 'border-mint-500/40 bg-white shadow-soft' : 'border-forest-900/10 bg-white/60 hover:bg-white'}`}>
      <h3>
        <button type="button" onClick={onToggle} aria-expanded={open} aria-controls={`${id}-panel`} id={`${id}-btn`}
          className="flex w-full items-center justify-between gap-4 p-5 text-start text-lg font-semibold text-forest-950 sm:p-6">
          {q}
          <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${open ? 'rotate-180 bg-mint-500 text-forest-950' : 'bg-forest-900/5 text-forest-900'}`}>
            <Icon name="chevron" className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div id={`${id}-panel`} role="region" aria-labelledby={`${id}-btn`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden" inert={open ? undefined : ''}>
          <p className="px-5 pb-6 leading-relaxed text-forest-900/70 sm:px-6">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-cream-200/60 py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader id="faq-title" eyebrow="عندك سؤال؟" title="الأسئلة اللي بتتسأل كتير"
            text="لو ملقتش إجابتك هنا، فريقنا موجود على واتساب كل يوم من ٩ الصبح لـ ١٠ بالليل."
            className="lg:mx-0 lg:text-start" />
          <Reveal className="mt-8 text-center lg:text-start">
            <a href={LINKS.whatsappBusiness} target="_blank" rel="noopener" className="btn-dark">
              <Icon name="whatsapp" className="h-5 w-5" /> اسألنا على واتساب
            </a>
          </Reveal>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <Item key={f.q} {...f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
