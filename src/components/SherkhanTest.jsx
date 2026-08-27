import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  { q: "Who brings up the GF topic first?", options: ["Moksh", "Sheral"], answer: 1 },
  { q: "Who is shorter?", options: ["Sheral", "This question is unnecessary 😂"], answer: 0 },
  { q: "What usually happens after the ‘have pachhal nahi besu’ warning?", options: ["She actually stops coming", "She sits behind again"], answer: 1 },
  { q: "If Moksh is around other sisters, Sheral’s reaction is most likely…", options: ["No reaction", "A little investigation 👀"], answer: 1 },
  { q: "What does Moksh miss the most?", options: ["Random time with Sheru", "Nothing, obviously"], answer: 0 },
];

export default function SherkhanTest() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [picked, setPicked] = useState(null);
  const progress = useMemo(() => ((step) / questions.length) * 100, [step]);

  const choose = (index) => {
    if (picked !== null) return;
    setPicked(index);
    if (index === questions[step].answer) setScore((s) => s + 1);
    setTimeout(() => {
      if (step === questions.length - 1) setDone(true);
      else { setStep((s) => s + 1); setPicked(null); }
    }, 550);
  };

  return (
    <section id="sherkhan-test" className="relative w-full bg-paper paper-grain py-24 sm:py-32 px-6 sm:px-16 torn-top torn-bottom -mt-6">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-type text-rust text-xs tracking-[0.25em] uppercase">bonus page · highly scientific</p>
        <h2 className="font-display text-ink text-4xl sm:text-6xl font-semibold mt-2">The Sherkhan Test.</h2>
        <p className="font-hand text-rust text-2xl mt-3">let's see if you actually know your brother.</p>

        <div className="mt-10 bg-paper-warm border border-ink/10 shadow-paper p-6 sm:p-10 text-left">
          {!done ? (
            <>
              <div className="flex items-center justify-between font-type text-[10px] tracking-[0.2em] uppercase text-rust">
                <span>question {step + 1}/{questions.length}</span><span>{Math.round(progress)}%</span>
              </div>
              <div className="mt-3 h-1 bg-ink/10 overflow-hidden"><motion.div className="h-full bg-rust" animate={{ width: `${progress}%` }} /></div>
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="mt-10">
                  <h3 className="font-display text-3xl sm:text-4xl text-ink font-semibold">{questions[step].q}</h3>
                  <div className="grid gap-3 mt-7">
                    {questions[step].options.map((option, i) => (
                      <button key={option} onClick={() => choose(i)} className={`text-left border px-5 py-4 font-body transition-all ${picked === i ? (i === questions[step].answer ? "border-teal bg-teal/10" : "border-rust bg-rust/10") : "border-ink/15 hover:border-rust hover:-translate-y-0.5"}`}>
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-center py-6">
              <p className="font-type text-rust text-xs tracking-[0.2em] uppercase">official result</p>
              <h3 className="font-display text-5xl sm:text-6xl text-ink font-semibold mt-2">{score}/{questions.length}</h3>
              <p className="font-hand text-rust text-3xl mt-3">score irrelevant. you're still stuck with me.</p>
              <p className="font-body text-ink-soft mt-5">Congratulations, Sherkhan. Your brother remains under lifetime contract.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
