import cineverse from "../assets/cineverse.png"
import dashboard from "../assets/dashboard.png"

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
      "Aplicação web para controle de parcelas de veículo com cálculo automático, estimativa de quitação e gráficos.",
    technologies: ["React", "Vite", "Supabase", "PWA"],
    image: dashboard,
    liveUrl: "",
    repoUrl: "https://github.com/joaovmandrade/relatorio_gasto",
  },
  {
    id: "app-filmes-tmdb",
    title: "App de Filmes (TMDb)",
    description:
      "Aplicação em React que consome API do TMDb com sistema de favoritos.",
    technologies: ["React", "JavaScript", "API TMDb"],
    image: cineverse,
    liveUrl: "https://cine-verse-j.vercel.app/",
    repoUrl: "https://github.com/joaovmandrade/CineVerse",
  },
]
