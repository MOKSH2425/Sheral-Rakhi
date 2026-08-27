import { motion } from "framer-motion";
import { allPhotos, illustratedMemories } from "../data/content";
import Polaroid from "./Polaroid";

const memories = [
  { src: allPhotos.m08, caption: "normal divas pan keep karva jevo", rotate: -4, size: "sm" },
  { src: allPhotos.m05, caption: "evu happiness jene explanation joiye nahi", rotate: 3, size: "md" },
  { src: allPhotos.m09, caption: "photo toh levano j hoy", rotate: -2, size: "sm" },
  { src: allPhotos.m04, caption: "apdu usual, apda j style ma", rotate: 4, size: "md" },
  { src: allPhotos.m07, caption: "random ride. zero plan. full memory.", rotate: -3, size: "sm" },
  { src: allPhotos.m03, caption: "‘last ride’ — allegedly.", rotate: 2, size: "md" },
  { src: allPhotos.m10, caption: "Mota Bhai ni post: permanent", rotate: -2, size: "sm" },
  { src: allPhotos.m02, caption: "same Sheru, different day", rotate: 3, size: "md" },
];

const imaginedMemories = [
  { src: illustratedMemories.artStation, caption: "aava scenes haju ghana baki che", rotate: -3, size: "sm" },
  { src: illustratedMemories.artFood, caption: "pehla snacks. baki badhu pachhi.", rotate: 2, size: "md" },
  { src: illustratedMemories.artCamera, caption: "photo levanu koi toh yaad rakhe che", rotate: -2, size: "sm" },
  { src: illustratedMemories.artCare, caption: "care — mostly hidden, still there", rotate: 4, size: "md" },
];

export default function MemoryWall() {
  return (
    <section id="memory-wall" className="relative w-full overflow-hidden bg-paper-warm paper-grain py-24 sm:py-32 px-6 sm:px-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="mx-auto mb-14 max-w-xl text-center" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
          <p className="font-type text-rust text-xs tracking-[0.25em] uppercase">last page, pan full stop nathi</p>
          <h2 className="font-display text-ink text-4xl sm:text-6xl font-semibold mt-2">Proof We Were There.</h2>
          <p className="font-hand text-rust text-2xl mt-3">badhi important memories important dekhati nathi.</p>
        </motion.div>

        <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-14 sm:gap-x-12 sm:gap-y-20">
          {memories.map((memory, index) => (
            <motion.div key={`${memory.caption}-${index}`} initial={{ opacity: 0, y: 28, rotate: memory.rotate - 3 }} whileInView={{ opacity: 1, y: 0, rotate: memory.rotate }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65, delay: index * 0.06 }}>
              <Polaroid src={memory.src} caption={memory.caption} rotate={memory.rotate} size={memory.size} tapeIndex={index + 1} />
            </motion.div>
          ))}
        </div>

        <motion.div className="mx-auto mt-24 max-w-2xl text-center" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }}>
          <p className="font-type text-xs uppercase tracking-[0.25em] text-rust">imagined, not pretending</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-ink sm:text-5xl">Haju Ghani Pages Baki Che.</h3>
          <p className="font-hand mt-3 text-2xl text-rust">aa illustrations future memories che, real photos ni jagyae nahi.</p>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-start justify-center gap-x-8 gap-y-14 sm:gap-x-12 sm:gap-y-20">
          {imaginedMemories.map((memory, index) => (
            <motion.div key={memory.caption} initial={{ opacity: 0, y: 28, rotate: memory.rotate - 3 }} whileInView={{ opacity: 1, y: 0, rotate: memory.rotate }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: index * 0.07 }}>
              <Polaroid src={memory.src} caption={memory.caption} rotate={memory.rotate} size={memory.size} tapeIndex={index + 2} />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="font-hand text-3xl text-rust">same us. different page.</p>
        </div>
      </div>
    </section>
  );
}
