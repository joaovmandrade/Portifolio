/**
 * PROJETOS MOBILE
 * ---------------
 * Estes cards aparecem dentro de uma MOLDURA DE CELULAR.
 * Use prints no formato RETRATO (vertical, ~9:19.5) para encaixar bem.
 *
 * Como adicionar:
 * 1. Importe o print vertical de src/assets/ (ex.: import meuApp from '../assets/meu-app.png')
 * 2. Copie o bloco abaixo, preencha os campos e ajuste a imagem/links.
 *
 * Campos:
 * - platform: "iOS" | "Android" | "Cross-platform"
 * - image: import do print vertical (deixe "" para mostrar o placeholder)
 * - storeUrl: link da loja / build (deixe "" se não houver) -> botão "Abrir app"
 * - repoUrl: repositório (deixe "" se for privado)
 *
 * Os campos opcionais de aprofundamento documentados em data/projects.js
 * (role, category, tagline, overview, stack, features, highlights) funcionam
 * aqui do mesmo jeito e abrem o painel "Ver detalhes".
 */
export const mobileProjects = [
  {
    id: "mo-lucro",
    title: "Mo Lucro · Gestão de Carteira de Investimentos",
    titleEn: "Mo Lucro · Investment Portfolio Management",
    category: ["Fintech", "Investimentos"],
    categoryEn: ["Fintech", "Investments"],
    role: "Projeto de TCC · Engenharia de Software",
    roleEn: "Capstone project · Software Engineering",
    tagline:
      "Aplicativo fintech que reúne a carteira de investimentos, a evolução patrimonial e a análise de desempenho em um só lugar.",
    taglineEn:
      "A fintech app that brings the investment portfolio, net worth evolution and performance analysis together in one place.",
    description:
      "Aplicativo fintech multiplataforma desenvolvido em Flutter como meu Trabalho de Conclusão de Curso em Engenharia de Software. A proposta é centralizar a gestão de uma carteira de investimentos em um só lugar: o investidor registra seus aportes, acompanha a composição da carteira e visualiza a evolução do patrimônio ao longo do tempo. Conta com autenticação segura e persistência de sessão, dados sincronizados em nuvem via Supabase sobre PostgreSQL, e dashboards financeiros com gráficos interativos em fl_chart para análise de desempenho.",
    descriptionEn:
      "Cross-platform fintech app built with Flutter as my capstone project in Software Engineering. The goal is to centralize investment portfolio management in a single place: investors record their contributions, follow the portfolio composition and watch their net worth evolve over time. It ships with secure authentication and session persistence, data synchronized to the cloud through Supabase on top of PostgreSQL, and financial dashboards with interactive fl_chart visualizations for performance analysis.",
    overview: [
      "O Mo Lucro é o meu Trabalho de Conclusão de Curso em Engenharia de Software: um aplicativo fintech multiplataforma, desenvolvido em Flutter, que reúne a gestão de uma carteira de investimentos em uma única interface, do registro dos aportes ao acompanhamento da evolução patrimonial.",
      "A aplicação foi construída com autenticação segura e persistência de sessão, mantendo o usuário conectado entre as aberturas do app, e com sincronização de dados em nuvem via Supabase sobre PostgreSQL, para que a carteira continue consistente em qualquer dispositivo.",
      "A camada de visualização traz dashboards financeiros com gráficos interativos construídos com fl_chart, voltados para a análise de desempenho dos investimentos e o acompanhamento do patrimônio ao longo do tempo.",
      "Por ser um projeto acadêmico, o trabalho foi além do código: passou pelo levantamento de requisitos, pela modelagem do banco de dados e pela documentação da solução, entregando uma base única em Flutter que roda em Android e iOS.",
    ],
    overviewEn: [
      "Mo Lucro is my capstone project in Software Engineering: a cross-platform fintech app, built with Flutter, that gathers investment portfolio management into a single interface, from recording contributions to tracking net worth evolution.",
      "The application was built with secure authentication and session persistence, keeping the user signed in between app launches, and with cloud data synchronization through Supabase on top of PostgreSQL, so the portfolio stays consistent on any device.",
      "The visualization layer brings financial dashboards with interactive charts built with fl_chart, focused on analyzing investment performance and following net worth over time.",
      "Being an academic project, the work went beyond code: it covered requirements gathering, database modeling and solution documentation, delivering a single Flutter codebase running on both Android and iOS.",
    ],
    stack: [
      {
        label: "App",
        items: ["Flutter", "Dart", "fl_chart"],
      },
      {
        label: "Backend & Dados",
        labelEn: "Backend & Data",
        items: ["Supabase", "PostgreSQL", "Autenticação JWT", "Cloud Sync"],
        itemsEn: ["Supabase", "PostgreSQL", "JWT authentication", "Cloud Sync"],
      },
    ],
    features: [
      {
        label: "Carteira e conta",
        labelEn: "Portfolio and account",
        items: [
          "Autenticação segura com persistência de sessão",
          "Sincronização de dados em nuvem via Supabase",
          "Gestão de investimentos e controle de carteira",
          "Aplicativo multiplataforma a partir de uma base única",
        ],
        itemsEn: [
          "Secure authentication with session persistence",
          "Cloud data synchronization through Supabase",
          "Investment management and portfolio control",
          "Cross-platform app from a single codebase",
        ],
      },
      {
        label: "Dashboards",
        items: [
          "Dashboards financeiros interativos",
          "Visualização gráfica com fl_chart",
          "Análise de desempenho dos investimentos",
          "Acompanhamento da evolução patrimonial",
        ],
        itemsEn: [
          "Interactive financial dashboards",
          "Chart visualization with fl_chart",
          "Investment performance analysis",
          "Net worth evolution tracking",
        ],
      },
    ],
    highlights: [
      "Base de código única em Flutter rodando em Android e iOS",
      "Autenticação e sessão persistente sobre o Supabase",
      "Dados em PostgreSQL gerenciado, sincronizados entre dispositivos",
      "Visualização gráfica interativa com fl_chart",
    ],
    highlightsEn: [
      "Single Flutter codebase running on Android and iOS",
      "Authentication and persistent session on top of Supabase",
      "Data on managed PostgreSQL, synchronized across devices",
      "Interactive chart visualization with fl_chart",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL",
      "fl_chart",
      "JWT",
      "Cloud Sync",
    ],
    platform: "Cross-platform",
    image: "",
    storeUrl: "",
    repoUrl: "https://github.com/joaovmandrade/mo_lucro",
  },
]
