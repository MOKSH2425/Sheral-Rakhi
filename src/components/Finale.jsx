import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { finale } from "../data/content";

export default function Finale() {
  const [tied, setTied] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  return <section id="finale" className="relative w-full bg-kraft-dark paper-grain torn-top py-28 sm:py-36 px-6 sm:px-16 -mt-6 min-h-[100svh] flex flex-col items-center">
    <div className="hidden lg:flex absolute -right-1 top-16 items-center"><div className="bg-rust text-paper font-type text-xs tracking-widest px-3 py-2 rotate-1 shadow-tape">{finale.tab} · {finale.tabLabel.toUpperCase()}</div></div>
    <div className="relative z-10 max-w-3xl w-full mx-auto text-center">
      <p className="font-type text-paper/45 text-[10px] uppercase tracking-[0.28em]">the part I actually wanted you to read</p>
      <h2 className="font-display text-paper text-5xl sm:text-7xl font-semibold mt-3 mb-7">{finale.title}</h2>
      <div className="space-y-4 mb-12 max-w-2xl mx-auto"><p className="font-body text-paper/80 text-base sm:text-lg leading-relaxed">{finale.intro[0]}</p><p className="font-body text-paper/80 text-base sm:text-lg leading-relaxed">{finale.intro[1]}</p></div>

      <div className="flex flex-col items-center mb-10">
        <motion.div className="relative" animate={tied && !shouldReduceMotion ? { scale: [1, 1.04, 1] } : { scale: 1 }} transition={{ duration: 1.2, delay: 0.8 }}>
          <svg width="260" height="205" viewBox="0 0 260 205" className="mb-2">
            <defs><linearGradient id="wristShade2" x1="0" x2="1"><stop offset="0" stopColor="#EFE0BE" stopOpacity="0.1"/><stop offset="0.45" stopColor="#F3E9D2" stopOpacity="0.28"/><stop offset="1" stopColor="#C89B3C" stopOpacity="0.12"/></linearGradient><linearGradient id="threadShade2" x1="0" x2="1"><stop offset="0" stopColor="#A6522C"/><stop offset="0.5" stopColor="#C89B3C"/><stop offset="1" stopColor="#C97148"/></linearGradient></defs>
            <path d="M 84 30 C 101 22 143 22 160 30 L 168 163 C 151 178 93 178 76 163 Z" fill="url(#wristShade2)" stroke="#F3E9D2" strokeOpacity="0.5" strokeWidth="2"/>
            <motion.g initial={{ opacity: 0, x: 24 }} animate={tied ? { opacity: [0,1,1,0], x: [24,0,0,20] } : { opacity: 0, x: 24 }} transition={{ duration: 1.7, ease: "easeInOut" }}><path d="M 207 165 C 198 148 189 132 182 119 C 179 114 181 109 185 111 L 195 123 L 187 103 C 185 98 189 96 192 100 L 202 119 L 196 99 C 195 94 199 93 202 98 L 211 118 L 208 104 C 208 99 212 98 215 103 C 222 116 225 130 224 144 C 223 154 220 161 217 166 Z" fill="#F3E9D2" fillOpacity="0.85" stroke="#F3E9D2" strokeOpacity="0.65" strokeWidth="2"/></motion.g>
            <motion.g initial={{ opacity: 0, scale: 0.85 }} animate={tied ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }} transition={{ duration: 0.35 }} style={{ transformOrigin: "122px 100px" }}>
              <path d="M 68 85 Q 122 64 176 85 Q 184 100 176 115 Q 122 136 68 115 Q 60 100 68 85 Z" fill="none" stroke="#2C2118" strokeOpacity="0.35" strokeWidth="9"/>
              <motion.path d="M 66 83 Q 122 62 178 83 Q 186 100 178 117 Q 122 138 66 117 Q 58 100 66 83 Z" fill="none" stroke="url(#threadShade2)" strokeWidth="5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }}/>
              <circle cx="122" cy="100" r="14" fill="#A6522C" stroke="#F3E9D2" strokeOpacity="0.7" strokeWidth="2"/><circle cx="122" cy="100" r="5" fill="#C89B3C"/><circle cx="101" cy="96" r="4" fill="#C89B3C"/><circle cx="143" cy="96" r="4" fill="#C89B3C"/>
            </motion.g>
          </svg>
          {tied && !shouldReduceMotion && <div className="pointer-events-none absolute inset-0">{[0,1,2,3,4,5,6,7].map((mark) => <motion.span key={mark} className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-gold" initial={{ opacity: 0, x: 0, y: 0, scale: 0 }} animate={{ opacity: [0,1,0], x: Math.cos(mark*Math.PI/4)*88, y: Math.sin(mark*Math.PI/4)*68, scale: [0,1,0.3] }} transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}/>)}</div>}
        </motion.div>
        <motion.button onClick={() => setTied(true)} disabled={tied} whileTap={{ scale: 0.95 }} className={`font-hand text-2xl rounded-full px-8 py-3 border transition-colors ${tied ? "border-gold/40 text-gold cursor-default" : "border-paper/50 text-paper hover:bg-paper/10"}`}>{tied ? finale.wishButtonDone : finale.wishButtonIdle}</motion.button>
      </div>

      <AnimatePresence>{tied && <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0, rotate: [-1, 0.5, -1] }} transition={{ duration: 0.8 }} className="polaroid !bg-paper-warm text-left px-6 py-8 sm:px-10 sm:py-10 mx-auto max-w-2xl mt-4" style={{ rotate: -1 }}>
        <p className="font-hand text-rust text-2xl mb-4">{finale.letterTitle}</p><p className="font-hand text-ink text-xl sm:text-2xl leading-relaxed whitespace-pre-line">{finale.letter}</p><p className="font-hand text-ink text-2xl mt-6 text-right">{finale.signOff}</p>
      </motion.div>}</AnimatePresence>
    </div>
    <p className="font-type text-paper/30 text-[9px] mt-16 tracking-[0.25em] uppercase">raksha bandhan · 28.08.2026</p>
  </section>;
}
