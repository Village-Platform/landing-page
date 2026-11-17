import { PARTNERS, STATS } from '../content'
import Icon from './Icon'
import { CountUp, Reveal } from './ui'

const badges = [
  { icon: 'shield', label: 'كل نشاط متراجع يدويًا' },
  { icon: 'users', label: 'بيانات الأهالي محمية' },
  { icon: 'heart', label: 'مشروع من أهل البلد' },
]

export default function SocialProof() {
  return (
    <section aria-labelledby="proof-title" className="py-16 sm:py-20">
      <div className="container-x">
        <h2 id="proof-title" className="text-center text-sm font-semibold uppercase tracking-wider text-forest-900/55">
          أنشطة أهل البلد اللي بتثق فينا
        </h2>
      </div>

      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_left,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <li key={i} aria-hidden={i >= PARTNERS.length} className="flex items-center gap-2 whitespace-nowrap rounded-full border border-forest-900/10 bg-white px-6 py-3 font-display text-lg font-semibold text-forest-900/70">
              <span className="h-2 w-2 rounded-full bg-mint-500" />{p}
            </li>
          ))}
        </ul>
      </div>

      <div className="container-x mt-14">
        <Reveal className="grid grid-cols-2 overflow-hidden rounded-3xl border border-forest-900/[.07] bg-white shadow-soft lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className={`p-6 text-center sm:p-8 ${i % 2 ? '' : 'border-l border-forest-900/[.07]'} ${i < 2 ? 'border-b lg:border-b-0' : ''} ${i === 1 ? 'lg:border-l' : ''} border-forest-900/[.07]`}>
              <p className="font-display text-4xl font-bold text-forest-900 sm:text-5xl">
                <CountUp value={s.value} decimals={s.decimals} /><span className="text-mint-500">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm text-forest-900/65 sm:text-base">{s.label}</p>
            </div>
          ))}
        </Reveal>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((b) => (
            <li key={b.label} className="flex items-center gap-2 text-sm font-medium text-forest-900/70">
              <Icon name={b.icon} className="h-4 w-4 text-mint-600" /> {b.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
