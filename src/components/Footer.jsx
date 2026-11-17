import { LINKS, NAV } from '../content'
import Icon from './Icon'
import { Logo } from './ui'

const socials = [
  { href: LINKS.facebook, icon: 'facebook', label: 'فيسبوك' },
  { href: LINKS.instagram, icon: 'instagram', label: 'إنستجرام' },
  { href: LINKS.youtube, icon: 'youtube', label: 'يوتيوب' },
  { href: LINKS.whatsappBusiness, icon: 'whatsapp', label: 'واتساب' },
]

export default function Footer() {
  return (
    <footer className="border-t border-forest-900/10 bg-cream-100">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm leading-relaxed text-forest-900/70">
            منصة أجهور الكبرى — دليل رقمي لخدمات وأنشطة وأخبار القرية، معمول بأيدي أهلها عشان الحياة فيها تبقى أسهل.
          </p>
          <ul className="mt-6 flex gap-2">
            {socials.map((s) => (
              <li key={s.icon}>
                <a href={s.href} target="_blank" rel="noopener" aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-forest-900/10 bg-white text-forest-900 transition hover:-translate-y-0.5 hover:border-mint-500 hover:bg-mint-500 hover:text-forest-950">
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="روابط الصفحة">
          <h2 className="font-display font-bold text-forest-950">روابط سريعة</h2>
          <ul className="mt-4 space-y-3">
            {NAV.map((l) => (
              <li key={l.href}><a href={l.href} className="text-forest-900/70 transition hover:text-mint-700">{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-display font-bold text-forest-950">تواصل معانا</h2>
          <ul className="mt-4 space-y-3 text-forest-900/70">
            <li className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4 text-mint-600" /> أجهور الكبرى، طوخ، القليوبية</li>
            <li><a href={LINKS.email} className="flex items-center gap-2 transition hover:text-mint-700"><Icon name="news" className="h-4 w-4 text-mint-600" /> hello@aghour.app</a></li>
            <li><a href={LINKS.whatsappBusiness} target="_blank" rel="noopener" className="flex items-center gap-2 transition hover:text-mint-700"><Icon name="whatsapp" className="h-4 w-4 text-mint-600" /> <span dir="ltr">+20 100 000 0000</span></a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-900/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-sm text-forest-900/60 sm:flex-row">
          <p>© {new Date().getFullYear()} أجهور الكبرى. كل الحقوق محفوظة.</p>
          <p>صُنع بحب في أجهور 🌿</p>
        </div>
      </div>
    </footer>
  )
}
