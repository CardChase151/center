# Center Church — Site Recon & Redesign Game Plan

> Reconnaissance only. No code yet. This is the map and the strategy.

---

## 1. Who They Are (the foundation)

**Center Church** — Peabody, MA, Boston's North Shore. Assemblies of God affiliate.

- **Address:** 24 Washington Street, Peabody, MA 01960
- **Phone:** 978-717-5751
- **Email:** office@centerchurchne.com
- **Lead Pastor:** Eliezer Perez (eperez@centerchurchne.com) — 20+ yrs ministry across Southern New England, married to Casey, two sons.
- **Service:** Sundays, ~75 min, followed by social/connect time. Specific time not on site (gap to fix).
- **Tagline:** *"You're Welcome Here."*
- **Mission:** *"A diverse community of people on Boston's North Shore welcoming everyone who seeks to love God with all, and love their neighbor as themselves."*
- **Seven values (early-church inspired):** biblical instruction, community, prayer, unity, generosity, evangelism, diversity.

### What makes them distinctive
- **Diverse, multiethnic congregation** — photos confirm this and it's a real differentiator on the North Shore.
- **Outsized international impact** for a small church: Echariria program in Kenya feeds 300–350 students daily.
- **Local justice work** through Amirah, Inc. (women exiting commercial sexual exploitation) and foster/adoptive support.
- **Pastor Perez's posture is invitational, not gatekeeping** — "you have a unique part to play."

---

## 2. Current Site Map (centerchurchne.com on Squarespace)

### Top nav
| Section | Items | URL |
|---|---|---|
| **About** | Who We Are, When We Meet, We Believe, Our Pastor, Our Team | `/about` |
| **Connect** | Plan Your Visit, Center Kids, Serve, Pray, Loving Our Neighbors, Echariria | `/connect` |
| **Watch** | Live Stream, Video Archive | external |
| **Give** | — | external |

### Confirmed live URLs (so we know what redirects to set later)
- `/about`
- `/connect`
- `/im-new` (Plan Your Visit)
- `/kids` (Center Kids — 6mo–6th grade, lobby check-in w/ ID tags)
- `/serve` (6 ministry teams: Audio/Video, Center Kids, Center Online, Hospitality, Worship, Youth)
- `/pray` (Tuesdays 7–8:30 PM in person)
- `/missions-to-the-margins` (Foster/Adoptive, Amirah, Echariria)
- `/echariria-student-empowerment-program` (Kenya, full backstory)
- `/we-believe` (full doctrine — 7 articles)

### External / subdomain ecosystem
| Tool | URL | Used for |
|---|---|---|
| **Planning Center** | `centerchurchpeabody.churchcenter.com` | Giving, prayer requests, volunteer signup, contact form |
| **Online.Church** | `centerchurchne.online.church` | Live stream platform |
| **YouTube** | `@centerchurchne` (channel UCP7fOmDknPKzn1MQKBX3wHQ) | Sermon archive |
| **Instagram** | `@centerchurchne` | Social |
| **Facebook** | `centerchurchpeabody` | Social |
| **Google Maps** | embedded | Directions (with their custom red-arrow parking map) |

### Content gaps on the current site
- ❌ No specific service time visible on homepage.
- ❌ No "Our Team" page actually rendered (404).
- ❌ Pastor's bio is buried at `/our-pastor`.
- ❌ No events calendar / what's happening this week.
- ❌ No sermon-of-the-week front and center.
- ❌ No newsletter / email capture.
- ❌ Mobile experience on Squarespace template is generic.

---

## 3. Visual Brand Audit (from the asset folder)

### Logo
Tight, modern wordmark: **CENTER** in thin sans-serif caps with **CHURCH** spaced beneath, framed by a thin white square. The logo on its own already screams "elevated" — the website doesn't currently honor it.

**This is our north star.** The whole site should feel like that logo: confident, minimal, framed, unfussy.

### Photography style (their own assets)
Looking through the 21 supplied images:
- **Warm, golden-hour, candid documentary** — think Eliza Faith / Grain & Mortar wedding-photog vibe. Not stock. Real people, real moments.
- **Recurring tones:** muted earth, cream, soft denim, warm wood, occasional brick red, lots of skin tones glowing in soft light.
- **Subjects:** multigenerational and multiethnic — babies in arms, teens in Yankees caps, abuelas serving food, worship hands raised, downtown Boston skyline family walk, video team behind a camera.

### Implied palette (derived from photos + logo)
| Role | Color | Use |
|---|---|---|
| Background base | Near-black `#0E0E10` / off-white `#FAF8F4` | Section backgrounds, dual-mode |
| Primary text | Warm white `#F5F1EA` on dark / Charcoal `#1A1A1C` on light | Body |
| Accent (warm) | Terracotta / brick `#B5532A` | CTA buttons, highlights |
| Accent (gold) | Warm gold `#C9A24A` | Section dividers, hover, scripture pulls |
| Neutral | Soft taupe `#A89E92` | Subdued UI, dividers |

This palette pulls from the actual photos (brick, golden-hour skin glow, denim, cream walls) so the site will feel of-a-piece with the photography instead of fighting it.

### Typography direction
- **Display:** A confident editorial serif for hero/section heads — `Fraunces` (variable, free), `Tobias`, or `GT Sectra` if budget. Echoes the gravitas of scripture without being churchy.
- **UI/Body:** A clean grotesk — `Inter`, `General Sans`, or `Söhne` (paid). Pairs with logo's geometry.
- **Logo-style accent:** Wide-tracked caps for nav/labels — same tracking as the wordmark.

---

## 4. Why the Current Site Falls Flat (Chase's instinct is right)

- **Squarespace generic.** Template-y. Nothing about it could only be Center Church.
- **Logo deserves more.** That bordered wordmark is begging for a cinematic hero, not a stock-feeling banner.
- **Information is hidden.** Service time, pastor bio, sermons — all 2–3 clicks deep.
- **No motion, no rhythm.** Pages are flat scroll. No invitation to stay.
- **Mobile is functional but not delightful.** Important: most first-time visitors check mobile before they ever come.
- **Seven separate platforms (Squarespace, Planning Center, Online.Church, YouTube, IG, FB, Google) with no unified feel.** Site should feel like the front door to all of it, not a list of links to it.

---

## 5. The Vision

> A site that feels like walking into a room where someone already knows your name and isn't going to make it weird. Cinematic, warm, fast on a phone, and gets you to "I'll come Sunday" in under 30 seconds.

### Three design principles
1. **Confidence through restraint.** Lots of white space (or black space). One idea per screen. Generous type. Minimal chrome.
2. **Photography does the talking.** Their candid photos are the hero element, not decoration. Full-bleed, soft Ken-Burns drift.
3. **Mobile is the canon.** Design mobile first. Desktop is the bonus track, not the source of truth.

---

## 6. Tech Stack (Chase's standard web React build)

| Layer | Pick | Why |
|---|---|---|
| **Build tool** | **Vite** | Same as CardChase / JurySelect. Fast HMR, simple config. |
| **Framework** | **React 18 + JavaScript** (no TypeScript) | Matches existing apps. Speed over ceremony. |
| **Routing** | **React Router v6** | 8-page site, client-side routing, easy nested layouts. |
| **Styling** | **Tailwind CSS** | Standard. Mobile-first utilities. |
| **UI primitives** | Hand-rolled components + **lucide-react** icons | NEVER emojis (per global rules). |
| **Animation** | **framer-motion** for interaction/page transitions; **gsap + ScrollTrigger** for scroll-orchestrated sections; **lenis** for smooth scroll | Three motion layers, used sparingly — see §8. |
| **Type** | Fonts self-hosted via Tailwind `@font-face` (Fraunces + Inter) | Free, no FOUT, no Google fetch. |
| **Images** | Pre-optimized webp in `/public`, lazy-loaded `<img loading="lazy">` | Source webp files already supplied. Run through `sharp` once at build to make 2x/1x variants. |
| **Sermons feed** | YouTube Data API v3 → fetched client-side, cached in `localStorage` for 1hr | Pulls latest from `@centerchurchne`. API key in Netlify env. |
| **Live stream** | Embed `online.church` iframe + simple time-window check ("LIVE" badge Sundays during service window) | No extra API needed. |
| **Giving / Prayer / Volunteer signup** | Deep-link to existing Planning Center | Don't rebuild — they're already paying for it. |
| **Hosting** | **Netlify** | Standard. Auto-deploy on push to `main`. |
| **Forms** | **Netlify Forms** for newsletter + contact | Free tier, no backend. |
| **Analytics** | **Plausible** (or skip until Pastor asks) | Privacy-friendly, simple. |
| **Backend (later, if needed)** | **Supabase** | Only if we add a custom CMS or events system. v1 doesn't need it. |
| **Repo** | `github.com/CardChase151/center` | Already created. |

### `package.json` cheat sheet
```
react, react-dom, react-router-dom
vite, @vitejs/plugin-react
tailwindcss, postcss, autoprefixer
framer-motion
gsap
lenis
lucide-react
clsx
```

That's it. No TypeScript, no shadcn (overkill for 8 pages), no Next, no Supabase v1.

---

## 7. Page-by-Page Game Plan

### `/` — Home
- **Hero (full viewport):** Looped 6-sec muted video of a Sunday gathering OR full-bleed Ken-Burns of the Boston-skyline family photo. Logo top-left. Two CTAs: **Plan Your Visit** + **Watch Live**. Bottom: scrolling marquee with "Sundays at [TIME] · 24 Washington St, Peabody · You're Welcome Here."
- **Mission strip:** Single line of editorial serif, one sentence, lots of air.
- **The 7 Values** revealed as a horizontal scroll-snap on mobile / staggered grid on desktop (one word each, fades in on scroll).
- **This Sunday** card: dynamic, pulls latest sermon thumbnail from YouTube + service time.
- **Pastor's invitation:** half-page portrait of Pastor Perez, his quote *"You have a unique part to play in the world,"* signed.
- **Three pathways block:** I'm New / I Want to Serve / I Need Prayer — each a tactile card with photo on hover.
- **Echariria spotlight:** because this is their soul. One full section, one number ("300 children fed daily"), one CTA.
- **Footer:** Map embed, address, social icons, livestream status pill, newsletter capture.

### `/about`
- Single long-scroll story page (no sub-pages needed, eliminates the broken `/our-team` `/who-we-are` nesting).
- Sections: **Our Story** → **What We Believe** (the 7 doctrine articles as expandable cards) → **Our Pastor** (full bio + photo) → **Our Team** (grid, photos in their candid documentary style).

### `/visit` (replaces `/im-new`)
- Above the fold: address, time, "park behind the building" with their custom red-arrow map (already in assets).
- "What to expect" — 4 photo+caption tiles: lobby greeting, 75-min service, kids check-in, social time after.
- Kids section deep-link.
- "Still have questions?" — short form → office@centerchurchne.com.

### `/kids`
- Hero: the baby-in-mom's-arms photo (it's gorgeous).
- Ages, check-in flow as a 4-step horizontal scroll.
- Safety blurbs.
- Volunteer CTA → /serve#kids.

### `/serve`
- 6 ministry cards using their existing photos (Audio, Kids, Online, Hospitality, Worship, Youth).
- Each opens an inline drawer with a one-paragraph pitch + Planning Center signup link.

### `/give`
- Don't rebuild — redirect or thin landing with three-tab embed: **Online (Planning Center)** / **Text-to-Give** / **In Person**.
- One-paragraph "where your money goes" with three icons (local outreach, Echariria, ministries here).

### `/echariria`
- Long-form story page. This is the page that earns email signups and donations.
- Full backstory (the 9-year-old's death, Frecia + Ruth, formalization in 2022).
- Live counter: meals served (manual update is fine).
- Three funding goals as progress bars: storehouse $14k, kitchen equipment $2.5k, kitchen infra $3.5k.
- Photos from Kenya (need to ask church for these).

### `/missions` (Loving Our Neighbors)
- Three partner cards: Foster/Adoptive · Amirah Inc · Echariria. Each links out properly.

### `/watch`
- Latest sermon embed (YouTube), grid of past sermons (auto-pulled via YT Data API).
- Live banner when stream is active.

### `/contact`
- Map, address, phone, email, staff emails (Pastor Perez), short message form.

---

## 8. Animation & Flare (where to spend the polish budget)

The goal is *quietly cinematic*, not flashy. Three tiers:

### Tier 1 — Always-on ambient motion
- **Lenis smooth scroll** sitewide. Single biggest "this site is expensive" tell.
- **Slow Ken-Burns drift** on hero photos (4–8% zoom over 20s, GSAP).
- **Cursor**: subtle 8px circle that scales on links (only desktop, respects `prefers-reduced-motion`).

### Tier 2 — Scroll-triggered reveals
- **Text mask reveal** on section headers using `clip-path` + GSAP ScrollTrigger. Letters fade up on a 30ms stagger.
- **Image reveal** with a thin gold line wiping from left → right before the photo fades in.
- **Pin + scrub** on the 7 Values section: as you scroll, each value scales up and fades through the center.

### Tier 3 — Interaction delight
- **Magnetic buttons** on primary CTAs (subtle 6px pull toward cursor).
- **Live-stream badge** in nav: when stream is active, a soft pulsing red dot. Click → opens stream.
- **Sermon card hover**: thumbnail does a 3-frame play preview using YouTube's storyboard images.
- **Page transitions**: `view-transitions` API or Framer Motion `AnimatePresence` for soft fade between routes.

### Don't do
- ❌ Parallax-the-whole-page (dated, motion-sick on mobile)
- ❌ Cursor trails or particle effects
- ❌ Auto-playing audio
- ❌ Splash screens / forced "click to enter"
- ❌ Animated emojis or any emojis (per Chase's rules — use lucide-react)

### Accessibility
- Every animation listens to `prefers-reduced-motion: reduce` and disables to a cross-fade.
- Every photo gets real alt text (Pastor Perez insists on serving the diverse community — accessibility honors that).

---

## 8a. Deployment Pipeline (locked in)

- **Git repo:** https://github.com/CardChase151/center
- **Local-first:** every change built and viewed on `localhost` before pushing.
- **Hosting:** Netlify (Chase's standard stack). Connect repo → auto-deploy on `main`.
- **Branch model:** work on `main` direct for MVP speed; switch to feature branches once Pastor Perez is reviewing.
- **Preview URL:** Netlify auto-generates `deploy-preview-N` URLs per PR once branching kicks in — perfect for sending Pastor a link to react to.
- **Custom domain:** Phase 2 — point `centerchurchne.com` DNS at Netlify when Pastor approves the build.
- **Env vars on Netlify:** `YOUTUBE_API_KEY`, `PLANNING_CENTER_*`, analytics token.

## 9. Phased Rollout

**Phase 1 — MVP (1–2 weeks)**
Static Next.js, all pages above, hard-coded content, Planning Center deep-links, YouTube auto-feed. Deploy to Netlify on a `centerchurch-preview.netlify.app` for Pastor Perez to walk through.

**Phase 2 — Polish + content**
Real photos from the church (request a fresh shoot if budget — what they have is good, more would be better), Lenis + GSAP layer, pastor records a 30-sec welcome video for the hero.

**Phase 3 — CMS + automation**
Add Sanity/Payload so the staff can update sermons, events, beliefs, and a basic blog. Wire the live-stream auto-detect. Add Plausible analytics dashboard for Pastor.

**Phase 4 — Future**
- Spanish translation toggle (the diverse community deserves this).
- Push notifications via OneSignal for "we're live" + new sermon (Chase's stack already supports this).
- App wrap via Capacitor if Pastor wants iOS/Android shells.

---

## 10. Open Questions for Pastor Perez

1. What time is Sunday service? (Not on the current site — stunning omission.)
2. Is there a second service or only one?
3. Any midweek small groups beyond the Tuesday prayer?
4. Photo permissions for the kids in the hero shots?
5. Spanish version — yes or wait?
6. Photos from Kenya for the Echariria page?
7. Any upcoming series/events to feature?
8. Newsletter — do they have one already, or starting fresh?

---

## 11. Asset Inventory (what we already have)

Located: `/Users/chasekellis/Downloads/Center Church/`

| File | Best use |
|---|---|
| `Center Logo.png` | Nav, footer, social share |
| `ourpastor.webp` (Boston skyline family) | Home hero candidate #1, About hero |
| `our pastor2.webp` | Pastor Perez bio |
| `associate pastor.webp` | Team page |
| `church admin.webp` | Team page |
| `Child Center.webp`, `child center2.webp`, `childs center ministry.webp` | /kids hero + cards |
| `worship ministry.webp` | /serve worship card, possible home hero |
| `youth ministry.webp` | /serve youth card |
| `audio.webp` | /serve audio/video card |
| `Online Tech Ministry.webp` | /serve online card, also a great cinematic hero (camera + cross + bokeh) |
| `hospitality.webp` | /serve hospitality, /visit "what to expect" |
| `All ministry.webp` | About story section, missions |
| `what to expect.webp` | /visit hero |
| `about1/2/3.webp` | /about scroll story |
| `map arrows.webp` | /visit parking section |
| `Zoom Church Blur.webp` | Maybe footer "online community" tile |

---

## 12. TL;DR

Build a **Next.js + Tailwind + Framer/GSAP** site that treats the Center Church wordmark as the design DNA. **Editorial serif + clean grotesk, warm earth palette pulled from their photos, full-bleed cinematic photography, three tiers of restrained motion.** Eight pages, mobile-first, integrates (not replaces) their Planning Center + YouTube + Online.Church stack. Ship a static MVP in 1–2 weeks, layer in CMS later. The site Pastor Perez deserves to send people to.
