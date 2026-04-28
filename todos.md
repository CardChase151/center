# Center Church — Todos

## Current State of the Site

**Live at:** https://center-church-ne.netlify.app
**Repo:** https://github.com/CardChase151/center
**Stack:** Vite + React 18 + JavaScript, Tailwind, Framer Motion, Lenis smooth scroll, Lucide icons, React Router v6
**Hosting:** Netlify (App Catalyst team)
**Auto-deploy:** Manual deploy via CLI for now. Connect GitHub repo in Netlify dashboard to enable push-to-deploy.

**Pages built (12):**
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
- `/pray` — written prayer of covering + blessing, intro, request CTA
- `/login` — Coming Soon screen with preview of account features
- `/*` 404 fallback

**Brand DNA:** ink near-black + bone cream + clay terracotta + gold accent. Fraunces serif display + Inter body. Lots of full-bleed photography. Logo-DNA-driven minimal layout.

**Integrations:**
- Planning Center (giving, prayer, volunteer signup) — deep-linked, not rebuilt
- YouTube `@centerchurchne` (sermon archive embed)
- Online.Church (live stream)
- Auto-detected "LIVE" pulsing badge on the nav, Sundays 10am–12pm

**Share + SEO:**
- `og-image.png` (1200x630) for social previews — logo + tagline on dark brand bg
- 32×32 favicon + 180×180 apple-touch-icon (both regenerable via `npm run og`)
- Full Open Graph + Twitter Card meta in `index.html`
- Schema.org `Church` structured data with NAP info for local SEO

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

**Important — when the domain flips, update absolute URLs in:**
- `index.html` — every `og:url`, `og:image`, `og:image:secure_url`, `twitter:image` and the schema.org JSON-LD `url` / `logo` / `image` fields currently point to `https://center-church-ne.netlify.app/`. Change to `https://centerchurchne.com/`.
- `src/lib/site.js` — sanity-check anything that references the netlify subdomain.
- After updating, force-refresh OG cache via:
  - Facebook: https://developers.facebook.com/tools/debug/
  - LinkedIn: https://www.linkedin.com/post-inspector/
  - X / Twitter: https://cards-dev.twitter.com/validator
- Submit the new domain to Google Search Console + verify via DNS TXT.
- Add a 301 redirect rule from `center-church-ne.netlify.app` → `centerchurchne.com` so any prior shares still land correctly.

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

### Three States: Approve, Hold, Decline

Each draft has one of three states. Pastor switches between them with a single click in the portal.

| State | What it means | Behavior |
|---|---|---|
| **Pending (default)** | Untouched draft, auto-approved | Auto-publishes ~48 hrs after creation (Wednesday morning) unless flipped to Hold or Decline |
| **Held** | "Not ready, come back later" | Sits in the queue indefinitely. No publish, no email. Pastor can flip back to Pending → publishes immediately |
| **Declined** | "This one's not going out — sermon didn't go well, or off-message" | Permanently skipped. Hidden from active queue (still archived in Supabase for record). No publish, no email, ever |

### Common workflows
- **Normal week:** ignore the portal entirely → posts go out Wednesday automatically
- **Need more time:** flip to Hold → comes back to it later, flips to Pending → publishes within minutes
- **Skip this week:** flip to Decline → done, moves on
- **Backed up:** 4 weeks missed, comes through and triages — Approve some, Decline others, Hold the ones still being edited. Approved ones publish chronologically with ~5-min spacing. Routine stays intact.

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

---

## TODO 6 — Member Account System (the /login Coming Soon promise)

The `/login` page currently shows a Coming Soon screen advertising four capabilities. Here's what shipping each one looks like.

### Concept
A member can sign up with an email, log in, and use the site as a personal companion to their faith life — saving sermon notes from Pastor Perez's preaching, bookmarking favorite scripture verses, receiving and tracking daily devotionals, and keeping a private prayer journal. Everything per-user, private by default, exportable.

### Auth Foundation (build first — everything else depends on it)
- **Supabase Auth** — magic-link primary flow, optional email/password
- Pages to build: real `/login` (replaces Coming Soon), `/signup`, `/forgot-password`, `/reset-password`, `/account` (profile + settings)
- `AuthGuard` wrapper component for any `/account/*` route
- Profile fields: display name, email, avatar (Supabase Storage), notification prefs
- Account export + delete (GDPR-friendly)
- Row-Level Security (RLS) policies on every user-data table — user can only ever see/edit their own rows

### Feature 1 — Saved Sermon Notes
- Bookmark button on every `/sermons/[slug]` page → adds to user's saved list
- Inline highlighter: select any paragraph → save as a personal note attached to that sermon
- Optional timestamp linking back to the YouTube video moment
- `/account/notes` — list of all saved sermons + notes, search + filter
- Tables: `bookmarked_sermons` (user_id, sermon_id, created_at), `sermon_notes` (id, user_id, sermon_id, content, position_seconds, created_at)
- **Depends on TODO 3 shipping first** so there are sermons to save

### Feature 2 — Favorite Verses
- Verse-saver UI accessible anywhere a verse appears on the site (sermons, devotionals, beliefs page)
- Manual entry too (paste any reference, fetches text)
- Bible text source: ESV API (free for non-commercial) or store our own copy of selected translations
- Per-verse: optional personal note + tags (e.g. "anxiety", "promises", "marriage")
- `/account/verses` — list view with tag filter and search
- Tables: `favorite_verses` (id, user_id, reference, version, text_snapshot, note, created_at), `verse_tags` (verse_id, tag)

### Feature 3 — Daily Devotionals
- Pastor (or AI-drafted with human review) publishes a short daily devotional (scripture + 100–200 word reflection)
- Logged-in members get the day's devotional on their `/account` dashboard
- Mark-as-read tracking; calendar streak indicator (gentle, not gamified)
- Email digest option (sent each morning to opted-in members)
- Archive of all past devotionals at `/account/devotionals` and publicly indexable for SEO at `/devotionals/[slug]`
- Tables: `devotionals` (id, slug, title, scripture_ref, body, published_at), `devotional_reads` (user_id, devotional_id, read_at)
- Admin authoring UI lives in the same `/admin` dashboard built for TODO 3

### Feature 4 — Personal Prayer Journal
- Private place to write down what you're praying for, dated entries
- Status field per entry: Praying / Answered / Released
- "Answered prayers" view — celebration of fulfilled requests
- Optional reminder ping (push or email) to revisit prayers weekly
- Optional toggle per entry: "share with pastor" — sends just that entry as a DM-style note to the pastor inbox (separate from public prayer requests on `/contact`)
- Tables: `prayer_journal` (id, user_id, title, body, status, scripture_ref optional, created_at, answered_at)

### Build Order
1. Supabase Auth + `/login`, `/signup`, `/account` profile shell + RLS scaffolding
2. Saved sermon notes (after TODO 3 ships and there are real sermons)
3. Favorite verses (with ESV API integration)
4. Daily devotionals (admin authoring + member-facing dashboard + email digest)
5. Prayer journal (most personal, build last so we get auth/RLS patterns right first)

### Tech Stack Reuse
- All Supabase (Chase's stack) — Auth + Database + Storage + Edge Functions
- Resend for transactional + digest email
- React Router for `/account/*` nested routes
- Same React components — just gated behind AuthGuard

### Open Questions for Chase Before Building
- Magic link only, or also email/password? (Magic link is simpler + safer.)
- Bible API: ESV (best translation, free with attribution for non-commercial) or NIV (commercial license required)?
- Devotional content — pastor writes himself, AI-drafts with review, or some mix?
- Prayer journal "share with pastor" — yes or hold? (Adds inbox-management work for Pastor Perez.)
- Free for everyone, or potentially gated for members who give? (Most churches default fully free — recommend that.)
- Mobile push notifications — Capacitor wrap later, or web push via OneSignal for now?

---

## TODO 7 — Admin Portal + Staff Accounts

The single backend home for everything in TODOs 8–11. Built once, panels added as we go.

### Foundation
- `/admin` route, gated by Supabase Auth + role check
- Roles: `pastor`, `admin`, `staff`, `member` (default)
- Sidebar nav linking to each admin panel (sermons, calendar, banner, push, resources, team)
- Activity log table — every admin action recorded for accountability

### Staff Accounts
- `/admin/team` — pastor or admin can invite new staff by email, assign role, revoke access
- Roles control which panels each person can see and use
- Lets Pastor Perez delegate (e.g. an admin handles calendar, the worship lead handles push, etc.)

---

## TODO 8 — Public Events Calendar

Visible to everyone (visitors and members). Admin-managed.

### Public side
- `/calendar` — month, week, and list views
- Mobile-friendly
- Click event → detail with description, location, image, optional RSVP link
- Filter by category: Service, Youth, Outreach, Special

### Admin side
- `/admin/calendar` — add, edit, delete, recur
- Recurring events (Sunday service, Tuesday prayer, etc.)
- Featured events flagged visually (Christmas Eve, Easter, summer kickoff)

### Tech
- Supabase `events` table: title, description, image, start/end, category, is_featured, recurrence_rule
- iCal export per event ("add to my calendar")

---

## TODO 9 — Editable Home Banner

A toggleable promo strip near the top of the homepage. Off by default.

### Admin side
- `/admin/banner` — toggle on/off, edit headline + sub + CTA link, preview
- Optional auto-disable date

### Public side
- When on, banner sits above the hero, dark with gold accent, dismissible per visitor

---

## TODO 10 — Push Notification System (OneSignal)

OneSignal-powered. Used by both the future mobile app and (optionally) browser web push.

### Three modes
- **One-off:** type message, send now
- **Scheduled:** pick a future date/time, fires automatically
- **Routine templates:** pre-built messages (Sunday service reminder, midweek prayer) — one tap to send

### Campaigns (the bigger feature)
- Admin creates a campaign with a name + end date (e.g. "Christmas Buildup", ends Dec 25)
- System asks how many notifications, then prompts for title + body for each
- Admin sets the spacing (one per day, or custom dates)
- Hit Go — entire schedule queues up
- Any individual notification can be edited or canceled before it fires

### Tech
- OneSignal SDK for delivery
- Supabase tables: `notifications`, `campaigns`
- Edge function or cron fires scheduled sends on time
- Audience segments: all, app-only, web-only, members-only

---

## TODO 11 — Resource Library (Devotionals, PDFs, Word Docs)

Admin uploads downloadable materials. Members browse and read or download.

### Admin side
- `/admin/resources` — upload PDFs, Word docs, or write devotionals (markdown editor)
- Add title, description, category, optional cover image
- Toggle published / draft

### Member side
- `/library` (web) and a matching screen in the app
- Searchable, filterable list with cover thumbs
- Click → reader view (rendered devotional or downloadable file)
- Logged-in members can favorite resources (ties into TODO 6)

### Tech
- Supabase Storage for files
- `resources` table for metadata
- PDF text extraction for searchability — optional later

---

## TODO 12 — Mobile App (separate UI, shared backend)

Native iOS + Android apps with their own UI. Not a webview wrap.

### Scope
- Capacitor wrap of a separate React build
- App-first navigation (bottom tab bar, native gestures)
- App-only emphasis: sermon player, push, prayer journal, daily devotional, give
- Web stays focused on visitors and seekers; app stays focused on the church family

### Tech
- New `/app` folder or sibling repo with separate Vite build
- Same Supabase URL + keys as the website (shared data)
- OneSignal SDK for push
- App Store + Google Play submission via fastlane (Chase's existing pipeline)

---

## TODO 13 — Future: Direct Stripe Giving (replaces Planning Center)

Eventual replacement for the Planning Center deep-link.

### Why later
- Planning Center already handles taxes, receipts, recurring billing for nonprofits
- Going direct via Stripe means we own the UX but inherit tax-receipt + 501(c)(3) compliance work
- Save until the church has bandwidth and there's a clear UX gain

### When we do it
- Stripe Checkout (recurring + one-time)
- Auto-issue tax receipt emails
- Year-end giving statements
- Migrate or keep export of existing Planning Center records
