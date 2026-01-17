import KeyboardScroll from '@/components/KeyboardScroll';
import Navbar from '@/components/Navbar';
import StorySection from '@/components/StorySection';
import SpecsSection from '@/components/SpecsSection';
import AccessoriesSection from '@/components/AccessoriesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-emerald-500/30 selection:text-emerald-500">
      <Navbar />
      <KeyboardScroll />
      <StorySection />
      <SpecsSection />
      <AccessoriesSection />

      <footer className="py-12 bg-black text-center border-t border-white/5">
        <p className="text-white/20 text-xs uppercase tracking-[0.3em]">© 2024 Paradox Audio.</p>
        <p className="text-white/10 text-[10px] mt-2 font-mono">DESIGNED FOR THE FUTURE</p>
      </footer>
    </main>
  );
}
