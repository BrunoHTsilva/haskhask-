import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "INICIANDO PROTOCOLO SISTEMA X...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center border-b border-cyber-green/30 bg-cyber-black overflow-hidden">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #00ff41 1px, transparent 1px), linear-gradient(to bottom, #00ff41 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div className="z-10 text-center px-4">
        <div className="mb-4 text-cyber-green text-sm tracking-[0.5em] animate-pulse">
          ACESSO CONCEDIDO
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyber-green to-cyber-dim drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">
          SYSTEM X
        </h1>
        <div className="mt-6 h-8 text-xl text-cyber-bright">
          {text}<span className="animate-blink">_</span>
        </div>
        
        <p className="mt-8 max-w-2xl mx-auto text-cyber-green/80 text-lg leading-relaxed border-l-2 border-cyber-green pl-6 text-left">
          Uma jornada visual através da arquitetura descentralizada e aplicações de alta performance.
          Role para descriptografar os dados.
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown size={48} className="text-cyber-green drop-shadow-[0_0_10px_rgba(0,255,65,1)]" />
      </div>
    </div>
  );
};