# Center Church — Todos

## Current State of the Site

**Live at:** https://center-church-ne.netlify.app
**Repo:** https://github.com/CardChase151/center
**Stack:** Vite + React 18 + JavaScript, Tailwind, Framer Motion, Lenis smooth scroll, Lucide icons, React Router v6
**Hosting:** Netlify (App Catalyst team)
**Auto-deploy:** Manual deploy via CLI for now. Connect GitHub repo in Netlify dashboard to enable push-to-deploy.

**Pages built (10):**
- `/` Home — full-bleed cinematic hero, mission, 7 values (4-3 grid), pastor quote, three pathways, Echariria spotlight
- `/about` — story, 7 expandable belief cards, pastor bio, team
- `/visit` (and `/im-new` redirect) — service time, address, what to expect, parking map, kids CTA
- `/kids` — 4-step check-in flow, photo strip, safety, volunteer CTA
- `/serve` — 6 ministry cards linking to Planning Center
- `/give` — Planning Center deep-link + "where it goes" tiles
- `/echariria` — long-form story, 300+ daily meals number, animated funding goal bars
- `/missions` — 3 partner cards (foster, Amirah, Echariria)
- `/watch` — embedded YouTube + sermon archive + live stream cards
- `/contact` — Netlify form + 3 contact tiles
- `/*` 404 fallback

**Brand DNA:** ink near-black + bone cream + clay terracotta + gold accent. Fraunces serif display + Inter body. Lots of full-bleed photography. Logo-DNA-driven minimal layout.

**Integrations:**
- Planning Center (giving, prayer, volunteer signup) — deep-linked, not rebuilt
- YouTube `@centerchurchne` (sermon archive embed)
- Online.Church (live stream)
- Auto-detected "LIVE" pulsing badge on the nav, Sundays 10am–12pm

---

## Open Questions for Pastor Perez

- What time is Sunday service exactly? (Currently hard-coded as 10:30 AM — verify.)
- Photo permissions for kids appearing in hero shots?
- Spanish translation — yes or wait?
- Photos from Kenya for the Echariria page?
- Newsletter — already have one, or starting fresh?

---

## TODO 1 — Connect Netlify auto-deploy from GitHub

In Netlify dashboard for the `center-church-ne` site, click **Link repository** → GitHub → CardChase151/center → main branch. After this, every push to main rebuilds and deploys automatically.

---

## TODO 2 — Custom Domain Cutover

Phase 2: point `centerchurchne.com` DNS at Netlify when Pastor Perez approves the build. Currently the live URL is the Netlify subdomain.

---

## TODO 3 — Sunday Notes Pipeline (Sermon → AI → Site → Email)

### Concept
Every Sunday, Pastor Perez preaches. Every Monday morning, an automated pipeline turns that sermon into a polished 1,500–3,000 word post. The post lives on the site (great for SEO and search-engine discoverability), gets emailed to subscribers, and stays evergreen as a searchable archive. Auto-handles 95% of the work; pastor stays in control of the 5% that needs his eye.

### High-Level Pipeline

```
Sunday — sermon preached, YouTube upload posted by online team
   │
   ▼
Monday morning (cron, 10am ET)
   │
   ├─ Fetch latest video from @centerchurchne YouTube channel
   ├─ Pull transcript (youtube-transcript npm package; Whisper fallback if quality poor)
   ├─ Claude API processes:
   │     - Cleans filler ("uh", repetition)
   │     - Structures for reading (H2 sections, scripture refs formatted properly)
   │     - 1500-3000 words preserving Pastor Perez's voice
   │     - Title, meta description, 2 pull quotes, closing takeaway
   ├─ Saves draft to Supabase with status: "pending"
   └─ Emails Pastor Perez + Chase: "New draft ready to review" with link to portal
       │
       ▼
   Pastor's Portal (admin only, simple password / Supabase auth)
       │
       ├─ Sees list of all drafts: [Date] [Title] [Status]
       ├─ Clicks one → opens editor:
       │     - Editable title, body (rich text or markdown)
       │     - Editable scripture refs, pull quotes
       │     - Toggle: "Ready to publish?"  [default: YES]
       │     - "Save changes" button (saves edits without publishing)
       └─ Two paths from here:
             ├─ Pastor doesn't touch anything → toggle stays YES → auto-publishes Wednesday morning
             ├─ Pastor edits + leaves toggle YES → publishes Wednesday with his edits
             ├─ Pastor flips toggle to NO → post is held indefinitely until he flips back
             └─ Pastor edits + flips toggle to YES manually before Wednesday → publishes immediately
       │
       ▼
On Publish:
   ├─ Status flips to "published"
   ├─ Triggers Netlify rebuild → post goes live at /sermons/[slug]
   ├─ Resend sends post to email subscribers (with unsubscribe link)
   └─ Optional: auto-post snippet to Instagram/Facebook
```

### Toggle Logic (the crucial part)

| Pastor's action | Result |
|---|---|
| Doesn't touch portal | Default toggle = YES → auto-publishes ~48 hrs after draft created (Wednesday morning) |
| Edits text only | Edits saved, toggle stays YES → publishes Wednesday with edits |
| Flips toggle to NO | Draft is held, never publishes, sits in portal indefinitely |
| Flips toggle back to YES later | Publishes immediately (within ~5 minutes) |
| Misses 4 weekends in a row | 4 drafts pile up in "pending" state. He comes through, edits all 4, flips each toggle to YES → all 4 publish chronologically with ~5 min spacing. Routine stays intact. |

### Why This Design Works
- **Zero-touch is the happy path.** Pastor ignores the system entirely → posts still go out. SEO + email engine keeps humming.
- **Pastor is always in control.** One click can hold any post indefinitely. No surprises.
- **Batch-friendly.** Vacation, sickness, busy season — drafts wait, no work is lost, he can come back and clear the queue with edits in one sitting.
- **Built-in editorial gate** for the first few months. Once he trusts the AI quality after 4-6 weeks, he can flip a global "auto-publish without review" flag if he wants.

### Tech Stack for the Pipeline

| Piece | Tool | Why |
|---|---|---|
| Cron scheduler | Netlify Scheduled Function or GitHub Actions | Free, simple |
| YouTube transcript | `youtube-transcript` npm package | Free, works on auto-captions |
| Transcript fallback | OpenAI Whisper API | $0.27/sermon, much better quality if needed |
| AI cleanup + structuring | Anthropic SDK, Claude Sonnet 4.6 with prompt caching | Best voice preservation, cheap (~$0.05/sermon) |
| Drafts database | Supabase | Chase's stack |
| Pastor portal | New `/admin` route in this same React app, Supabase auth | Same codebase, no separate deploy |
| Email send | Resend | Chase's stack |
| Subscriber list | Supabase table (`subscribers`) | Source of truth, exportable |
| Build trigger | Netlify build hook | One POST → rebuild + redeploy |

### Cost at Steady State (1 sermon/week)
- Claude API: ~$0.05/sermon
- Whisper (if used): ~$0.27/sermon
- Resend: free tier covers up to ~3000/month emails
- Everything else: free
- **Max ~$1.25/month**

### Pastor's Portal — Page Spec

`/admin/sermons` (login required)
- List view: Date | Title | Status (Pending / Published / Held) | Last edited
- Each row → click into edit view

`/admin/sermons/[id]`
- Title field
- Markdown editor for body
- Scripture references (chip list)
- Pull quotes (text fields)
- Featured image (defaults to YouTube thumbnail; uploader to override)
- Toggle: **"Ready to publish?"** [Yes/No, default Yes]
- Status badge (Pending / Held / Published)
- "Save" button (saves but doesn't change publish state)
- "Save & Hold" (saves + flips toggle to No)
- "Save & Publish Now" (saves + publishes immediately, regardless of timer)
- Preview button (renders post as it'll appear on the live site)

`/admin/subscribers`
- List of email subscribers, count, export CSV, manual add/remove

`/admin/settings`
- Auto-publish delay (default 48 hrs)
- Global "Skip review queue" toggle (off by default, lets him flip to fully auto later)
- Cron status / last successful run / errors

### Public Pages to Add

`/sermons` — index of all published Sunday Notes, paginated
`/sermons/[slug]` — individual post page with proper meta tags, schema.org markup for `Article`, scripture refs as `BibleVerse` schema if we want to be fancy, social share OG image
- Subscribe-to-newsletter inline CTA on every post
- Related sermons block at the bottom

### Build Order
1. Standalone test: paste a YouTube URL → run a Node script → get a draft markdown post back. Validates AI quality before any UI work.
2. Supabase schema for `sermons` + `subscribers`
3. `/sermons` and `/sermons/[slug]` public pages
4. `/admin/*` pastor portal (basic auth via Supabase)
5. Cron + automation (the actual Monday-morning pipeline)
6. Email send via Resend
7. Newsletter subscribe form on the public site

### Open Questions for Chase Before Building
- What's the auto-publish delay sweet spot? (Default 48hrs = Wednesday AM. Could be 24hrs / Tuesday, or 72hrs / Thursday.)
- Subscribers list: Supabase table or Resend Audiences?
- `/sermons` on the main site, or own subdomain `notes.centerchurchne.com`?
- Pastor login: Supabase email magic link, or just shared password for v1?
- Pastor Perez's permission + YouTube channel API key access — when can we get those?
- Should drafts older than X weeks auto-archive (mark as never-publish) so the queue doesn't grow forever?

---

## TODO 4 — "Honest Questions" SEO Series

The complementary content track to Sunday Notes. Monthly long-form essays answering common faith questions ("Why does God allow suffering?", "What does the Bible say about anxiety?", "Is Jesus real?"). Targets long-tail searches that bring seekers to the site. Lean on scholar voices Chase trusts: MacArthur, Munroe, Keller, Carson, Grudem, Sproul, Lloyd-Jones, Sinclair Ferguson.

Build after Sunday Notes is shipping reliably.

---

## TODO 5 — Daily Devotional Snippet (Optional)

Small rotating devotional on the homepage (~100 words, scripture + reflection). Builds returning-visitor habit. Could be hand-written by pastor weekly OR AI-drafted from a list of scripture passages with human review.

Lower priority. Build only if the email engine works and there's appetite for more touches.
