import { ArrowRight, UtensilsCrossed, GraduationCap, Briefcase, Sparkles } from 'lucide-react'
import PageShell from '../components/PageShell'
import { Reveal, RevealStagger, itemVariants } from '../components/Reveal'
import { motion } from 'framer-motion'
import { site } from '../lib/site'

const goals = [
  { label: 'Storehouse',         total: 14000, raised: 4200 },
  { label: 'Kitchen Equipment',  total: 2500,  raised: 900  },
  { label: 'Kitchen Infrastructure', total: 3500, raised: 1100 },
]

const benefits = [
  { icon: UtensilsCrossed, title: 'Daily nutritious meals', body: '300–350 students and teachers, every school day.' },
  { icon: GraduationCap,   title: 'Better attendance',      body: 'Fed children show up — and they stay.' },
  { icon: Sparkles,        title: 'Hygiene + dignity',      body: 'Health education and sanitary pad distribution for girls.' },
  { icon: Briefcase,       title: 'Local employment',       body: 'Sustainable jobs created within the village.' },
]

export default function Echariria() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden -mt-16 md:-mt-20">
        <motion.div
          initial={{ scale: 1.1 }} animate={{ scale: 1 }}
          transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src="/images/all-ministry.webp" alt="Echariria Student Empowerment Program" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/30 to-ink-950" />
        </motion.div>
        <div className="relative z-10 h-full mx-auto max-w-7xl px-5 md:px-8 flex flex-col justify-end pb-20">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="eyebrow">Mbaruk · Nakuru, Kenya</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="display text-5xl md:text-7xl lg:text-8xl mt-4 max-w-5xl leading-[0.95]">
            Echariria Student<br/>Empowerment Program
          </motion.h1>
        </div>
      </section>

      {/* BIG NUMBER */}
      <section className="py-24 md:py-40 bg-ink-950">
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
          <Reveal>
            <p className="eyebrow">Today</p>
            <p className="display text-[8rem] md:text-[12rem] leading-none mt-4 text-gold-500">300+</p>
            <p className="display text-3xl md:text-5xl mt-6 text-bone-100">elementary students fed every school day.</p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 md:py-32 bg-ink-900 border-t border-bone-50/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">The Story</p>
            <h2 className="display text-4xl md:text-6xl mt-4 leading-tight">It started with a tragedy.</h2>
          </Reveal>
          <Reveal className="md:col-span-7" delay={0.1}>
            <div className="space-y-6 text-bone-50/75 text-lg leading-relaxed">
              <p>In Echariria, a village in Mbaruk, Nakuru, a nine-year-old took his own life. The community was shaken. <strong className="text-bone-50">Frecia Kamau</strong> and her neighbors decided they would not let another child go hungry on their watch.</p>
              <p>Frecia's sister, <strong className="text-bone-50">Ruth Ngethe</strong>, lives in Peabody and is part of Center Church. She brought the need home with her, and a partnership was born.</p>
              <p>In 2022, Pastor Eliezer Perez and Rev. Charles Rukwaro of Good Hope Inc. formalized the effort — a joint bank account, a sustainable operation, and a daily commitment to feed every child who walked through the doors of Echariria Primary.</p>
              <p>Today the program serves more than three hundred students and teachers daily — and it's only getting started.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32 bg-ink-950 border-t border-bone-50/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">What it does</p>
            <h2 className="display text-4xl md:text-6xl mt-4">More than meals.</h2>
          </Reveal>
          <RevealStagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, ...b }) => (
              <motion.div key={b.title} variants={itemVariants} className="border border-bone-50/10 p-8 hover:border-gold-500/40 transition-colors">
                <Icon className="text-gold-500" size={22} />
                <p className="display text-2xl mt-5">{b.title}</p>
                <p className="text-bone-50/60 mt-3 leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* GOALS */}
      <section className="py-24 md:py-32 bg-ink-900 border-t border-bone-50/5">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">Current goals</p>
            <h2 className="display text-4xl md:text-6xl mt-4">Help us keep growing.</h2>
          </Reveal>
          <RevealStagger className="mt-12 space-y-8">
            {goals.map((g) => {
              const pct = Math.round((g.raised / g.total) * 100)
              return (
                <motion.div key={g.label} variants={itemVariants}>
                  <div className="flex items-baseline justify-between">
                    <p className="display text-2xl md:text-3xl">{g.label}</p>
                    <p className="text-bone-50/60 text-sm tracking-widest2 uppercase">${g.raised.toLocaleString()} / ${g.total.toLocaleString()}</p>
                  </div>
                  <div className="mt-4 h-1.5 bg-bone-50/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-gold-500"
                    />
                  </div>
                </motion.div>
              )
            })}
          </RevealStagger>
          <Reveal delay={0.2}>
            <div className="mt-16 text-center">
              <a href={site.links.give} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 btn-primary">
                Give to Echariria <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
