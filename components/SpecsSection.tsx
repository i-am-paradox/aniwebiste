'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function SpecsSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Physics Transforms
    const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]); // Full 360 rotation
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]); // Determine scale
    const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <section id="specs" ref={containerRef} className="bg-[#050505] min-h-[150vh] text-white overflow-hidden relative z-20">
            {/* Background Particles (Static for performance, could be animated) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ClientPixels />
            </div>

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Rotating Driver Image */}
                <motion.div
                    style={{ scale, rotate: rotation }}
                    className="absolute inset-0 z-0 flex items-center justify-center"
                >
                    <div
                        className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-contain bg-center bg-no-repeat opacity-80"
                        style={{ backgroundImage: "url('/images/specs-driver.png')" }} // Assuming we have this, or fallback to hero
                    />
                    {/* Fallback using existing image if specific driver not there, logic: use hero but rotated */}
                    <div
                        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-60 mix-blend-screen"
                        style={{ backgroundImage: "url('/images/specs-hero.png')" }}
                    />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                <motion.div
                    style={{ y: textY }}
                    className="relative z-10 text-center max-w-4xl px-6"
                >
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 mix-blend-overlay">BLUEPRINT.</h1>
                    <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide">
                        Inside the 50mm Beryllium Driver.
                    </p>
                </motion.div>
            </div>

            {/* Technical Deep Dive */}
            <div className="relative z-10 bg-[#050505] py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="border-l-2 border-emerald-500/50 pl-6">
                            <h3 className="text-sm text-emerald-500 font-mono mb-2">DIAPHRAGM</h3>
                            <h2 className="text-4xl font-bold mb-4">Pure Beryllium.</h2>
                            <p className="text-white/60 leading-relaxed">
                                Stiffer than steel, lighter than aluminum. Our diaphragm moves with
                                zero parasitic resonance, delivering transient response speed that is
                                physically impossible for traditional mylar drivers.
                            </p>
                        </div>
                        <div className="border-l-2 border-white/10 pl-6">
                            <h3 className="text-sm text-white/30 font-mono mb-2">VOICE COIL</h3>
                            <h2 className="text-4xl font-bold mb-4">Oxygen-Free Copper.</h2>
                            <p className="text-white/60 leading-relaxed">
                                Wound with microscopic precision to ensure maximum magnetic flux density.
                                The result is bass that doesn't just rumble—it punches.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-mono mb-6 border-b border-white/10 pb-4">RAW METRICS</h3>
                        <div className="space-y-4 font-mono text-sm md:text-base">
                            <div className="flex justify-between">
                                <span className="text-white/40">FREQ RESPONSE</span>
                                <span>4Hz - 40,000Hz</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/40">IMPEDANCE</span>
                                <span>32 Ohms</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/40">SENSITIVITY</span>
                                <span>114 dB SPL/V</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/40">THD</span>
                                <span>&lt; 0.1% @ 1kHz</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ClientPixels() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute bg-white/10 rounded-full"
                    style={{
                        width: Math.random() * 4 + 'px',
                        height: Math.random() * 4 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                    }}
                />
            ))}
        </>
    );
}
