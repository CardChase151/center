import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function PageShell({ children }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pt-16 md:pt-20"
    >
      {children}
    </motion.main>
  )
}
