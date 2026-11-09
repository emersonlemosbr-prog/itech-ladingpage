import { History, Users, ShieldCheck, Layers } from 'lucide-react';

const DIFFERENTIALS = [
  {
    title: 'Experiência desde 2021',
    description: 'Atuação consolidada no mercado de tecnologia em Canindé de São Francisco, acompanhando a evolução dos aparelhos.',
    icon: History,
  },
  {
    title: 'Atendimento próximo e transparente',
    description: 'Comunicação direta, honesta e orientada para esclarecer as reais necessidades do seu equipamento.',
    icon: Users,
  },
  {
    title: 'Compromisso com a qualidade dos serviços',
    description: 'Dedicação técnica em cada reparo, zelando pelo funcionamento correto e segurança dos seus dispositivos.',
    icon: ShieldCheck,
  },
  {
    title: 'Soluções para celulares, computadores e acessórios em um só lugar',
    description: 'Praticidade de resolver manutenções e encontrar os acessórios ideais para o seu dia a dia em um único ponto.',
    icon: Layers,
  },
];

export function WhyChooseUs() {
  return (
    <section id="diferenciais" className="py-20 bg-neutral-900/40 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#FFBE0B] mb-2">
            Nossos Valores
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por que escolher a itech?
          </h2>
          <p className="mt-3 text-neutral-400 text-base">
            Princípios fundamentais que orientam cada atendimento e manutenção realizada em nossa loja.
          </p>
        </div>

        {/* 4 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.title}
                className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFBE0B] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-neutral-900 text-[11px] font-mono text-neutral-500 tabular-nums">
                  Diferencial 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
