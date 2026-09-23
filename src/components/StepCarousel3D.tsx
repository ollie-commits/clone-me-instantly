import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Step = { image: string; kicker: string; title: string; body: string };

export function StepCarousel3D({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);
  const n = steps.length;
  const go = (i: number) => setActive(Math.max(0, Math.min(n - 1, i)));

  const onStart = (x: number) => (startX.current = x);
  const onEnd = (x: number) => {
    if (startX.current === null) return;
    const dx = x - startX.current;
    if (Math.abs(dx) > 35) go(active + (dx < 0 ? 1 : -1));
    startX.current = null;
  };

  return (
    <div className="mt-6 select-none">
      <div
        className="relative mx-auto h-[23rem] w-full overflow-hidden"
        style={{ perspective: "1100px" }}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => onStart(e.clientX)}
        onMouseUp={(e) => onEnd(e.clientX)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(active + 1);
          if (e.key === "ArrowLeft") go(active - 1);
        }}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="How Dopply works"
      >
        <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {steps.map((step, i) => {
            const off = i - active;
            const abs = Math.abs(off);
            return (
              <article
                key={i}
                onClick={() => off !== 0 && go(i)}
                aria-hidden={off !== 0}
                className="absolute left-1/2 top-2 w-[68%] max-w-[17rem] rounded-[1.75rem] border border-ink-foreground/15 bg-ink p-4 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)] transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(-50%) translateX(${off * 62}%) translateZ(${-abs * 140}px) rotateY(${off * -38}deg)`,
                  opacity: abs > 2 ? 0 : 1 - abs * 0.35,
                  zIndex: 10 - abs,
                  cursor: off === 0 ? "grab" : "pointer",
                }}
              >
                <div className="flex h-28 items-center justify-center rounded-2xl bg-ink-foreground/[0.08] p-3">
                  <img src={step.image} alt="" draggable={false} className="max-h-full w-auto object-contain" />
                </div>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-soft">
                  {step.kicker}
                </p>
                <p className="mt-1.5 font-display text-base font-bold leading-snug text-ink-foreground">
                  {step.title}
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-foreground/70">{step.body}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(active - 1)}
          disabled={active === 0}
          aria-label="Previous step"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/20 bg-ink-foreground/10 text-ink-foreground transition disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to step ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-accent-soft" : "w-2 bg-ink-foreground/30"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(active + 1)}
          disabled={active === n - 1}
          aria-label="Next step"
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition disabled:opacity-30 ${active === 0 ? "swipe-nudge" : ""}`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
