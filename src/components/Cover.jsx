import { motion, useReducedMotion } from "framer-motion";
import { cover } from "../data/content";
import m04 from "../assets/photos/memory-04.jpg";

export default function Cover({ onEnter }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-kraft-dark">
      <div className="absolute inset-0">
        <img src={m04} alt="Sheral and Moksh" className="w-full h-full object-cover" style={{ filter: "sepia(0.3) saturate(0.72) brightness(0.46) contrast(1.08)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,17,12,0.18),rgba(24,17,12,0.84))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-kraft-dark/55 via-transparent to-kraft-dark" />
      </div>

      <motion.div className="absolute inset-0 paper-grain" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 1.4 }} />
      <div className="absolute inset-5 sm:inset-9 border border-paper/15 pointer-events-none" />
      <div className="absolute inset-7 sm:inset-12 stitch-border border-paper/35 pointer-events-none" />

      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center px-7 text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <span className="font-type text-paper/70 text-[10px] sm:text-xs tracking-[0.28em] uppercase mb-5">{cover.eyebrow}</span>
        <div className="flex items-center gap-3 mb-5 text-paper/45 font-type text-[10px] uppercase tracking-[0.22em]"><span className="h-px w-10 bg-paper/30" /> 01 / 09 <span className="h-px w-10 bg-paper/30" /></div>
        <h1 className="font-display text-paper text-5xl sm:text-7xl lg:text-8xl leading-[0.96] font-semibold drop-shadow-xl">{cover.title}</h1>
        <p className="font-hand text-gold text-3xl sm:text-4xl mt-5">{cover.subtitle}</p>
        <p className="font-type text-paper/60 text-xs sm:text-sm mt-7 tracking-wide max-w-md">{cover.hint}</p>

        <motion.button
          onClick={onEnter}
          className="mt-10 group font-hand text-2xl text-paper border border-paper/45 rounded-full px-8 py-3 hover:bg-paper/10 transition-colors"
          whileHover={{ scale: 1.04, borderColor: "rgba(243,233,210,0.9)" }}
          animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {cover.scrollCta} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </motion.button>
      </motion.div>

      <div className="absolute bottom-7 left-0 right-0 flex justify-center font-type text-[9px] tracking-[0.28em] uppercase text-paper/35">Surat · Ahmedabad · same us</div>
    </section>
  );
}
