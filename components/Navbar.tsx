'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl px-2 py-2">
            <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl shadow-emerald-900/10">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-widest uppercase text-white hover:text-emerald-400 transition-colors">
                    PDX
                </Link>

                {/* Center Menu */}
                <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">
                    <Link href="#specs" className="hover:text-white transition-colors relative group">
                        Specs
                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="#story" className="hover:text-white transition-colors relative group">
                        Story
                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="#accessories" className="hover:text-white transition-colors relative group">
                        Gear
                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover:w-full"></span>
                    </Link>
                </div>

                {/* CTA */}
                <button className="px-6 py-2 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-400 transition-colors">
                    Pre-order
                </button>
            </div>
        </nav>
    );
}
