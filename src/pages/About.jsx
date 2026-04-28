import { useState } from 'react'
import { Mail, Plus, Minus } from 'lucide-react'
import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import { Reveal, RevealStagger, itemVariants } from '../components/Reveal'
import { motion, AnimatePresence } from 'framer-motion'
import { beliefs, team } from '../lib/site'

function BeliefCard({ b }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div variants={itemVariants}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left flex items-start justify-between gap-6 py-7 border-b border-bone-50/10 hover:border-gold-500/40 transition-colors"
      >
        <div className="flex-1">
          <p className="display text-2xl md:text-3xl">{b.title}</p>
          <AnimatePresence initial={false}>
            {open && (
              <motion.p
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-bone-50/70 leading-relaxed overflow-hidden max-w-prose2"
              >
                {b.body}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <span className="text-gold-500 mt-2 shrink-0">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
    </motion.div>
  )
}

export default function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Center Church"
        title="A diverse family on the North Shore."
        sub="Rooted in scripture. Shaped by the early church. For everyone who's looking for a seat at the table."
        image="/images/about-1.webp"
      />

      {/* STORY */}
      <section className="py-24 md:py-32 bg-ink-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-7">
            <p className="eyebrow">Our Story</p>
            <h2 className="display text-4xl md:text-6xl mt-4 leading-tight">A church for the people of Peabody, and the world beyond it.</h2>
            <div className="mt-8 space-y-6 text-bone-50/70 text-lg leading-relaxed max-w-prose2">
              <p>Center Church is a multiethnic, multigenerational community in Peabody, Massachusetts. We are an Assemblies of God congregation drawing inspiration from the earliest Christian church — biblical instruction, deep community, prayer, unity, generosity, evangelism, and diversity.</p>
              <p>If you've felt like there's no room for you in the room, we'd love to prove that wrong. Come as you are, exactly when you are.</p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.15}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src="/images/about-2.webp" alt="Center Church community" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="py-24 md:py-32 border-t border-bone-50/5 bg-ink-900">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">What We Believe</p>
            <h2 className="display text-4xl md:text-6xl mt-4">Seven anchors.</h2>
          </Reveal>
          <RevealStagger className="mt-16">
            {beliefs.map((b) => <BeliefCard key={b.title} b={b} />)}
          </RevealStagger>
        </div>
      </section>

      {/* PASTOR */}
      <section className="py-24 md:py-32 bg-ink-950 border-t border-bone-50/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img src="/images/pastor-bio.webp" alt="Pastor Eliezer Perez" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal><p className="eyebrow">Lead Pastor</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display text-5xl md:text-7xl mt-4 leading-[0.95]">Eliezer Perez</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-bone-50/75 text-lg leading-relaxed max-w-prose2">
                <p>Pastor Perez has served across Southern New England for more than twenty years. He brings a love for the local church and a vision for what the next chapter on the North Shore can become.</p>
                <p>He has been married to his wife Casey for over twenty years. Together they're raising two sons (and two dogs). The family loves sports, good meals, and time on the field together.</p>
                <p className="text-bone-100"><em>"You have a unique part to play in the world. Let's discover it together."</em></p>
              </div>
              <a href="mailto:eperez@centerchurchne.com" className="inline-flex items-center gap-2 mt-8 btn-ghost">
                <Mail size={16} /> eperez@centerchurchne.com
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 md:py-32 bg-ink-900 border-t border-bone-50/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">Our Team</p>
            <h2 className="display text-4xl md:text-6xl mt-4">The people behind the scenes.</h2>
          </Reveal>
          <RevealStagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <motion.div key={m.name} variants={itemVariants}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                </div>
                <p className="display text-2xl mt-5">{m.name}</p>
                <p className="text-bone-50/55 text-sm tracking-widest2 uppercase mt-1">{m.role}</p>
                {m.email && <a href={`mailto:${m.email}`} className="text-gold-500 text-sm mt-2 inline-block hover:text-gold-400">{m.email}</a>}
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>
    </PageShell>
  )
}
