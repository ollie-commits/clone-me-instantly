# Creator Connect (06)

Build a single landing page — one page, no routing, no backend, no Supabase — that pitches an Instagram creator on Dopply: a product that clones them into an AI persona their fans pay to chat with over WhatsApp. This page will be sent as a personalized link to individual creators as a cold-outreach tool, so it needs to feel like it was made specifically for the person opening it, not like a generic product ad.

Build it with placeholder/example data (below) so it renders something concrete to design against. I'll swap in real per-creator data afterward — don't wire up any backend, routing, or data-fetching, this is a static design.

Example data to design against

{
  "handle": "sofiamariexplores",
  "first_name": "Sofia",
  "followers": "38.2K",
  "niche_summary": "Solo female travel and budget backpacking tips for Gen Z women.",
  "tone_notes": "warm, direct, funny",
  "headline": "Sofia, your followers ask you the same travel questions every week.",
  "subheadline": "What if your AI could answer them for you — in your own voice — while you sleep?",
  "sample_qas": [
    { "q": "Is Southeast Asia actually safe solo?", "a": "Yes, if you're smart about it — I've done 8 countries alone and never had a real scare. Stick to well-lit areas at night and trust your gut." },
    { "q": "How do you afford to travel so much?", "a": "Budget doesn't mean miserable. I do $30/day in most of SEA — hostels, street food, and I never book activities through hotels." },
    { "q": "Best backpack for a 3-month trip?", "a": "40L max. If it doesn't fit in 40L you're overpacking, I promise." },
    { "q": "How do you meet people while traveling solo?", "a": "Hostels with a common area, always. Book free walking tours your first day in a new city — instant group of people to grab dinner with." }
  ],
  "body_copy": "Your audience already trusts your advice — Dopply turns that into something they can access any time, not just when you post."
}
Layout (in order)
Hero — full-width, opens with the creator, not Dopply.

Their photo (circular or rounded square, prominent)
@{handle} small, muted
{headline} as the large heading, {subheadline} below it
Primary CTA button below: "See how this works for you" (scrolls to section 3)
The centerpiece — sample Q&A as a chat thread. This is the most important section on the page. Render sample_qas styled like an actual WhatsApp/iMessage conversation: the fan's question as an incoming bubble (left, muted background), the creator's answer as an outgoing bubble (right, accent-colored background, white text) — written in their real voice, not generic copy. Label the top of this section something like "What fans already ask {first_name} — answered by their AI."

Social proof strip — a row of small badges/pills: {niche_summary} (or a short derived phrase from it), {tone_notes} as a "vibe" tag, and {followers} followers. Understated, not a big stats block.

"How this works" (below the fold) — this is where Dopply's own pitch lives, secondary to everything above it. 2–3 short paragraphs/steps: (1) we train an AI on your content and voice, (2) fans chat with it on WhatsApp, (3) you earn from every conversation, hands-off. Use {body_copy} as part of this section's copy.

Footer — minimal. Just a small "Powered by Dopply" wordmark/text, no logo-heavy branding. This page should read as "about {first_name}", not "an ad for Dopply."

Design requirements
Mobile-first. These links get opened almost entirely from inside WhatsApp/iMessage/Instagram DM on a phone. Design and test the mobile layout first, desktop second.
One CSS custom property for the accent color, e.g. --accent: #7c3aed; on :root or the page wrapper, used consistently for the CTA button, the outgoing chat bubbles, and the headline accent. I'll override this per creator later — pick a good default violet/indigo for now, but make sure literally every accent-colored element pulls from that one variable rather than a hardcoded hex.
Clean, modern, editorial-feeling — not corporate SaaS, not templated. Real typographic hierarchy. This is being sent to individual creators, so it should feel considered, not like a generic landing-page-builder output.
No dark patterns, no fake urgency/countdown timers — this is a genuine, confident pitch, not a hard sell.
Keep it to this one page/component. No auth, no forms beyond the CTA button (the button doesn't need to actually do anything yet).
Notes for later (don't build these now, just don't design against anything that conflicts)
The photo, handle, headline, subheadline, niche_summary, tone_notes, followers, sample_qas, and body_copy will all be swapped per-creator by a script outside Lovable — keep them as clearly identifiable, swappable text/image elements rather than baked into a graphic.
The final version will be exported and adapted into a plain static template (not deployed as a live Lovable/Supabase app) — so no dependency on Lovable-specific backend features.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://clone-me-instantly.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d0dbd8de-b479-4fb3-8251-54b48a0be951).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
