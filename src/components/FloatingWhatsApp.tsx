import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../config/site';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Tooltip bubble (can be dismissed or toggled) */}
      {showTooltip && (
        <div className="relative max-w-xs bg-neutral-900 border border-neutral-700 p-3 rounded-2xl shadow-2xl text-xs text-neutral-200 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-neutral-400 hover:text-white"
            aria-label="Fechar mensagem de dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-bold text-white mb-1">
            Atendimento itech
          </p>
          <p className="text-neutral-300 pr-3 leading-relaxed">
            Dúvidas ou orçamento? Fale diretamente com nossa equipe técnica pelo WhatsApp.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-block text-[11px] font-bold text-black bg-[#FFBE0B] hover:bg-[#ffc933] px-3 py-1.5 rounded-lg uppercase tracking-wider"
          >
            Iniciar conversa
          </a>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a itech celular e informática pelo WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center gap-2.5 px-4 py-3.5 sm:px-4 sm:py-3.5 rounded-full bg-[#FFBE0B] hover:bg-[#ffc933] text-black font-bold text-xs uppercase tracking-wider shadow-xl hover:shadow-[0_0_25px_rgba(255,190,11,0.4)] transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <MessageCircle className="w-5 h-5 fill-black text-black shrink-0" />
        <span className="hidden sm:inline font-extrabold whitespace-nowrap">WhatsApp</span>
        <span className="sm:hidden font-extrabold whitespace-nowrap">Atendimento</span>
      </a>
    </div>
  );
}
