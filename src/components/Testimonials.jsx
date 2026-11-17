import { TESTIMONIALS } from '../content'
import { Star } from './Icon'
import { Reveal, SectionHeader } from './ui'

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-cream-100 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader id="testimonials-title" eyebrow="من أهل البلد" title="الناس بتقول إيه؟"
          text="أهالي، أطباء، صنايعية وأصحاب محلات — كلهم لقوا في التطبيق حاجة سهّلت يومهم." />

        <ul className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={t.name} delay={(i % 3) * 90} className="mb-5 break-inside-avoid">
              <figure className="card p-7 transition duration-300 hover:shadow-lift">
                <div className="flex gap-0.5 text-amber-400" aria-label="تقييم ٥ من ٥">
                  {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-4 w-4" />)}
                </div>
                <blockquote className="mt-4 text-[17px] leading-relaxed text-forest-950">
                  <p>«{t.text}»</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-forest-900/[.07] pt-5">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br ${t.tone} font-display text-lg font-bold text-white`} aria-hidden="true">
                    {t.name.replace(/^(د\.|حاج|أم)\s*/, '').charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-forest-950">{t.name}</span>
                    <span className="block text-sm text-forest-900/60">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
