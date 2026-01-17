'use client';

import { motion } from 'framer-motion';

const accessories = [
    {
        name: "Carbon Vault",
        price: "$129",
        desc: "Aerospace-grade carbon fiber carrying case.",
        image: "/images/accessories-hero.png" // Re-using for demo, would ideally be unique
    },
    {
        name: "Helix Cable",
        price: "$89",
        desc: "Oxygen-free copper, hand-braided, 3m length.",
        image: "/images/accessories-hero.png"
    },
    {
        name: "Titanium Stand",
        price: "$149",
        desc: "Solid block milled titanium headphone rest.",
        image: "/images/accessories-hero.png"
    }
];

export default function AccessoriesSection() {
    return (
        <section id="accessories" className="bg-[#050505] min-h-screen text-white relative z-20">
            <div className="pt-24 pb-24 px-6 md:px-12 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
                >
                    ARMORY.
                </motion.h1>
                <p className="text-white/50 text-xl">Enhance your listening environment.</p>
            </div>

            {/* Grid */}
            <div className="px-6 md:px-12 pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {accessories.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative aspect-square bg-white/5 rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80"
                                style={{ backgroundImage: `url('${item.image}')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                            <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="flex justify-between items-end mb-2">
                                    <h3 className="text-2xl font-bold">{item.name}</h3>
                                    <span className="font-mono text-emerald-500">{item.price}</span>
                                </div>
                                <p className="text-sm text-white/50">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
