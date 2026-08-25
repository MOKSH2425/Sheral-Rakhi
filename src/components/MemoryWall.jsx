import { motion } from "framer-motion";
import { allPhotos, illustratedMemories } from "../data/content";
import Polaroid from "./Polaroid";

const memories = [
  {
    src: allPhotos.m08,
    caption: "ek bijo normal divas, pan keep karva jevo",
    rotate: -4,
    size: "sm",
  },
  {
    src: allPhotos.m05,
    caption: "evu happiness jene explanation joiye nahi",
    rotate: 3,
    size: "md",
  },
  {
    src: allPhotos.m09,
    caption: "jayiye ena pehla ek photo toh thai jaye",
    rotate: -2,
    size: "sm",
  },
  {
    src: allPhotos.m04,
    caption: "haju pan hasvana reasons mali jaye che",
    rotate: 4,
    size: "md",
  },
  {
    src: allPhotos.m07,
    caption: "apdu usual, forever",
    rotate: -3,
    size: "sm",
  },
  {
    src: allPhotos.m11,
    caption: "aakhi story ek photo ma",
    rotate: 2,
    size: "md",
  },
];

const imaginedMemories = [
  {
    src: illustratedMemories.artStation,
    caption: "apde aa journeys repeat karta j rahishu",
    rotate: -3,
    size: "sm",
  },
  {
    src: illustratedMemories.artFood,
    caption: "pehla snacks. baki badhu pachhi.",
    rotate: 2,
    size: "md",
  },
  {
    src: illustratedMemories.artCamera,
    caption: "apda ma thi koi ek photo levanu yaad rakhe che",
    rotate: -2,
    size: "sm",
  },
  {
    src: illustratedMemories.artBalcony,
    caption: "quiet moments pan count thay che",
    rotate: 4,
    size: "md",
  },
  {
    src: illustratedMemories.artCare,
    caption: "ek bija ni care levani aadat",
    rotate: -4,
    size: "sm",
  },
  {
    src: illustratedMemories.artPopcorn,
    caption: "argument pan memory no part che",
    rotate: 3,
    size: "md",
  },
  {
    src: illustratedMemories.artPlayful,
    caption: "haju pan exactly aatla annoying",
    rotate: -2,
    size: "sm",
  },
];

export default function MemoryWall() {
  return (
    <section
      id="memory-wall"
      className="relative w-full overflow-hidden bg-paper-warm paper-grain py-24 sm:py-32 px-6 sm:px-16"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mx-auto mb-14 max-w-xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-type text-rust text-xs tracking-[0.25em] uppercase">
            last page, pan full stop nathi
          </p>
          <h2 className="font-display text-ink text-4xl sm:text-6xl font-semibold mt-2">
            Aa Pan Rakhi Leje
          </h2>
          <p className="font-hand text-rust text-2xl mt-3">
            because apdi story no ek ending thi shu thay?
          </p>
        </motion.div>

        <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-14 sm:gap-x-12 sm:gap-y-20">
          {memories.map((memory, index) => (
            <motion.div
              key={`${memory.caption}-${index}`}
              initial={{ opacity: 0, y: 28, rotate: memory.rotate - 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: memory.rotate }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <Polaroid
                src={memory.src}
                caption={memory.caption}
                rotate={memory.rotate}
                size={memory.size}
                tapeIndex={index + 1}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mx-auto mt-24 flex max-w-4xl flex-col items-center gap-8 border-y border-rust/30 py-10 sm:flex-row sm:gap-12 sm:px-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-48 flex-shrink-0 rotate-[-3deg] sm:w-56">
            <div className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-2 bg-teal/80 shadow-tape" />
            <img
              src={allPhotos.m11}
              alt="Illustrated portrait of Sheral and Sherkhan"
              className="w-full border-[10px] border-paper-white bg-paper-white shadow-paper"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-type text-xs uppercase tracking-[0.25em] text-rust">
              illustrated echo
            </p>
            <p className="font-display mt-2 text-3xl font-semibold text-ink sm:text-4xl">
              Same us. Different page.
            </p>
            <p className="font-hand mt-3 text-2xl text-rust">
              feeling same j che
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-24 max-w-2xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-type text-xs uppercase tracking-[0.25em] text-rust">
            imagined che, real thing ni jagyae nahi
          </p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-ink sm:text-5xl">
            Apde Je Scenes Carry Kariye
          </h3>
          <p className="font-hand mt-3 text-2xl text-rust">
            apda nana illustrated echoes
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-start justify-center gap-x-8 gap-y-14 sm:gap-x-12 sm:gap-y-20">
          {imaginedMemories.map((memory, index) => (
            <motion.div
              key={memory.caption}
              initial={{ opacity: 0, y: 28, rotate: memory.rotate - 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: memory.rotate }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.07,
                ease: "easeOut",
              }}
            >
              <Polaroid
                src={memory.src}
                caption={memory.caption}
                rotate={memory.rotate}
                size={memory.size}
                tapeIndex={index + 2}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
