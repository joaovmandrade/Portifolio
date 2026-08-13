function Line({ n, children }) {
  return (
    <div className="flex gap-4">
      <span className="w-5 flex-none select-none text-right text-[#334155]">{n}</span>
      {children}
    </div>
  )
}

/**
 * Janela de editor de código flutuante usada no Hero (estilo macOS),
 * com syntax highlighting, números de linha e cursor piscando.
 */
export function CodeWindow() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-[360px] animate-[floatY_6s_ease-in-out_infinite]">
        <div
          aria-hidden="true"
          className="absolute -inset-9 rounded-full blur-[42px]"
          style={{
            background:
              'radial-gradient(circle, rgba(37,99,235,0.30), rgba(79,70,229,0.14) 45%, transparent 68%)',
          }}
        />
        <div
          className="relative overflow-hidden rounded-2xl border border-slate-400/[0.16] backdrop-blur-md"
          style={{
            background: 'linear-gradient(160deg, rgba(17,25,42,0.97), rgba(11,17,30,0.97))',
            boxShadow:
              '0 34px 60px -26px rgba(8,12,24,0.95), 0 0 0 1px rgba(96,165,250,0.06)',
          }}
        >
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-slate-400/10 bg-slate-900/50 px-[15px] py-3">
            <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f56]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#ffbd2e]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#27c93f]" />
            <span className="ml-2 inline-flex items-center gap-[7px] font-mono text-[11.5px] text-[#64748b]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              dev.ts
            </span>
          </div>

          {/* code */}
          <div className="flex flex-col py-4 pr-[18px] font-mono text-[13px] leading-[1.95]">
            <Line n="1">
              <span className="text-[#c084fc]">
                const <span className="text-[#60a5fa]">dev</span> <span className="text-[#64748b]">= {'{'}</span>
              </span>
            </Line>
            <Line n="2">
              <span className="pl-[18px]">
                <span className="text-[#38bdf8]">name</span>
                <span className="text-[#64748b]">:</span> <span className="text-[#34d399]">'João Vitor'</span>
                <span className="text-[#64748b]">,</span>
              </span>
            </Line>
            <Line n="3">
              <span className="pl-[18px]">
                <span className="text-[#38bdf8]">role</span>
                <span className="text-[#64748b]">:</span> <span className="text-[#34d399]">'Co-founder & CTO'</span>
                <span className="text-[#64748b]">,</span>
              </span>
            </Line>
            <Line n="4">
              <span className="pl-[18px]">
                <span className="text-[#38bdf8]">building</span>
                <span className="text-[#64748b]">:</span> <span className="text-[#34d399]">'Combinas'</span>
                <span className="text-[#64748b]">,</span>
              </span>
            </Line>
            <Line n="5">
              <span className="pl-[18px]">
                <span className="text-[#38bdf8]">stack</span>
                <span className="text-[#64748b]">: [</span>
              </span>
            </Line>
            <Line n="6">
              <span className="pl-9">
                <span className="text-[#34d399]">'Next.js'</span>
                <span className="text-[#64748b]">,</span> <span className="text-[#34d399]">'Django'</span>
                <span className="text-[#64748b]">,</span>
              </span>
            </Line>
            <Line n="7">
              <span className="pl-9">
                <span className="text-[#34d399]">'React Native'</span>
                <span className="text-[#64748b]">,</span> <span className="text-[#34d399]">'IA'</span>
                <span className="text-[#64748b]">,</span>
              </span>
            </Line>
            <Line n="8">
              <span className="pl-[18px]">
                <span className="text-[#64748b]">],</span>
              </span>
            </Line>
            <Line n="9">
              <span className="pl-[18px]">
                <span className="text-[#38bdf8]">available</span>
                <span className="text-[#64748b]">:</span> <span className="text-[#fbbf24]">true</span>
                <span className="text-[#64748b]">,</span>
              </span>
            </Line>
            <Line n="10">
              <span>
                <span className="text-[#64748b]">{'};'}</span>
                <span className="ml-1 inline-block h-[15px] w-2 -translate-y-[2px] animate-[blinkCaret_1.1s_step-end_infinite] bg-[#60a5fa] align-bottom" />
              </span>
            </Line>
          </div>

          {/* status bar */}
          <div className="flex items-center gap-[9px] border-t border-slate-400/10 bg-slate-900/40 px-4 py-[11px] font-mono text-[10.5px] text-[#475569]">
            <span className="inline-flex items-center gap-[6px] text-[#34d399]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#34d399] shadow-[0_0_0_3px_rgba(52,211,153,0.18)]" />
              build passing
            </span>
            <span className="ml-auto tracking-[0.08em]">UTF-8 · LF</span>
          </div>
        </div>
      </div>
    </div>
  )
}
