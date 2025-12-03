import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ScrollSection } from './components/ScrollSection';
import { SectionData } from './types';
import { Terminal, Cpu, Network, Lock } from 'lucide-react';
import { SystemStatus } from './components/SystemStatus';

const sections: SectionData[] = [
  {
    id: 'module_01',
    title: 'Processamento Neural',
    subtitle: 'Núcleo de Inteligência',
    description: 'O Site X utiliza uma arquitetura de rede neural descentralizada para processar terabytes de dados em tempo real. Nossa interface cognitiva permite que operadores visualizem fluxos de dados complexos através de abstrações tridimensionais, eliminando ruídos e focando em padrões críticos de comportamento do usuário.',
    imageUrl: 'https://picsum.photos/800/800?random=1'
  },
  {
    id: 'module_02',
    title: 'Criptografia Quântica',
    subtitle: 'Protocolo de Segurança',
    description: 'Segurança não é uma opção, é a base. Implementamos camadas de criptografia pós-quântica resistente a força bruta computacional. Cada interação no Site X é encapsulada em um contêiner efêmero, garantindo anonimato total e integridade dos dados, visualizados aqui como blocos imutáveis na nossa cadeia proprietária.',
    imageUrl: 'https://picsum.photos/800/800?random=2'
  },
  {
    id: 'module_03',
    title: 'Automação de Infraestrutura',
    subtitle: 'Auto-Scaling Botnets',
    description: 'A elasticidade do Site X é governada por agentes autônomos. Quando a demanda sobe, nossos clusters se expandem organicamente como um organismo vivo. Esta imagem representa a topologia da nossa rede de servidores distribuídos globalmente, reagindo a um pico de tráfego simulado.',
    imageUrl: 'https://picsum.photos/800/800?random=3'
  },
  {
    id: 'module_04',
    title: 'Interface Imersiva',
    subtitle: 'UX/UI Cyberpunk',
    description: 'A estética não é apenas visual, é funcional. O alto contraste e a tipografia monoespaçada reduzem a carga cognitiva, permitindo que desenvolvedores e usuários processem informações 40% mais rápido. O layout em zig-zag guia o olhar naturalmente, criando uma narrativa fluida através de dados complexos.',
    imageUrl: 'https://picsum.photos/800/800?random=4'
  }
];

function App() {
  const [showStatus, setShowStatus] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show status monitor after scrolling past 80% of the hero section
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowStatus(true);
      } else {
        setShowStatus(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeSectionData = sections.find(s => s.id === activeSectionId) || null;

  return (
    <div className="min-h-screen bg-black text-cyber-green selection:bg-cyber-green selection:text-black">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 border-b border-cyber-green/50 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
          <Terminal size={20} />
          <span>SYSTEM_X</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">[ INÍCIO ]</a>
          <a href="#" className="hover:text-white transition-colors">[ MÓDULOS ]</a>
          <a href="#" className="hover:text-white transition-colors">[ SOBRE ]</a>
          <a href="#" className="hover:text-white transition-colors">[ CONTATO ]</a>
        </div>
        <button className="px-4 py-1 border border-cyber-green text-xs hover:bg-cyber-green hover:text-black transition-all">
          LOGIN
        </button>
      </nav>

      <Hero />

      <main>
        {sections.map((section, index) => (
          <ScrollSection
            key={section.id}
            data={section}
            index={index}
            isReversed={index % 2 !== 0}
            onVisible={setActiveSectionId}
          />
        ))}
      </main>

      {showStatus && <SystemStatus activeSection={activeSectionData} />}

      <footer className="py-12 border-t border-cyber-green/30 bg-cyber-dark text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-center gap-8 mb-8">
            <Cpu className="text-cyber-green opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
            <Network className="text-cyber-green opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
            <Lock className="text-cyber-green opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
          <p className="text-cyber-green/60 text-sm mb-4">
            © 2024 SYSTEM X INC. TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="text-cyber-green/30 text-xs font-mono">
            TERMINAL_SESSION_ID: {Math.random().toString(36).substring(7).toUpperCase()}
          </p>
        </div>
        
        {/* Footer Background Grid */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(#00ff41 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}>
        </div>
      </footer>
    </div>
  );
}

export default App;
