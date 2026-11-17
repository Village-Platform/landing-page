import { LINKS } from '../content'
import Icon, { GooglePlay } from './Icon'
import { Contours, Reveal } from './ui'

export default function FinalCTA() {
  return (
    <section aria-labelledby="cta-title" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="grain relative isolate overflow-hidden rounded-[2.5rem] bg-forest-900 px-6 py-16 text-center text-cream-100 sm:px-12 sm:py-24">
          <Contours className="absolute inset-0 -z-10 h-full w-full text-cream-100/[.07]" />
          <div className="absolute left-1/2 top-full -z-10 h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint-500/35 blur-[120px]" aria-hidden="true" />
          <h2 id="cta-title" className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
            البلد كلها بقت على التطبيق.<br /><span className="text-mint-400">فاضل إنت.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream-200/80">
            حمّله في أقل من دقيقة، ومن غير حساب. ولو عندك نشاط، أول ٣٠ محل يسجلوا الشهر ده عليهم أسبوع مجاني.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={LINKS.playStore} target="_blank" rel="noopener" className="btn-primary w-full !px-8 !py-4 !text-lg sm:w-auto">
              <GooglePlay className="h-5 w-5" /> حمّل من Google Play
            </a>
            <a href="#pricing" className="btn-ghost w-full text-cream-100 sm:w-auto">
              سجّل نشاطك <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream-200/65">
            {['مجاني للأهالي', 'من غير إعلانات مزعجة', 'حجم أقل من ١٠ ميجا'].map((t) => (
              <span key={t} className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4 text-mint-400" />{t}</span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
