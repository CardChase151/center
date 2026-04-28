import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Radio } from 'lucide-react'
import clsx from 'clsx'
import { site } from '../lib/site'

const links = [
  { to: '/about',     label: 'About' },
  { to: '/visit',     label: 'Visit' },
  { to: '/serve',     label: 'Serve' },
  { to: '/echariria', label: 'Echariria' },
  { to: '/watch',     label: 'Watch' },
]

function isLiveNow() {
  const d = new Date()
  return d.getDay() === 0 && d.getHours() >= 10 && d.getHours() < 12
}

export default function Nav() {
  const [open, setOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [live, setLive]   = useState(false)
  const { pathname }      = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    setLive(isLiveNow())
    const id = setInterval(() => setLive(isLiveNow()), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out-soft',
          scrolled || open
            ? 'bg-ink-950/85 backdrop-blur-md border-b border-bone-50/5'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="Center Church" className="h-9 md:h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  clsx(
                    'text-sm tracking-widest2 uppercase transition-colors',
                    isActive ? 'text-bone-50' : 'text-bone-50/60 hover:text-bone-50'
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            {live && (
              <a
                href={site.links.livestream}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-clay-400"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-clay-500" />
                </span>
                Live
              </a>
            )}
            <a href={site.links.give} target="_blank" rel="noreferrer" className="btn-primary text-sm">
              Give
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-bone-50"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink-950/98 md:hidden pt-20"
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col px-6 py-10 gap-1"
            >
              {links.map((l, i) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    clsx(
                      'display text-4xl py-3 border-b border-bone-50/5 transition-colors',
                      isActive ? 'text-clay-400' : 'text-bone-50'
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-3 pt-8">
                <a href={site.links.give} className="btn-primary justify-center">Give</a>
                {live && (
                  <a href={site.links.livestream} target="_blank" rel="noreferrer" className="btn-ghost justify-center">
                    <Radio size={16} /> Watch Live Now
                  </a>
                )}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
