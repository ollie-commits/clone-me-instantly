import { createFileRoute } from "@tanstack/react-router";
import { AtSign } from "lucide-react";

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
  headline: "Sofia, your followers ask you questions every week.",
  subheadline:
    "We build AI twins that answer these questions for you in your exact tone of voice.",
};
// DATA-END

const CREATOR_PHOTO = "/images/creator.jpg";

const STEPS = [
  {
    image: "/images/step-train.png",
    kicker: "Step 1",
    title: "You train an AI on your content",
    body: "Your posts, captions, and voice become the foundation. Then we plug it into Instagram, TikTok, YouTube, and X, wherever your fans already find you.",
  },
  {
    image: "/images/step-start.png",
    kicker: "Step 2",
    title: "Fans chat with your AI on WhatsApp, Telegram, or a web interface",
    body: "Any time of day, it replies in your tone. The same advice you'd give, the moment they ask.",
  },
  {
    image: "/images/step-earn.png",
    kicker: "Step 3",
    title: "Charge a monthly subscription",
    body: "Fans pay a monthly price to access your AI. Predictable income, with no extra work on your side.",
  },
  {
    image: "/images/step-payout.png",
    kicker: "Step 4",
    title: "You get paid, hands off",
    body: "Earnings land automatically while you keep creating. Your audience has access to your knowledge 24/7.",
  },
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${creator.firstName}: your AI, on WhatsApp · Dopply`,
      },
      {
        name: "description",
        content: creator.subheadline,
      },
      {
        property: "og:title",
        content: `${creator.firstName}: your AI, on WhatsApp · Dopply`,
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

function Index() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-5 pt-12 sm:pt-20">
      {/* Gradient frame hugging the page edges */}
      <div aria-hidden className="page-frame pointer-events-none fixed inset-0 z-50" />
      {/* ── Hero: opens with the creator, not Dopply ─────────────────── */}
      <header className="text-center">
        <div className="relative mx-auto h-44 w-44 sm:h-56 sm:w-56">
          <span
            aria-hidden
            className="hero-glow absolute inset-0 rounded-full bg-accent blur-3xl"
          />
          <span
            aria-hidden
            className="hero-glow absolute -inset-3 rounded-full bg-accent/40 blur-2xl"
            style={{ animationDelay: "1.2s" }}
          />
          <img
            src={CREATOR_PHOTO}
            alt={`@${creator.handle}`}
            width={224}
            height={224}
            className="hero-portrait relative h-44 w-44 rounded-full object-cover shadow-[0_24px_60px_-20px_var(--accent)] ring-4 ring-card sm:h-56 sm:w-56"
          />
        </div>
        <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <AtSign className="h-3.5 w-3.5" />
          {creator.handle}
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-balance sm:text-[3.4rem]">
          <Headline text={creator.headline} name={creator.firstName} />
        </h1>
        <p className="mx-auto mt-6 max-w-lg font-display text-2xl font-semibold leading-snug tracking-[-0.01em] text-foreground/80 text-balance sm:text-[2rem]">
          {creator.subheadline}
        </p>
      </header>

      {/* ── The centerpiece: sample Q&A as a chat thread ─────────────── */}
      <section className="mt-16 sm:mt-20">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Your AI, already trained
        </p>
        <h2 className="mx-auto mt-3 max-w-md text-center font-display text-2xl font-bold leading-snug tracking-tight text-balance sm:text-3xl">
          What fans already ask {creator.firstName}, answered by your AI.
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

      </section>

      {/* ── How this works: Dopply's pitch, below the fold ───────────── */}
      <section
        id="how-it-works"
        className="mt-20 scroll-mt-8 rounded-[2.5rem] bg-ink py-12 text-ink-foreground sm:mt-28 sm:py-16"
      >
        <div className="px-6 sm:px-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
            How Dopply works
          </p>
          <h2 className="mx-auto mt-3 max-w-sm text-center font-display text-2xl font-bold leading-snug tracking-tight text-balance text-ink-foreground sm:text-3xl">
            Built on what you've already made.
          </h2>
          <p className="mt-3 text-center text-[13px] text-ink-foreground/50">
            Swipe through the steps
          </p>
        </div>

        {/* swipeable carousel */}
        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 sm:px-12">
          {STEPS.map((step, i) => (
            <article
              key={i}
              className="w-[78%] shrink-0 snap-center rounded-[1.75rem] border border-ink-foreground/10 bg-ink-foreground/[0.06] p-5 sm:w-[46%]"
            >
              <div className="flex h-36 items-center justify-center rounded-2xl bg-ink-foreground/[0.06] p-3">
                <img
                  src={step.image}
                  alt=""
                  loading="lazy"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-soft">
                {step.kicker}
              </p>
              <p className="mt-2 font-display text-lg font-bold leading-snug text-ink-foreground">
                {step.title}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-foreground/70">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <a
          href="https://apps.apple.com/gb/app/dopply/id6775535561"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-12 block w-fit max-w-full rounded-2xl bg-accent px-8 py-3.5 text-center text-accent-foreground shadow-[0_18px_40px_-16px_var(--accent)] transition-transform hover:scale-[1.03]"
        >
          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-foreground/75">
            Download on the
          </span>
          <span className="block font-display text-xl font-bold leading-tight">
            App Store
          </span>
        </a>
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
