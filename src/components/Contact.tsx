"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="w-full relative py-32 px-6 md:px-24 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #1a0803, #130805, #0d0905)' }}>
      {/* Warm amber radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-70 z-0" style={{
        background: 'radial-gradient(circle at 70% 50%, rgba(200, 70, 10, 0.15) 0%, transparent 60%)'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white/90">
            Contact <span className="font-semibold text-white">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mt-8 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-12"
          >
            <div className="group">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 group-hover:text-red-500 transition-colors duration-300">CEO</h3>
              <p className="text-2xl md:text-3xl font-light text-white/90">Prabhpal Singh</p>
              <a href="tel:+919899128707" className="text-lg font-light text-white/60 hover:text-red-400 transition-colors inline-block mt-2">
                +91 9899128707
              </a>
            </div>

            <div className="group mt-6">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 group-hover:text-red-500 transition-colors duration-300">Representative</h3>
              <p className="text-2xl md:text-3xl font-light text-white/90">Divyajyot Singh</p>
              <a href="tel:+918920680566" className="text-lg font-light text-white/60 hover:text-red-400 transition-colors inline-block mt-2">
                +91 8920680566
              </a>
            </div>
            
            <div className="group">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 group-hover:text-red-500 transition-colors duration-300">Location</h3>
              <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed">
                NW 215<br />
                Khyala, Vishnu Garden<br />
                New Delhi 110018
              </p>
            </div>

            {/* Removed duplicate Phone group since numbers are inline now */}
          </motion.div>

          {/* Interactive Google Map */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-7 h-[450px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group bg-white/5 backdrop-blur-sm"
          >
            {/* Cinematic dark map overlay to blend with the aesthetic */}
            <div className="absolute inset-0 bg-[#121212]/30 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
            
            <iframe
              src="https://maps.google.com/maps?q=NW+215+khyala+vishnu+garden+new+delhi+110018&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.8] contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 transition-all duration-700 w-full h-full object-cover"
            />
            
            {/* Corner Decorative Elements */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20 z-20 pointer-events-none group-hover:border-red-500/50 transition-colors duration-500" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20 z-20 pointer-events-none group-hover:border-red-500/50 transition-colors duration-500" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
