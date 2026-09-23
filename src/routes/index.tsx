import { createFileRoute } from "@tanstack/react-router";
import {
  AtSign,
  BatteryFull,
  CheckCheck,
  ChevronLeft,
  Phone,
  Signal,
  Video,
  Wifi,
} from "lucide-react";
import dopplyFunnelAsset from "../assets/dopply-funnel.png.asset.json";

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

/* QUESTION-START: swap these prompts with each creator's recurring questions. */
const AUDIENCE_QUESTIONS = [
  "Is now actually a good time to buy?",
  "How much deposit do I really need?",
  "Should I buy before I sell?",
  "Fixed rate or tracker mortgage?",
  "What should I look for at a viewing?",
  "How do I know if I'm overpaying?",
  "Is a new build worth it?",
  "What costs do first-time buyers forget?",
];

/* The two Q&As shown in the WhatsApp screenshot mock. Kept in the swap
   block so per-creator questions and replies can be replaced too. */
const WHATSAPP_CHAT = [
  {
    question: "Should I buy before I sell?",
    reply:
      "Selling first gives you certainty. Buying first only makes sense if you can comfortably carry both homes for a while.",
  },
  {
    question: "Fixed rate or tracker mortgage?",
    reply:
      "A fixed rate gives you predictable payments. A tracker may suit you if your budget can handle rates moving up.",
  },
];
/* QUESTION-END */

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
    <main className="mx-auto min-h-screen max-w-2xl px-7 pt-9 sm:px-10 sm:pt-14">
      {/* Gradient frame hugging the page edges */}
      <div aria-hidden className="page-frame pointer-events-none fixed inset-0 z-50" />
      {/* ── Hero: opens with the creator, not Dopply ─────────────────── */}
      <header className="text-center">
        <div className="relative mx-auto h-36 w-36 sm:h-48 sm:w-48">
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
            width={192}
            height={192}
            className="hero-portrait relative h-36 w-36 rounded-full object-cover shadow-[0_20px_50px_-20px_var(--accent)] ring-4 ring-card sm:h-48 sm:w-48"
          />
        </div>
        <p className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground">
          <AtSign className="h-3.5 w-3.5" />
          {creator.handle}
        </p>
        <h1 className="mt-3 font-display text-[1.9rem] font-bold leading-[1.12] tracking-[-0.02em] text-balance sm:text-[2.6rem]">
          <Headline text={creator.headline} name={creator.firstName} />
        </h1>
        <p className="mx-auto mt-4 max-w-md font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-foreground/80 text-balance sm:text-[1.35rem]">
          {creator.subheadline}
        </p>
      </header>

      {/* Question funnel: recurring audience questions become one AI twin. */}
      <section className="mt-12 text-center sm:mt-16">
        <div className="question-funnel relative mx-auto max-w-xl overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/55 px-3 pb-7 pt-5 sm:px-6 sm:pb-9">
          <div className="relative z-10 grid grid-cols-2 gap-2.5 sm:gap-3">
            {AUDIENCE_QUESTIONS.map((question, index) => (
              <p
                key={question}
                className={`question-bubble rounded-2xl bg-card px-3 py-2.5 text-left text-[11px] font-medium leading-snug text-card-foreground shadow-sm sm:text-xs ${
                  index % 3 === 1 ? "translate-y-2" : ""
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {question}
              </p>
            ))}
          </div>

          <div aria-hidden className="funnel-neck relative z-0 mx-auto mt-2 h-24 w-44 sm:h-28 sm:w-52" />

          <div className="relative z-10 -mt-5 flex flex-col items-center">
            <div className="relative flex h-36 w-full max-w-[18rem] items-center justify-center sm:h-44 sm:max-w-sm">
              <img
                src={dopplyFunnelAsset.url}
                alt="Dopply AI twin"
                loading="lazy"
                className="relative max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        <h2 className="mx-auto mt-7 max-w-md font-display text-[1.45rem] font-bold leading-tight text-balance sm:text-[1.8rem]">
          How do you answer all of these questions without burning out?
        </h2>

        <p className="mx-auto mt-4 max-w-xs font-display text-lg font-bold leading-snug text-foreground sm:text-xl">
          Your AI twin can reply to all of these.
        </p>

        {/* WhatsApp screenshot mock — colours are WhatsApp's own brand UI,
            intentionally not theme tokens. */}
        <div className="mx-auto mt-5 max-w-sm overflow-hidden rounded-[1.4rem] border border-border/80 text-left shadow-[0_28px_70px_-32px_rgba(20,28,11,0.5)]">
          {/* status bar */}
          <div className="flex items-center justify-between bg-[#f7f4ef] px-5 pb-1 pt-2 text-[11px] font-semibold text-[#1d1d1f]">
            <span>16:48</span>
            <span className="flex items-center gap-1">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <BatteryFull className="h-3.5 w-3.5" />
            </span>
          </div>
          {/* chat header with the creator's photo and name */}
          <div className="flex items-center gap-2.5 border-b border-[#e4ded3] bg-[#f7f4ef] px-3 pb-2.5">
            <ChevronLeft className="h-5 w-5 shrink-0 text-[#1d1d1f]" />
            <img
              src={CREATOR_PHOTO}
              alt={`@${creator.handle}`}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-[13px] font-semibold text-[#1d1d1f]">
                {creator.firstName}
              </p>
              <p className="text-[10px] text-[#667781]">online</p>
            </div>
            <Video className="h-[18px] w-[18px] shrink-0 text-[#1d1d1f]" />
            <Phone className="h-4 w-4 shrink-0 text-[#1d1d1f]" />
          </div>
          {/* chat body */}
          <div className="wa-wallpaper space-y-2 px-3 py-4">
            <p className="mx-auto w-fit rounded-md bg-white/85 px-2.5 py-0.5 text-[10px] font-medium text-[#54656f] shadow-sm">
              Today
            </p>
            {WHATSAPP_CHAT.map((pair, index) => (
              <div key={pair.question}>
                <div className="flex justify-start">
                  <div className="wa-bubble max-w-[82%] rounded-[10px] rounded-tl-[3px] bg-white px-2.5 pb-1 pt-1.5 shadow-sm">
                    <p className="text-[12.5px] leading-snug text-[#111b21]">
                      {pair.question}
                    </p>
                    <p className="mt-0.5 text-right text-[9px] text-[#667781]">
                      13:4{index + 1}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <div className="wa-bubble max-w-[82%] rounded-[10px] rounded-tr-[3px] bg-[#d9fdd3] px-2.5 pb-1 pt-1.5 shadow-sm">
                    <p className="text-[12.5px] leading-snug text-[#111b21]">
                      {pair.reply}
                    </p>
                    <p className="mt-0.5 flex items-center justify-end gap-1 text-[9px] text-[#667781]">
                      13:4{index + 1}
                      <CheckCheck className="h-3 w-3 text-[#53bdeb]" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How this works: Dopply's pitch ───────────────────────────── */}
      <section
        id="how-it-works"
        className="mt-11 scroll-mt-8 rounded-[2.5rem] bg-ink py-9 text-ink-foreground sm:mt-14 sm:py-12"
      >
        <div className="px-5 sm:px-10">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-soft">
            How Dopply works
          </p>
          <h2 className="mx-auto mt-2.5 max-w-sm text-center font-display text-xl font-bold leading-snug tracking-tight text-balance text-ink-foreground sm:text-2xl">
            Built on what you've already made.
          </h2>
          <p className="mt-2 text-center text-xs text-ink-foreground/50">
            Swipe through the steps
          </p>
        </div>

        {/* swipeable carousel */}
        <div className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 sm:px-10">
          {STEPS.map((step, i) => (
            <article
              key={i}
              className="w-[74%] shrink-0 snap-center rounded-[1.75rem] border border-ink-foreground/10 bg-ink-foreground/[0.06] p-4 sm:w-[44%]"
            >
              <div className="flex h-28 items-center justify-center rounded-2xl bg-ink-foreground/[0.06] p-3">
                <img
                  src={step.image}
                  alt=""
                  loading="lazy"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-soft">
                {step.kicker}
              </p>
              <p className="mt-1.5 font-display text-base font-bold leading-snug text-ink-foreground">
                {step.title}
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-foreground/70">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <a
          href="https://apps.apple.com/gb/app/dopply/id6775535561"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-9 block w-fit max-w-full rounded-2xl bg-accent px-7 py-3 text-center text-accent-foreground shadow-[0_18px_40px_-16px_var(--accent)] transition-transform hover:scale-[1.03]"
        >
          <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-foreground/75">
            Download on the
          </span>
          <span className="block font-display text-lg font-bold leading-tight">
            App Store
          </span>
        </a>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="mt-12 pb-10 text-center">
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
