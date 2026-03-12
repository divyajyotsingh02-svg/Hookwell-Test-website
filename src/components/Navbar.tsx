"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgOpacity = useTransform(scrollY, [0, 200], [0, 0.95]);
  const blur = useTransform(scrollY, [0, 200], [0, 16]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 border-b ${isScrolled ? 'py-3 border-black/10' : 'py-6 md:py-10 border-transparent'}`}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
          backdropFilter: `blur(${blur}px)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-24 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center group">
            <div className={`relative w-[160px] h-[42px] md:w-[320px] md:h-[78px] flex items-center justify-start transition-transform group-hover:scale-105 ${!isScrolled ? 'brightness-0 invert opacity-90' : 'opacity-90'}`}>
              <Image 
                src="/hookwell-logo-bw.png" 
                alt="Hookwell Engineers Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation Links (Top Right) */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 justify-end w-full max-w-2xl">
            <a href="#about" className={`text-sm font-semibold tracking-[0.2em] uppercase transition-colors ${isScrolled ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white'}`}>
              About
            </a>
            <a href="#products" className={`text-sm font-semibold tracking-[0.2em] uppercase transition-colors ${isScrolled ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white'}`}>
              Products
            </a>
            <a href="#contact" className={`text-sm font-semibold tracking-[0.2em] uppercase transition-colors ${isScrolled ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white'}`}>
              Contact
            </a>
            <a href="https://www.indiamart.com/hookwell-engineers/" target="_blank" rel="noopener noreferrer" className={`text-sm font-semibold tracking-[0.2em] uppercase transition-colors flex items-center gap-1.5 ${isScrolled ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white'}`}>
              IndiaMART
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-50">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            {/* Primary CTA Button */}
            <a 
              href="#contact" 
              className="ml-4 px-7 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-bold tracking-[0.2em] uppercase hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Right Side: Quote button + Hamburger */}
          <div className="md:hidden flex items-center gap-3 relative z-[201] pointer-events-auto">
            <a 
              href="#contact"
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-[8px] font-bold tracking-[0.15em] uppercase whitespace-nowrap"
            >
              Get a Quote
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-colors p-1 ${isScrolled ? 'text-black' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-full h-screen bg-black/95 z-[199] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {/* Close button */}
            <button 
              onClick={closeMobileMenu}
              className="absolute top-6 right-5 text-white/70 hover:text-white"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="relative w-[180px] h-[50px] brightness-0 invert opacity-90">
              <Image src="/hookwell-logo-bw.png" alt="Hookwell Engineers" fill className="object-contain" />
            </div>

            <nav className="flex flex-col items-center gap-8">
              {[
                { href: "#about", label: "About" },
                { href: "#products", label: "Products" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-2xl font-light tracking-widest text-white/70 hover:text-white uppercase transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.indiamart.com/hookwell-engineers/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="text-2xl font-light tracking-widest text-white/70 hover:text-white uppercase transition-colors flex items-center gap-2"
              >
                IndiaMART
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-50">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </nav>

            <a 
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-4 px-10 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-bold tracking-[0.2em] uppercase"
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
