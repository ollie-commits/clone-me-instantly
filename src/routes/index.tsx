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
  handle: "sofiamariexplores",
  firstName: "Sofia",
  followers: "38.2K",
  nicheSummary: "Solo female travel & budget backpacking tips for Gen Z women",
  toneNotes: "warm, direct, funny",
  headline: "Sofia, your followers ask you the same travel questions every week.",
  subheadline:
    "What if your AI could answer them for you — in your own voice — while you sleep?",
  sampleQAs: [
    {
      q: "Is Southeast Asia actually safe solo?",
      a: "Yes, if you're smart about it — I've done 8 countries alone and never had a real scare. Stick to well-lit areas at night and trust your gut.",
    },
    {
      q: "How do you afford to travel so much?",
      a: "Budget doesn't mean miserable. I do $30/day in most of SEA — hostels, street food, and I never book activities through hotels.",
    },
    {
      q: "Best backpack for a 3-month trip?",
      a: "40L max. If it doesn't fit in 40L you're overpacking, I promise.",
    },
    {
      q: "How do you meet people while traveling solo?",
      a: "Hostels with a common area, always. Book free walking tours your first day in a new city — instant group of people to grab dinner with.",
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
    <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-[13px] text-muted-foreground">
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
        <h1 className="mt-4 font-display text-4xl font-medium leading-[1.12] tracking-tight text-balance sm:text-[3.4rem]">
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
        <h2 className="mx-auto mt-3 max-w-md text-center font-display text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
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
        className="mt-20 scroll-mt-8 rounded-[2.5rem] bg-accent-soft px-6 py-12 sm:mt-28 sm:px-12 sm:py-16"
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          How Dopply works
        </p>
        <h2 className="mx-auto mt-3 max-w-sm text-center font-display text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
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
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-card font-display text-sm font-semibold text-accent">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold">{step.title}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-md text-center font-display text-xl italic leading-relaxed text-foreground/80 sm:text-[1.35rem]">
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
