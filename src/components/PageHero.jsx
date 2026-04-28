import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, sub, image }) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/30 to-ink-950" />
      </motion.div>
      <div className="relative z-10 h-full mx-auto max-w-7xl px-5 md:px-8 flex flex-col justify-end pb-14 md:pb-20">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow"
          >{eyebrow}</motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="display text-5xl md:text-7xl lg:text-8xl mt-3 max-w-4xl text-bone-50"
        >{title}</motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-xl text-bone-50/80 text-lg"
          >{sub}</motion.p>
        )}
      </div>
    </section>
  )
}
