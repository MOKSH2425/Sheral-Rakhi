import { motion } from "framer-motion";
import { allPhotos, illustratedMemories } from "../data/content";
import Polaroid from "./Polaroid";

const memories = [
  [allPhotos.m02, "night-time Sheru. no explanation required.", -4, "sm"],
  [allPhotos.m03, "the height joke has entered the archive.", 3, "md"],
  [allPhotos.m04, "kya jata hata? apde jata hata. enough.", -2, "sm"],
  [allPhotos.m05, "normal day, permanently saved.", 4, "md"],
  [allPhotos.m06, "one of those photos that just feels like us.", -3, "sm"],
  [allPhotos.m07, "apdu usual, again.", 2, "md"],
  [allPhotos.m08, "proof that random days become memories.", -3, "sm"],
  [allPhotos.m09, "camera kholi = photo toh joiye.", 3, "md"],
  [allPhotos.m10, "Sheru being completely herself.", -2, "sm"],
  [allPhotos.m01, "different place, same people.", 2, "md"],
  [allPhotos.m11, "and somehow one drawing says the whole thing.", -1, "sm"],
];

const imagined = [
  [illustratedMemories.artStation, "future rides we haven't planned yet.", -3, "sm"],
  [illustratedMemories.artFood, "first snacks. baki badhu pachhi.", 2, "md"],
  [illustratedMemories.artCamera, "someone please remember to take the photo.", -2, "sm"],
  [illustratedMemories.artBalcony, "quiet moments count too.", 4, "md"],
  [illustratedMemories.artCare, "the care underneath all the bakbak.", -4, "sm"],
  [illustratedMemories.artPopcorn, "argument today, laugh tomorrow.", 3, "md"],
  [illustratedMemories.artPlayful, "still this annoying, hopefully forever.", -2, "sm"],
];

export default function MemoryWall() {
  return <section id="memory-wall" className="relative w-full overflow-hidden bg-paper-warm paper-grain py-24 sm:py-32 px-6 sm:px-16">
    <div className="relative z-10 mx-auto max-w-6xl">
      <motion.div className="mx-auto mb-14 max-w-2xl text-center" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}>
        <p className="font-type text-rust text-xs tracking-[0.25em] uppercase">the photo wall</p>
        <h2 className="font-display text-ink text-5xl sm:text-7xl font-semibold mt-2">Proof We Were Here.</h2>
        <p className="font-hand text-rust text-2xl mt-3">11 photos. zero normal captions.</p>
      </motion.div>

      <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-14 sm:gap-x-12 sm:gap-y-20">
        {memories.map(([src, caption, rotate, size], index) => <motion.div key={caption} initial={{ opacity: 0, y: 28, rotate: rotate - 3 }} whileInView={{ opacity: 1, y: 0, rotate }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: index * 0.05 }}><Polaroid src={src} caption={caption} rotate={rotate} size={size} tapeIndex={index} /></motion.div>)}
      </div>

      <motion.div className="mx-auto mt-24 max-w-3xl border-y border-rust/25 py-10 text-center" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}>
        <p className="font-type text-[10px] uppercase tracking-[0.25em] text-rust">future pages</p>
        <h3 className="font-display mt-2 text-4xl sm:text-5xl font-semibold text-ink">Aa Scrapbook Ahiya Purto Nathi.</h3>
        <p className="font-hand mt-3 text-2xl text-rust">aagal na pages haju apde banavvana che.</p>
      </motion.div>

      <div className="mt-14 flex flex-wrap items-start justify-center gap-x-8 gap-y-14 sm:gap-x-12 sm:gap-y-20">
        {imagined.map(([src, caption, rotate, size], index) => <motion.div key={caption} initial={{ opacity: 0, y: 28, rotate: rotate - 3 }} whileInView={{ opacity: 1, y: 0, rotate }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: index * 0.05 }}><Polaroid src={src} caption={caption} rotate={rotate} size={size} tapeIndex={index + 3} /></motion.div>)}
      </div>

      <div className="mx-auto mt-24 max-w-2xl text-center">
        <p className="font-display text-3xl sm:text-4xl text-ink">Same us. Different page.</p>
        <p className="font-hand text-2xl text-rust mt-2">Happy Rakhi, Sheru 🐯</p>
        <p className="font-type text-[9px] uppercase tracking-[0.22em] text-ink/35 mt-7">end of volume 01 · not the end of us</p>
      </div>
    </div>
  </section>;
}
