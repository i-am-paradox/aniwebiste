'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StorySection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Horizontal Scroll Effect: Moves Left to Right as you scroll down
    const x = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section id="story" ref={containerRef} className="bg-[#050505] min-h-screen text-white relative z-20 overflow-hidden">
            {/* Hero */}
            <div className="h-[70vh] flex items-end pb-24 px-6 md:px-12 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 contrast-125"
                    style={{ backgroundImage: "url('/aniwebiste/images/story-hero.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

                <div className="relative z-10 w-full overflow-hidden">
                    <motion.h1
                        style={{ x, opacity }}
                        className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 whitespace-nowrap"
                    >
                        THE SILENT REVOLUTION.
                    </motion.h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-24 space-y-24 text-lg md:text-2xl leading-relaxed text-white/80">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px", once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-emerald-500 font-bold">2024.</span> We realized that the world had gotten too loud.
                    Notification chimes, traffic noise, the hum of servers. Silence became the ultimate luxury.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px", once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Paradox was born not in a boardroom, but in an anechoic chamber.
                    We stripped away marketing fluff, plastic components, and artificial bass boosts.
                    What remained was the <span className="text-white font-bold">Paradox One</span>.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px", once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-light text-white pt-12 border-t border-white/10"
                >
                    "We don't sell headphones.<br />We frame silence."
                </motion.p>
            </div>
        </section>
    );
}
