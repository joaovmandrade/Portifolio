export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      {eyebrow ? (
        <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-blue-400/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-200 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
