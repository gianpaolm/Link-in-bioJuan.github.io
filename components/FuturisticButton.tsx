import React from 'react';
import { LinkItem } from '../types';

interface FuturisticButtonProps {
  item: LinkItem;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ item }) => {
  const Icon = item.icon;
  const isPending = item.url === '#';

  const handleClick = (e: React.MouseEvent) => {
    if (isPending) {
      e.preventDefault();
      alert('Esta sección estará disponible próximamente.');
    }
  };

  return (
    <a
      href={item.url}
      onClick={handleClick}
      target={isPending ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={`
        group relative w-full max-w-md mx-auto h-16 
        flex items-center justify-between px-6 
        bg-brand-navy/60 backdrop-blur-md
        border border-brand-royal/50
        text-gray-100 font-exo font-bold tracking-wider uppercase
        transition-all duration-300 ease-out
        ${isPending ? 'opacity-70 cursor-not-allowed hover:bg-brand-navy/60' : 'hover:scale-105 hover:-translate-y-1 hover:bg-brand-navy/90 cursor-pointer'}
        ${item.color}
      `}
      style={{
        clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
      }}
    >
      {/* Decorative Corner Glow */}
      {!isPending && (
        <>
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </>
      )}

      {/* Button Content */}
      <span className="flex items-center gap-4 z-10 transition-colors duration-300">
        <Icon className={`w-5 h-5 transition-transform duration-300 ${!isPending && 'group-hover:scale-110'}`} />
        <span className="text-sm md:text-base">{item.label} {isPending && <span className="text-[10px] text-gray-400 normal-case ml-2">(Pronto)</span>}</span>
      </span>

      {/* Hover Arrow/Indicator */}
      {!isPending && (
        <span className="relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-gold">
          &gt;&gt;
        </span>
      )}
      
      {/* Background Fill Effect on Hover */}
      {!isPending && (
        <div className="absolute inset-0 bg-gradient-to-r from-brand-royal/20 to-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </a>
  );
};

export default FuturisticButton;