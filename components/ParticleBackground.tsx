import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {/* Background Image with slow pan animation */}
      {/* Changed to a darker, more atmospheric gym image to suit the 'Luxury/Elite' vibe better */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center animate-pan-image opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop')` 
        }}
      />
      
      {/* Heavy Gradient Overlay to ensure text readability matching the new palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-navy/90 to-brand-black mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#FFC300 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>
    </div>
  );
};

export default ParticleBackground;