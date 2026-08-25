import { useEffect, useState } from "react";

export default function PageNav({ sections }) {
  const [active, setActive] = useState(sections[0]?.id);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    sections.forEach((s) => { const el = document.getElementById(s.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [sections]);
  const activeIndex = Math.max(0, sections.findIndex((s) => s.id === active));
  const jumpTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { document.querySelector(`[data-mobile-nav-id="${active}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" }); }, [active]);
  return <>
    <nav aria-label="Scrapbook chapters" className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      <div className="absolute left-1/2 top-1.5 bottom-1.5 w-px -translate-x-1/2 bg-ink/15" />
      {sections.map((s, i) => <button key={s.id} onClick={() => jumpTo(s.id)} title={s.tabLabel} aria-label={s.tabLabel} className={`relative z-10 h-3 w-3 rounded-full border transition-all ${active === s.id ? "scale-125 bg-rust border-rust" : "bg-paper/70 border-ink/30 hover:border-rust"}`}><span className="sr-only">{i+1}. {s.tabLabel}</span></button>)}
      <span className="mt-1 font-type text-[8px] text-ink/35 [writing-mode:vertical-rl]">{String(activeIndex + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}</span>
    </nav>
    <nav aria-label="Scrapbook chapters on mobile" className="fixed inset-x-0 bottom-0 z-40 flex gap-2 overflow-x-auto border-t border-paper/20 bg-kraft-dark/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md md:hidden scrollbar-hide">
      {sections.map((s) => <button key={s.id} data-mobile-nav-id={s.id} onClick={() => jumpTo(s.id)} aria-current={active === s.id ? "step" : undefined} className={`flex-shrink-0 border px-3 py-2 font-type text-[9px] uppercase tracking-widest transition-colors ${active === s.id ? "border-gold bg-gold text-ink" : "border-paper/30 text-paper/70"}`}>{s.tabLabel}</button>)}
    </nav>
  </>;
}
