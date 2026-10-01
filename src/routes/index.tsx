import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing-page";
import { company, faq } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Borges Esquadrias Metálicas | Portas, Janelas e Portões no RJ" },
      { name: "description", content: "Esquadrias metálicas em Belford Roxo, RJ. Conheça portas, janelas, portões, basculantes e vitrôs da Borges, fabricante desde 1978." },
      { property: "og:title", content: "Borges Esquadrias Metálicas — Desde 1978" },
      { property: "og:description", content: "Portas, janelas, portões e outras esquadrias metálicas com atendimento direto em Belford Roxo, RJ." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: import.meta.env.BASE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: import.meta.env.BASE_URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": ["Organization", "LocalBusiness"], name: company.fullName, foundingDate: String(company.foundedYear), telephone: company.commercialPhone, email: company.email, address: { "@type": "PostalAddress", streetAddress: company.address.street, addressLocality: company.address.city, addressRegion: company.address.state, postalCode: company.address.postalCode, addressCountry: company.address.country }, openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "07:30", closes: "17:00" }, { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:30", closes: "16:00" }] },
          { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) },
        ],
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
