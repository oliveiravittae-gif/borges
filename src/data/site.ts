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
  { label: "Produtos", href: "#produtos" },
  { label: "A Borges", href: "#historia" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
] as const;

export const copy = {
  eyebrow: "Fabricante desde 1978 · Vendas no atacado",
  headline: "Metal que faz parte do seu próximo negócio.",
  intro:
    "Portas, janelas, portões e outras esquadrias metálicas para lojistas, revendedores, construtoras e quem compra em volume. Converse com a Borges sobre o pedido de hoje e as necessidades que vêm depois.",
  heroCta: "Consultar condições de atacado",
  productTitle: "Uma linha para compor o seu pedido.",
  productIntro:
    "Reúna as categorias, medidas e quantidades que sua loja ou obra precisa. Uma consulta completa ajuda a avaliar o conjunto da compra.",
  imageNote: "Imagens ilustrativas. Modelos e especificações sob consulta.",
  recurringTitle: "Pense além do pedido de hoje.",
  recurringIntro:
    "O próximo giro da loja. A próxima etapa da obra. Compartilhe também sua previsão de reposição ou de novas compras para conversar sobre fornecimento recorrente.",
  recurringCta: "Conversar sobre próximas compras",
  history:
    "Desde 1978, a Borges trabalha com esquadrias metálicas em Belford Roxo, RJ. Uma trajetória em metal que hoje se conecta a quem compra para revender e construir.",
  finalTitle: "Sua próxima compra começa com uma boa conversa.",
  finalIntro:
    "Traga sua lista de produtos, quantidades e destino do pedido. Se já houver uma previsão para reposição ou outras etapas, inclua também: vale olhar para o conjunto.",
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
    id: "portas",
    name: "Portas",
    image: door,
    description: "Uma categoria para compor o mix de revenda ou a relação de esquadrias da obra.",
  },
  {
    id: "janelas",
    name: "Janelas",
    image: windowImage,
    description: "Reúna medidas e quantidades por ambiente ou por necessidade de reposição.",
  },
  {
    id: "portoes",
    name: "Portões",
    image: gate,
    description: "Informe os tipos de acesso e a demanda do pedido para consultar as opções.",
  },
  {
    id: "basculantes",
    name: "Basculantes e vitrôs",
    image: detail,
    description: "Complete sua consulta com as demais esquadrias previstas para loja ou obra.",
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
    q: "Para quem a Borges vende?",
    a: "O foco é a venda no atacado para lojistas, revendedores, construtoras e compradores em volume.",
  },
  {
    q: "Quais produtos posso incluir na consulta?",
    a: "Portas, janelas, portões, basculantes, vitrôs e outras esquadrias metálicas. Informe categorias, medidas e quantidades para confirmar modelos e especificações com a equipe.",
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
    q: "As imagens mostram produtos e instalações reais da Borges?",
    a: "As imagens são ilustrativas e não constituem catálogo técnico ou registro das instalações. Confirme os modelos e especificações de interesse com a equipe.",
  },
  {
    q: "Como solicitar um orçamento de atacado?",
    a: "Use os botões de WhatsApp desta página para falar com o comercial pelo (21) 98901-7366. Envie seu perfil de compra, produtos, quantidades e cidade de destino.",
  },
] as const;
