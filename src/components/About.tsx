"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="w-full relative py-24 md:py-40 px-6 md:px-24 flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(to bottom, #1e0b04, #2d1208, #1a0803)' }}>
      {/* Warm amber radial atmosphere matching sequence glow */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        background: 'radial-gradient(ellipse at 50% -10%, rgba(220, 90, 10, 0.25) 0%, rgba(140, 40, 5, 0.1) 40%, transparent 70%)'
      }} />

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col gap-12 lg:gap-16">
        
        {/* Left Aligned Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left w-full"
        >
          <div className="mb-4 lg:mb-6 inline-flex flex-col items-start gap-2">
            <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Since 2005</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-white/90">
            About <span className="font-semibold text-white">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mt-6 lg:mt-8 rounded-full" />
        </motion.div>

        {/* Content Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start text-left w-full"
        >
          <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed mb-6 max-w-4xl">
            At Hookwell Engineers, we don't just build lifting equipment; we engineer solutions that carry the weight of global industries. Every chain block, trolley, and hoist that leaves our facility is a testament to unyielding precision.
          </p>
          <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed max-w-4xl">
            Proudly <span className="text-white font-medium">Made in India</span>, our products are rigorously tested to exceed international safety standards, ensuring that when the load is heavy, your confidence remains unshaken.
          </p>
          
          
          {/* Animated Statistics Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-8 w-full">
            <div className="flex flex-col items-start">
              <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                <AnimatedCounter from={0} to={18} suffix="+" />
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mt-2">Years Exp.</span>
            </div>
            
            <div className="flex flex-col items-start">
              <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                <AnimatedCounter from={0} to={100} suffix="%" />
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mt-2">Tested Safe</span>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                <AnimatedCounter from={0} to={50} suffix="+" />
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mt-2">Global Clients</span>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                <AnimatedCounter from={0} to={500} suffix="+" />
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mt-2">Projects Deployed</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
