import { motion } from "framer-motion";
import { cover } from "../data/content";
import m04 from "../assets/photos/memory-04.jpg";

export default function Cover({ onEnter }) {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-kraft-dark">
      {/* backdrop photo, dimmed */}
      <div className="absolute inset-0">
        <img
          src={m04}
          alt=""
          className="w-full h-full object-cover"
          style={{
            filter: "sepia(0.45) saturate(0.7) brightness(0.55) contrast(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kraft-dark/70 via-kraft-dark/50 to-kraft-dark" />
      </div>

      <motion.div
        className="absolute inset-0 paper-grain opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.8, delay: 0.3 }}
      />

      <motion.div
        className="absolute inset-4 sm:inset-8 border border-paper/10 pointer-events-none"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* stitched border frame */}
      <div className="absolute inset-4 sm:inset-8 stitch-border border-paper/40 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <span className="font-type text-paper/70 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6">
          for Sheral · Sherkhan
        </span>
        <h1 className="font-display text-paper text-5xl sm:text-7xl leading-[1.05] font-semibold drop-shadow-lg">
          {cover.title}
        </h1>
        <p className="font-hand text-gold text-3xl sm:text-4xl mt-4">
          {cover.subtitle}
        </p>
        <p className="font-type text-paper/60 text-xs sm:text-sm mt-8 tracking-wide">
          {cover.hint}
        </p>

        <motion.button
          onClick={onEnter}
          className="mt-12 font-hand text-2xl text-paper border border-paper/50 rounded-full px-8 py-3 hover:bg-paper/10 transition-colors"
          whileHover={{ scale: 1.04, borderColor: "rgba(243, 233, 210, 0.9)" }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {cover.scrollCta}
        </motion.button>
      </motion.div>
    </section>
  );
}
