'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';

const frameCount = 192;

// Helper to generate image paths
const getImagePath = (index: number) => {
  // Filename format: 00001.jpg
  // Images are 1-based index in the folder (00001.jpg), but our loop is 0-based.
  const paddedIndex = (index + 1).toString().padStart(5, '0');
  return `/images/sequence/${paddedIndex}.jpg`;
};

export default function KeyboardScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // Enhanced Cinematic Text Transforms
  // Opacity
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);

  // Y-Translate (Float Up Effect)
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [50, 0, -50]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [50, 0, -50]);
  const y4 = useTransform(scrollYProgress, [0.85, 1], [50, 0]);

  // Blur Effect (Focus Pull)
  const blur1 = useTransform(scrollYProgress, [0, 0.15], ["0px", "10px"]);
  const blur2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], ["10px", "0px", "10px"]);
  const blur3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], ["10px", "0px", "10px"]);

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    const onLoad = () => {
      loadedCount++;
      if (loadedCount === frameCount) {
        setImages(imgArray);
        setLoading(false);
      }
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getImagePath(i);
      img.onload = onLoad;
      // Handle error case to prevent sticking if one frame fails
      img.onerror = () => {
        console.warn(`Failed to load frame ${i}`);
        onLoad();
      }
      imgArray.push(img);
    }
  }, []);

  // Render Canvas
  const render = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Handle HiDPI displays for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    // Scale context to match DPR
    ctx.scale(dpr, dpr);

    // CSS size must match window size
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // Maximize Quality
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const scale = Math.min(window.innerWidth / img.width, window.innerHeight / img.height);
    const x = (window.innerWidth / 2) - (img.width / 2) * scale;
    const y = (window.innerHeight / 2) - (img.height / 2) * scale;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useMotionValueEvent(currentIndex, "change", (latest) => {
    if (!loading && images.length > 0) {
      const index = Math.round(latest);
      requestAnimationFrame(() => render(index));
    }
  });

  // Initial render when loading finishes
  useEffect(() => {
    if (!loading && images.length > 0) {
      render(0);
    }
  }, [loading, images]);

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-[#050505]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">

        {/* Tech HUD Overlay (Intelligent Watermark Hiding) - Protected by Signature */}
        <TechHUD />

        {/* Gradient Overlay for seamless blending */}

        {/* Gradient Overlay for seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none opacity-50" />

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center text-white/40">
            <div className="animate-spin h-8 w-8 border-2 border-white/20 border-t-white rounded-full"></div>
          </div>
        )}
        {!loading && images.length > 0 && images[0].naturalWidth === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-red-500/80 bg-black/80 z-50">
            <p>⚠️ Images not found in public/images/sequence/</p>
          </div>
        )}

        {/* Canvas with Fade Mask */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain"
          style={{
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)'
          }}
        />

        {/* Grain Overlay - Cinematic Texture to mask low res */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-20 mix-blend-overlay overflow-hidden">
          <div className="w-[200%] h-[200%] -left-[50%] -top-[50%] bg-noise animate-grain absolute"></div>
        </div>

        {/* Text Overlays with Kinetic Typography */}
        <motion.div style={{ opacity: opacity1, y: y1, filter: `blur(${blur1})` }} className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl text-center px-4">
            Paradox.<br /><span className="text-4xl md:text-6xl font-light tracking-widest text-white/40">GENESIS</span>
          </h1>
        </motion.div>

        <motion.div style={{ opacity: opacity2, y: y2, filter: `blur(${blur2})` }} className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto px-8 pointer-events-none z-30">
          <div className="max-w-2xl">
            <h2 className="text-sm md:text-base font-mono text-emerald-500 mb-4 tracking-[0.3em] uppercase">Architecture</h2>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-2 leading-tight">
              Precision<br />Engineering.
            </h2>
            <p className="text-white/50 text-xl font-light border-l border-emerald-500/50 pl-4 mt-6">
              Every component placed with sub-millimeter accuracy. No glue. No compromise.
            </p>
          </div>
        </motion.div>

        <motion.div style={{ opacity: opacity3, y: y3, filter: `blur(${blur3})` }} className="absolute inset-0 flex items-center justify-end max-w-7xl mx-auto px-8 pointer-events-none z-30">
          <div className="max-w-2xl text-right">
            <h2 className="text-sm md:text-base font-mono text-emerald-500 mb-4 tracking-[0.3em] uppercase">Material Science</h2>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-2 leading-tight">
              Titanium<br />Chassis.
            </h2>
            <p className="text-white/50 text-xl font-light border-r border-emerald-500/50 pr-4 mt-6">
              Aerospace-grade alloy for maximum rigidity and zero resonance.
            </p>
          </div>
        </motion.div>

        <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute inset-0 flex items-end justify-center pb-32 pointer-events-none z-30">
          <button className="px-12 py-5 bg-white text-black rounded-none border border-white hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold text-xl tracking-widest uppercase pointer-events-auto">
            Experience It
          </button>
        </motion.div>

      </div>
    </div>
  );
}

import { verifyIdentity, getSignature } from '@/app/core/Identity';

function TechHUD() {
  // SECURITY CHECK: If signature is tampered, HUD glitches/fails
  const isSecure = verifyIdentity();
  const signature = getSignature();

  if (!isSecure) return null; // Paradox Defense Mechanism: HUD disappears if signature removed

  return (
    <>
      <div className="absolute inset-0 pointer-events-none z-20 p-8 md:p-12 flex flex-col justify-between mix-blend-difference">
        {/* Top Row */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono">System Status</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-emerald-500/80">ONLINE</span>
            </div>
          </div>
          {/* Top Right */}
          <div className="text-right flex flex-col items-end gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono">Audio Profile</span>
            <div className="border border-white/10 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-white/60">
              FLAC • 24-BIT
            </div>
          </div>
        </div>

        {/* Bottom Row - Strategically placed to cover watermarks */}
        <div className="flex justify-between items-end w-full">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono">Output Level</span>
            <div className="flex gap-1 h-3 items-end">
              {[40, 60, 30, 80, 50, 90, 40].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-1 bg-white/20 rounded-t-sm" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Watermark Blocker - Start - Absolutely positioned to hit the true corner */}
      <div className="absolute bottom-0 right-0 z-30 bg-black/95 backdrop-blur-xl pl-8 pt-6 pr-6 pb-4 border-l border-t border-white/10 rounded-tl-2xl">
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono mb-1 text-right">Paradox Core</div>
        <div className="text-xs font-mono text-white/50 text-right">v4.0.12 BUILD</div>
        <div className="text-[8px] font-mono text-emerald-500/30 text-right pt-1 tracking-widest">{signature}</div>
        {/* Decorative tech lines */}
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-emerald-500/50"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-emerald-500/50"></div>
      </div>
    </>
  );
}
