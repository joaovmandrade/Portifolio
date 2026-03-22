export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  type = 'button',
  title,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500/80'

  const variants = {
    primary:
      'bg-blue-600/90 text-slate-100 shadow-lg shadow-blue-900/20 hover:bg-blue-500 hover:shadow-blue-800/30 active:scale-[0.98]',
    secondary:
      'border border-slate-600/80 bg-slate-800/40 text-slate-200 hover:border-blue-500/40 hover:bg-slate-800/70 active:scale-[0.98]',
    ghost: 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50',
  }

  const disabledCls =
    'pointer-events-none cursor-not-allowed opacity-45 shadow-none hover:bg-blue-600/90'

  const cls = `${base} ${variants[variant] || variants.primary} ${disabled ? disabledCls : ''} ${className}`

  if (href && !disabled) {
    return (
      <a href={href} className={cls} title={title} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      title={title}
      {...rest}
    >
      {children}
    </button>
  )
}
