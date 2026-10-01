import { company } from "@/data/site";

type WhatsAppContext = {
  source: string;
  category?: string;
  product?: string;
};

const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

export function buildWhatsAppMessage({ category, product }: WhatsAppContext) {
  if (product) return `Olá! Vim pelo site da Borges e gostaria de informações sobre ${product}.`;
  if (category) return `Olá! Vim pelo site da Borges e gostaria de informações sobre ${category.toLocaleLowerCase("pt-BR")}.`;
  return "Olá! Vim pelo site da Borges e gostaria de solicitar um orçamento.";
}

export function openWhatsApp(context: WhatsAppContext) {
  trackEvent(context.product ? "product_whatsapp_click" : "whatsapp_click", context);
  if (!company.whatsapp) {
    window.dispatchEvent(new CustomEvent("borges:contact-pending"));
    return;
  }
  const params = new URLSearchParams(window.location.search);
  const campaign = utmKeys.flatMap((key) => {
    const value = params.get(key);
    return value ? [`${key}: ${value}`] : [];
  });
  const message = [buildWhatsAppMessage(context), campaign.length ? `Origem: ${campaign.join(" | ")}` : ""].filter(Boolean).join("\n");
  window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

export function trackEvent(name: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const event = { event: name, ...data };
  const trackedWindow = window as Window & { dataLayer?: Record<string, unknown>[] };
  trackedWindow.dataLayer?.push(event);
}
