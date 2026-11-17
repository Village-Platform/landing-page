import { LINKS } from '../content'
import Icon, { Star, GooglePlay } from './Icon'
import PhoneMockup from './PhoneMockup'
import { Contours } from './ui'

const avatars = [
  ['م', 'from-mint-400 to-mint-600'],
  ['س', 'from-clay-500 to-clay-600'],
  ['أ', 'from-forest-600 to-forest-800'],
  ['ه', 'from-amber-400 to-clay-500'],
]

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="grain relative isolate overflow-hidden bg-forest-900 pb-20 pt-32 text-cream-100 sm:pb-28 lg:pt-40">
      <Contours className="absolute inset-0 -z-10 h-full w-full text-cream-100/[.06]" />
      <div className="absolute -left-40 top-20 -z-10 h-[32rem] w-[32rem] rounded-full bg-mint-500/25 blur-[120px]" aria-hidden="true" />
      <div className="absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-clay-500/15 blur-[100px]" aria-hidden="true" />

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
        <div className="text-center lg:text-start">
          <a href="#pricing" className="group inline-flex items-center gap-2 rounded-full border border-cream-100/15 bg-white/5 py-1 pe-4 ps-1 text-sm text-cream-100/85 backdrop-blur transition hover:bg-white/10">
            <span className="rounded-full bg-mint-500 px-2.5 py-0.5 text-xs font-bold text-forest-950">جديد</span>
            أصحاب الأنشطة: سجّلوا محلاتكم دلوقتي
            <Icon name="arrow" className="h-3.5 w-3.5 transition group-hover:-translate-x-1" />
          </a>

          <h1 id="hero-title" className="mt-7 text-[2.6rem] font-bold leading-[1.15] sm:text-6xl lg:text-[4.25rem]">
            أجهور الكبرى كلها…
            <span className="relative mt-2 block text-mint-400">
              في جيبك.
              <svg viewBox="0 0 300 20" className="absolute -bottom-3 right-1/2 h-3 w-48 translate-x-1/2 text-mint-500/60 lg:right-0 lg:translate-x-0" aria-hidden="true">
                <path d="M2 14C60 4 180 2 298 10" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream-200/80 sm:text-xl lg:mx-0">
            اعرف أقرب دكتور فاتح، ورقم الكهربائي اللي بيرد، وآخر أخبار البلد — من تطبيق واحد معمول لأهل أجهور، <strong className="font-semibold text-cream-100">ومجاني تمامًا</strong>.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href={LINKS.playStore} target="_blank" rel="noopener" className="btn-primary w-full !py-4 !text-lg sm:w-auto">
              <GooglePlay className="h-5 w-5" /> حمّل التطبيق مجانًا
            </a>
            <a href="#pricing" className="btn-ghost w-full text-cream-100 sm:w-auto">
              <Icon name="briefcase" className="h-5 w-5" /> سجّل نشاطك التجاري
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <div className="flex -space-x-3 space-x-reverse" aria-hidden="true">
              {avatars.map(([ch, tone]) => (
                <span key={ch} className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${tone} font-display text-sm font-bold text-white ring-[3px] ring-forest-900`}>{ch}</span>
              ))}
            </div>
            <div className="text-center sm:text-start">
              <div className="flex items-center justify-center gap-0.5 text-amber-400 sm:justify-start" aria-label="تقييم ٤.٨ من ٥">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4" />)}
                <span className="ms-1.5 text-sm font-semibold text-cream-100">٤.٨</span>
              </div>
              <p className="mt-0.5 text-sm text-cream-200/70">بيستخدمه أكتر من <strong className="text-cream-100">١٢ ألف</strong> من أهل القرية</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-10 top-10 -z-10 aspect-square rounded-full border border-cream-100/10" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 -z-10 aspect-square rounded-full border border-cream-100/[.05]" aria-hidden="true" />
          <PhoneMockup />
        </div>
      </div>

      {/* curved bottom edge into the cream page */}
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-px h-10 w-full text-cream-50 sm:h-14" aria-hidden="true">
        <path d="M0 60V30C240 0 480 0 720 20s480 40 720 10v30z" fill="currentColor" />
      </svg>
    </section>
  )
}
