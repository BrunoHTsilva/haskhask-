import React, { useRef, useEffect, useState } from 'react';
import { ScrollSectionProps } from '../types';

export const ScrollSection: React.FC<ScrollSectionProps> = ({ data, isReversed, index, onVisible }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onVisible(data.id);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [data.id, onVisible]);

  return (
    <div 
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center py-24 px-6 md:px-12 border-b border-cyber-green/20 relative overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Decorative Index Number Background */}
      <div className="absolute top-10 right-10 text-[10rem] md:text-[20rem] font-bold text-cyber-dim opacity-10 select-none pointer-events-none z-0">
        0{index + 1}
      </div>

      <div className={`container mx-auto max-w-7xl flex flex-col gap-16 relative z-10 ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        
        {/* Image Block */}
        <div className="flex-1 w-full group">
          <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden border-2 border-cyber-green bg-cyber-dark">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-cyber-green z-20"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-cyber-green z-20"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-cyber-green z-20"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cyber-green z-20"></div>
            
            <img 
              src={data.imageUrl} 
              alt={data.title} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0 filter contrast-125"
            />
            
            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30 pointer-events-none"></div>
            
            <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 text-xs border border-cyber-green">
              IMG_SOURCE: {data.id.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <div className={`space-y-2 ${isReversed ? 'md:text-right' : 'md:text-left'}`}>
            <h3 className="text-cyber-green/60 text-sm tracking-[0.3em] font-bold uppercase">
              // {data.subtitle}
            </h3>
            <h2 className="text-4xl md:text-6xl font-bold uppercase text-white tracking-tighter shadow-green-glow">
              {data.title}
            </h2>
            <div className={`h-1 w-24 bg-cyber-green mt-4 ${isReversed ? 'ml-auto' : 'mr-auto'}`}></div>
          </div>

          <div className={`p-6 border border-cyber-green/30 bg-cyber-dark/50 backdrop-blur-sm relative ${isReversed ? 'md:text-right' : 'md:text-left'}`}>
            <p className="text-lg md:text-xl leading-relaxed text-cyber-bright/90">
              {data.description}
            </p>
            
            {/* Decorative bits */}
            <div className="mt-6 flex items-center gap-2 text-xs text-cyber-green/50 font-mono">
              <span className="animate-pulse">●</span> 
              <span>STATUS: OPERATIONAL</span>
              <span className="mx-2">|</span>
              <span>LATENCY: 4ms</span>
            </div>
          </div>

          <button className={`mt-8 px-8 py-3 bg-transparent border border-cyber-green text-cyber-green uppercase tracking-widest hover:bg-cyber-green hover:text-black transition-all duration-300 font-bold w-fit ${isReversed ? 'self-end' : 'self-start'}`}>
            Ler Relatório Completo &gt;
          </button>
        </div>

      </div>
    </div>
  );
};
