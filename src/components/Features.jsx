import { FEATURES } from '../content'
import Icon from './Icon'
import { Reveal, SectionHeader } from './ui'

export default function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader id="features-title" eyebrow="ليه أجهور الكبرى؟"
          title="كل اللي بتسأل عليه في البلد، في مكان واحد"
          text="صممناه عشان يخلّص مشوارك في أقل وقت — سواء بتدوّر على دكتور، أو عايز تعرف آخر أخبار القرية." />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 90}
              className="card group relative overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-mint-500/0 blur-2xl transition duration-500 group-hover:bg-mint-500/20" aria-hidden="true" />
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest-900 text-mint-400 transition duration-300 group-hover:rotate-[-6deg] group-hover:bg-mint-500 group-hover:text-forest-950">
                <Icon name={f.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-forest-950">{f.title}</h3>
              <p className="mt-2.5 leading-relaxed text-forest-900/70">{f.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
