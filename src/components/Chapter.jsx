import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Polaroid from "./Polaroid";

export default function Chapter({ chapter, index }) {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const flip = index % 2 === 1;
  const bg = index % 2 === 0 ? "bg-paper" : "bg-paper-warm";

  return (
    <section ref={sectionRef} id={chapter.id} data-tab={chapter.tab} className={`relative w-full ${bg} paper-grain torn-top torn-bottom py-24 sm:py-32 px-6 sm:px-16 -mt-6`}>
      <div className="absolute left-6 top-12 font-type text-[10px] tracking-[0.22em] text-ink/30 sm:left-10">SHERKHAN / {chapter.tab}</div>
      <div className="hidden lg:flex absolute -right-1 top-16 items-center"><div className="bg-rust text-paper font-type text-xs tracking-widest px-3 py-2 rotate-1 shadow-tape">{chapter.tab} · {chapter.tabLabel.toUpperCase()}</div></div>

      <div className={`relative z-10 max-w-6xl mx-auto flex flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>
        <div className="flex-1 min-w-0">
          <span className="font-type text-rust text-xs tracking-[0.25em] uppercase">{chapter.tab} — {chapter.tabLabel}</span>
          <h2 className="font-display text-ink text-4xl sm:text-5xl lg:text-6xl font-semibold mt-2 mb-1 leading-[1.02]">{chapter.title}</h2>
          <p className="font-hand text-rust text-2xl sm:text-3xl mb-7">{chapter.kicker}</p>
          <div className="space-y-5">
            {chapter.body.map((p, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.6, delay: i * 0.07 }} className="font-body text-ink-soft text-base sm:text-lg leading-[1.78]">{p}</motion.p>
            ))}
          </div>

          {chapter.id === "the-distance" && (
            <motion.div className="mt-10 border-y border-rust/25 py-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }}>
              <div className="flex items-center justify-between font-type text-[10px] uppercase tracking-[0.2em] text-rust"><span>Surat</span><span className="text-ink/50">few hours / full heart</span><span>Ahmedabad</span></div>
              <svg viewBox="0 0 520 74" role="img" aria-label="A route connecting Surat and Ahmedabad" className="mt-2 h-16 w-full overflow-visible">
                <path d="M 18 43 C 125 8, 168 68, 270 36 S 405 8, 502 43" fill="none" stroke="#A6522C" strokeDasharray="5 8" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="2" />
                <motion.path d="M 18 43 C 125 8, 168 68, 270 36 S 405 8, 502 43" fill="none" stroke="#C89B3C" strokeLinecap="round" strokeWidth="3" initial={{ pathLength: shouldReduceMotion ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.5 }} />
                <circle cx="18" cy="43" r="5" fill="#A6522C" /><circle cx="502" cy="43" r="5" fill="#A6522C" />
              </svg>
            </motion.div>
          )}

          {chapter.id === "sherkhan-files" && (
            <div className="mt-9 flex flex-wrap gap-2">
              {["smol height", "full attitude", "gen-z certified", "mood dependent", "clumsy queen"].map((tag) => <span key={tag} className="rounded-full border border-rust/25 px-3 py-1 font-type text-[9px] uppercase tracking-wider text-rust">#{tag}</span>)}
            </div>
          )}
        </div>

        <motion.div className="flex-shrink-0 flex flex-wrap justify-center gap-8" style={{ y: shouldReduceMotion ? 0 : photoY }}>
          <Polaroid src={chapter.photo.src} caption={chapter.photo.caption} rotate={chapter.photo.rotate} tapeIndex={index} />
          {chapter.photo2 && <Polaroid src={chapter.photo2.src} caption={chapter.photo2.caption} rotate={chapter.photo2.rotate} tapeIndex={index + 1} size="sm" />}
        </motion.div>
      </div>
    </section>
  );
}
