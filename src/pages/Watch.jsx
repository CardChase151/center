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
            <h1 className="display text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.95]">Sermons + Live.</h1>
            <p className="mt-6 text-bone-50/70 text-lg max-w-xl">Joining from home? Pull up a chair. We're glad you're here.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-ink-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="aspect-video w-full overflow-hidden border border-bone-50/10 bg-ink-900">
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=centerchurchne"
                title="Center Church latest sermon"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ink-900 border-t border-bone-50/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-6">
          <Reveal>
            <a href={site.links.youtube} target="_blank" rel="noreferrer" className="group block relative overflow-hidden h-[320px]">
              <img src="/images/online-tech.webp" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <PlayCircle className="text-gold-500" size={28} />
                <p className="display text-3xl md:text-4xl mt-3">Sermon Archive</p>
                <p className="text-bone-50/70 mt-2">Every message we've taught, on YouTube.</p>
                <span className="inline-flex items-center gap-2 mt-5 text-sm tracking-widest2 uppercase text-bone-50/80 group-hover:text-clay-400 transition-colors">
                  Open YouTube <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a href={site.links.livestream} target="_blank" rel="noreferrer" className="group block relative overflow-hidden h-[320px]">
              <img src="/images/zoom.webp" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-clay-500" />
                </span>
                <p className="display text-3xl md:text-4xl mt-3">Live Stream</p>
                <p className="text-bone-50/70 mt-2">Sundays at 10:30 AM ET — join the room from anywhere.</p>
                <span className="inline-flex items-center gap-2 mt-5 text-sm tracking-widest2 uppercase text-bone-50/80 group-hover:text-clay-400 transition-colors">
                  Join Live <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
