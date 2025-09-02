// AnnounceCaro.tsx
import React, { useEffect, useRef, useState } from "react";

export type AnnounceCaroProps = {
  slides: string[]; // image URLs
  intervalMs?: number; // autoplay interval (default 5000)
  swipeThresholdPx?: number; // drag distance to count as swipe (default 40)
  pauseOnHover?: boolean; // pause autoplay on hover (default true)
  showArrows?: boolean; // show prev/next buttons (default true)
  showDots?: boolean; // show pagination dots (default true)
  className?: string; // extra classes for the outer carousel
  altBuilder?: (index: number) => string; // custom alt text generator
};

const AnnounceCaro: React.FC<AnnounceCaroProps> = ({
  slides,
  intervalMs = 5000,
  swipeThresholdPx = 40,
  pauseOnHover = true,
  showArrows = true,
  showDots = true,
  className = "",
  altBuilder,
}) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // touch state (refs to avoid re-renders during gesture)
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const isDragging = useRef(false);

  // autoplay
  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, slides.length, intervalMs]);

  const goNext = () => setCurrent((p) => (p + 1) % slides.length);
  const goPrev = () =>
    setCurrent((p) => (p - 1 + slides.length) % slides.length);

  // basic keyboard a11y (left/right)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // touch handlers
  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
    isDragging.current = true;
    setPaused(true);
  };

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (
      !isDragging.current ||
      startX.current === null ||
      startY.current === null
    )
      return;
    const t = e.touches[0];
    const dx = t.clientX - startX.current;
    const dy = t.clientY - startY.current;

    // ignore if primarily vertical to allow page scroll
    if (Math.abs(dy) > Math.abs(dx)) return;

   // if (Math.abs(dx) > 5) e.preventDefault(); // prevent rubber-banding while swiping horizontally
  };

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (
      !isDragging.current ||
      startX.current === null ||
      startY.current === null
    ) {
      setPaused(false);
      return;
    }
    const t = e.changedTouches[0];
    const dx = t.clientX - startX.current;
    const dy = t.clientY - startY.current;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > swipeThresholdPx) {
      if (dx < 0) goNext(); // swipe left
      else goPrev(); // swipe right
    }

    startX.current = null;
    startY.current = null;
    isDragging.current = false;
    setPaused(false);
  };

  const onMouseEnter = pauseOnHover ? () => setPaused(true) : undefined;
  const onMouseLeave = pauseOnHover ? () => setPaused(false) : undefined;

  return (
    <div className="select-none">
      <div
        className={[
          "carousel w-full h-48 sm:h-64 md:h-80 lg:h-[500px] overflow-hidden rounded-2xl shadow",
          className,
        ].join(" ")}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-label="Announcement carousel"
      >
        {slides.map((src, i) => (
          <div
            key={i}
            className={`carousel-item w-full relative ${
              i === current ? "block" : "hidden"
            }`}
          >
            <img
              src={src}
              alt={altBuilder ? altBuilder(i) : `Slide ${i + 1}`}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {showArrows && slides.length > 1 && (
          <>
            <button
              className="btn btn-circle btn-ghost absolute left-2 top-1/2 -translate-y-1/2"
              onClick={goPrev}
              aria-label="Previous slide"
              type="button"
            >
              ❮
            </button>
            <button
              className="btn btn-circle btn-ghost absolute right-2 top-1/2 -translate-y-1/2"
              onClick={goNext}
              aria-label="Next slide"
              type="button"
            >
              ❯
            </button>
          </>
        )}

        {showDots && slides.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-white" : "w-2 bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                type="button"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnounceCaro;
