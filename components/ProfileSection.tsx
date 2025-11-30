import React from 'react';
import { ProfileData } from '../types';
import { Play, Instagram } from 'lucide-react';

interface ProfileSectionProps {
  data: ProfileData;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 z-10 relative">
      {/* Avatar Container with Rotating Rings - Gold/Navy Theme */}
      <div className="relative w-40 h-40 mb-6">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-2 border-dashed border-brand-gold/40 rounded-full animate-spin-slow"></div>
        {/* Inner Ring */}
        <div className="absolute inset-2 border border-brand-royal rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
        
        {/* Image */}
        <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-brand-gold shadow-[0_0_20px_rgba(255,195,0,0.2)] bg-black group-hover:shadow-[0_0_30px_rgba(255,195,0,0.4)] transition-all duration-500">
          <img
            src={data.imageUrl}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Tech Decorators */}
        <div className="absolute -right-1 top-1/2 w-3 h-3 bg-brand-yellow rounded-none rotate-45 animate-pulse-fast shadow-[0_0_10px_#FFD60A]"></div>
        <div className="absolute -left-1 top-1/2 w-3 h-3 bg-brand-royal rounded-none rotate-45 animate-pulse-fast delay-75"></div>
      </div>

      {/* Name and Title */}
      <h1 className="text-3xl md:text-4xl font-orbitron font-bold text-white tracking-widest uppercase mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        {data.name}
      </h1>
      
      <div className="px-6 py-1 bg-brand-gold/10 border-x border-brand-gold/50 mb-6 transform -skew-x-12">
        <h2 className="text-brand-gold font-orbitron text-sm md:text-lg font-bold tracking-[0.3em] transform skew-x-12">
          {data.title}
        </h2>
      </div>

      {/* Description */}
      <p className="font-exo text-gray-300 text-sm md:text-base max-w-md leading-relaxed px-4 mb-8">
        {data.description}
      </p>

      {/* VIDEO SECTION - INSTAGRAM REEL */}
      <div className="w-full max-w-[350px] mb-4 relative group overflow-hidden rounded-xl border border-brand-royal/50 bg-black/80 shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50 z-20"></div>
        
        {/* Vertical Reel Container */}
        <div className="relative w-full aspect-[9/16]">
           <iframe 
             className="w-full h-full object-cover rounded-xl"
             src="https://www.instagram.com/reel/DRmfEgYjgrF/embed" 
             title="Motivation Reel"
             frameBorder="0" 
             allowFullScreen
             scrolling="no"
           ></iframe>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full py-2 px-4 flex items-center justify-between bg-brand-navy/90 backdrop-blur-md border-t border-brand-royal/30 z-20">
            <span className="text-xs font-orbitron text-brand-gold tracking-wider flex items-center gap-2">
                <Instagram size={14} className="stroke-brand-gold" />
                MOTIVACIÓN
            </span>
            <span className="text-[10px] text-gray-400 font-exo flex items-center gap-1">
              VER EN IG <Play size={8} className="fill-current"/>
            </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;