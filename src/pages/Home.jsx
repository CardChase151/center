import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, HandHelping, MessageSquare, MapPin, Clock } from 'lucide-react'
import PageShell from '../components/PageShell'
import { Reveal, RevealStagger, itemVariants } from '../components/Reveal'
import { site, values } from '../lib/site'

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden -mt-16 md:-mt-20">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src="/images/online-tech.webp" alt="Center Church gathering" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/30 to-ink-950" />
        </motion.div>

        <div className="relative z-10 h-full mx-auto max-w-7xl px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="eyebrow"
          >Peabody · Boston's North Shore</motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="display text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.95] mt-4 text-bone-50 max-w-5xl"
          >
            You're<br/>welcome here.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Link to="/visit" className="btn-primary">
              Plan Your Visit <ArrowRight size={16} />
            </Link>
            <a href={site.links.livestream} target="_blank" rel="noreferrer" className="btn-ghost">
              Watch Live
            </a>
          </motion.div>
        </div>

        {/* marquee */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-bone-50/10 bg-ink-950/40 backdrop-blur">
          <div className="mx-auto max-w-7xl px-5 md:px-8 h-12 md:h-14 flex items-center justify-between text-xs md:text-sm tracking-widest2 uppercase text-bone-50/70">
            <span className="flex items-center gap-2"><Clock size={14} className="text-gold-500" /> {site.serviceTime}</span>
            <span className="hidden sm:flex items-center gap-2"><MapPin size={14} className="text-gold-500" /> 24 Washington St, Peabody</span>
            <span className="hidden md:inline text-clay-400">All are welcome.</span>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 md:py-40 bg-ink-950">
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
          <Reveal>
            <p className="eyebrow">Our Mission</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display text-3xl md:text-5xl lg:text-6xl leading-tight mt-6 text-bone-100">
              A diverse community on Boston's North Shore — <span className="text-gold-500">welcoming everyone</span> who seeks to love God with all, and love their neighbor as themselves.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 border-t border-bone-50/5 bg-ink-900">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">Seven Values</p>
            <h2 className="display text-4xl md:text-6xl mt-4 max-w-2xl">Inspired by the early church.</h2>
          </Reveal>
          <RevealStagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone-50/5">
            {values.map((v) => (
              <motion.div
                key={v.word}
                variants={itemVariants}
                className="bg-ink-900 p-8 md:p-10 hover:bg-ink-800 transition-colors duration-500"
              >
                <p className="text-gold-500 text-sm">{values.indexOf(v) + 1 < 10 ? '0' : ''}{values.indexOf(v) + 1}</p>
                <p className="display text-3xl md:text-4xl mt-3">{v.word}</p>
                <p className="mt-3 text-bone-50/60 text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* PASTOR INVITATION */}
      <section className="bg-ink-950 py-24 md:py-32 border-t border-bone-50/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-6">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src="/images/pastor-skyline.webp" alt="Pastor Eliezer Perez with his family" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div className="md:col-span-6">
            <Reveal>
              <p className="eyebrow">A note from our pastor</p>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="display text-3xl md:text-5xl mt-6 leading-tight text-bone-100">
                "You have a unique part to play in the world. Let's discover it together."
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-bone-50/70 max-w-md leading-relaxed">
                Pastor Eliezer Perez has served across Southern New England for over twenty years. He, his wife Casey, and their two sons make their home on the North Shore.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-gold-500 hover:text-gold-400 transition-colors">
                Read more <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THREE PATHS */}
      <section className="bg-ink-900 py-24 md:py-32 border-t border-bone-50/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">Take a Step</p>
            <h2 className="display text-4xl md:text-6xl mt-4 max-w-2xl">Three ways in.</h2>
          </Reveal>
          <RevealStagger className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart,         to: '/visit',  title: "I'm new",        body: "We'll save you a seat. Sundays, casual, ~75 min.", img: '/images/what-to-expect.webp' },
              { icon: HandHelping,   to: '/serve',  title: 'I want to serve', body: 'Pour into others through one of six teams.',       img: '/images/hospitality.webp' },
              { icon: MessageSquare, to: '/contact',title: 'I need prayer',   body: "We'd love to pray with you, today.",               img: '/images/all-ministry.webp' },
            ].map(({ icon: Icon, ...c }) => (
              <motion.div key={c.title} variants={itemVariants}>
                <Link to={c.to} className="group block relative h-[420px] overflow-hidden rounded-sm">
                  <img src={c.img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <Icon className="text-gold-500" size={22} />
                    <p className="display text-3xl md:text-4xl mt-3">{c.title}</p>
                    <p className="text-bone-50/70 mt-2">{c.body}</p>
                    <span className="inline-flex items-center gap-2 mt-5 text-sm tracking-widest2 uppercase text-bone-50/80 group-hover:text-clay-400 transition-colors">
                      Begin <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ECHARIRIA SPOTLIGHT */}
      <section className="relative bg-ink-950 py-24 md:py-40 border-t border-bone-50/5 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-12 items-center relative">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">Echariria · Nakuru, Kenya</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display text-5xl md:text-7xl mt-6 leading-[0.95]">
                <span className="text-gold-500">300</span> children fed.<br/>Every single day.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-bone-50/70 text-lg max-w-xl leading-relaxed">
                What started in response to one tragedy has become a daily lifeline. Meals, hygiene education, employment for the village, and a future for elementary students who would otherwise go without.
              </p>
              <Link to="/echariria" className="inline-flex items-center gap-2 mt-10 btn-primary">
                Read the story <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <Reveal className="md:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[3/4] overflow-hidden"><img src="/images/all-ministry.webp" alt="" className="w-full h-full object-cover" /></div>
              <div className="aspect-[3/4] overflow-hidden mt-10"><img src="/images/youth.webp" alt="" className="w-full h-full object-cover" /></div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
