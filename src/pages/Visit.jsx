import { Link } from 'react-router-dom'
import { Clock, MapPin, Car, Baby, Coffee, ArrowRight, Mail, Phone } from 'lucide-react'
import PageShell from '../components/PageShell'
import PageHero from '../components/PageHero'
import { Reveal, RevealStagger, itemVariants } from '../components/Reveal'
import { motion } from 'framer-motion'
import { site } from '../lib/site'

const expect = [
  { icon: Coffee, title: 'A friendly welcome',     body: 'You will be greeted warmly. No pressure, no awkward singling out.' },
  { icon: Clock,  title: 'About 75 minutes',       body: 'Worship music, biblical teaching, prayer. Casual, modern, hopeful.' },
  { icon: Baby,   title: 'Kids are cared for',     body: 'Center Kids serves 6 months through 6th grade in a safe, fun space.' },
  { icon: Car,    title: 'Parking is easy',        body: 'Free lot behind the building, plus street parking nearby.' },
]

export default function Visit() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Plan Your Visit"
        title="Save you a seat."
        sub="Whether it's your first time in a church or your fiftieth, we'd love to meet you on Sunday."
        image="/images/what-to-expect.webp"
      />

      {/* QUICK FACTS */}
      <section className="py-20 md:py-28 bg-ink-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-3 gap-px bg-bone-50/5">
          <Reveal className="bg-ink-950 p-8 md:p-12">
            <Clock className="text-gold-500" size={24} />
            <p className="eyebrow mt-5">When</p>
            <p className="display text-3xl md:text-4xl mt-3">{site.serviceTime}</p>
            <p className="text-bone-50/60 mt-2">{site.serviceLength} · followed by coffee + connection</p>
          </Reveal>
          <Reveal className="bg-ink-950 p-8 md:p-12" delay={0.1}>
            <MapPin className="text-gold-500" size={24} />
            <p className="eyebrow mt-5">Where</p>
            <p className="display text-3xl md:text-4xl mt-3">24 Washington St</p>
            <p className="text-bone-50/60 mt-2">Peabody, MA 01960</p>
            <a href={site.links.maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-gold-500 text-sm hover:text-gold-400">Open in Maps <ArrowRight size={14} /></a>
          </Reveal>
          <Reveal className="bg-ink-950 p-8 md:p-12" delay={0.2}>
            <Phone className="text-gold-500" size={24} />
            <p className="eyebrow mt-5">Questions</p>
            <p className="display text-3xl md:text-4xl mt-3">We're listening.</p>
            <a href={site.phoneHref}     className="block text-bone-50/80 mt-3 hover:text-bone-50">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="block text-bone-50/80 mt-1 hover:text-bone-50">{site.email}</a>
          </Reveal>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-24 md:py-32 border-t border-bone-50/5 bg-ink-900">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">What to expect</p>
            <h2 className="display text-4xl md:text-6xl mt-4">No surprises.</h2>
          </Reveal>
          <RevealStagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expect.map(({ icon: Icon, ...e }) => (
              <motion.div key={e.title} variants={itemVariants} className="border border-bone-50/10 p-8 hover:border-gold-500/40 transition-colors">
                <Icon className="text-gold-500" size={22} />
                <p className="display text-2xl mt-5">{e.title}</p>
                <p className="text-bone-50/60 mt-3 leading-relaxed">{e.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* PARKING MAP */}
      <section className="py-24 md:py-32 border-t border-bone-50/5 bg-ink-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">Parking</p>
              <h2 className="display text-4xl md:text-5xl mt-4">Behind the building.</h2>
              <p className="mt-6 text-bone-50/70 leading-relaxed max-w-md">
                Pull around to our private lot, or grab any street spot nearby. The follow-the-arrows route below is the easiest in.
              </p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7" delay={0.1}>
            <div className="overflow-hidden border border-bone-50/10">
              <img src="/images/map.webp" alt="Driving directions to Center Church parking lot" className="w-full h-auto" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* KIDS LINK */}
      <section className="py-24 md:py-32 border-t border-bone-50/5 bg-ink-900">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-7">
            <p className="eyebrow">Bringing kids?</p>
            <h2 className="display text-4xl md:text-6xl mt-4">Center Kids is ready for them.</h2>
            <p className="mt-6 text-bone-50/70 text-lg leading-relaxed max-w-prose2">
              Ages 6 months through 6th grade. Lobby check-in with printed ID tags. A fun, safe space to learn and grow.
            </p>
            <Link to="/kids" className="inline-flex items-center gap-2 mt-8 btn-primary">
              About Center Kids <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.1}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src="/images/kids-1.webp" alt="A baby in mom's arms in the church lobby" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-ink-950 border-t border-bone-50/5">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="display text-4xl md:text-6xl">Still have a question?</h2>
            <p className="mt-6 text-bone-50/70 text-lg">No question is too small. Send us a note and we'll be in touch this week.</p>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 mt-10 btn-primary">
              <Mail size={16} /> Email us
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
