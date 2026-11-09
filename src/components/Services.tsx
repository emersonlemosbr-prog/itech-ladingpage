import { Smartphone, Monitor, Cpu, Cable, Wrench, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/site';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: typeof Smartphone;
  whatsappMessage: string;
  tags?: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'celulares',
    title: 'Manutenção de celulares',
    description: 'Diagnóstico e reparo de smartphones, incluindo substituição de telas e outros componentes.',
    icon: Smartphone,
    whatsappMessage: 'Olá! Gostaria de um orçamento para manutenção do meu celular na itech.',
    tags: ['Troca de tela', 'Bateria', 'Conectores', 'Câmeras'],
  },
  {
    id: 'computadores',
    title: 'Manutenção de computadores',
    description: 'Diagnóstico, manutenção e solução de problemas de hardware e software.',
    icon: Monitor,
    whatsappMessage: 'Olá! Gostaria de atendimento para manutenção do meu computador/notebook.',
    tags: ['Hardware', 'Formatação', 'Limpeza interna', 'Upgrades'],
  },
  {
    id: 'reparo-eletronico',
    title: 'Reparo eletrônico',
    description: 'Serviços técnicos especializados conforme o diagnóstico do aparelho.',
    icon: Cpu,
    whatsappMessage: 'Olá! Preciso de avaliação para reparo eletrônico do meu dispositivo.',
    tags: ['Microssoldagem', 'Diagnóstico em placa', 'Recuperação'],
  },
  {
    id: 'acessorios',
    title: 'Acessórios',
    description: 'Venda de cabos, carregadores, capinhas, películas e outros acessórios para celulares.',
    icon: Cable,
    whatsappMessage: 'Olá! Gostaria de consultar os acessórios disponíveis na itech.',
    tags: ['Películas', 'Carregadores', 'Capinhas', 'Cabos'],
  },
  {
    id: 'atendimento-tecnico',
    title: 'Atendimento técnico',
    description: 'Avaliação do aparelho e orientação ao cliente sobre as opções de reparo.',
    icon: Wrench,
    whatsappMessage: 'Olá! Gostaria de uma avaliação técnica e orientação sobre o meu aparelho.',
    tags: ['Avaliação prévia', 'Orçamento claro', 'Consultoria'],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#FFBE0B] mb-2">
            Nossas Especialidades
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Serviços Técnicos e Soluções
          </h2>
          <p className="mt-3 text-neutral-400 text-base">
            Qualidade técnica, ferramentas adequadas e procedimentos seguros para o seu equipamento.
          </p>
        </div>

        {/* Services Grid (3 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 3 || index === 4; // last two cards can span nicely on tablet
            return (
              <div
                key={service.id}
                className={`group flex flex-col justify-between p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 hover:border-[#FFBE0B]/50 transition-all duration-200 hover:bg-neutral-900/90 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 group-hover:border-[#FFBE0B]/40 transition-colors">
                      <Icon className="w-6 h-6 text-[#FFBE0B]" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#FFBE0B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Clean unboxed tags with typographic separator */}
                  {service.tags && (
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500 mb-6">
                      {service.tags.map((tag, tIdx) => (
                        <span key={tag} className="flex items-center gap-1.5">
                          <span>{tag}</span>
                          {tIdx < service.tags!.length - 1 && (
                            <span aria-hidden="true" className="text-neutral-700">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Direct Action */}
                <div className="pt-4 border-t border-neutral-800/70">
                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 group-hover:text-[#FFBE0B] transition-colors"
                  >
                    <span>Consultar serviço</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
