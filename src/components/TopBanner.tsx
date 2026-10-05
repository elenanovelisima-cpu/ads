import React, { useState, useEffect } from 'react';

interface TopBannerProps {
  onClaimDiscount: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onClaimDiscount }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      aria-label="Aviso de plazas limitadas"
      className={`sticky top-0 z-40 bg-[#030712] border-b border-slate-900 transition-all duration-200 rounded-none shadow-none ${
        isSticky ? 'py-2 px-3' : 'py-2.5 px-3 sm:px-4'
      }`}
      style={{ borderRadius: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
    >
      {isSticky ? (
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2 text-center text-xs sm:text-sm">
          <span className="w-2 h-2 rounded-none bg-[#00a651] shrink-0 shadow-[0_0_8px_#00a651] animate-pulse" />
          <span className="text-white font-medium">
            Hoy quedan <span className="text-[#00a651] font-bold">3 plazas disponibles</span>.
          </span>
          <button
            onClick={onClaimDiscount}
            className="text-xs sm:text-sm font-bold text-white underline underline-offset-4 hover:text-[#00a651] transition-colors cursor-pointer shrink-0 inline-flex items-center gap-0.5 ml-1"
          >
            Reservar plaza →
          </button>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto text-[11px] xs:text-xs sm:text-sm text-center leading-snug" style={{ textAlign: 'center' }}>
          <span className="inline-flex items-center gap-1.5 align-baseline mr-1.5">
            <span className="w-2 h-2 rounded-none bg-[#00a651] shrink-0 shadow-[0_0_8px_#00a651] animate-pulse inline-block" />
            <strong className="font-bold text-white">Límite por ciudad:</strong>
          </span>
          <span className="text-slate-200">Para garantizar siempre los primeros puestos.</span>{' '}
          <span className="text-[#00a651] font-bold">Hoy quedan 3 plazas disponibles.</span>{' '}
          <button
            onClick={onClaimDiscount}
            className="font-bold text-white underline underline-offset-2 hover:text-[#00a651] transition-colors cursor-pointer inline-flex items-center ml-1"
          >
            <span className="xs:hidden">Reservar →</span>
            <span className="hidden xs:inline">Reservar plaza →</span>
          </button>
        </div>
      )}
    </aside>
  );
};

