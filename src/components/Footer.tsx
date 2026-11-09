import { MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/site';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="footer" size="md" />
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Especialistas em manutenção de celulares e computadores e venda de acessórios em Canindé de São Francisco, Sergipe. Tecnologia com confiança desde 2021.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
              <span className="font-mono text-neutral-300">CNPJ: {SITE_CONFIG.cnpj}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>itechcelulareinformatica.com.br</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#FFBE0B] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#FFBE0B] transition-colors">
                  Serviços Técnicos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#FFBE0B] transition-colors">
                  Por que a itech
                </a>
              </li>
              <li>
                <a href="#sobre-nos" className="hover:text-[#FFBE0B] transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#FFBE0B] transition-colors">
                  Contato e Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Direct WhatsApp (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Atendimento Presencial
            </p>
            <div className="space-y-2 text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFBE0B] shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.address.full}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#FFBE0B] hover:bg-[#ffc933] rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-black text-black" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4 text-neutral-400">
            <span>Canindé de São Francisco — SE</span>
            <span aria-hidden="true">·</span>
            <span>Desde {SITE_CONFIG.yearFounded}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
