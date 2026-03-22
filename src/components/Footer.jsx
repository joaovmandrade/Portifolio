import { SocialLinks } from './SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-800/80 bg-[#080c14] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-4 sm:flex-row sm:px-6 lg:px-8 text-center">
        <p className="text-center text-sm text-slate-500">
          © {year} João Vitor Andrade. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
