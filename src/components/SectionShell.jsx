export function SectionShell({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
