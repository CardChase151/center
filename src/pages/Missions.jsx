import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Sprout, Globe } from 'lucide-react'
import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import { Reveal, RevealStagger, itemVariants } from '../components/Reveal'
import { motion } from 'framer-motion'

const partners = [
  {
    icon: Sprout,
    title: 'Foster + Adoptive Care',
    body: 'We come alongside foster families, adoptive parents, and the social workers who serve them with prayer, training, giving, and volunteering.',
    href: null,
  },
  {
    icon: Heart,
    title: 'Amirah, Inc.',
    body: 'A North Shore partner restoring women exiting commercial sexual exploitation across New England.',
    href: 'https://amirahinc.org',
  },
  {
    icon: Globe,
    title: 'Echariria · Kenya',
    body: 'Daily meals, hygiene, and dignity for 300+ elementary students in Mbaruk, Nakuru.',
    href: '/echariria',
    internal: true,
  },
]

export default function Missions() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Loving Our Neighbors"
        title="Missions to the margins."
        sub="We chase God into the hard places — at home and across the world."
        image="/images/all-ministry.webp"
      />

      <section className="py-24 md:py-32 bg-ink-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <RevealStagger className="grid md:grid-cols-3 gap-px bg-bone-50/5">
            {partners.map(({ icon: Icon, ...p }) => {
              const Wrap = p.internal ? Link : 'a'
              const wrapProps = p.internal
                ? { to: p.href }
                : p.href ? { href: p.href, target: '_blank', rel: 'noreferrer' } : {}
              return (
                <motion.div key={p.title} variants={itemVariants} className="bg-ink-950 p-8 md:p-12">
                  <Icon className="text-gold-500" size={26} />
                  <p className="display text-3xl md:text-4xl mt-5">{p.title}</p>
                  <p className="text-bone-50/60 mt-4 leading-relaxed">{p.body}</p>
                  {p.href && (
                    <Wrap {...wrapProps} className="inline-flex items-center gap-2 mt-6 text-gold-500 hover:text-gold-400 text-sm tracking-widest2 uppercase">
                      Learn more <ArrowRight size={14} />
                    </Wrap>
                  )}
                </motion.div>
              )
            })}
          </RevealStagger>
        </div>
      </section>
    </PageShell>
  )
}
