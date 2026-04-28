import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Radio, User } from 'lucide-react'
import clsx from 'clsx'
import { site } from '../lib/site'

const links = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/visit',     label: 'Visit' },
  { to: '/serve',     label: 'Serve' },
  { to: '/echariria', label: 'Echariria' },
  { to: '/watch',     label: 'Watch' },
  { to: '/give',      label: 'Give' },
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

          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
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
            <Link to="/login" className="btn-primary text-sm">
              <User size={14} /> Log In
            </Link>
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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-30 bg-ink-950/70 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-3 top-[4.25rem] z-40 bg-ink-950 md:hidden rounded-2xl border border-bone-50/10 shadow-2xl shadow-black/60 overflow-hidden"
            >
              <nav className="flex flex-col p-3">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      clsx(
                        'display text-3xl px-4 py-3 rounded-xl transition-colors',
                        isActive ? 'text-clay-400 bg-bone-50/[0.06]' : 'text-bone-50 hover:bg-bone-50/[0.04]'
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
                <div className="flex flex-col gap-2 px-1 pt-4 mt-3 border-t border-bone-50/10">
                  <Link to="/login" className="btn-primary justify-center">
                    <User size={16} /> Log In
                  </Link>
                  {live && (
                    <a href={site.links.livestream} target="_blank" rel="noreferrer" className="btn-ghost justify-center">
                      <Radio size={16} /> Watch Live Now
                    </a>
                  )}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
