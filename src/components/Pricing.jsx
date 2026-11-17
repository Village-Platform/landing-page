import { LINKS, PLANS } from '../content'
import Icon from './Icon'
import { Reveal, SectionHeader } from './ui'

const egp = new Intl.NumberFormat('ar-EG')

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader id="pricing-title" eyebrow="لأصحاب الأنشطة"
          title="خلّي كل البلد تعرف محلك"
          text="التطبيق مجاني دائمًا للأهالي. ولو عندك نشاط، اختار الباقة اللي تناسبك وابدأ تستقبل زباين جديدة." />

        <div className="mx-auto mt-16 grid max-w-5xl items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}
              className={`relative flex flex-col rounded-[2rem] p-8 transition duration-300 ${p.featured
                ? 'grain bg-forest-900 text-cream-100 shadow-lift ring-2 ring-mint-500 lg:-my-4 lg:py-12'
                : 'card hover:-translate-y-1 hover:shadow-lift'}`}>
              {p.featured && (
                <span className="absolute -top-4 right-1/2 translate-x-1/2 whitespace-nowrap rounded-full bg-mint-500 px-4 py-1.5 text-sm font-bold text-forest-950 shadow-glow">
                  ⭐ الأكثر اختيارًا
                </span>
              )}
              <h3 className={`text-xl font-bold ${p.featured ? 'text-cream-100' : 'text-forest-950'}`}>باقة {p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? 'text-mint-300' : 'text-mint-700'}`}>{p.note}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold">{egp.format(p.price)}</span>
                <span className={p.featured ? 'text-cream-200/70' : 'text-forest-900/60'}>جنيه / {p.period}</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${p.featured ? 'bg-mint-500 text-forest-950' : 'bg-mint-500/15 text-mint-700'}`}>
                      <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={p.featured ? 'text-cream-100/90' : 'text-forest-900/80'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={LINKS.whatsappBusiness} target="_blank" rel="noopener"
                className={`mt-10 w-full ${p.featured ? 'btn-primary' : 'btn-dark'}`}
                aria-label={`اشترك في باقة ${p.name}`}>
                ابدأ بباقة {p.name}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-dashed border-forest-900/20 p-6 text-center sm:flex-row sm:text-start">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cream-200 text-forest-900"><Icon name="heart" className="h-6 w-6" /></span>
          <p className="flex-1 text-forest-900/75">
            <strong className="text-forest-950">جهة خدمية أو خيرية؟</strong> المساجد، مركز الشباب، والجمعيات الأهلية بتظهر في التطبيق مجانًا. كلمنا ونضيفكم.
          </p>
          <a href={LINKS.whatsappBusiness} target="_blank" rel="noopener" className="font-semibold text-mint-700 underline-offset-4 hover:underline">تواصل معانا</a>
        </Reveal>
      </div>
    </section>
  )
}
