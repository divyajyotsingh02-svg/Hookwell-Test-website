"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 105;

const getFramePath = (index: number) =>
  `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.041s.png`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      // fallback in case of load error so we don't stall forever
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setIsLoaded(true);
        }
      }
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use dpr for crisp canvas
    const dpr = window.devicePixelRatio || 1;

    const render = (index: number) => {
      const currentImage = images[Math.floor(index)];
      if (!currentImage) return;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      ctx.scale(dpr, dpr);

      const hRatio = window.innerWidth / currentImage.width;
      const vRatio = window.innerHeight / currentImage.height;
      
      // Sweet spot: on mobile use 75% of cover ratio (neither full cover crop nor contain letterbox).
      // On desktop, cover + 15% to hide the watermark.
      const isMobile = window.innerWidth < 768;
      const ratio = isMobile
        ? Math.max(hRatio, vRatio) * 0.75
        : Math.max(hRatio, vRatio) * 1.15;

      const centerShift_x = (window.innerWidth - currentImage.width * ratio) / 2;
      const centerShift_y = (window.innerHeight - currentImage.height * ratio) / 2;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.drawImage(
        currentImage,
        0,
        0,
        currentImage.width,
        currentImage.height,
        centerShift_x,
        centerShift_y,
        currentImage.width * ratio,
        currentImage.height * ratio
      );
    };

    render(Number(currentIndex.get()));

    const unsubscribe = currentIndex.on("change", (latest) => {
      render(latest);
    });

    const handleResize = () => {
      render(Number(currentIndex.get()));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded, images, currentIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#121212] w-full">
      <Overlay progress={scrollYProgress} />
      
      <div 
        className="sticky top-0 left-0 w-full h-screen overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
        }}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-sm font-medium tracking-widest uppercase"
            >
              Loading Sequence...
            </motion.div>
          </div>
        )}
        <canvas ref={canvasRef} className="w-full h-full block" />
        
        {/* Dark vignette & stronger black gradient for high readability over images */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/30 to-black/20" />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.3) 30%, rgba(18,18,18,0.95) 120%)'
        }} />
      </div>
    </div>
  );
}
