import Icon, { Star } from './Icon'
import { CATEGORIES } from '../content'

const firms = [
  { name: 'صيدلية الشفاء', cat: 'صيدليات', icon: 'pharmacy', open: true, dist: '٣٥٠ م' },
  { name: 'عيادة د. منى السيد', cat: 'أطباء أطفال', icon: 'doctor', open: true, dist: '٦٠٠ م' },
  { name: 'ورشة الأمانة', cat: 'كهرباء وسباكة', icon: 'craft', open: false, dist: '١.٢ كم' },
]

// A lightweight, pure-CSS rendering of the app's home screen — no image to download.
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[310px]" role="img" aria-label="لقطة من الشاشة الرئيسية لتطبيق أجهور الكبرى">
      <div className="relative rounded-[2.75rem] border border-white/15 bg-forest-950 p-2.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,.6)]">
        <div className="absolute left-1/2 top-4 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[2.2rem] bg-cream-50" aria-hidden="true">
          {/* app header */}
          <div className="bg-forest-900 px-5 pb-5 pt-11 text-cream-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-cream-200/70">صباح الخير 👋</p>
                <p className="font-display text-base font-bold">أهلًا بيك في أجهور</p>
              </div>
              <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/10">
                <Icon name="bell" className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-mint-400 ring-2 ring-forest-900" />
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 text-forest-900/50">
              <Icon name="search" className="h-4 w-4" />
              <span className="text-xs">ابحث عن دكتور، صيدلية، سباك…</span>
            </div>
          </div>
          {/* categories */}
          <div className="grid grid-cols-4 gap-2 px-4 pt-4">
            {CATEGORIES.map((c, i) => (
              <div key={c.name} className="flex flex-col items-center gap-1">
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${i === 0 ? 'bg-mint-500 text-forest-950' : 'bg-forest-900/[.06] text-forest-800'}`}>
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <span className="text-[10px] font-medium text-forest-900/80">{c.name}</span>
              </div>
            ))}
          </div>
          {/* list */}
          <div className="px-4 pb-6 pt-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-display text-xs font-bold text-forest-950">قريب منك</p>
              <p className="text-[10px] text-mint-700">عرض الكل</p>
            </div>
            <div className="space-y-2">
              {firms.map((f) => (
                <div key={f.name} className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-cream-200 text-forest-800">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12px] font-semibold text-forest-950">{f.name}</p>
                    <p className="text-[10px] text-forest-900/55">{f.cat} · {f.dist}</p>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${f.open ? 'bg-mint-500/15 text-mint-700' : 'bg-forest-900/5 text-forest-900/50'}`}>
                    {f.open ? 'فاتح' : 'مقفول'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating cards */}
      <div aria-hidden="true" className="absolute -right-8 top-24 hidden animate-float items-center gap-2.5 rounded-2xl bg-white/95 p-3 pe-4 shadow-lift backdrop-blur sm:flex lg:-right-16">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint-500 text-forest-950"><Icon name="phone" className="h-4 w-4" /></span>
        <div>
          <p className="text-[12px] font-semibold text-forest-950">بتتصل بـ صيدلية الشفاء</p>
          <p className="text-[10px] text-forest-900/55">فاتح ٢٤ ساعة</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute -left-6 bottom-28 hidden animate-float-slow items-center gap-2.5 rounded-2xl bg-white/95 p-3 pe-4 shadow-lift backdrop-blur sm:flex lg:-left-20">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-clay-500 text-white"><Icon name="news" className="h-4 w-4" /></span>
        <div>
          <p className="text-[12px] font-semibold text-forest-950">خبر جديد من القرية</p>
          <p className="text-[10px] text-forest-900/55">قافلة طبية مجانية يوم الجمعة</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute -left-4 top-8 hidden items-center gap-1 rounded-full bg-forest-900 px-3 py-1.5 text-[11px] font-semibold text-cream-100 shadow-lift sm:flex">
        <Star className="h-3.5 w-3.5 text-amber-400" /> ٤.٨ على Google Play
      </div>
    </div>
  )
}
