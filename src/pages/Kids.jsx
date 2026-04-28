import { ShieldCheck, Tag, HeartHandshake, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import { Reveal, RevealStagger, itemVariants } from '../components/Reveal'
import { motion } from 'framer-motion'

const steps = [
  { n: '01', title: 'Walk in',       body: 'Head straight to the lobby check-in station — our team is watching for you.' },
  { n: '02', title: 'Print tags',    body: 'A unique ID tag for your child and a matching one for you.' },
  { n: '03', title: 'Drop off',      body: 'A friendly leader walks your kiddo into their classroom.' },
  { n: '04', title: 'Enjoy service', body: 'Worship knowing your child is loved, learning, and safe.' },
]

const safety = [
  { icon: Tag,            title: 'Tagged check-in',  body: 'Every child gets a unique tag — only matching tags collect them.' },
  { icon: ShieldCheck,    title: 'Vetted volunteers', body: 'Background-checked leaders. Two-adult rule in every room.' },
  { icon: HeartHandshake, title: 'Allergy-aware',     body: 'We track allergies and special needs at check-in.' },
  { icon: Sparkles,       title: 'Engaging lessons',  body: 'Age-appropriate stories, music, crafts, and play.' },
]

export default function Kids() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Center Kids"
        title="A friendly place for kids to grow."
        sub="6 months through 6th grade · every Sunday during service."
        image="/images/kids-1.webp"
      />

      {/* CHECK-IN FLOW */}
      <section className="py-24 md:py-32 bg-ink-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">First Sunday</p>
            <h2 className="display text-4xl md:text-6xl mt-4">Four simple steps.</h2>
          </Reveal>
          <RevealStagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone-50/5">
            {steps.map((s) => (
              <motion.div key={s.n} variants={itemVariants} className="bg-ink-950 p-8 md:p-10">
                <p className="text-gold-500 text-sm">{s.n}</p>
                <p className="display text-2xl mt-3">{s.title}</p>
                <p className="text-bone-50/60 mt-3 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="py-12 bg-ink-900 border-t border-bone-50/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          <Reveal className="aspect-[3/4] overflow-hidden"><img src="/images/kids-1.webp" alt="" className="w-full h-full object-cover" /></Reveal>
          <Reveal className="aspect-[3/4] overflow-hidden mt-12" delay={0.1}><img src="/images/kids-2.webp" alt="" className="w-full h-full object-cover" /></Reveal>
          <Reveal className="aspect-[3/4] overflow-hidden hidden md:block" delay={0.2}><img src="/images/kids-3.webp" alt="" className="w-full h-full object-cover" /></Reveal>
        </div>
      </section>

      {/* SAFETY */}
      <section className="py-24 md:py-32 border-t border-bone-50/5 bg-ink-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">Safety</p>
            <h2 className="display text-4xl md:text-6xl mt-4">Your trust is sacred.</h2>
          </Reveal>
          <RevealStagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safety.map(({ icon: Icon, ...s }) => (
              <motion.div key={s.title} variants={itemVariants} className="border border-bone-50/10 p-8 hover:border-gold-500/40 transition-colors">
                <Icon className="text-gold-500" size={22} />
                <p className="display text-2xl mt-5">{s.title}</p>
                <p className="text-bone-50/60 mt-3 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-ink-900 border-t border-bone-50/5">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="display text-4xl md:text-6xl">Want to help with kids?</h2>
            <p className="mt-6 text-bone-50/70 text-lg">If you love pouring into little ones, we'd love to partner with you.</p>
            <Link to="/serve" className="inline-flex items-center gap-2 mt-10 btn-primary">Join the team</Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
