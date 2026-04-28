import { Link } from 'react-router-dom'
import { Mail, ArrowRight } from 'lucide-react'
import PageShell from '../components/PageShell'
import { Reveal } from '../components/Reveal'

export default function Pray() {
  return (
    <PageShell>
      {/* INTRO */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-16 bg-ink-950">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <Reveal>
            <p className="eyebrow">Prayer</p>
            <h1 className="display text-5xl md:text-7xl mt-4 leading-[0.95]">We're praying with you.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 text-bone-50/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              While you get in touch, read this prayer. Take your time. Reading isn't the prayer — believing what you read and saying it to God because it's real to you is prayer. Let's get in touch soon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE PRAYER */}
      <section className="pb-20 md:pb-32 bg-ink-950">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <div className="hairline mb-12" />
            <p className="eyebrow text-center">A Prayer of Covering + Blessing</p>
            <div className="display text-2xl md:text-[1.75rem] leading-relaxed text-bone-100 space-y-7 mt-12">
              <p className="text-clay-400">Father in heaven,</p>
              <p>
                You are sovereign over all things — over the storm I'm in and the sunshine I haven't yet seen. Nothing in my life surprises You. Nothing is wasted. You are working all things together for good for those who love You and are called according to Your purpose, and so I trust You with what I cannot understand.
              </p>
              <p>
                Give me Your strength while I wait. Quiet the noise. Anchor my soul in the truth that You have not forgotten me. Where I am tempted to despair, draw me back to Your promises. Where I am tempted to take matters into my own hands, remind me that Your timing is good and Your design is wiser than mine.
              </p>
              <p>
                Teach me a joy that does not depend on my circumstance — a joy that flows from knowing You, that the world cannot give and the world cannot take away. In good seasons, let me not forget the Giver. In hard seasons, let me not forget that You are still good.
              </p>
              <p>
                Be a covering over my life — over my body, my mind, and my heart. Cover my family, my friends, my neighbors, and even those who do not yet know You. Protect us from harm we can see and harm we cannot. Keep us from evil and lead us in the way everlasting.
              </p>
              <p>
                And above all, set my heart to seek first Your kingdom and Your righteousness. Let everything else fall into its proper place behind that. Whatever I'm asking for, I'm asking with open hands — Your will be done.
              </p>
              <p className="text-clay-400">In the name of Jesus, Amen.</p>
            </div>
            <div className="hairline mt-14" />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-ink-900 border-t border-bone-50/5">
        <div className="mx-auto max-w-2xl px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="display text-3xl md:text-5xl">Want us to pray with you specifically?</h2>
            <p className="mt-6 text-bone-50/70 text-lg">Send a prayer request and someone from our team will reach out personally.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-10 btn-primary">
              <Mail size={16} /> Send a prayer request <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
