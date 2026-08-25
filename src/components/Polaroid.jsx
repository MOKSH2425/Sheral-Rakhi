import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

const TAPE_COLORS = ["#C97148", "#4F6D63", "#C89B3C"];

export default function Polaroid({ src, caption, rotate = 0, size = "md", tapeIndex = 0 }) {
  const [flipped, setFlipped] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const tapeColor = TAPE_COLORS[tapeIndex % TAPE_COLORS.length];
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e) => e.key === "Escape" && setExpanded(false);
    document.addEventListener("keydown", onKey); document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [expanded]);
  const widths = { sm: "w-40 sm:w-48", md: "w-56 sm:w-72", lg: "w-64 sm:w-80" };
  return <motion.div className={`group relative ${widths[size]} select-none cursor-pointer`} style={{ rotate }} initial={{ opacity: 0, y: 30, rotate: rotate - 4 }} whileInView={{ opacity: 1, y: 0, rotate }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }} whileHover={{ scale: 1.025, rotate: 0, zIndex: 20 }}>
    <div className="washi absolute -top-3 left-1/2 -translate-x-1/2 rotate-2" style={{ backgroundColor: tapeColor, opacity: 0.82 }} />
    <div style={{ perspective: 1200 }}>
      <motion.div className="relative w-full" style={{ transformStyle: "preserve-3d" }} animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.6 }}>
        <div className="polaroid" style={{ backfaceVisibility: "hidden" }}><img src={src} alt={caption} className="w-full aspect-[4/5] object-cover" style={{ filter: "sepia(0.12) saturate(0.95) contrast(1.03)" }} draggable={false} /></div>
        <div className="polaroid absolute inset-0 flex items-center justify-center bg-paper-warm" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}><p className="font-hand text-ink text-2xl sm:text-3xl text-center px-4 leading-snug">{caption}</p></div>
      </motion.div>
    </div>
    <button type="button" aria-label="Open photo full screen" className="absolute right-4 top-4 z-[3] flex h-9 w-9 items-center justify-center rounded-full bg-ink/75 font-type text-[9px] text-paper opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none" onClick={(e) => { e.stopPropagation(); setExpanded(true); }}>view</button>
    <button type="button" aria-label={flipped ? "Show photo" : "Show note"} aria-pressed={flipped} className="absolute inset-0 z-[1] cursor-pointer rounded-sm bg-transparent focus-visible:outline-none" onClick={() => setFlipped((f) => !f)} />
    <p className="font-hand text-ink/60 text-lg text-center mt-1">{flipped ? "tap to see photo" : "tap for the note"}</p>
    {expanded && createPortal(<motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-5 sm:p-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="dialog" aria-modal="true" onClick={() => setExpanded(false)}>
      <button type="button" className="absolute right-5 top-5 z-10 border border-paper/50 px-3 py-2 font-type text-xs uppercase tracking-widest text-paper" onClick={() => setExpanded(false)}>close</button>
      <motion.img src={src} alt={caption} className="max-h-[88svh] max-w-full object-contain" initial={{ scale: 0.94 }} animate={{ scale: 1 }} onClick={(e) => e.stopPropagation()} />
    </motion.div>, document.body)}
  </motion.div>;
}
