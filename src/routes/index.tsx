import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Sparkles, Users, MessageCircle, AtSign } from "lucide-react";

/* ==================================================================
   CREATOR DATA — swap block.
   Everything between DATA-START / DATA-END is replaced per creator
   by the outreach script. The photo lives at public/images/creator.jpg
   (swap the file itself; no code change needed).
   ================================================================== */
// DATA-START
const creator = {
  handle: "sofiahomes",
  firstName: "Sofia",
  followers: "38.2K",
  nicheSummary: "First-time buyer tips & no-BS real estate advice",
  toneNotes: "warm, direct, funny",
  headline: "Sofia, your followers ask you the same real estate questions every week.",
  subheadline:
    "What if your AI could answer them for you — in your own voice — while you sleep?",
  sampleQAs: [
    {
      q: "Is now a good time to buy, or should I keep renting?",
      a: "Nobody can time the market — but you can time your life. If you're staying 5+ years and the monthly cost beats your rent, buy. Otherwise rent and invest the difference.",
    },
    {
      q: "How much do I actually need saved for a first home?",
      a: "3.5–5% down gets you in most markets — but budget another 2–4% for closing costs. If you don't have that plus a 6-month cushion yet, wait.",
    },
    {
      q: "Should I buy a rental property or just invest in index funds?",
      a: "Only buy a rental if you want a second job. Index funds win for 95% of people — real estate only wins when you get a below-market deal.",
    },
    {
      q: "How do you spot a neighborhood that's about to take off?",
      a: "Follow the coffee shops and the cranes. New cafés, a grocery anchor, and building permits run 2–3 years ahead of the headlines.",
    },
  ],
  bodyCopy:
    "Your audience already trusts your advice — Dopply turns that into something they can access any time, not just when you post.",
};
// DATA-END

const CREATOR_PHOTO = "/images/creator.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${creator.firstName} — your AI, on WhatsApp · Dopply`,
      },
      {
        name: "description",
        content: creator.subheadline,
      },
      {
        property: "og:title",
        content: `${creator.firstName} — your AI, on WhatsApp · Dopply`,
      },
      {
        property: "og:description",
        content: creator.subheadline,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* Accent the creator's name when the headline opens with it. */
function Headline({ text, name }: { text: string; name: string }) {
  const startsWithName = text.toLowerCase().startsWith(name.toLowerCase());
  if (!startsWithName) return <>{text}</>;
  const head = text.slice(0, name.length);
  const rest = text.slice(name.length);
  const punct = rest.match(/^[,.!]+/)?.[0] ?? "";
  return (
    <>
      <span className="text-accent">{head}</span>
      {punct && <span className="text-accent">{punct}</span>}
      {rest.slice(punct.length)}
    </>
  );
}

function Pill({
  icon: Icon,
  children,
}: {
  icon: typeof MapPin;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-[13px] text-foreground/90">
      <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
      {children}
    </span>
  );
}

function Index() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-5 pt-14 sm:pt-20">
      {/* ── Hero: opens with the creator, not Dopply ─────────────────── */}
      <header className="text-center">
        <img
          src={CREATOR_PHOTO}
          alt={`@${creator.handle}`}
          width={96}
          height={96}
          className="mx-auto h-24 w-24 rounded-3xl object-cover shadow-[0_16px_40px_-16px_var(--accent)] ring-1 ring-black/5"
        />
        <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <AtSign className="h-3.5 w-3.5" />
          {creator.handle}
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-balance sm:text-[3.4rem]">
          <Headline text={creator.headline} name={creator.firstName} />
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-balance">
          {creator.subheadline}
        </p>
        <a
          href="#how-it-works"
          className="mt-9 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-[15px] font-semibold text-accent-foreground shadow-[0_14px_32px_-12px_var(--accent)] transition hover:opacity-90 active:scale-[0.98]"
        >
          See how this works for you
        </a>
      </header>

      {/* ── The centerpiece: sample Q&A as a chat thread ─────────────── */}
      <section className="mt-20 sm:mt-24">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Your AI, already trained
        </p>
        <h2 className="mx-auto mt-3 max-w-md text-center font-display text-2xl font-bold leading-snug tracking-tight text-balance sm:text-3xl">
          What fans already ask {creator.firstName} — answered by your AI.
        </h2>

        <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-[2rem] border bg-card shadow-[0_32px_80px_-32px_oklch(0.24_0.015_60/0.25)]">
          {/* chat header */}
          <div className="flex items-center gap-3 border-b px-5 py-3.5">
            <img
              src={CREATOR_PHOTO}
              alt=""
              width={36}
              height={36}
              loading="lazy"
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                {creator.firstName} <span className="text-muted-foreground">· AI</span>
              </p>
              <p className="text-xs text-muted-foreground">replies on WhatsApp</p>
            </div>
            <MessageCircle className="ml-auto h-4 w-4 text-muted-foreground" />
          </div>

          {/* messages */}
          <div className="space-y-3 px-4 py-6 sm:px-5">
            <p className="pb-1 text-center text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              Today
            </p>
            {creator.sampleQAs.map((qa, i) => (
              <div key={i} className="space-y-3">
                <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-4 py-3 text-[15px] leading-relaxed text-foreground">
                  {qa.q}
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-accent px-4 py-3 text-[15px] leading-relaxed text-accent-foreground">
                  {qa.a}
                </div>
              </div>
            ))}
            {/* typing indicator */}
            <div className="flex items-center gap-1.5 rounded-2xl rounded-br-md bg-accent px-4 py-3.5 w-fit ml-auto">
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-accent-foreground" />
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-accent-foreground" />
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-accent-foreground" />
            </div>
          </div>
        </div>

        {/* ── Social proof strip ─────────────────────────────────────── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <Pill icon={MapPin}>{creator.nicheSummary}</Pill>
          <Pill icon={Sparkles}>{creator.toneNotes}</Pill>
          <Pill icon={Users}>{creator.followers} followers</Pill>
        </div>
      </section>

      {/* ── How this works: Dopply's pitch, below the fold ───────────── */}
      <section
        id="how-it-works"
        className="mt-20 scroll-mt-8 rounded-[2.5rem] bg-ink px-6 py-12 text-ink-foreground sm:mt-28 sm:px-12 sm:py-16"
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
          How Dopply works
        </p>
        <h2 className="mx-auto mt-3 max-w-sm text-center font-display text-2xl font-bold leading-snug tracking-tight text-balance text-ink-foreground sm:text-3xl">
          Built on what you've already made.
        </h2>

        <ol className="mx-auto mt-10 max-w-md space-y-7">
          {[
            {
              title: "We train an AI on you",
              body: "Your posts, captions, and voice become the foundation — no scripts, no boilerplate answers.",
            },
            {
              title: "Fans chat with it on WhatsApp",
              body: "Any time of day, it replies in your tone — the same advice you'd give, the moment they ask.",
            },
            {
              title: "You earn from every conversation",
              body: "Completely hands-off. You keep creating; your AI keeps the conversation going.",
            },
          ].map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-foreground/20 bg-ink-foreground/10 font-display text-sm font-semibold text-accent-soft">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-ink-foreground">{step.title}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-foreground/70">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-md text-center font-display text-xl italic leading-relaxed text-ink-foreground/80 sm:text-[1.35rem]">
          “{creator.bodyCopy}”
        </p>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="mt-16 pb-12 text-center">
        <p className="text-xs text-muted-foreground">
          Powered by{" "}
          <span className="font-display text-sm font-semibold text-foreground">
            Dopply
          </span>
        </p>
      </footer>
    </main>
  );
}
