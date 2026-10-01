import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, Factory, Menu, MessageCircle, Ruler, ShieldCheck, X } from "lucide-react";
import logo from "@/assets/logo-borges-transparent.png";
import { Button } from "@/components/ui/button";
import { categories, company, faq, featured, imagery, navigation } from "@/data/site";
import { openWhatsApp, trackEvent } from "@/lib/whatsapp";

const gallery = [
  { src: imagery.door, alt: "Referência visual de porta metálica instalada", className: "gallery-tall" },
  { src: imagery.window, alt: "Referência visual de janela metálica instalada", className: "gallery-wide" },
  { src: imagery.factory, alt: "Referência visual de fabricação de esquadrias", className: "gallery-wide" },
  { src: imagery.gate, alt: "Referência visual de portão metálico instalado", className: "gallery-wide" },
  { src: imagery.detail, alt: "Referência visual de medição de perfil metálico", className: "gallery-wide" },
];

function Logo({ light = false }: { light?: boolean }) {
  return <a href="#inicio" className={`brand ${light ? "brand-on-dark" : "brand-on-light"}`} aria-label="Borges Esquadrias Metálicas — início"><img src={logo} width={300} height={62} alt="Borges Esquadrias Metálicas" /></a>;
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [notice, setNotice] = useState(false);

  useEffect(() => {
    const pending = () => { setNotice(true); window.setTimeout(() => setNotice(false), 5000); };
    window.addEventListener("borges:contact-pending", pending);
    return () => window.removeEventListener("borges:contact-pending", pending);
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((lightbox + 1) % gallery.length);
      if (event.key === "ArrowLeft") setLightbox((lightbox - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [lightbox]);

  const whatsapp = (source: string, category?: string, product?: string) => openWhatsApp({
    source,
    ...(category ? { category } : {}),
    ...(product ? { product } : {}),
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="site-header">
        <div className="site-container flex h-[74px] items-center justify-between gap-5">
          <Logo light />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navigation.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
          </nav>
          <Button className="hidden lg:inline-flex" onClick={() => whatsapp("header")}>Solicitar orçamento <MessageCircle size={17} /></Button>
          <Button variant="ghost" size="icon" className="text-surface-light lg:hidden" aria-label="Abrir menu" onClick={() => setMenuOpen(true)}><Menu /></Button>
        </div>
      </header>

      {menuOpen && <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu principal">
        <div className="flex items-center justify-between"><Logo /><Button variant="ghost" size="icon" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}><X /></Button></div>
        <nav className="mt-16 flex flex-col" aria-label="Navegação móvel">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="mobile-link">{item.label}<ArrowRight size={20} /></a>)}
        </nav>
        <Button className="mt-auto w-full" onClick={() => whatsapp("mobile_menu")}>Solicitar orçamento <MessageCircle size={18} /></Button>
      </div>}

      <main>
        <section id="inicio" className="hero">
          <img src={imagery.hero} width={1920} height={1200} alt="Referência visual de esquadria metálica em arquitetura contemporânea" className="hero-image" fetchPriority="high" />
          <div className="hero-overlay" />
          <div className="site-container relative flex min-h-[88svh] items-end pb-20 pt-32 lg:min-h-[96svh] lg:items-center lg:pb-24 lg:pt-36">
            <div className="max-w-3xl text-surface-light">
              <p className="eyebrow text-accent">Esquadrias metálicas <span /> Desde 1978</p>
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-7xl">Portas, janelas e portões feitos por quem entende de metal há décadas.</h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-hero-muted sm:text-lg">A Borges fabrica esquadrias metálicas para diferentes necessidades, unindo experiência, funcionalidade e atendimento direto.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="sm:min-w-52" onClick={() => { trackEvent("hero_cta_click"); whatsapp("hero"); }}>Solicitar orçamento <MessageCircle size={18} /></Button>
                <Button variant="light" className="sm:min-w-48" onClick={() => document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth" })}>Conhecer produtos <ArrowRight size={18} /></Button>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Informações principais">
          <div className="site-container grid gap-0 md:grid-cols-3">
            {[['1978','Início da trajetória'],['Metal','Fabricação de esquadrias'],['RJ','Belford Roxo']].map(([lead, label]) => <div key={label} className="trust-item"><strong>{lead}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section className="section-space bg-surface-light">
          <div className="site-container grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><p className="eyebrow text-primary">Tradição industrial</p><div className="year-mark">1978</div><h2 className="section-title mt-4">O início de uma história construída em metal.</h2><p className="body-copy mt-6">Desde 1978, a Borges atua com esquadrias metálicas. Uma trajetória que sustenta o conhecimento de quem trabalha há décadas com portas, janelas, portões e outras soluções em metal.</p></div>
            <figure className="image-frame image-frame-wide"><img src={imagery.detail} width={1408} height={1008} loading="lazy" alt="Referência visual de trabalho técnico em uma esquadria metálica" /><figcaption>Imagem conceitual — substituir por acervo real da Borges</figcaption></figure>
          </div>
        </section>

        <section id="produtos" className="section-space bg-background scroll-mt-20">
          <div className="site-container">
            <div className="section-heading"><div><p className="eyebrow text-primary">Produtos</p><h2 className="section-title mt-4">Encontre a esquadria ideal para seu projeto</h2></div><p className="body-copy">Conheça as principais categorias e inicie uma conversa já identificando o produto que procura.</p></div>
            <div className="category-grid mt-12">
              {categories.map((category, index) => <article key={category.id} className={`product-card ${index === 0 ? "category-featured" : ""}`}>
                <div className="product-image"><img src={category.image} alt={`Referência visual da categoria ${category.name}`} loading="lazy" /></div>
                <div className="product-content"><span className="product-number">0{index + 1}</span><h3>{category.name}</h3><p>{category.description}</p><Button variant="ghost" className="product-action" onClick={() => { trackEvent("category_click", { category: category.name }); whatsapp("category", category.name); }}>Consultar opções <ArrowRight size={18} /></Button></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section-space bg-muted">
          <div className="site-container"><p className="eyebrow text-primary">Seleção</p><h2 className="section-title mt-4 max-w-3xl">Produtos para diferentes projetos</h2>
            <div className="featured-grid mt-12">{featured.map((product) => <article key={product.id} className="featured-product"><div className="featured-media"><img src={product.image} alt={`Referência visual de ${product.name}`} loading="lazy" /></div><div className="pt-5"><p className="eyebrow text-primary">{product.category}</p><h3 className="mt-2 text-2xl font-bold">{product.name}</h3><p className="body-copy mt-3">{product.description}</p><Button variant="ghost" className="product-action mt-3" onClick={() => { trackEvent("product_view", { product: product.name }); whatsapp("product", product.category, product.name); }}>Consultar este modelo <ArrowRight size={18} /></Button></div></article>)}</div>
          </div>
        </section>

        <section id="diferenciais" className="section-space bg-graphite text-surface-light scroll-mt-20">
          <div className="site-container"><div className="section-heading"><div><p className="eyebrow text-accent">Por que Borges</p><h2 className="section-title mt-4">Experiência que orienta cada conversa.</h2></div><p className="body-copy text-dark-muted">Conhecimento de produto, variedade de categorias e um canal direto para entender o que você precisa.</p></div>
            <div className="benefits-grid mt-14">{[
              ["01", "Experiência", "Atuação com esquadrias metálicas desde 1978."], ["02", "Conhecimento", "Décadas trabalhando com portas, janelas, portões e outras esquadrias."], ["03", "Variedade", "Diferentes categorias e possibilidades para consultar."], ["04", "Atendimento", "Canal direto para iniciar sua orientação comercial."],
            ].map(([n,t,d]) => <article key={n} className="benefit"><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
          </div>
        </section>

        <section className="factory-section">
          <div className="grid lg:grid-cols-2"><div className="factory-image"><img src={imagery.factory} width={1600} height={1104} loading="lazy" alt="Imagem conceitual de fabricação de uma esquadria metálica" /><span>Imagem conceitual</span></div><div className="factory-copy"><p className="eyebrow text-accent">Fabricação</p><h2 className="section-title mt-5">Por trás de cada esquadria existe experiência de produção.</h2><p className="body-copy mt-6 text-dark-muted">A Borges construiu sua trajetória trabalhando com metal. O atendimento começa pela compreensão do tipo de produto e da necessidade de cada projeto.</p><div className="factory-points"><p><Factory /> Fabricação de esquadrias metálicas</p><p><Ruler /> Orientação a partir da necessidade informada</p><p><ShieldCheck /> Experiência acumulada desde 1978</p></div></div></div>
        </section>

        <section className="section-space bg-muted">
          <div className="site-container"><p className="eyebrow text-primary">Como funciona</p><h2 className="section-title mt-4 max-w-2xl">Da escolha ao atendimento, sem complicação.</h2><div className="process-grid mt-14">{[
            ["01","Escolha o tipo de produto","Porta, janela, portão ou outra esquadria."], ["02","Fale com a Borges","Inicie uma conversa pelo WhatsApp."], ["03","Informe o que precisa","Modelo, dimensão ou contexto da obra."], ["04","Receba orientação comercial","Continue o atendimento com a equipe."],
          ].map(([n,t,d]) => <article key={n} className="process-step"><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div>
        </section>

        <section className="section-space bg-surface-light">
          <div className="site-container grid items-center gap-16 lg:grid-cols-2">
            <div><p className="eyebrow text-primary">Atendimento digital</p><h2 className="section-title mt-4">Sua dúvida pode começar no WhatsApp.</h2><p className="body-copy mt-6">Informe o produto que procura, tire dúvidas e inicie seu atendimento de forma simples pelo WhatsApp.</p><Button className="mt-8" onClick={() => whatsapp("digital_service")}>Falar pelo WhatsApp <MessageCircle size={18} /></Button></div>
            <div className="chat-demo" aria-label="Demonstração da experiência de atendimento"><div className="chat-top"><Logo /><span>Exemplo de conversa</span></div><div className="chat-body"><p className="chat-out">Preciso de uma janela 1,20 × 1,20.</p><p className="chat-in">Posso ajudar. Você procura janela de correr ou outro modelo?</p><p className="chat-out">Quero consultar um portão.</p><p className="chat-in">Claro. Para ajudar no atendimento, posso saber a medida aproximada?</p></div><p className="chat-note">Demonstração da experiência. O atendimento real continua com a equipe Borges.</p></div>
          </div>
        </section>

        <section id="galeria" className="section-space bg-background scroll-mt-20">
          <div className="site-container"><div className="section-heading"><div><p className="eyebrow text-primary">Galeria</p><h2 className="section-title mt-4">Borges em detalhes</h2></div><p className="body-copy">Referências visuais temporárias de produto, aplicação e fabricação. O acervo real terá prioridade quando fornecido.</p></div><div className="gallery-grid mt-12">{gallery.map((image, index) => <button key={image.src} className={image.className} onClick={() => { setLightbox(index); trackEvent("gallery_open", { index }); }} aria-label={`Ampliar imagem: ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy" /></button>)}</div></div>
        </section>

        <section id="historia" className="section-space bg-surface-light scroll-mt-20">
          <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><figure className="image-frame"><img src={imagery.door} width={1104} height={1408} loading="lazy" alt="Referência visual de porta metálica aplicada à arquitetura" /><figcaption>Imagem conceitual — substituir por acervo real da Borges</figcaption></figure><div><p className="eyebrow text-primary">Nossa história</p><h2 className="section-title mt-4">Uma trajetória construída desde 1978.</h2><p className="body-copy mt-6">A Borges Esquadrias Metálicas carrega no tempo um dos seus principais diferenciais: décadas dedicadas a um produto concreto, presente em casas, acessos e projetos de diferentes necessidades.</p><div className="timeline mt-10"><div><strong>1978</strong><span>Início da trajetória</span></div><div><strong>Hoje</strong><span>Tradição que continua</span></div></div></div></div>
        </section>

        <section className="cta-band"><div className="site-container"><p className="eyebrow text-accent">Comece por aqui</p><h2>Procurando portas, janelas ou portões metálicos?</h2><p>Fale com a Borges e encontre a solução adequada para seu projeto.</p><Button variant="light" onClick={() => whatsapp("main_cta")}>Solicitar atendimento <MessageCircle size={18} /></Button></div></section>

        <section id="duvidas" className="section-space bg-background scroll-mt-20"><div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20"><div><p className="eyebrow text-primary">Dúvidas frequentes</p><h2 className="section-title mt-4">Informação direta para decidir o próximo passo.</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q} onToggle={(e) => { if (e.currentTarget.open) trackEvent("faq_open", { question: item.q }); }}><summary>{item.q}<ChevronDown aria-hidden="true" /></summary><p>{item.a}</p></details>)}</div></div></section>

        <section id="contato" className="contact-section scroll-mt-20"><div className="site-container grid gap-12 lg:grid-cols-2"><div><p className="eyebrow text-accent">Contato</p><h2 className="section-title mt-4">Fale sobre o produto que você procura.</h2><p className="body-copy mt-6 text-dark-muted">A Borges está em {company.city}, {company.state}. Os canais oficiais de telefone, WhatsApp, e-mail e endereço completo aguardam validação antes da publicação.</p></div><div className="contact-panel"><p className="contact-label">Atendimento comercial</p><h3>Conte qual esquadria você precisa.</h3><p>Quando o número oficial for informado, todos os botões desta página abrirão a conversa com o contexto correto.</p><Button className="mt-7" onClick={() => whatsapp("contact")}>Abrir WhatsApp <MessageCircle size={18} /></Button></div></div></section>
      </main>

      <footer className="footer"><div className="site-container"><div className="footer-grid"><div><Logo light /><p className="mt-6 max-w-xs text-sm leading-relaxed text-dark-muted">Fabricação de portas, janelas, portões e outras esquadrias metálicas desde 1978.</p></div><div><h3>Produtos</h3><a href="#produtos">Portas</a><a href="#produtos">Janelas</a><a href="#produtos">Portões</a><a href="#produtos">Outras esquadrias</a></div><div><h3>Navegação</h3><a href="#historia">A Borges</a><a href="#galeria">Galeria</a><a href="#duvidas">Dúvidas</a><a href="#contato">Contato</a></div><div><h3>Localização</h3><p>{company.city} • {company.state}</p><p>Demais dados em validação.</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Borges Esquadrias Metálicas.</span><span>Tradição em metal desde 1978.</span></div></div></footer>

      <Button size="icon" className="floating-whatsapp hidden sm:inline-flex" aria-label="Fale com a Borges" title="Fale com a Borges" onClick={() => whatsapp("floating")}><MessageCircle /></Button>
      <div className="mobile-sticky sm:hidden"><Button className="w-full" onClick={() => whatsapp("mobile_sticky")}>Solicitar orçamento <MessageCircle size={18} /></Button></div>
      {notice && <div className="contact-notice" role="status"><strong>Canal em validação</strong><span>O número oficial do WhatsApp ainda precisa ser informado.</span></div>}

      {lightbox !== null && gallery[lightbox] ? <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização ampliada"><Button variant="light" size="icon" className="lightbox-close" aria-label="Fechar imagem" onClick={() => setLightbox(null)}><X /></Button><Button variant="light" size="icon" className="lightbox-prev" aria-label="Imagem anterior" onClick={() => setLightbox((lightbox - 1 + gallery.length) % gallery.length)}><ArrowLeft /></Button><img src={gallery[lightbox].src} alt={gallery[lightbox].alt} /><Button variant="light" size="icon" className="lightbox-next" aria-label="Próxima imagem" onClick={() => setLightbox((lightbox + 1) % gallery.length)}><ArrowRight /></Button></div> : null}
    </div>
  );
}
