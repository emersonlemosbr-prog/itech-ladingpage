import { CheckCircle2, MapPin, Calendar, Smartphone, Laptop } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export function AboutUs() {
  return (
    <section id="sobre-nos" className="py-20 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(255,190,11,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official narrative & Title (7 cols) */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#FFBE0B] mb-2">
              Sobre a itech
            </div>
            
            {/* Title specified in prompt */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              Tecnologia com confiança desde 2021.
            </h2>

            {/* Exact text requested in prompt */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 font-normal">
              A itech celular e informática nasceu com o propósito de oferecer soluções em manutenção de celulares e computadores, além de disponibilizar acessórios para o dia a dia. Trabalhamos para oferecer um atendimento atencioso, transparente e comprometido com as necessidades de cada cliente. Nosso objetivo é cuidar dos seus dispositivos com responsabilidade e ajudar você a continuar conectado.
            </p>

            {/* Key commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-neutral-900">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFBE0B] shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-300">
                  Cuidado responsável com seus aparelhos
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFBE0B] shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-300">
                  Transparência do diagnóstico à entrega
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFBE0B] shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-300">
                  Atendimento dedicado em Canindé de São Francisco
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFBE0B] shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-300">
                  Acessórios e suprimentos para o seu dia a dia
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Infographic Panel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/90 shadow-xl relative">
              <div className="space-y-6">
                
                {/* Year Marker */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center text-[#FFBE0B] shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Em funcionamento desde</span>
                    <p className="text-xl font-bold text-white">2021 · Canindé de São Francisco</p>
                  </div>
                </div>

                {/* Location Marker */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center text-[#FFBE0B] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Localização</span>
                    <p className="text-sm font-semibold text-white leading-tight">Centro de Canindé de São Francisco, SE</p>
                  </div>
                </div>

                {/* Specialization Scope */}
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-3">
                    Frentes de Atuação
                  </span>
                  <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                    <div className="flex items-center gap-2 text-neutral-300">
                      <Smartphone className="w-4 h-4 text-[#FFBE0B]" />
                      <span>Smartphones</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-300">
                      <Laptop className="w-4 h-4 text-[#FFBE0B]" />
                      <span>Computadores</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-neutral-900 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                    <span>CNPJ</span>
                    <span className="text-neutral-200">{SITE_CONFIG.cnpj}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
