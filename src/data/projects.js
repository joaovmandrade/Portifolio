import combinas from '../assets/combinas.png'
import cineverse from '../assets/cineverse.png'
import dashboard from '../assets/dashboard.png'
import cardapio from '../assets/cardapio.png'
import e_commerce from '../assets/e-commerce.png'

/**
 * PROJETOS WEB
 * ------------
 * Campos básicos (aparecem sempre no card):
 * - image: import do print (arquivos em src/assets/)
 * - technologies: array de strings (vira as tags)
 * - liveUrl / repoUrl: deixe "" se não houver
 * - titleEn / descriptionEn: versões em inglês usadas quando lang === 'en'
 * - role: meu papel no projeto — vira o selo azul abaixo do título
 * - featured: true renderiza o card no layout de destaque (print maior)
 *
 * Campos OPCIONAIS de aprofundamento — se existirem, o card ganha o botão
 * "Ver detalhes" e abre um painel com o conteúdo completo:
 * - category: array de chips ao lado de "Web" (ex.: ['SaaS', 'IA'])
 * - tagline: frase de efeito destacada no topo do painel
 * - overview: array de parágrafos (o texto longo do projeto)
 * - stack: [{ label, labelEn?, items: [] }] — stack agrupada por camada
 * - features: [{ label, labelEn?, items: [], itemsEn?: [] }] — funcionalidades
 * - highlights: array de diferenciais técnicos
 *
 * Qualquer um deles aceita a variante `...En` para o idioma inglês.
 */
export const projects = [
  {
    id: 'combinas',
    featured: true,
    title: 'Combinas · SaaS de Fashion Tech',
    titleEn: 'Combinas · Fashion Tech SaaS',
    category: ['SaaS', 'Fashion Tech', 'E-commerce', 'IA'],
    role: 'Cofundador · CTO · Desenvolvedor FullStack',
    roleEn: 'Co-founder · CTO · Full Stack Developer',
    tagline:
      'SaaS de Fashion Tech que combina e-commerce, inteligência artificial e provador virtual para transformar a experiência de compra de moda online.',
    taglineEn:
      'A Fashion Tech SaaS that combines e-commerce, artificial intelligence and a virtual try-on to reshape how people buy fashion online.',
    description:
      'Plataforma SaaS B2B multi-tenant para lojas de moda que une e-commerce, IA e provador virtual, com cada loja tendo seu próprio ambiente, catálogo e identidade, e o cliente vendo a peça no próprio corpo a partir de uma foto.',
    descriptionEn:
      'Multi-tenant B2B SaaS for fashion stores combining e-commerce, AI and a virtual try-on, where each store has its own environment, catalog and identity, and shoppers see a garment on their own body from a single photo.',
    overview: [
      'Plataforma SaaS B2B multi-tenant para lojas de moda, desenvolvida para integrar e-commerce, inteligência artificial e provador virtual. A solução permite que diferentes lojas tenham seus próprios ambientes, catálogos e experiências de compra, enquanto o consumidor pode visualizar virtualmente como uma peça de roupa ficaria através de IA.',
      'A arquitetura é composta por aplicações independentes para frontend, backend e processamento de Virtual Try-On, com foco em escalabilidade, segurança, isolamento de dados e experiência Mobile First.',
      'Atuo como cofundador e CTO do produto, respondendo pelas decisões de arquitetura e pela construção da plataforma de ponta a ponta, do frontend e do design system à modelagem do banco, à API, ao pipeline de IA e à infraestrutura de deploy.',
    ],
    overviewEn: [
      'A multi-tenant B2B SaaS platform for fashion stores, built to bring together e-commerce, artificial intelligence and a virtual try-on. Each store runs its own environment, catalog and shopping experience, while shoppers can virtually preview how a garment would look on them through AI.',
      'The architecture is made of independent applications for the frontend, the backend and the Virtual Try-On processing, focused on scalability, security, data isolation and a Mobile First experience.',
      'I am a co-founder and the CTO of the product, owning the architecture decisions and building the platform end to end, from the frontend and the design system to database modeling, the API, the AI pipeline and the deployment infrastructure.',
    ],
    stack: [
      {
        label: 'Frontend',
        items: [
          'Next.js 15',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'shadcn/ui',
          'Zustand',
          'TanStack Query',
          'React Hook Form',
          'Zod',
          'Framer Motion',
          'Recharts',
        ],
      },
      {
        label: 'Backend',
        items: [
          'Python',
          'Django',
          'Django REST Framework',
          'PostgreSQL',
          'JWT',
          'Redis',
          'Celery',
          'pgvector',
        ],
      },
      {
        label: 'IA / VTON',
        labelEn: 'AI / VTON',
        items: [
          'FastAPI',
          'Python',
          'IDM-VTON',
          'Google Gemini',
          'Google GenAI SDK',
          'Embeddings',
          'Virtual Try-On',
        ],
      },
      {
        label: 'Infraestrutura',
        labelEn: 'Infrastructure',
        items: ['Docker', 'Vercel', 'Railway', 'REST API', 'Webhooks', 'Arquitetura assíncrona'],
        itemsEn: [
          'Docker',
          'Vercel',
          'Railway',
          'REST API',
          'Webhooks',
          'Asynchronous architecture',
        ],
      },
    ],
    features: [
      {
        label: 'Para lojistas',
        labelEn: 'For store owners',
        items: [
          'Dashboard administrativo com métricas e estatísticas',
          'Gestão de produtos, catálogo, categorias e coleções',
          'Gestão de clientes',
          'Loja virtual personalizada por marca',
          'Arquitetura multi-tenant com isolamento de dados',
          'Controle de usuários, permissões e memberships (RBAC)',
          'Integrações via API e webhooks',
          'Recursos de inteligência aplicados aos produtos',
        ],
        itemsEn: [
          'Admin dashboard with metrics and statistics',
          'Product, catalog, category and collection management',
          'Customer management',
          'Storefront customized per brand',
          'Multi-tenant architecture with data isolation',
          'User, permission and membership control (RBAC)',
          'Integrations via API and webhooks',
          'AI-powered features applied to products',
        ],
      },
      {
        label: 'Para clientes',
        labelEn: 'For shoppers',
        items: [
          'Loja virtual responsiva, Mobile First',
          'Catálogo, coleções e busca de produtos',
          'Página de produto detalhada',
          'Wishlist e carrinho',
          'Checkout',
          'Provador virtual com IA',
          'Visualização da peça a partir de uma foto própria',
        ],
        itemsEn: [
          'Responsive, Mobile First storefront',
          'Catalog, collections and product search',
          'Detailed product page',
          'Wishlist and cart',
          'Checkout',
          'AI-powered virtual try-on',
          'Garment preview from the shopper’s own photo',
        ],
      },
    ],
    highlights: [
      'Arquitetura SaaS multi-tenant com isolamento de dados entre lojas',
      'API First, com o backend como autoridade das regras de negócio',
      'Serviço de Virtual Try-On totalmente desacoplado do frontend',
      'Processamento assíncrono com Celery e filas em Redis',
      'PostgreSQL com pgvector para busca por embeddings',
      'Integração com modelos de IA (IDM-VTON e Google Gemini)',
      'Webhooks orquestrando o pipeline assíncrono',
      'Autenticação com JWT, RBAC e controle fino de permissões',
      'Mobile First, SEO First e Performance First',
      'Design System construído sobre shadcn/ui',
      'Arquitetura preparada para escalabilidade',
    ],
    highlightsEn: [
      'Multi-tenant SaaS architecture with data isolation between stores',
      'API First, with the backend owning the business rules',
      'Virtual Try-On service fully decoupled from the frontend',
      'Asynchronous processing with Celery and Redis-backed queues',
      'PostgreSQL with pgvector for embedding-based search',
      'Integration with AI models (IDM-VTON and Google Gemini)',
      'Webhooks orchestrating the asynchronous pipeline',
      'JWT authentication with RBAC and fine-grained permissions',
      'Mobile First, SEO First and Performance First',
      'Design System built on top of shadcn/ui',
      'Architecture ready to scale',
    ],
    technologies: [
      'Next.js 15',
      'TypeScript',
      'TailwindCSS',
      'Python',
      'Django REST',
      'PostgreSQL',
      'pgvector',
      'FastAPI',
      'Celery',
      'Redis',
      'Docker',
    ],
    image: combinas,
    liveUrl: 'http://www.combinas.com.br',
    repoUrl: '',
  },
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
