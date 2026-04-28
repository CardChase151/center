import { Mail, Phone, MapPin } from 'lucide-react'
import PageShell from '../components/PageShell'
import { Reveal } from '../components/Reveal'
import { site } from '../lib/site'

export default function Contact() {
  return (
    <PageShell>
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 bg-ink-950">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="display text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.95]">Let's talk.</h1>
            <p className="mt-6 text-bone-50/70 text-lg max-w-xl">Questions, prayer requests, or just curious? Reach out — a real person will write back.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-ink-950">
        <div className="mx-auto max-w-5xl px-5 md:px-8 grid md:grid-cols-3 gap-px bg-bone-50/5">
          <Reveal className="bg-ink-950 p-8 md:p-10">
            <Phone className="text-gold-500" size={22} />
            <p className="eyebrow mt-5">Phone</p>
            <a href={site.phoneHref} className="block display text-2xl mt-3 hover:text-gold-500">{site.phone}</a>
          </Reveal>
          <Reveal className="bg-ink-950 p-8 md:p-10" delay={0.1}>
            <Mail className="text-gold-500" size={22} />
            <p className="eyebrow mt-5">Email</p>
            <a href={`mailto:${site.email}`} className="block display text-2xl mt-3 hover:text-gold-500 break-words">{site.email}</a>
          </Reveal>
          <Reveal className="bg-ink-950 p-8 md:p-10" delay={0.2}>
            <MapPin className="text-gold-500" size={22} />
            <p className="eyebrow mt-5">Address</p>
            <a href={site.links.maps} target="_blank" rel="noreferrer" className="block display text-2xl mt-3 hover:text-gold-500">{site.address}</a>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ink-900 border-t border-bone-50/5">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-center">Send us a note</p>
            <h2 className="display text-4xl md:text-5xl mt-4 text-center">We read every one.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="mt-12 space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label className="eyebrow">Name</label>
                <input name="name" required className="mt-2 w-full bg-transparent border-b border-bone-50/20 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
              </div>
              <div>
                <label className="eyebrow">Email</label>
                <input type="email" name="email" required className="mt-2 w-full bg-transparent border-b border-bone-50/20 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
              </div>
              <div>
                <label className="eyebrow">Message</label>
                <textarea name="message" rows="5" required className="mt-2 w-full bg-transparent border-b border-bone-50/20 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none" />
              </div>
              <div className="pt-4 text-center">
                <button type="submit" className="btn-primary">Send</button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
