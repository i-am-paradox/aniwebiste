'use client';

import { motion } from 'framer-motion';

export default function ProductSpecs() {
    return (
        <section className="relative z-10 bg-[#050505] text-white py-24 px-6 md:px-12 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">
                        Beyond Reality.
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        The Paradox One isn't just a headphone. It's an auditory environment.
                        Engineered with aerospace-grade titanium and powered by our proprietary
                        Flux-Drive™ technology.
                    </p>
                </motion.div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { label: 'Battery', value: '60 Hours' },
                        { label: 'Latency', value: '< 1ms' },
                        { label: 'Material', value: 'Grade 5 Titanium' },
                        { label: 'Drivers', value: '50mm Beryllium' },
                        { label: 'Noise Cancellation', value: '-45dB Hybrid ANC' },
                        { label: 'Connectivity', value: 'Bluetooth 5.4 + Lossless' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border-t border-white/10 pt-6"
                        >
                            <h3 className="text-white/40 text-sm uppercase tracking-widest mb-2">{item.label}</h3>
                            <p className="text-2xl md:text-4xl font-light">{item.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="text-center pt-24 border-t border-white/10">
                    <h3 className="text-3xl font-medium mb-8">Ready to hear the truth?</h3>
                    <button className="bg-white text-black text-xl md:text-2xl px-12 py-6 rounded-full font-bold hover:scale-105 transition-transform">
                        Buy Paradox One — $599
                    </button>
                    <p className="mt-8 text-white/30 text-sm uppercase tracking-widest">
                        Designed in California. Made in Silence.
                    </p>
                </div>
            </div>
        </section>
    );
}
