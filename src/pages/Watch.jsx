import { ArrowUpRight, PlayCircle } from 'lucide-react'
import PageShell from '../components/PageShell'
import { Reveal } from '../components/Reveal'
import { site } from '../lib/site'

export default function Watch() {
  return (
    <PageShell>
      <section className="pt-32 md:pt-48 pb-12 bg-ink-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">Watch</p>
            <h1 className="display text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.95]">Sermons + Teachings.</h1>
            <p className="mt-6 text-bone-50/70 text-lg max-w-xl">Joining from home? Pull up a chair. Every message we've taught lives on our YouTube channel.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-ink-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <a
              href={site.links.youtube}
              target="_blank"
              rel="noreferrer"
              className="group block relative overflow-hidden border border-bone-50/10 bg-ink-900 h-[420px] md:h-[520px]"
            >
              <img
                src="/images/online-tech.webp"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/30" />
              <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
                <PlayCircle className="text-gold-500" size={64} />
                <p className="display text-4xl md:text-6xl mt-6">Watch on YouTube</p>
                <p className="text-bone-50/80 mt-4 max-w-md text-lg">Sermons, special services, and teaching series — all in one place.</p>
                <span className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-bone-50/30 text-sm tracking-widest2 uppercase text-bone-50 group-hover:border-clay-400 group-hover:text-clay-400 transition-colors">
                  Open YouTube <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
