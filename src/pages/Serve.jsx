import { ArrowRight } from 'lucide-react'
import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import { Reveal, RevealStagger, itemVariants } from '../components/Reveal'
import { motion } from 'framer-motion'
import { ministries, site } from '../lib/site'

export default function Serve() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Serve"
        title="Pour into others."
        sub="The priesthood of all believers means every one of us carries a part of the work."
        image="/images/hospitality.webp"
      />

      <section className="py-24 md:py-32 bg-ink-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">Six Teams</p>
            <h2 className="display text-4xl md:text-6xl mt-4">Pick where you'd love to plug in.</h2>
          </Reveal>

          <RevealStagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((m) => (
              <motion.a
                key={m.slug}
                href={site.links.planning}
                target="_blank"
                rel="noreferrer"
                variants={itemVariants}
                className="group block relative overflow-hidden h-[440px]"
              >
                <img src={m.img} alt={m.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <p className="display text-3xl md:text-4xl">{m.title}</p>
                  <p className="text-bone-50/75 mt-3 max-w-xs">{m.blurb}</p>
                  <span className="inline-flex items-center gap-2 mt-5 text-sm tracking-widest2 uppercase text-bone-50/80 group-hover:text-clay-400 transition-colors">
                    Express interest <ArrowRight size={14} />
                  </span>
                </div>
              </motion.a>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-bone-50/5 bg-ink-900">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="display text-4xl md:text-6xl">Not sure where to start?</h2>
            <p className="mt-6 text-bone-50/70 text-lg">Reach out and a leader will help you find a fit.</p>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 mt-10 btn-primary">
              Email us <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
