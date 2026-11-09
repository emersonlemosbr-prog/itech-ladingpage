import { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Check } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/site';

export function Contact() {
  const [deviceType, setDeviceType] = useState('Celular / Smartphone');
  const [deviceModel, setDeviceModel] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SITE_CONFIG.contact.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      `Olá, itech! Gostaria de um orçamento para assistência técnica.`,
      `• Aparelho: ${deviceType}`,
      deviceModel ? `• Marca/Modelo: ${deviceModel}` : null,
      issueDescription ? `• Problema/Necessidade: ${issueDescription}` : null,
      `• Vim pelo site da itech.`,
    ].filter(Boolean);

    const message = parts.join('\n');
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-neutral-900/30 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#FFBE0B] mb-2">
            Atendimento e Localização
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Precisa de assistência técnica? Fale com a itech celular.
          </h2>
          <p className="mt-3 text-neutral-400 text-base">
            Estamos prontos para orientar você, avaliar seu equipamento e oferecer a melhor solução.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Device Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Descreva o seu aparelho para agilizar o atendimento
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Preencha as informações abaixo para gerar sua mensagem personalizada para o nosso WhatsApp.
                </p>
              </div>
            </div>

            <form onSubmit={handleSendInquiry} className="space-y-5">
              {/* Device Type Select */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Tipo de Aparelho
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Celular / Smartphone',
                    'Computador / Notebook',
                    'Reparo Eletrônico',
                    'Acessórios / Outro',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setDeviceType(type)}
                      className={`p-2.5 text-xs font-medium rounded-xl border text-center transition-all ${
                        deviceType === type
                          ? 'bg-[#FFBE0B] text-black font-bold border-[#FFBE0B]'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Device Model Input */}
              <div>
                <label htmlFor="deviceModel" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Marca e Modelo do Aparelho
                </label>
                <input
                  id="deviceModel"
                  type="text"
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                  placeholder="Ex: iPhone 13, Moto G84, Samsung Galaxy S23, Dell Inspiron..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFBE0B] focus:ring-1 focus:ring-[#FFBE0B] transition-colors"
                />
              </div>

              {/* Issue Description */}
              <div>
                <label htmlFor="issueDescription" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Qual o defeito ou manutenção necessária?
                </label>
                <textarea
                  id="issueDescription"
                  rows={3}
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  placeholder="Ex: Tela quebrou e não dá toque; Bateria descarrega muito rápido; Computador não liga; Preciso de película e carregador..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFBE0B] focus:ring-1 focus:ring-[#FFBE0B] transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold uppercase tracking-wider text-black bg-[#FFBE0B] hover:bg-[#ffc933] rounded-xl transition-all shadow-md hover:shadow-[0_0_20px_rgba(255,190,11,0.3)] active:scale-[0.99] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-black text-black" />
                  <span>Enviar para atendimento via WhatsApp</span>
                </button>
                <p className="text-[11px] text-neutral-500 text-center mt-2.5">
                  Você será redirecionado para o WhatsApp oficial da itech com sua mensagem formatada.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Information Cards & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFBE0B] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                    Endereço
                  </h4>
                  <p className="text-sm font-bold text-white mt-1">
                    {SITE_CONFIG.address.street}
                  </p>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city} — {SITE_CONFIG.address.state}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-400 mt-1">
                    CNPJ: {SITE_CONFIG.cnpj}
                  </p>
                  <div className="mt-3">
                    <a
                      href={SITE_CONFIG.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFBE0B] hover:underline"
                    >
                      <span>Abrir no Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact & Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone card */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-[#FFBE0B]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                    Telefone
                  </span>
                </div>
                <p className="text-sm font-bold text-white font-mono">
                  {SITE_CONFIG.contact.phoneDisplay}
                </p>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="mt-2 text-[11px] font-medium text-neutral-400 hover:text-white flex items-center gap-1"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copiado</span>
                    </>
                  ) : (
                    <span>Copiar número</span>
                  )}
                </button>
              </div>

              {/* Hours card */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-[#FFBE0B]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                    Horário
                  </span>
                </div>
                <div className="text-xs text-neutral-300 space-y-1">
                  <p><span className="text-neutral-400">Seg - Sex:</span> 08:00 - 18:00</p>
                  <p><span className="text-neutral-400">Sábado:</span> 08:00 - 12:00</p>
                </div>
              </div>

            </div>

            {/* Google Maps Embed / Interactive Preview */}
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
              <div className="px-4 py-2.5 bg-neutral-900/70 border-b border-neutral-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-neutral-300">Canindé de São Francisco, SE</span>
                <a
                  href={SITE_CONFIG.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFBE0B] hover:underline flex items-center gap-1"
                >
                  <span>Ver rotas</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-48 bg-neutral-900 relative">
                <iframe
                  title="Localização da itech celular e informática no Google Maps"
                  src={SITE_CONFIG.address.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
