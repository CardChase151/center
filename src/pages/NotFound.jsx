import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'

export default function NotFound() {
  return (
    <PageShell>
      <section className="min-h-[70vh] flex items-center justify-center bg-ink-950 px-5">
        <div className="text-center max-w-lg">
          <p className="eyebrow">404</p>
          <h1 className="display text-6xl md:text-8xl mt-6 leading-[0.95]">Page not found.</h1>
          <p className="mt-6 text-bone-50/70">The page you were looking for must've wandered off.</p>
          <Link to="/" className="inline-flex items-center gap-2 mt-10 btn-primary">Take me home</Link>
        </div>
      </section>
    </PageShell>
  )
}
