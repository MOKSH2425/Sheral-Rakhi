import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { finale } from "../data/content";

export default function Finale() {
  const [tied, setTied] = useState(false);
  const [secret, setSecret] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="finale"
      className="relative w-full bg-kraft-dark paper-grain torn-top py-28 sm:py-36 px-6 sm:px-16 -mt-6 min-h-[100svh] flex flex-col items-center"
    >
      <div className="hidden lg:flex absolute -right-1 top-16 items-center z-10">
        <div className="bg-rust text-paper font-type text-xs tracking-widest px-3 py-2 rotate-1 shadow-tape">
          {finale.tab} · {finale.tabLabel.toUpperCase()}
        </div>
      </div>

      <div className="relative z-10 max-w-2xl w-full mx-auto text-center">
        <h2 className="font-display text-paper text-4xl sm:text-6xl font-semibold mb-6">
          {finale.title}
        </h2>
        <div className="space-y-4 mb-12">
          {finale.intro.map((p, i) => (
            <p
              key={i}
              className="font-body text-paper/80 text-base sm:text-lg leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        {/* interactive wrist + thread */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            className="relative"
            animate={
              tied && !shouldReduceMotion
                ? { scale: [1, 1.04, 1] }
                : { scale: 1 }
            }
            transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
          >
            <svg
              width="220"
              height="180"
              viewBox="0 0 220 180"
              className="mb-2"
            >
              <defs>
                <linearGradient id="wristShade" x1="0" x2="1">
                  <stop offset="0" stopColor="#EFE0BE" stopOpacity="0.1" />
                  <stop offset="0.45" stopColor="#F3E9D2" stopOpacity="0.28" />
                  <stop offset="1" stopColor="#C89B3C" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="threadShade" x1="0" x2="1">
                  <stop offset="0" stopColor="#A6522C" />
                  <stop offset="0.5" stopColor="#C89B3C" />
                  <stop offset="1" stopColor="#C97148" />
                </linearGradient>
                <linearGradient id="handShade" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#F3E9D2" stopOpacity="0.88" />
                  <stop offset="1" stopColor="#C89B3C" stopOpacity="0.45" />
                </linearGradient>
              </defs>
              <motion.g
                initial={{ opacity: 0, x: 28, rotate: 5 }}
                animate={
                  tied
                    ? {
                        opacity: [0, 1, 1, 0],
                        x: [28, 0, 0, 22],
                        rotate: [5, 0, 0, 4],
                      }
                    : { opacity: 0, x: 28, rotate: 5 }
                }
                transition={{ duration: 1.8, delay: 0.15, ease: "easeInOut" }}
                style={{ transformOrigin: "175px 93px" }}
              >
                <path
                  d="M 191 147 C 184 135 178 124 169 115 C 162 108 157 101 158 96 C 159 92 163 91 166 95 L 176 105 L 166 87 C 164 82 167 79 171 81 L 183 99 L 176 81 C 175 76 179 74 182 78 L 192 96 L 188 82 C 188 77 192 76 195 80 C 201 91 204 102 204 113 C 204 126 202 138 200 148 Z"
                  fill="url(#handShade)"
                  stroke="#F3E9D2"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                />
                <path
                  d="M 171 111 C 178 116 184 120 190 128"
                  fill="none"
                  stroke="#A6522C"
                  strokeLinecap="round"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                />
              </motion.g>
              <path
                d="M 76 26 C 93 18 127 18 144 26 L 152 143 C 135 158 85 158 68 143 Z"
                fill="url(#wristShade)"
                stroke="#F3E9D2"
                strokeOpacity="0.5"
                strokeWidth="2"
              />
              <path
                d="M 83 35 C 92 31 101 30 110 30"
                fill="none"
                stroke="#F3E9D2"
                strokeLinecap="round"
                strokeOpacity="0.28"
                strokeWidth="3"
              />
              <motion.g
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  tied ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.35 }}
                style={{ transformOrigin: "110px 86px" }}
              >
                <path
                  d="M 62 72 Q 110 54 158 72 Q 166 86 158 100 Q 110 118 62 100 Q 54 86 62 72 Z"
                  fill="none"
                  stroke="#3B2E22"
                  strokeOpacity="0.28"
                  strokeWidth="8"
                />
                <motion.path
                  d="M 60 70 Q 110 52 160 70 Q 168 86 160 102 Q 110 120 60 102 Q 52 86 60 70 Z"
                  fill="none"
                  stroke="url(#threadShade)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.25, ease: "easeInOut" }}
                />
                <path
                  d="M 60 76 Q 110 58 160 76"
                  fill="none"
                  stroke="#F3E9D2"
                  strokeOpacity="0.55"
                  strokeWidth="1.5"
                />
                <circle
                  cx="110"
                  cy="86"
                  r="12"
                  fill="#A6522C"
                  stroke="#F3E9D2"
                  strokeOpacity="0.65"
                  strokeWidth="2"
                />
                <circle cx="110" cy="86" r="5" fill="#C89B3C" />
                <circle cx="91" cy="82" r="4" fill="#C89B3C" />
                <circle cx="129" cy="82" r="4" fill="#C89B3C" />
                <path
                  d="M 103 94 Q 92 108 81 105 M 117 94 Q 128 108 139 105"
                  fill="none"
                  stroke="#C97148"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </motion.g>
            </svg>
            {tied && !shouldReduceMotion && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              >
                {[0, 1, 2, 3, 4, 5].map((mark) => (
                  <motion.span
                    key={mark}
                    className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-gold"
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: Math.cos((mark * Math.PI) / 3) * 72,
                      y: Math.sin((mark * Math.PI) / 3) * 58,
                      scale: [0, 1, 0.4],
                    }}
                    transition={{ duration: 1.1, delay: 1.15, ease: "easeOut" }}
                  />
                ))}
              </div>
            )}
          </motion.div>

          <motion.button
            onClick={() => setTied(true)}
            disabled={tied}
            whileTap={{ scale: 0.95 }}
            aria-label={tied ? "Rakhi tied" : "Tie the Rakhi"}
            aria-live="polite"
            className={`font-hand text-2xl rounded-full px-8 py-3 border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-kraft-dark ${
              tied
                ? "border-gold/40 text-gold cursor-default"
                : "border-paper/50 text-paper hover:bg-paper/10"
            }`}
          >
            {tied ? finale.wishButtonDone : finale.wishButtonIdle}
          </motion.button>
        </div>

        <AnimatePresence>
          {tied && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0, rotate: [-1, 0.5, -1] }}
              transition={{
                duration: 1.1,
                delay: shouldReduceMotion ? 0 : 1.9,
                rotate: { duration: 0.9, ease: "easeOut" },
              }}
              className="polaroid !bg-paper-warm text-left px-6 py-8 sm:px-10 sm:py-10 mx-auto max-w-xl mt-4"
              style={{ rotate: -1 }}
            >
              <p className="font-hand text-rust text-2xl mb-4">
                {finale.letterTitle}
              </p>
              <p className="font-hand text-ink text-xl sm:text-2xl leading-relaxed whitespace-pre-line">
                {finale.letter}
              </p>
              <p className="font-hand text-ink text-2xl mt-6 text-right">
                {finale.signOff}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {tied && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 border-t border-paper/20 pt-12"
            >
              <p className="font-type text-paper/50 text-[10px] uppercase tracking-[0.25em]">
                one last thing
              </p>
              <h3 className="font-display text-paper text-4xl sm:text-5xl font-semibold mt-2">
                Sheral is Sheral.
              </h3>
              <p className="font-hand text-gold text-2xl mt-3">
                no comparison. no replacement. bas mari Sheru.
              </p>
              <button
                type="button"
                onClick={() => setSecret((value) => !value)}
                className="mt-7 font-type text-xs uppercase tracking-[0.2em] text-paper/60 border border-paper/20 px-4 py-2 hover:border-gold hover:text-gold transition-colors"
              >
                {secret ? "close top secret" : "wait... top secret"}
              </button>
              <AnimatePresence>
                {secret && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    className="mx-auto mt-6 max-w-md border border-gold/30 bg-paper-warm text-left p-6 shadow-paper"
                  >
                    <p className="font-type text-rust text-[10px] uppercase tracking-[0.2em]">
                      TOP SECRET · SHERKHAN DOSSIER
                    </p>
                    <div className="mt-4 space-y-2 font-type text-xs text-ink">
                      <p>HEIGHT — classified.</p>
                      <p>ATTITUDE — maximum.</p>
                      <p>GEN-Z LEVEL — dangerous.</p>
                      <p>GF CAMPAIGN — ongoing.</p>
                      <p>ANNOYING LEVEL — high.</p>
                      <p>SISTER LEVEL — ∞</p>
                    </div>
                    <p className="font-display text-2xl font-semibold text-ink mt-5">
                      Verdict: KEEP HER.
                    </p>
                    <p className="font-hand text-rust text-xl mt-1">
                      Lifetime validity. No returns. No exchanges.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="font-type text-paper/40 text-xs mt-16">
        raksha bandhan · 28.08.2026
      </p>
    </section>
  );
}
