"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Heavy Duty Chain Block",
    category: "Lifting Equipment",
    description: "Industrial-grade chain pulley block engineered for high-capacity lifting and extreme durability.",
    color: "from-red-600/20 to-orange-500/20",
    image: "/products/chain-block.png",
    link: "/products/chain-pulley-block"
  },
  {
    title: "Electric Wire Rope Hoist",
    category: "Motorized Hoists",
    description: "High-performance electric wire rope hoist with precision controls and automated safety mechanisms.",
    color: "from-red-700/40 to-orange-800/40",
    image: "/products/wire-hoist.png",
    link: "/products/electric-wire-rope-hoist"
  },
  {
    title: "Ratchet Lever Hoist",
    category: "Manual Pulling",
    description: "Compact and versatile lever hoist designed for tensioning, pulling, and precision lifting in tight spaces.",
    color: "from-red-500/20 to-rose-600/20",
    image: "/products/ratchet-hoist.png",
    link: "/products/ratchet-lever-hoist"
  },
  {
    title: "Geared Traveling Trolley",
    category: "Rigging Hardware",
    description: "Heavy-duty geared trolley providing smooth, adjustable movement along I-beams for heavy loads.",
    color: "from-orange-700/40 to-red-900/40",
    image: "/products/geared-trolley.png",
    link: "/products/geared-traveling-trolley"
  }
];

export default function Projects() {
  return (
    <section id="products" className="w-full relative py-32 px-6 md:px-24 bg-gradient-to-b from-[#3d1607] via-[#1a0a04] to-[#121212] overflow-hidden -mt-[20vh] pt-[30vh]">
      {/* Cinematic styling matching the sequence */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-black/10 to-black/40 z-0" />
      
      <div className="absolute inset-0 pointer-events-none opacity-80 z-0" style={{
        background: 'radial-gradient(circle at center, rgba(160, 20, 20, 0.05) 20%, rgba(18,18,18,0.8) 100%)'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white/90">
            Our <span className="font-semibold text-white">Products</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mt-8 mb-8 rounded-full" />
          <p className="text-gray-400 font-light text-lg max-w-xl">
            A comprehensive range of industrial lifting solutions, meticulously tested to exceed performance and safety standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-end h-[400px] md:h-[500px] bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden md:hover:border-white/30 md:hover:shadow-[0_0_40px_rgba(220,38,38,0.15)] transition-all duration-500 cursor-pointer w-full"
              >
                {/* Product Machine Render — always visible (low opacity) on mobile, hover-reveal on desktop */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 z-0 mix-blend-lighten
                    opacity-30 scale-100
                    md:opacity-0 md:scale-105 md:group-hover:opacity-70 md:group-hover:scale-100"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Gradient dark color blend — always on mobile, hover-only on desktop */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#1a0a04]/90 via-[#1a0a04]/50 to-transparent z-0
                  opacity-100
                  md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Colored brand tinted layer overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-0 mix-blend-overlay
                  opacity-60
                  md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 mt-auto">
                  <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-2">
                    {project.category}
                  </p>
                  <h4 className="text-2xl md:text-4xl font-semibold mb-4">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 font-light max-w-md
                    opacity-100
                    md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                    {project.description}
                  </p>
                </div>

                {/* View Project Button — desktop only hover */}
                <div className="absolute top-8 right-8 z-20 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 hidden md:flex">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-white text-white group-hover:text-[#121212] transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Mobile tap arrow — always visible on mobile */}
                <div className="absolute top-6 right-6 z-20 md:hidden">
                  <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-white/10 text-white">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            );

            return project.link !== "#" ? (
              <Link href={project.link} key={project.title} className="block w-full">
                {CardContent}
              </Link>
            ) : (
              <div key={project.title} className="block w-full">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
