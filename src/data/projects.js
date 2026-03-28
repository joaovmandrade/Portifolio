import cineverse from "../assets/cineverse.png"
import dashboard from "../assets/dashboard.png"
import cardapio from "../assets/cardapio.png"
import e_commerce from "../assets/e-commerce.png"

/**
 * Projetos do portfólio — edite aqui para adicionar links, imagens e novos cards.
 *
 * image: caminho público (ex: '/projects/dashboard.png') após colocar o arquivo em public/projects/
 * liveUrl / repoUrl: string vazia = botão desabilitado até você preencher
 */
export const projects = [
  {
    id: "dashboard-pagamentos",
    title: "Dashboard de Pagamentos de Veículo",
    description:
      "Dashboard de Controle de Pagamentos de Veículo — uma aplicação web onde registro e acompanho cada parcela paga do meu carro, com dados armazenados em nuvem e acesso mobile via PWA.",
    technologies: ["React", "Vite", "Supabase", "PWA"],
    image: dashboard,
    liveUrl: "",
    repoUrl: "https://github.com/joaovmandrade/relatorio_gasto",
  },
  {
    id: "app-filmes-tmdb",
    title: "App de Filmes (TMDb)",
    description:
      "Aplicação em ReactJS que consome a API do TMDb para listar filmes em cartaz com sistema de favoritos. Projeto para praticar integração de APIs externas e gerenciamento de estado.",
    technologies: ["React", "JavaScript", "API TMDb"],
    image: cineverse,
    liveUrl: "https://cine-verse-j.vercel.app/",
    repoUrl: "https://github.com/joaovmandrade/CineVerse",
  },
  {
    id: "cardapio-hamburgueria",
    title: "Cardápio de Hamburgueria",
    description:
      "Cardápio de uma Hamburgueria utilizando HTML, CSS, TailwindCSS, JavaScript. Com as funcionalidades de poder colocar o item no carrinho, remover e fazer o pedido via whatsapp.",
    technologies: ["HTML", "JavaScript", "TailwindCSS"],
    image: cardapio,
    liveUrl: "https://cardapio-nu.vercel.app/",
    repoUrl: "https://github.com/joaovmandrade/cardapio",
  },
  {
    id: "loja-online",
    title: "E-commerce",
    description:
      "Aplicação de e-commerce moderna com foco em experiência do usuário e conversão, simulando um ambiente real de vendas online. O sistema permite navegação por múltiplas categorias, busca dinâmica e aplicação de filtros, além de integração direta com WhatsApp para fechamento de pedidos.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Supabase"],
    image: e_commerce,
    liveUrl: "https://loja-online-ruddy-omega.vercel.app/",
    repoUrl: "https://github.com/joaovmandrade/Loja-Online",
  },
]
