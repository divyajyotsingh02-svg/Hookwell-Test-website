"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({ 
  from, 
  to, 
  duration = 2,
  suffix = ""
}: { 
  from: number; 
  to: number; 
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  
  const spring = useSpring(from, {
    stiffness: 50,
    damping: 20,
    mass: 1,
    duration: duration * 1000
  });

  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, spring, to]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{display}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
