import { BENEFITS, LINKS } from '../content'
import Icon from './Icon'
import { Contours, Reveal } from './ui'

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="grain relative isolate overflow-hidden rounded-[2rem] bg-forest-900 p-8 text-cream-100 sm:p-12">
          <Contours className="absolute inset-0 -z-10 h-full w-full text-cream-100/[.07]" />
          <div className="absolute -bottom-20 -left-20 -z-10 h-72 w-72 rounded-full bg-mint-500/30 blur-3xl" aria-hidden="true" />
          <span className="eyebrow !border-mint-400/30 !text-mint-300">النتيجة</span>
          <h2 id="benefits-title" className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            مش مجرد دليل.<br /><span className="text-mint-400">قرية بتشتغل أسهل.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-cream-200/75">
            لما المعلومة الصح توصل للشخص الصح في الوقت الصح، كل البلد بتكسب: الأهالي بيوفروا وقتهم، والمحلات بتكبر.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-cream-100/10 pt-8">
            <div>
              <dt className="text-sm text-cream-200/65">متوسط الوقت للوصول لخدمة</dt>
              <dd className="mt-1 font-display text-4xl font-bold text-mint-400">٤٠ ث</dd>
            </div>
            <div>
              <dt className="text-sm text-cream-200/65">زيادة متوسطة في مكالمات الأنشطة</dt>
              <dd className="mt-1 font-display text-4xl font-bold text-mint-400">+٣٥٪</dd>
            </div>
          </dl>
          <a href={LINKS.playStore} target="_blank" rel="noopener" className="btn-primary mt-10">
            جرّبه بنفسك <Icon name="arrow" className="h-4 w-4" />
          </a>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 90} className={`card p-6 sm:p-7 ${i % 2 ? 'sm:translate-y-8' : ''}`}>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint-500/10 text-mint-700">
                <Icon name={b.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-forest-900/70">{b.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
