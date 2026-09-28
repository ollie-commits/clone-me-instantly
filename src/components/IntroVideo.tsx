import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Intro video with sound toggle + native controls (pause/play).
 * Browsers only allow autoplay when muted, so it starts silent and
 * the viewer taps to turn the narration on.
 */
export function IntroVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

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
        muted
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
        {muted ? "Tap for sound" : "Sound on"}
      </button>
    </div>
  );
}
