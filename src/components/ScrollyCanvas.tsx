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
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Draw helper — uses whatever images are available
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const safeIndex = Math.min(Math.floor(index), imagesRef.current.length - 1);
    const currentImage = imagesRef.current[safeIndex];
    if (!currentImage?.complete || !currentImage.naturalWidth) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);

    const hRatio = window.innerWidth / currentImage.width;
    const vRatio = window.innerHeight / currentImage.height;
    const isMobile = window.innerWidth < 768;
    const ratio = isMobile
      ? Math.max(hRatio, vRatio) * 0.75
      : Math.max(hRatio, vRatio) * 1.15;

    const centerShift_x = (window.innerWidth - currentImage.width * ratio) / 2;
    const centerShift_y = (window.innerHeight - currentImage.height * ratio) / 2;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(
      currentImage,
      0, 0,
      currentImage.width, currentImage.height,
      centerShift_x, centerShift_y,
      currentImage.width * ratio, currentImage.height * ratio
    );
  };

  // Phase 1: Load the first frame immediately, show canvas ASAP
  useEffect(() => {
    const firstImg = new Image();
    firstImg.src = getFramePath(0);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      setFirstFrameReady(true);
    };
    firstImg.onerror = () => {
      // Still try to continue even if first frame fails
      setFirstFrameReady(true);
    };
  }, []);

  // Phase 2: Load remaining frames in the background after first frame shows
  useEffect(() => {
    if (!firstFrameReady) return;

    let loadedCount = 1; // first frame already done
    // Pre-fill so index access is safe
    if (!imagesRef.current[0]) loadedCount = 0;

    for (let i = 1; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      const capturedIndex = i;
      img.onload = () => {
        imagesRef.current[capturedIndex] = img;
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setAllLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setAllLoaded(true);
        }
      };
    }
  }, [firstFrameReady]);

  // Draw on scroll — works from first frame onwards
  useEffect(() => {
    if (!firstFrameReady) return;

    drawFrame(Number(currentIndex.get()));

    const unsubscribe = currentIndex.on("change", (latest) => {
      drawFrame(latest);
    });

    const handleResize = () => {
      drawFrame(Number(currentIndex.get()));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstFrameReady, currentIndex]);

  return (
    <div ref={containerRef} className="relative bg-[#121212] w-full" style={{ height: '500svh' }}>
      <Overlay progress={scrollYProgress} />
      
      <div 
        className="sticky top-0 left-0 w-full overflow-hidden"
        style={{
          height: '100svh',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          touchAction: 'pan-y',
        }}
      >
        {/* Show loading screen only until first frame is ready */}
        {!firstFrameReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-sm font-medium tracking-widest uppercase"
            >
              Loading...
            </motion.div>
          </div>
        )}

        {/* Subtle "loading remaining frames" indicator — shown until all are loaded */}
        {firstFrameReady && !allLoaded && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <div className="w-24 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-white/40 rounded-full"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
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
