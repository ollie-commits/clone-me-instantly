import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Intro video that tries to autoplay WITH sound. If the browser blocks
 * unmuted autoplay (common on mobile), it falls back to muted and turns
 * the sound on at the visitor's very first tap anywhere on the page.
 * The "Tap for sound" button remains as a manual toggle.
 */
export function IntroVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to play with sound first.
    video.play().catch(() => {
      // Browser refused unmuted autoplay: restart muted, then unmute on
      // the visitor's first interaction anywhere on the page.
      video.muted = true;
      setMuted(true);
      video.play().catch(() => {
        // Even muted autoplay was blocked; the viewer can press play.
      });

      const unmuteOnFirstTouch = () => {
        video.muted = false;
        setMuted(false);
        video.play().catch(() => {});
      };
      window.addEventListener("pointerdown", unmuteOnFirstTouch, {
        once: true,
      });
      window.addEventListener("keydown", unmuteOnFirstTouch, { once: true });
    });
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <video
        ref={videoRef}
        src={src}
        className="w-full rounded-[1.75rem] border border-border/70 shadow-[0_28px_70px_-32px_rgba(20,28,11,0.5)]"
        autoPlay
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={label}
      />
      <button
        type="button"
        onClick={toggleSound}
        className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-ink/80 px-3.5 py-2 text-xs font-semibold text-card shadow-lg backdrop-blur-sm transition-transform active:scale-95"
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        {muted ? "Tap for sound" : "Tap to mute"}
      </button>
    </div>
  );
}
