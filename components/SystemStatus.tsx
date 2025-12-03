import React, { useState, useEffect } from 'react';
import { SectionData } from '../types';

interface SystemStatusProps {
  activeSection: SectionData | null;
}

// Helper component for consistent row styling and alignment
const InfoRow: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="flex items-start">
    <span className="text-cyber-green/60 w-28 shrink-0">{label}:</span>
    <div className="flex-1">{children}</div>
  </div>
);


export const SystemStatus: React.FC<SystemStatusProps> = ({ activeSection }) => {
  const [packets, setPackets] = useState(Math.floor(Math.random() * 8000) + 1000);
  const [load, setLoad] = useState(Math.floor(Math.random() * 40) + 15);

  useEffect(() => {
    const packetInterval = setInterval(() => {
      setPackets(p => Math.max(1000, Math.min(9999, p + Math.floor(Math.random() * 250) - 120)));
    }, 1500);
    const loadInterval = setInterval(() => {
      setLoad(l => Math.max(10, Math.min(90, l + Math.floor(Math.random() * 10) - 5)));
    }, 2000);

    return () => {
      clearInterval(packetInterval);
      clearInterval(loadInterval);
    };
  }, []);

  const currentModuleId = activeSection?.id.toUpperCase() || 'N/A';
  const currentTitle = activeSection?.title || 'AWAITING INPUT...';

  return (
    <div className="fixed bottom-6 left-6 z-40 w-full max-w-xs p-4 border border-cyber-green/30 bg-cyber-dark/80 backdrop-blur-md text-cyber-bright font-mono text-sm hidden md:block animate-fade-in">
      <div className="flex justify-between items-center border-b border-cyber-green/20 pb-2 mb-3">
        <h4 className="text-base text-cyber-green tracking-widest">// SYSTEM MONITOR</h4>
        <div className="flex items-center gap-1.5">
          <span className="text-cyber-green animate-pulse">●</span>
          <span className="text-xs">LIVE</span>
        </div>
      </div>
      <div className="space-y-1 text-xs">
        <InfoRow label="CURRENT_MODULE">{currentModuleId}</InfoRow>
        <InfoRow label="DECRYPTING">
          <span className="text-white">{currentTitle}</span>
        </InfoRow>
        <InfoRow label="CONNECTION">SECURE</InfoRow>
        <InfoRow label="DATA_PACKETS">{packets} p/s</InfoRow>
        <InfoRow label="SYSTEM_LOAD">{load}%</InfoRow>
        <InfoRow label="FIREWALL">
          <div className="flex items-center gap-2">
            <span className="animate-pulse text-cyber-green">●</span>
            <span>ACTIVE</span>
          </div>
        </InfoRow>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
