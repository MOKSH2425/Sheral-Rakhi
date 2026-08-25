import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quiz } from "../data/content";

export default function SherkhanTest() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);
  const q = quiz.questions[current];
  const progress = useMemo(() => ((current + (selected !== null ? 1 : 0)) / quiz.questions.length) * 100, [current, selected]);

  const choose = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (current === quiz.questions.length - 1) setDone(true);
    else { setCurrent((c) => c + 1); setSelected(null); }
  };

  const result = score === quiz.questions.length ? quiz.result.perfect : score >= 2 ? quiz.result.close : quiz.result.chaotic;

  return (
    <section id="sherkhan-test" className="relative w-full overflow-hidden bg-teal paper-grain py-24 sm:py-32 px-6 sm:px-16 -mt-6 text-paper">
      <div className="absolute -right-24 -top-20 h-64 w-64 rounded-full border border-paper/10" /><div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full border border-paper/10" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="text-center mb-10"><p className="font-type text-xs tracking-[0.25em] uppercase text-paper/55">{quiz.tab} — {quiz.tabLabel}</p><h2 className="font-display mt-2 text-4xl sm:text-6xl font-semibold">{quiz.title}</h2><p className="font-hand mt-3 text-2xl text-paper/75">{quiz.kicker}</p></div>
        {!done ? (
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-paper/15 bg-ink/10 p-5 sm:p-8 backdrop-blur-sm">
            <div className="mb-7"><div className="flex justify-between font-type text-[9px] uppercase tracking-[0.2em] text-paper/55"><span>question {current + 1} / {quiz.questions.length}</span><span>{Math.round(progress)}%</span></div><div className="mt-2 h-1 rounded-full bg-paper/15 overflow-hidden"><motion.div className="h-full bg-gold" animate={{ width: `${Math.max(8, progress)}%` }} /></div></div>
            <AnimatePresence mode="wait"><motion.div key={current} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.25 }}>
              <h3 className="font-display text-2xl sm:text-3xl leading-tight">{q.question}</h3>
              <div className="mt-6 grid gap-3">
                {q.options.map((option, i) => {
                  const isSelected = selected === i; const correct = selected !== null && i === q.answer; const wrong = isSelected && i !== q.answer;
                  return <button key={option} onClick={() => choose(i)} className={`w-full rounded-2xl border px-5 py-4 text-left font-body transition-all ${correct ? "border-gold bg-gold/15" : wrong ? "border-rust-light bg-rust-light/10" : "border-paper/15 bg-paper/5 hover:border-paper/40 hover:bg-paper/10"}`}><span className="font-type mr-3 text-[10px] text-paper/40">0{i+1}</span>{option}</button>;
                })}
              </div>
              {selected !== null && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex items-center justify-between gap-4"><p className="font-hand text-xl text-paper/75">{selected === q.answer ? "haan, aa toh khabar hovi joiye. 😂" : "Sherkhan disappointed. ફરી try. 😂"}</p><button onClick={next} className="rounded-full border border-gold bg-gold px-5 py-2.5 font-type text-[10px] uppercase tracking-widest text-ink">{current === quiz.questions.length - 1 ? "result" : "next →"}</button></motion.div>}
            </motion.div></AnimatePresence>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto max-w-2xl rounded-[2rem] border border-paper/15 bg-paper p-7 sm:p-10 text-center shadow-paper">
            <p className="font-type text-rust text-[10px] uppercase tracking-[0.25em]">official result</p><div className="mt-5 font-display text-7xl text-ink">{score}<span className="text-2xl text-ink/40">/{quiz.questions.length}</span></div><h3 className="mt-4 font-display text-3xl sm:text-4xl text-ink">{score === 4 ? "Certified Sherkhan." : "Still my Sherkhan."}</h3><p className="mt-4 font-hand text-2xl text-rust">{result}</p><button onClick={() => { setCurrent(0); setScore(0); setSelected(null); setDone(false); }} className="mt-7 font-type text-[10px] uppercase tracking-widest text-ink/55 hover:text-ink">retake test</button></motion.div>
        )}
      </div>
    </section>
  );
}
