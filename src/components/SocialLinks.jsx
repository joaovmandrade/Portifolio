import { social } from '../data/i18n'

function GitHubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  )
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.39 9.39 0 0 1-1.44-5.01c0-5.19 4.23-9.41 9.43-9.41 2.52 0 4.88.98 6.66 2.76a9.34 9.34 0 0 1 2.76 6.66c0 5.19-4.23 9.41-9.42 9.41zm8.02-17.43A11.34 11.34 0 0 0 12.04.5C5.8.5.72 5.57.72 11.81c0 2 .52 3.95 1.52 5.67L.62 23.5l6.18-1.62a11.32 11.32 0 0 0 5.24 1.34h.01c6.24 0 11.32-5.07 11.32-11.31 0-3.02-1.18-5.86-3.31-8z" />
    </svg>
  )
}

const NETWORKS = [
  {
    key: 'github',
    label: 'GitHub',
    href: social.github,
    Icon: GitHubIcon,
    hover: 'hover:border-[#0D1117] hover:bg-[#0D1117] hover:text-white hover:shadow-[0_12px_26px_-12px_rgba(0,0,0,0.9)]',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: social.linkedin,
    Icon: LinkedInIcon,
    hover: 'hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_12px_26px_-12px_rgba(10,102,194,0.9)]',
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: social.whatsapp,
    Icon: WhatsAppIcon,
    hover: 'hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-[0_12px_26px_-12px_rgba(37,211,102,0.9)]',
  },
]

export function SocialLinks({ size = 'hero' }) {
  const isContact = size === 'contact'
  const boxClass = isContact ? 'h-[46px] w-[46px] rounded-xl' : 'h-11 w-11 rounded-[11px]'
  const iconSize = isContact ? 21 : 20

  return (
    <div className={`flex flex-wrap items-center ${isContact ? 'justify-center gap-3' : 'gap-3'}`}>
      {NETWORKS.map((net) => {
        const Icon = net.Icon
        return (
          <a
            key={net.key}
            href={net.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={net.label}
            className={`inline-flex items-center justify-center border border-slate-400/20 bg-slate-900/50 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 ${boxClass} ${net.hover}`}
          >
            <Icon size={iconSize} />
          </a>
        )
      })}
    </div>
  )
}
