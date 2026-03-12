"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: 0% scroll
  const opacity1 = useTransform(progress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.15], [0, -100]);

  // Section 2: 30% scroll
  const opacity2 = useTransform(progress, [0.15, 0.25, 0.4], [0, 1, 0]);
  const y2 = useTransform(progress, [0.15, 0.4], [100, -100]);

  // Section 3: 60% scroll
  const opacity3 = useTransform(progress, [0.45, 0.55, 0.7], [0, 1, 0]);
  const y3 = useTransform(progress, [0.45, 0.7], [100, -100]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] z-10 pointer-events-none">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center drop-shadow-2xl px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[0.08em] text-white uppercase mt-12 relative drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            HOOKWELL ENGINEERS<span className="text-base sm:text-lg md:text-2xl font-light tracking-normal text-white/50">™</span>
          </h1>
          <p className="text-[10px] sm:text-lg md:text-xl lg:text-2xl font-medium mt-4 md:mt-6 tracking-widest text-white uppercase drop-shadow-md max-w-4xl px-4 text-balance">
            PRECISION INDUSTRIAL LIFTING SOLUTIONS
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left mix-blend-difference pl-8 md:pl-24 pr-8 md:pr-0"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl text-white">
            Precision engineering <br/><span className="text-white font-medium italic">since 2005.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right mix-blend-difference pr-8 md:pr-24 pl-8 md:pl-0"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl text-white">
            Proudly <span className="text-gray-400 font-light italic">Made in</span> <span className="font-light italic text-white">India.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
