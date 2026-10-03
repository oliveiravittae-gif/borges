import { company } from "@/data/site";

type WhatsAppContext = {
  source: string;
  audience?: string;
  intent?: "recurring" | "representative" | "retailer";
  category?: string;
  product?: string;
};

const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

export function buildWhatsAppMessage({ category, product, audience, intent }: WhatsAppContext) {
  if (intent === "retailer")
    return "Olá! Vim pelo site da Borges e gostaria de encontrar uma loja parceira no meu município, no Estado do Rio de Janeiro.";
  const profile =
    audience === "lojista"
      ? "Sou lojista/revendedor e gostaria de consultar condições para revenda."
      : audience === "construtora"
        ? "Gostaria de consultar fornecimento de esquadrias para uma obra."
        : "Gostaria de solicitar um orçamento de atacado para uma compra em volume.";
  const interest = product || category;
  return [
    "Olá! Vim pelo site da Borges.",
    profile,
    interest ? `Tenho interesse em ${interest.toLocaleLowerCase("pt-BR")}.` : "",
    intent === "recurring"
      ? "Gostaria também de conversar sobre reposição e fornecimento recorrente."
      : "",
    intent === "representative"
      ? "Gostaria de solicitar a visita de um representante à minha loja no RJ."
      : "",
    "Posso enviar os produtos, medidas, quantidades e município de destino no RJ para consulta?",
  ]
    .filter(Boolean)
    .join("\n");
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
  const message = [
    buildWhatsAppMessage(context),
    campaign.length ? `Origem: ${campaign.join(" | ")}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  window.open(
    `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

export function trackEvent(name: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const event = { event: name, ...data };
  const trackedWindow = window as Window & { dataLayer?: Record<string, unknown>[] };
  trackedWindow.dataLayer?.push(event);
}
