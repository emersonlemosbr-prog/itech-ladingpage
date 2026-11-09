import { ArrowDown, MessageCircle, ShieldCheck, MapPin, Calendar } from 'lucide-react';
import { getWhatsAppUrl } from '../config/site';
import { WorkbenchVisual } from './WorkbenchVisual';

export function Hero() {
  return (
    <section id="inicio" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(255,190,11,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Quiet Trust Kicker (no pill box, clean editorial text) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFBE0B] mb-5">
              <span>Assistência Técnica Especializada</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">Canindé de São Francisco, SE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.15] tracking-tight mb-6" style={{ textWrap: 'balance' }}>
              Tecnologia, confiança e cuidado com seus dispositivos.
            </h1>

            {/* Complementary Text */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">
              Manutenção especializada de celulares e computadores, além de acessórios para facilitar o seu dia a dia. Conte com a itech para cuidar da sua tecnologia.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              {/* Primary CTA: WhatsApp */}
              <a
                href={getWhatsAppUrl("Olá! Gostaria de solicitar atendimento para meu aparelho na itech.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-[#FFBE0B] hover:bg-[#ffc933] rounded-xl transition-all duration-150 shadow-md hover:shadow-[0_0_20px_rgba(255,190,11,0.3)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-4 h-4 fill-black text-black" />
                <span>Solicitar atendimento</span>
              </a>

              {/* Secondary CTA: Services anchor */}
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800/90 border border-neutral-800 hover:border-neutral-700 rounded-xl transition-all duration-150 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBE0B]"
              >
                <span>Conheça nossos serviços</span>
                <ArrowDown className="w-4 h-4 text-neutral-400" />
              </a>
            </div>

            {/* Trust Signals Strip */}
            <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#FFBE0B] shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white">Desde 2021</p>
                  <p className="text-neutral-400">Tradição local</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FFBE0B] shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white">Qualidade</p>
                  <p className="text-neutral-400">Peças e técnica</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFBE0B] shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white">Centro</p>
                  <p className="text-neutral-400">Canindé de S.F.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Workbench Presentation (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full">
              <WorkbenchVisual />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
