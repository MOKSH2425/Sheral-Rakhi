import { useEffect, useState } from "react";

export default function PageNav({ sections }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const activeIndex = Math.max(
    0,
    sections.findIndex((section) => section.id === active),
  );
  const progress =
    sections.length > 1 ? activeIndex / (sections.length - 1) : 1;

  useEffect(() => {
    document
      .querySelector(`[data-mobile-nav-id="${active}"]`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
  }, [active]);

  const jumpTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        aria-label="Scrapbook chapters"
        className="hidden md:flex flex-col gap-2 fixed right-3 top-1/2 -translate-y-1/2 z-40"
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1.5 bottom-1.5 w-px -translate-x-1/2 bg-paper/30"
        >
          <div
            className="absolute inset-x-0 top-0 origin-top bg-gold transition-transform duration-700"
            style={{ height: "100%", transform: `scaleY(${progress})` }}
          />
        </div>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => jumpTo(s.id)}
            aria-label={s.tabLabel}
            title={s.tabLabel}
            className={`w-3 h-3 rounded-full border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-kraft-dark ${
              active === s.id
                ? "bg-rust border-rust scale-125"
                : "bg-transparent border-paper/50 hover:border-rust"
            }`}
          />
        ))}
      </nav>

      <nav
        aria-label="Scrapbook chapters on mobile"
        className="fixed inset-x-0 bottom-0 z-40 flex gap-2 overflow-x-auto border-t border-paper/20 bg-kraft-dark/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-sm md:hidden scrollbar-hide"
      >
        {sections.map((s) => (
          <button
            key={s.id}
            data-mobile-nav-id={s.id}
            onClick={() => jumpTo(s.id)}
            aria-label={`Go to ${s.tabLabel}`}
            aria-current={active === s.id ? "step" : undefined}
            className={`flex-shrink-0 border px-3 py-2 font-type text-[10px] uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              active === s.id
                ? "border-gold bg-gold text-ink"
                : "border-paper/30 text-paper/70 hover:border-paper hover:text-paper"
            }`}
          >
            {s.tabLabel}
          </button>
        ))}
      </nav>
    </>
  );
}
