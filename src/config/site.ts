/**
 * Configuração central da itech celular e informática
 * Facilmente editável para conectar o número oficial e dados definitivos.
 */
export const SITE_CONFIG = {
  name: "itech celular e informática",
  shortName: "itech",
  legalName: "itech celular e informática",
  cnpj: "58.710.025/0001-69",
  yearFounded: 2021,
  domain: "itechcelulareinformatica.com.br",
  
  // Contato e Localização
  address: {
    street: "Av. Ananias Fernandes dos Santos, 231",
    neighborhood: "Centro",
    city: "Canindé de São Francisco",
    state: "SE",
    full: "Av. Ananias Fernandes dos Santos, 231 — Centro, Canindé de São Francisco — SE",
    cep: "49680-000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Ananias+Fernandes+dos+Santos,+231,+Centro,+Canind%C3%A9+de+S%C3%A3o+Francisco+-+SE",
    embedMapUrl: "https://maps.google.com/maps?q=Av.+Ananias+Fernandes+dos+Santos,+231,+Canind%C3%A9 de+S%C3%A3o+Francisco+-+SE&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  
  // WhatsApp e Telefone oficial atualizado pelo cliente
  contact: {
    whatsappRaw: "5579981351174", 
    whatsappDisplay: "(79) 98135-1174",
    phoneDisplay: "(79) 98135-1174",
    email: "contato@itechcelulareinformatica.com.br",
    defaultMessage: "Olá! Conheci a itech pelo site e gostaria de informações sobre um serviço.",
  },

  // Horários de Atendimento
  hours: [
    { days: "Segunda a Sexta", time: "08:00 às 18:00" },
    { days: "Sábado", time: "08:00 às 12:00" },
    { days: "Domingo e Feriados", time: "Fechado" },
  ],

  // Links do Menu
  navLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Por que a itech", href: "#diferenciais" },
    { label: "Sobre nós", href: "#sobre-nos" },
    { label: "Contato", href: "#contato" },
  ],
};

/**
 * Utilitário para gerar URL do WhatsApp com mensagem codificada
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || SITE_CONFIG.contact.defaultMessage;
  return `https://wa.me/${SITE_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(message)}`;
}
