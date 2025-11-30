import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import ProfileSection from './components/ProfileSection';
import FuturisticButton from './components/FuturisticButton';
import { PROFILE_DATA, LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-brand-black text-white selection:bg-brand-gold selection:text-black overflow-hidden">
      
      {/* Dynamic Background */}
      <ParticleBackground />

      {/* Main Glassmorphism Container */}
      <main className="relative z-10 w-full max-w-lg mt-4 mb-10">
        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-brand-navy/40 border border-brand-royal/30 p-8 md:p-10 relative overflow-hidden shadow-2xl shadow-brand-black/80">
            
            {/* Corner Accents - Gold */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-brand-gold/70"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-gold/70"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-gold/70"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-brand-gold/70"></div>

            {/* Scanline/Texture Effect Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

            {/* Content */}
            <ProfileSection data={PROFILE_DATA} />

            <div className="space-y-4 mt-8">
              {LINKS.map((link) => (
                <FuturisticButton key={link.id} item={link} />
              ))}
            </div>

            {/* Footer / Copyright */}
            <div className="mt-12 text-center text-xs font-exo text-gray-500 uppercase tracking-widest flex flex-col gap-1 items-center">
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-brand-royal to-transparent mb-2"></div>
                <span className="text-brand-gold/60">© 2026 Juan Pablo Angel</span>
                <span className="opacity-40">Atleta y Coach Men's Physique</span>
            </div>
        </div>
      </main>
    </div>
  );
};

export default App;