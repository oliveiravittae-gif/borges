import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import logo from "@/assets/logo-borges-transparent.png";
import { Button } from "@/components/ui/button";
import {
  categories,
  company,
  faq,
  imagery,
  navigation,
  copy,
  audiences,
  planning,
  creationCredit,
} from "@/data/site";
import { openWhatsApp, trackEvent } from "@/lib/whatsapp";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`brand ${light ? "brand-on-dark" : "brand-on-light"}`}
      aria-label="Borges Esquadrias Metálicas — início"
    >
      <img src={logo} width={300} height={62} alt="Borges Esquadrias Metálicas" />
    </a>
  );
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = document.querySelector<HTMLElement>(".mobile-menu");
    const elements = dialog?.querySelectorAll<HTMLElement>("a, button");
    elements?.[0]?.focus();
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key !== "Tab" || !elements?.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, [menuOpen]);

  const whatsapp = (source: string, category?: string, product?: string) =>
    openWhatsApp({
      source,
      ...(category ? { category } : {}),
      ...(product ? { product } : {}),
    });

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <header className="site-header">
        <div className="site-container flex h-[74px] items-center justify-between gap-5">
          <Logo light />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <Button className="hidden lg:inline-flex" onClick={() => whatsapp("header")}>
            Falar com o comercial <MessageCircle size={17} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-surface-light lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </Button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu principal">
          <div className="flex items-center justify-between">
            <Logo />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
            >
              <X />
            </Button>
          </div>
          <nav className="mt-16 flex flex-col" aria-label="Navegação móvel">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                {item.label}
                <ArrowRight size={20} />
              </a>
            ))}
          </nav>
          <Button
            className="mt-auto w-full"
            onClick={() => {
              setMenuOpen(false);
              whatsapp("mobile_menu");
            }}
          >
            Falar com o comercial <MessageCircle size={18} />
          </Button>
        </div>
      )}

      <main id="conteudo">
        <section id="inicio" className="hero">
          <img
            src={imagery.hero}
            width={1920}
            height={1200}
            alt="Referência visual de esquadria metálica em arquitetura contemporânea"
            className="hero-image"
            fetchPriority="high"
          />
          <div className="hero-overlay" />
          <div className="site-container relative flex min-h-[88svh] items-end pb-20 pt-32 lg:min-h-[96svh] lg:items-center lg:pb-24 lg:pt-36">
            <div className="max-w-3xl text-surface-light">
              <p className="eyebrow text-accent">{copy.eyebrow}</p>
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-7xl">
                {copy.heroLead}
                <span className="hero-emphasis">{copy.heroEmphasis}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-hero-muted sm:text-lg">
                {copy.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  className="sm:min-w-52"
                  onClick={() => {
                    trackEvent("hero_cta_click");
                    whatsapp("hero");
                  }}
                >
                  {copy.heroCta} <MessageCircle size={18} />
                </Button>
                <Button
                  variant="light"
                  className="sm:min-w-48"
                  onClick={() =>
                    document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explorar a linha <ArrowRight size={18} />
                </Button>
              </div>
              <div className="hero-profiles" aria-label="Perfis de compra">
                {copy.heroProfiles.map((label) => (
                  <a key={label} href="#atacado">
                    {label}
                    <ArrowRight size={14} />
                  </a>
                ))}
              </div>
            </div>
            <span className="hero-caption">Imagem ilustrativa</span>
          </div>
        </section>

        <section className="trust-strip" aria-label="Informações principais">
          <div className="site-container grid gap-0 md:grid-cols-3">
            {[
              ["1978", "Início da trajetória"],
              ["Atacado", "Revenda e construção"],
              ["RJ", "Belford Roxo"],
            ].map(([lead, label]) => (
              <div key={label} className="trust-item">
                <strong>{lead}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="atacado" className="section-space audience-section scroll-mt-20">
          <div className="site-container">
            <p className="eyebrow text-primary">Para quem compra para ir além</p>
            <h2 className="section-title audience-title">{copy.audienceTitle}</h2>
            <div className="audience-grid">
              {audiences.map((item, index) => (
                <article key={item.id} className="audience-card">
                  <span className="audience-index" aria-hidden="true">
                    0{index + 1}
                    <ArrowRight size={22} />
                  </span>
                  <p className="eyebrow">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button
                    variant="ghost"
                    onClick={() => openWhatsApp({ source: "audience", audience: item.id })}
                  >
                    {item.cta}
                    <ArrowRight size={18} />
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="produtos" className="section-space bg-background scroll-mt-20">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow text-primary">Produtos</p>
                <h2 className="section-title mt-4">{copy.productTitle}</h2>
              </div>
              <p className="body-copy">{copy.productIntro}</p>
            </div>
            <p className="image-disclaimer">{copy.imageNote}</p>
            <div className="category-grid mt-12">
              {categories.map((category, index) => (
                <article
                  key={category.id}
                  className={`product-card ${index === 0 ? "category-featured" : ""}`}
                >
                  <div className="product-image">
                    <img
                      src={category.image}
                      alt={`Referência visual da categoria ${category.name}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="product-content">
                    <span className="product-number">0{index + 1}</span>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <Button
                      variant="ghost"
                      className="product-action"
                      onClick={() => {
                        trackEvent("category_click", { category: category.name });
                        whatsapp("category", category.name);
                      }}
                    >
                      Consultar para meu pedido <ArrowRight size={18} />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="recurring-section">
          <div className="site-container recurring-layout">
            <div className="recurring-mark" aria-hidden="true">
              ↗
            </div>
            <div>
              <p className="eyebrow text-accent">Reposição · Novas etapas · Recorrência</p>
              <h2 className="section-title mt-5">{copy.recurringTitle}</h2>
              <p className="body-copy mt-6 text-dark-muted">{copy.recurringIntro}</p>
              <Button
                variant="light"
                className="mt-8"
                onClick={() => openWhatsApp({ source: "recurring", intent: "recurring" })}
              >
                {copy.recurringCta}
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </section>
        <section className="section-space bg-muted">
          <div className="site-container">
            <p className="eyebrow text-primary">Prepare sua consulta</p>
            <h2 className="section-title mt-4">Seu pedido, visto por inteiro.</h2>
            <div className="process-grid mt-12">
              {planning.map(([n, t, d]) => (
                <article key={n} className="process-step">
                  <span>{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="historia" className="section-space bg-surface-light scroll-mt-20">
          <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <figure className="image-frame">
              <img
                src={imagery.door}
                width={1104}
                height={1408}
                loading="lazy"
                alt="Referência visual de porta metálica aplicada à arquitetura"
              />
              <figcaption>Imagem ilustrativa</figcaption>
            </figure>
            <div>
              <p className="eyebrow text-primary">Nossa história</p>
              <h2 className="section-title mt-4">Uma trajetória construída desde 1978.</h2>
              <p className="body-copy mt-6">{copy.history}</p>
              <div className="timeline mt-10">
                <div>
                  <strong>1978</strong>
                  <span>Início da trajetória</span>
                </div>
                <div>
                  <strong>Hoje</strong>
                  <span>Tradição que continua</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="site-container">
            <p className="eyebrow text-accent">Comece por aqui</p>
            <h2>{copy.finalTitle}</h2>
            <p>{copy.finalIntro}</p>
            <Button variant="light" onClick={() => whatsapp("main_cta")}>
              Consultar meu pedido completo <MessageCircle size={18} />
            </Button>
          </div>
        </section>

        <section id="duvidas" className="section-space bg-background scroll-mt-20">
          <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="eyebrow text-primary">Dúvidas frequentes</p>
              <h2 className="section-title mt-4">
                Informação direta para decidir o próximo passo.
              </h2>
            </div>
            <div className="faq-list">
              {faq.map((item) => (
                <details
                  key={item.q}
                  onToggle={(e) => {
                    if (e.currentTarget.open) trackEvent("faq_open", { question: item.q });
                  }}
                >
                  <summary>
                    {item.q}
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="contact-section scroll-mt-20">
          <div className="site-container">
            <div className="contact-heading">
              <div>
                <p className="eyebrow text-accent">Contato e localização</p>
                <h2 className="section-title mt-4">Vamos conversar sobre sua próxima compra.</h2>
              </div>
              <p className="body-copy text-dark-muted">
                Comercial Borges: informe seu perfil de compra, produtos, quantidades e destino do
                pedido.
              </p>
            </div>
            <div className="contact-layout mt-12">
              <div className="contact-details">
                <div className="contact-detail">
                  <MapPin aria-hidden="true" />
                  <div>
                    <strong>Endereço</strong>
                    <address>{company.address.formatted}</address>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.formatted)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Abrir no Google Maps <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
                <div className="contact-detail">
                  <Phone aria-hidden="true" />
                  <div>
                    <strong>Telefones</strong>
                    {company.phones.map((phone) => (
                      <a key={phone} href={`tel:+55${phone.replace(/\D/g, "")}`}>
                        {phone}
                      </a>
                    ))}
                    <a href={`tel:+55${company.commercialPhone.replace(/\D/g, "")}`}>
                      Comercial: {company.commercialPhone}
                    </a>
                    <a href={`tel:+55${company.financePhone.replace(/\D/g, "")}`}>
                      Financeiro: {company.financePhone}
                    </a>
                  </div>
                </div>
                <div className="contact-detail">
                  <Mail aria-hidden="true" />
                  <div>
                    <strong>E-mail</strong>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <Clock aria-hidden="true" />
                  <div>
                    <strong>Horário comercial</strong>
                    {company.businessHours.map((item) => (
                      <p key={item.days}>
                        <span>{item.days}</span>
                        {item.hours}
                      </p>
                    ))}
                  </div>
                </div>
                <Button className="mt-2 w-full sm:w-auto" onClick={() => whatsapp("contact")}>
                  Falar com o comercial pelo WhatsApp <MessageCircle size={18} />
                </Button>
              </div>
              <div className="location-map">
                <iframe
                  title="Localização da Borges Esquadrias Metálicas"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(company.address.formatted)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="site-container">
          <div className="footer-grid">
            <div>
              <Logo light />
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-dark-muted">
                Esquadrias metálicas desde 1978. Atacado para revenda, construção e compras em
                volume.
              </p>
            </div>
            <div>
              <h3>Produtos</h3>
              <a href="#produtos">Portas</a>
              <a href="#produtos">Janelas</a>
              <a href="#produtos">Portões</a>
              <a href="#produtos">Outras esquadrias</a>
            </div>
            <div>
              <h3>Navegação</h3>
              <a href="#historia">A Borges</a>
              <a href="#atacado">Atacado</a>
              <a href="#duvidas">Dúvidas</a>
              <a href="#contato">Contato</a>
            </div>
            <div>
              <h3>Contato</h3>
              <p>{company.address.street}</p>
              <p>
                {company.address.neighborhood} • {company.city}/{company.state}
              </p>
              <a href={`tel:+55${company.commercialPhone.replace(/\D/g, "")}`}>
                {company.commercialPhone}
              </a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Borges Esquadrias Metálicas.</span>
            <span className="footer-tradition">Tradição em metal desde 1978.</span>
            <a className="creation-credit" href={`mailto:${creationCredit.email}`}>
              {creationCredit.label}
            </a>
          </div>
        </div>
      </footer>

      <Button
        size="icon"
        className="floating-whatsapp hidden sm:inline-flex"
        aria-label="Fale com a Borges"
        title="Fale com a Borges"
        onClick={() => whatsapp("floating")}
      >
        <MessageCircle />
      </Button>
      <div className="mobile-sticky sm:hidden">
        <Button className="w-full" onClick={() => whatsapp("mobile_sticky")}>
          Falar com o comercial <MessageCircle size={18} />
        </Button>
      </div>
    </div>
  );
}
