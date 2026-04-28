import { Heart, Globe, Home, ArrowRight } from 'lucide-react'
import PageShell from '../components/PageShell'
import { Reveal, RevealStagger, itemVariants } from '../components/Reveal'
import { motion } from 'framer-motion'
import { site } from '../lib/site'

const where = [
  { icon: Home,   title: 'Here',  body: 'Sunday gatherings, Center Kids, youth, and the day-to-day life of the church.' },
  { icon: Heart,  title: 'Near',  body: 'Local outreach: Amirah Inc., foster + adoptive families, neighbors in need on the North Shore.' },
  { icon: Globe,  title: 'Far',   body: 'Echariria — feeding 300+ elementary students daily in Nakuru, Kenya.' },
]

export default function Give() {
  return (
    <PageShell>
      <section className="pt-32 md:pt-48 pb-16 md:pb-20 bg-ink-950">
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
          <Reveal>
            <p className="eyebrow">Generosity</p>
            <h1 className="display text-6xl md:text-8xl mt-6 leading-[0.95]">Give.</h1>
            <p className="mt-8 text-bone-50/70 text-lg max-w-2xl mx-auto">
              Every gift fuels worship here, healing nearby, and meals across the world.
            </p>
            <a href={site.links.give} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-10 btn-primary text-base">
              Give Online <ArrowRight size={16} />
            </a>
            <p className="text-xs text-bone-50/40 mt-4">Securely processed through Planning Center.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ink-900 border-t border-bone-50/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">Where it goes</p>
            <h2 className="display text-4xl md:text-6xl mt-4 max-w-2xl">Your gift stretches further than you think.</h2>
          </Reveal>
          <RevealStagger className="mt-16 grid md:grid-cols-3 gap-px bg-bone-50/5">
            {where.map(({ icon: Icon, ...w }) => (
              <motion.div key={w.title} variants={itemVariants} className="bg-ink-900 p-10">
                <Icon className="text-gold-500" size={26} />
                <p className="display text-3xl mt-5">{w.title}</p>
                <p className="text-bone-50/60 mt-3 leading-relaxed">{w.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ink-950 border-t border-bone-50/5">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="display text-3xl md:text-5xl">Other ways to give</h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
              <div className="border border-bone-50/10 p-6">
                <p className="eyebrow">Mail</p>
                <p className="mt-3 text-bone-50/80 leading-relaxed">Center Church<br/>{site.address}</p>
              </div>
              <div className="border border-bone-50/10 p-6">
                <p className="eyebrow">In Person</p>
                <p className="mt-3 text-bone-50/80 leading-relaxed">Drop your gift in the offering during any Sunday service.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
