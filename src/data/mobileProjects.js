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
 */
export const mobileProjects = [
  {
    id: 'app-the-door',
    title: 'Seu projeto mobile',
    titleEn: 'Your mobile project',
    description:
      'Espaço reservado para um app React Native. Edite data/mobileProjects.js, troque o print e os links — o card já entra com a moldura de celular.',
    descriptionEn:
      'Reserved space for a React Native app. Edit data/mobileProjects.js, swap the screenshot and links — the card already comes with the phone frame.',
    technologies: ['React Native', 'Expo', 'TypeScript'],
    platform: 'Cross-platform',
    image: '', // <- adicione o print vertical aqui
    storeUrl: '',
    repoUrl: '',
  },
]
