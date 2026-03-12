"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ProductClientPage({ product }: { product: Product }) {
  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-red-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-end pb-24 px-6 md:px-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent z-10" />
        
        {/* Cinematic 3D Render / Product Image */}
        {product.imagePath && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 z-0 flex items-center justify-end md:justify-center overflow-hidden mix-blend-lighten pointer-events-none pr-[-20%] md:pr-0 origin-bottom"
          >
            <div 
              className="w-full h-full md:w-[80%] md:h-[120%] bg-contain bg-right md:bg-center bg-no-repeat opacity-[0.85] translate-y-12 md:translate-y-24"
              style={{ backgroundImage: `url(${product.imagePath})` }}
            />
          </motion.div>
        )}

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <Link href="/#products" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs tracking-widest uppercase transition-colors mb-8 group">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transform group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Products
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-2 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              {product.name}
            </h1>
            <p className="text-xl md:text-3xl font-light text-white/80 tracking-tight max-w-3xl">
              {product.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex flex-col items-start gap-2">
            <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs">Overview</span>
            <div className="w-12 h-[1px] bg-red-500" />
          </div>
          <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-300">
            {product.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-6 inline-flex flex-col items-start gap-2">
            <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs">Key Features</span>
            <div className="w-12 h-[1px] bg-red-500" />
          </div>
          <ul className="space-y-4">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex flex-col gap-1 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <span className="text-white/80 font-light text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 px-6 md:px-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter">
              Technical <span className="font-semibold text-white">Specs</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mt-6 rounded-full" />
          </motion.div>

          {/* Conditional Rendering of Spec Types */}
          {product.specsType === "table" && (
            <div className="overflow-x-auto w-full bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    {product.specs.headers.map((header: string, idx: number) => (
                      <th key={idx} className="py-6 px-6 font-semibold uppercase tracking-[0.1em] text-xs md:text-sm text-red-500 whitespace-nowrap bg-white/5">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.specs.rows.map((row: string[], rowIdx: number) => (
                    <tr key={rowIdx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                      {row.map((cell: string, cellIdx: number) => (
                        <td key={cellIdx} className={`py-5 px-6 text-sm font-light ${cellIdx === 0 ? 'text-white/90 min-w-[200px]' : 'text-gray-400 font-mono'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {product.specsType === "models" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.specs.map((model: any, idx: number) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-red-500/50 transition-colors group">
                  <div className="mb-6 flex justify-between items-end border-b border-white/10 pb-4">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">{model.cap}</h3>
                    <span className="text-xs uppercase tracking-widest text-white/50">{model.brand}</span>
                  </div>
                  
                  <ul className="space-y-4">
                    {Object.entries(model).map(([key, value]) => {
                      if (key === 'cap' || key === 'brand') return null;
                      // Format key slightly (e.g., mainMotor -> Main Motor)
                      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                      return (
                        <li key={key} className="flex flex-col gap-1">
                          <span className="text-[10px] uppercase tracking-widest text-red-500/80">{formattedKey}</span>
                          <span className="text-sm font-light text-gray-300">{value as string}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sticky CTA Footer */}
      <div className="fixed bottom-0 left-0 w-full z-50 p-6 md:p-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-end">
          <a 
            href="/#contact" 
            className="pointer-events-auto px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-bold tracking-[0.2em] uppercase hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:scale-105 transition-all duration-300 backdrop-blur-md"
          >
            Request Quote for {product.name}
          </a>
        </div>
      </div>

    </main>
  );
}
