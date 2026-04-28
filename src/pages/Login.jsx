import { Link } from 'react-router-dom'
import { Lock, ArrowLeft, BookOpen, Heart, Sparkles, MessageCircle } from 'lucide-react'
import PageShell from '../components/PageShell'
import { Reveal, RevealStagger, itemVariants } from '../components/Reveal'
import { motion } from 'framer-motion'

const previews = [
  { icon: BookOpen,      label: 'Saved sermon notes' },
  { icon: Heart,         label: 'Favorite verses' },
  { icon: Sparkles,      label: 'Daily devotionals' },
  { icon: MessageCircle, label: 'Personal prayer journal' },
]

export default function Login() {
  return (
    <PageShell>
      <section className="min-h-[88vh] flex items-center justify-center bg-ink-950 px-5 py-24">
        <div className="text-center max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-bone-50/15">
              <Lock className="text-gold-500" size={26} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mt-8">Center Account</p>
            <h1 className="display text-5xl md:text-7xl mt-4 leading-[0.95]">Coming soon.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-bone-50/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Center is making it easier to manage your favorite notes, sermons, verses, and devotionals — personal to your own account.
            </p>
          </Reveal>

          <RevealStagger className="mt-14 grid sm:grid-cols-2 gap-3 max-w-xl mx-auto" delayChildren={0.3}>
            {previews.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="flex items-center gap-3 px-5 py-4 border border-bone-50/10 rounded-xl text-left"
              >
                <Icon className="text-gold-500 shrink-0" size={18} />
                <span className="text-bone-50/85 text-sm">{label}</span>
              </motion.div>
            ))}
          </RevealStagger>

          <Reveal delay={0.5}>
            <Link to="/" className="inline-flex items-center gap-2 mt-14 btn-ghost">
              <ArrowLeft size={16} /> Back to home
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
