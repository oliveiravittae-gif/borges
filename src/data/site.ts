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
  whatsapp: "",
  phone: "",
  email: "",
  address: "",
} as const;

export const imagery = { hero, factory, detail, door, window: windowImage, gate };

export const navigation = [
  { label: "Produtos", href: "#produtos" },
  { label: "A Borges", href: "#historia" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
] as const;

export const categories = [
  { id: "portas", name: "Portas", image: door, description: "Portas metálicas para diferentes estilos e necessidades de projeto." },
  { id: "janelas", name: "Janelas", image: windowImage, description: "Esquadrias que combinam abertura, proteção e integração com o ambiente." },
  { id: "portoes", name: "Portões", image: gate, description: "Portões metálicos para compor acessos residenciais e outros projetos." },
  { id: "basculantes", name: "Basculantes e vitrôs", image: detail, description: "Opções de esquadrias para ventilação, iluminação e aproveitamento de espaços." },
] as const;

export const featured = [
  { id: "porta-metalica", category: "Portas", name: "Porta metálica", image: door, description: "Consulte modelos e possibilidades para o seu projeto." },
  { id: "janela-metalica", category: "Janelas", name: "Janela metálica", image: windowImage, description: "Informe as medidas e o contexto da obra para iniciar o atendimento." },
  { id: "portao-metalico", category: "Portões", name: "Portão metálico", image: gate, description: "Apresente sua necessidade e consulte as opções disponíveis." },
] as const;

export const faq = [
  { q: "Quais tipos de esquadrias a Borges fabrica?", a: "A Borges atua com portas, janelas, portões, basculantes, vitrôs e outras esquadrias metálicas." },
  { q: "A Borges trabalha com portas metálicas?", a: "Sim. Para consultar modelos, informe à equipe o tipo de porta e o contexto do seu projeto." },
  { q: "Existem diferentes modelos de janelas?", a: "A estrutura de produtos contempla diferentes modelos. A disponibilidade e as especificações devem ser confirmadas no atendimento." },
  { q: "A Borges fabrica portões?", a: "Sim. Você pode iniciar uma conversa informando o tipo de portão que procura e as medidas aproximadas, caso já as tenha." },
  { q: "Como solicitar informações sobre um modelo?", a: "Selecione uma categoria ou produto nesta página para iniciar uma conversa já identificada com o seu interesse." },
  { q: "Como pedir um orçamento?", a: "Use um dos botões de solicitação de orçamento e informe o produto, as medidas aproximadas e o contexto do projeto." },
  { q: "Como falar com a Borges pelo WhatsApp?", a: "Use os botões de atendimento desta página. O número oficial será disponibilizado aqui após a validação dos dados de contato." },
] as const;
