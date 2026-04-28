import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { site } from '../lib/site'

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-bone-50/5">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img src="/images/logo.png" alt="Center Church" className="h-12 w-auto" />
            <p className="display text-2xl md:text-3xl mt-8 leading-snug text-bone-100 max-w-md">
              {site.tagline}
            </p>
            <p className="mt-4 text-bone-50/60 max-w-md">{site.mission}</p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Visit</p>
            <ul className="space-y-3 text-bone-50/80">
              <li className="flex gap-3"><MapPin size={16} className="mt-1 text-gold-500 shrink-0" /><a href={site.links.maps} target="_blank" rel="noreferrer" className="hover:text-bone-50">{site.address}</a></li>
              <li className="flex gap-3"><Phone size={16} className="mt-1 text-gold-500 shrink-0" /><a href={site.phoneHref} className="hover:text-bone-50">{site.phone}</a></li>
              <li className="flex gap-3"><Mail size={16} className="mt-1 text-gold-500 shrink-0" /><a href={`mailto:${site.email}`} className="hover:text-bone-50">{site.email}</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-3 text-bone-50/80">
              <li><Link to="/about" className="hover:text-bone-50">About</Link></li>
              <li><Link to="/visit" className="hover:text-bone-50">Plan a Visit</Link></li>
              <li><Link to="/kids" className="hover:text-bone-50">Center Kids</Link></li>
              <li><Link to="/serve" className="hover:text-bone-50">Serve</Link></li>
              <li><Link to="/pray" className="hover:text-bone-50">Pray</Link></li>
              <li><Link to="/missions" className="hover:text-bone-50">Missions</Link></li>
              <li><Link to="/watch" className="hover:text-bone-50">Watch</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Connect</p>
            <ul className="space-y-3 text-bone-50/80">
              <li><Link to="/give" className="hover:text-bone-50">Give</Link></li>
              <li><a href={site.links.livestream} target="_blank" rel="noreferrer" className="hover:text-bone-50">Live Stream</a></li>
              <li><Link to="/contact" className="hover:text-bone-50">Prayer Request</Link></li>
              <li><Link to="/login" className="hover:text-bone-50">Log In</Link></li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href={site.links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full border border-bone-50/15 hover:border-bone-50/60 transition-colors"><Instagram size={16} /></a>
              <a href={site.links.facebook}  target="_blank" rel="noreferrer" aria-label="Facebook"  className="p-2 rounded-full border border-bone-50/15 hover:border-bone-50/60 transition-colors"><Facebook  size={16} /></a>
              <a href={site.links.youtube}   target="_blank" rel="noreferrer" aria-label="YouTube"   className="p-2 rounded-full border border-bone-50/15 hover:border-bone-50/60 transition-colors"><Youtube   size={16} /></a>
            </div>
          </div>
        </div>

        <div className="hairline mt-16" />
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-bone-50/40">
          <p>© {new Date().getFullYear()} Center Church. All rights reserved.</p>
          <p>{site.serviceTime} · {site.serviceLength}</p>
        </div>
      </div>
    </footer>
  )
}
