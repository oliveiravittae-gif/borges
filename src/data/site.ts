import hero from "@/assets/borges-hero.jpg";
import factory from "@/assets/borges-fabrica.jpg";
import detail from "@/assets/borges-detalhe.jpg";
import door from "@/assets/produto-porta.jpg";
import windowImage from "@/assets/produto-janela.jpg";
import gate from "@/assets/produto-portao.jpg";

export const company = {
  name: "Borges",
  fullName: "Borges Esquadrias Metálicas",
  foundedYear: 1978,
  city: "Belford Roxo",
  state: "RJ",
  coverage: "Atendimento exclusivo ao Estado do Rio de Janeiro",
  mission: "Servir bem para servir sempre.",
  whatsapp: "5521989017366",
  commercialPhone: "(21) 98901-7366",
  financePhone: "(21) 98751-4946",
  phones: ["(21) 2761-2633", "(21) 2761-4876"],
  email: "contato@borgesesquadrias.com.br",
  address: {
    street: "Rua Amaraú, 39, galpão",
    neighborhood: "Santa Amélia",
    postalCode: "26115-190",
    city: "Belford Roxo",
    state: "RJ",
    country: "BR",
    formatted: "Rua Amaraú, 39, galpão — Santa Amélia — Belford Roxo/RJ — CEP 26115-190",
  },
  businessHours: [
    { days: "Segunda à quinta", hours: "7h30 às 17h" },
    { days: "Sexta-feira", hours: "7h30 às 16h" },
    { days: "Sábado e domingo", hours: "Fechado" },
  ],
} as const;

export const imagery = { hero, factory, detail, door, window: windowImage, gate };

export const navigation = [
  { label: "Atacado", href: "#atacado" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "A Borges", href: "#historia" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
] as const;

export const copy = {
  catalogTitle: "Conheça os modelos. Componha sua próxima compra.",
  catalogIntro:
    "Explore as linhas, compare acabamentos e abra a ficha do produto. Leve ao comercial uma seleção que faça sentido para o giro da loja ou as etapas da obra.",
  catalogNote: "Medidas, disponibilidade e condições comerciais sob consulta.",
  retailerTitle: "Encontre Borges nas lojas parceiras.",
  retailerIntro:
    "Para comprar no varejo, consulte os revendedores por município. Para abastecer sua loja ou obra em volume, fale diretamente com o comercial Borges.",
  audienceTitle: "Seu negócio tem um próximo passo. Vamos conversar sobre ele.",
  heroProfiles: ["Para sua loja", "Para sua obra", "Para compras em volume"],
  heroLead: "Esquadrias no atacado.",
  heroEmphasis: "O próximo passo do seu negócio.",
  eyebrow: "Fabricante desde 1978 · Vendas no atacado",
  headline: "Metal que faz parte do seu próximo negócio.",
  intro:
    "Linhas de ferro, alumínio e madeira para abastecer sua loja e acompanhar sua obra. Desde 1978, a Borges atende lojistas, construtoras e compradores em volume exclusivamente no Estado do Rio de Janeiro.",
  heroCta: "Consultar condições de atacado",
  productTitle: "Uma linha para compor o seu pedido.",
  productIntro:
    "Reúna as categorias, medidas e quantidades que sua loja ou obra precisa. Uma consulta completa ajuda a avaliar o conjunto da compra.",
  imageNote:
    "Imagens de produtos do catálogo Borges. Consulte medidas, disponibilidade e condições do pedido.",
  recurringTitle: "Pense além do pedido de hoje.",
  recurringIntro:
    "O próximo giro da loja. A próxima etapa da obra. Compartilhe também sua previsão de reposição ou de novas compras para conversar sobre fornecimento recorrente.",
  recurringCta: "Conversar sobre próximas compras",
  history:
    "Fundada em 1978 em Belford Roxo, a Borges une tradição, investimento em tecnologia e capacitação de sua equipe. Linhas de ferro, alumínio e madeira, atendimento comercial próximo e transporte próprio para servir quem revende e constrói no Rio de Janeiro.",
  finalTitle: "Sua próxima compra começa com uma boa conversa.",
  finalIntro:
    "Traga sua lista de produtos, quantidades e destino do pedido. Se já houver uma previsão para reposição ou outras etapas, inclua também: vale olhar para o conjunto.",
} as const;

export const creationCredit = {
  label: "SEO de Criação",
  email: "oliveiravittae.agentes.ia@gmail.com",
} as const;

export const audiences = [
  {
    id: "lojista",
    label: "Lojistas e revendedores",
    title: "O próximo giro da sua loja começa na escolha do mix.",
    description:
      "Consulte as linhas para revenda e reúna, no mesmo pedido, os itens que fazem sentido para o seu público. Informe também o que costuma repor.",
    cta: "Consultar condições para revenda",
  },
  {
    id: "construtora",
    label: "Construtoras e obras",
    title: "Olhe para a obra inteira. Planeje cada etapa.",
    description:
      "Compartilhe os tipos de esquadrias, medidas e quantidades do projeto. Se a compra acontecer em etapas, leve essa previsão para a conversa.",
    cta: "Consultar fornecimento para obra",
  },
  {
    id: "volume",
    label: "Compradores em volume",
    title: "Uma visão do conjunto para uma compra bem definida.",
    description:
      "Organize sua demanda por categoria e quantidade. Consulte o pedido completo e converse sobre futuras necessidades, conforme o seu planejamento.",
    cta: "Solicitar orçamento em volume",
  },
] as const;

export const categories = [
  {
    id: "ferro",
    name: "Linha Ferro",
    image: import.meta.env.BASE_URL + "catalogo/img_Lferro-branco-15.jpg",
    description:
      "Portas, janelas, portões, basculantes e vitrôs. Acabamentos branco, Black, cinza e galvanizado.",
  },
  {
    id: "aluminio",
    name: "Linha Alumínio",
    image: import.meta.env.BASE_URL + "catalogo/img_Lalu-6.jpg",
    description:
      "Janelas de correr, basculantes e portas. Opções em alumínio natural e branco para compor o pedido.",
  },
  {
    id: "madeira",
    name: "Linha Madeira",
    image: import.meta.env.BASE_URL + "catalogo/img_Lmad-natural-8.jpg",
    description:
      "Portas lisas e frisadas, com opções de alto brilho e natural, em branco, cerejeira e mogno.",
  },
] as const;

export const strengths = [
  {
    title: "Representantes próximos do lojista",
    description:
      "Equipe de representantes para atender sua loja. Converse com o comercial e solicite uma visita.",
  },
  {
    title: "Transporte próprio",
    description:
      "Funcionários treinados e transporte próprio para entregas com agilidade e segurança. Consulte as condições para seu pedido no RJ.",
  },
  {
    title: "Qualidade em cada produto",
    description:
      "Produtos com controle e selo de qualidade, com atenção à segurança e ao aprimoramento das linhas.",
  },
  {
    title: "Atendimento que conhece a linha",
    description:
      "Equipe de vendas capacitada para orientar sobre produtos e negociar a composição da sua compra.",
  },
] as const;

export const planning = [
  ["01", "Identifique sua compra", "Revenda, obra ou outra demanda em volume."],
  ["02", "Reúna o conjunto", "Categorias, medidas e quantidades estimadas."],
  ["03", "Inclua as próximas etapas", "Reposição ou novas compras, se já previstas."],
  ["04", "Consulte o comercial", "Confirme modelos, condições e atendimento ao destino."],
] as const;

export const faq = [
  {
    q: "A Borges atende fora do Rio de Janeiro?",
    a: "Não. O atendimento é exclusivo ao Estado do Rio de Janeiro. Informe seu município para consultar as condições de entrega do pedido.",
  },
  {
    q: "Posso solicitar a visita de um representante?",
    a: "Sim. A Borges conta com representantes para atender lojistas. Entre em contato com o comercial, informe sua loja e município e solicite uma visita.",
  },
  {
    q: "A Borges possui transporte próprio?",
    a: "Sim. A empresa dispõe de transporte próprio e funcionários treinados para as entregas. Prazos e condições são definidos no atendimento comercial para cada pedido.",
  },
  {
    q: "Para quem a Borges vende?",
    a: "O foco é a venda no atacado para lojistas, revendedores, construtoras e compradores em volume.",
  },
  {
    q: "Quais produtos posso incluir na consulta?",
    a: "Linhas de ferro, alumínio e madeira, com portas, janelas, portões, basculantes e vitrôs. Explore os modelos e acabamentos no catálogo e informe medidas e quantidades ao comercial.",
  },
  {
    q: "Existe quantidade mínima ou condição por volume?",
    a: "Consulte o comercial com a composição do seu pedido. Quantidades mínimas, preços e condições de pagamento precisam ser confirmados no atendimento.",
  },
  {
    q: "Posso conversar sobre reposição e compras recorrentes?",
    a: "Sim. Informe os itens que costuma comprar e sua previsão de reposição, ou as etapas da obra. A equipe avaliará a possibilidade de fornecimento e as condições para sua demanda.",
  },
  {
    q: "Como confirmar disponibilidade, prazo e entrega?",
    a: "Informe os produtos, quantidades e cidade de destino. Disponibilidade, prazos e condições de entrega devem ser confirmados com o comercial antes de fechar o pedido.",
  },
  {
    q: "Como consultar imagens e especificações dos produtos?",
    a: "As linhas e o catálogo apresentam imagens de produtos publicadas pela Borges. Abra a ficha do modelo para consultar os detalhes. As imagens de arquitetura na abertura e na história são ilustrativas. Confirme medidas e especificações com o comercial.",
  },
  {
    q: "Como solicitar um orçamento de atacado?",
    a: "Use os botões de WhatsApp desta página para falar com o comercial pelo (21) 98901-7366. Envie seu perfil de compra, produtos, quantidades e cidade de destino.",
  },
] as const;
