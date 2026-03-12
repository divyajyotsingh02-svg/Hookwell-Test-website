"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgOpacity = useTransform(scrollY, [0, 200], [0, 0.95]);
  const blur = useTransform(scrollY, [0, 200], [0, 16]);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${isScrolled ? 'py-4 border-black/10' : 'py-8 border-transparent'}`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
        backdropFilter: `blur(${blur}px)`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-24 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a href="#" className="flex items-center group">
          <div className={`relative w-[280px] h-[65px] flex items-center justify-center transition-transform group-hover:scale-105 ${!isScrolled ? 'brightness-0 invert opacity-90' : 'opacity-90'}`}>
            <Image 
              src="/hookwell-logo-bw.png" 
              alt="Hookwell Engineers Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links (Top Right) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 justify-end w-full max-w-2xl">
          <a href="#about" className={`text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors ${isScrolled ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white'}`}>
            About
          </a>
          <a href="#products" className={`text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors ${isScrolled ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white'}`}>
            Products
          </a>
          <a href="#contact" className={`text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors ${isScrolled ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white'}`}>
            Contact
          </a>
          <a href="https://www.indiamart.com/hookwell-engineers/" target="_blank" rel="noopener noreferrer" className={`text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors flex items-center gap-1 ${isScrolled ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white'}`}>
            IndiaMART
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="opacity-50">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          {/* Primary CTA Button */}
          <a 
            href="#contact" 
            className="ml-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-[9px] font-bold tracking-[0.2em] uppercase hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button (simplified for aesthetic) */}
        <div className="md:hidden flex items-center">
          <button className="text-white hover:text-red-500 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
