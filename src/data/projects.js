import cineverse from '../assets/cineverse.png'
import dashboard from '../assets/dashboard.png'
import cardapio from '../assets/cardapio.png'
import e_commerce from '../assets/e-commerce.png'

/**
 * PROJETOS WEB
 * ------------
 * - image: import do print (arquivos em src/assets/)
 * - technologies: array de strings (vira as tags)
 * - liveUrl / repoUrl: deixe "" se não houver
 * - titleEn / descriptionEn: versões em inglês usadas quando lang === 'en'
 */
export const projects = [
  {
    id: 'dashboard-pagamentos',
    title: 'Dashboard de Pagamentos de Veículo',
    titleEn: 'Vehicle Payments Dashboard',
    description:
      'Aplicação web onde registro e acompanho cada parcela paga do meu carro, com dados em nuvem e acesso mobile via PWA.',
    descriptionEn:
      'Web app where I record and track every installment paid on my car, with cloud data and mobile access via PWA.',
    technologies: ['React', 'Vite', 'JavaScript', 'Supabase', 'TailwindCSS', 'PWA'],
    image: dashboard,
    liveUrl: 'https://relatorio-gasto.vercel.app/',
    repoUrl: 'https://github.com/joaovmandrade/relatorio_gasto',
  },
  {
    id: 'app-filmes-tmdb',
    title: 'App de Filmes (TMDb)',
    titleEn: 'Movies App (TMDb)',
    description:
      'Aplicação React que consome a API do TMDb para listar filmes em cartaz com sistema de favoritos. Foco em integração de APIs e gerenciamento de estado.',
    descriptionEn:
      'React application that consumes the TMDb API to list movies in theaters with a favorites system. Focused on API integration and state management.',
    technologies: ['React', 'JavaScript', 'API TMDb'],
    image: cineverse,
    liveUrl: 'https://cine-verse-j.vercel.app/',
    repoUrl: 'https://github.com/joaovmandrade/CineVerse',
  },
  {
    id: 'cardapio-hamburgueria',
    title: 'Cardápio de Hamburgueria',
    titleEn: 'Burger Shop Menu',
    description:
      'Cardápio digital com carrinho, remoção de itens e fechamento de pedido via WhatsApp. Construído com HTML, CSS, TailwindCSS e JavaScript.',
    descriptionEn:
      'Digital menu with cart, item removal and order checkout via WhatsApp. Built with HTML, CSS, TailwindCSS and JavaScript.',
    technologies: ['HTML', 'JavaScript', 'TailwindCSS'],
    image: cardapio,
    liveUrl: 'https://cardapio-nu.vercel.app/',
    repoUrl: 'https://github.com/joaovmandrade/cardapio',
  },
  {
    id: 'loja-online',
    title: 'E-commerce',
    titleEn: 'E-commerce',
    description:
      'Ambiente real de vendas online: navegação por categorias, busca dinâmica, filtros e integração com WhatsApp para fechamento de pedidos.',
    descriptionEn:
      'A real online sales environment: category navigation, dynamic search, filters and WhatsApp integration for order checkout.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Supabase'],
    image: e_commerce,
    liveUrl: 'https://loja-online-ruddy-omega.vercel.app/',
    repoUrl: 'https://github.com/joaovmandrade/Loja-Online',
  },
]
