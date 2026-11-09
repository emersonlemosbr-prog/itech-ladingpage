export function WorkbenchVisual() {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-800/90 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-2xl group">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-neutral-900/40 to-neutral-950 pointer-events-none" />
      
      {/* Subtle workbench grid mat texture */}
      <div className="absolute inset-0 tech-grid-subtle opacity-40 pointer-events-none" />

      {/* High-fidelity SVG Technical Workbench Graphic */}
      <svg
        viewBox="0 0 800 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover select-none"
      >
        <defs>
          {/* Blue-gray silicone ESD mat gradient */}
          <linearGradient id="matGrad" x1="0" y1="0" x2="800" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E242B" />
            <stop offset="100%" stopColor="#14181E" />
          </linearGradient>

          {/* Smartphone screen gradient */}
          <linearGradient id="screenGrad" x1="280" y1="120" x2="520" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B0D10" />
            <stop offset="50%" stopColor="#13171F" />
            <stop offset="100%" stopColor="#0D1015" />
          </linearGradient>

          {/* Screwdriver metallic gradient */}
          <linearGradient id="metalShaft" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stopColor="#8A939E" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Warm LED spotlight glow */}
          <radialGradient id="lampGlow" cx="400" cy="180" r="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFBE0B" stopOpacity="0.14" />
            <stop offset="70%" stopColor="#FFBE0B" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* --- Silicone ESD Workbench Mat --- */}
        <rect x="40" y="40" width="720" height="400" rx="16" fill="url(#matGrad)" stroke="#2D3748" strokeWidth="1.5" />
        
        {/* Mat measurement grids & part trays */}
        {/* Left component bin slots */}
        <g opacity="0.6">
          <rect x="65" y="65" width="60" height="45" rx="6" fill="#13181E" stroke="#2B3441" />
          <rect x="65" y="120" width="60" height="45" rx="6" fill="#13181E" stroke="#2B3441" />
          <rect x="65" y="175" width="60" height="45" rx="6" fill="#13181E" stroke="#2B3441" />
          <rect x="65" y="230" width="60" height="45" rx="6" fill="#13181E" stroke="#2B3441" />
          <rect x="65" y="285" width="60" height="45" rx="6" fill="#13181E" stroke="#2B3441" />
          <rect x="65" y="340" width="60" height="45" rx="6" fill="#13181E" stroke="#2B3441" />
          
          {/* Screws in tray */}
          <circle cx="95" cy="88" r="3" fill="#A0AEC0" />
          <circle cx="85" cy="142" r="2.5" fill="#CBD5E1" />
          <circle cx="102" cy="145" r="2.5" fill="#CBD5E1" />
          <circle cx="90" cy="200" r="3" fill="#A0AEC0" />
          <circle cx="105" cy="195" r="2" fill="#E2E8F0" />
        </g>

        {/* Center work area alignment ruler ticks */}
        <g stroke="#334155" strokeWidth="1" opacity="0.5">
          <line x1="160" y1="65" x2="680" y2="65" />
          <line x1="160" y1="415" x2="680" y2="415" />
          {Array.from({ length: 27 }).map((_, i) => (
            <line key={`ruler-${i}`} x1={160 + i * 20} y1="60" x2={160 + i * 20} y2={i % 5 === 0 ? "70" : "66"} />
          ))}
        </g>

        {/* Central lamp glow overlay */}
        <circle cx="420" cy="230" r="260" fill="url(#lampGlow)" />

        {/* --- Disassembled Smartphone Under Repair --- */}
        {/* Phone Chassis Base */}
        <g transform="translate(310, 110) rotate(-6)">
          {/* Outer frame */}
          <rect x="0" y="0" width="160" height="270" rx="24" fill="#0F1318" stroke="#374151" strokeWidth="2.5" />
          
          {/* Inner cavity */}
          <rect x="8" y="10" width="144" height="250" rx="18" fill="#171C24" />

          {/* Logic Board (Top) */}
          <rect x="14" y="16" width="132" height="78" rx="8" fill="#1B3320" stroke="#234E28" strokeWidth="1" />
          {/* Microchips & Shielding */}
          <rect x="22" y="24" width="46" height="42" rx="4" fill="#2D3748" stroke="#4A5568" />
          <text x="32" y="48" fill="#94A3B8" fontSize="8" fontFamily="monospace" fontWeight="bold">CPU</text>
          <rect x="74" y="24" width="38" height="30" rx="3" fill="#1A202C" stroke="#334155" />
          <circle cx="126" cy="36" r="10" fill="#0B0E14" stroke="#4B5563" strokeWidth="1.5" />
          <circle cx="126" cy="36" r="4.5" fill="#1E293B" />
          {/* Copper trace lines */}
          <path d="M 22 70 H 136" stroke="#C59B27" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />

          {/* Lithium-Ion Battery */}
          <rect x="14" y="100" width="85" height="152" rx="8" fill="#111827" stroke="#374151" strokeWidth="1.2" />
          <text x="24" y="130" fill="#9CA3AF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Li-ion 4500mAh</text>
          <text x="24" y="145" fill="#6B7280" fontSize="7" fontFamily="sans-serif">3.85V · FAST CHARGING</text>
          <rect x="24" y="160" width="65" height="2" fill="#374151" />

          {/* Flex Cable connector */}
          <path d="M 75 100 L 75 94 L 85 94 L 85 100" fill="#D97706" />

          {/* Lower Speaker & Haptic Module */}
          <rect x="105" y="180" width="41" height="72" rx="6" fill="#1F2937" stroke="#374151" />
          <rect x="115" y="235" width="20" height="12" rx="2" fill="#0B0F17" stroke="#4B5563" />
        </g>

        {/* Separated Display Screen (Adjacent, connected by ribbon) */}
        <g transform="translate(195, 125) rotate(-14)">
          <rect x="0" y="0" width="135" height="255" rx="20" fill="url(#screenGrad)" stroke="#475569" strokeWidth="1.5" />
          {/* Glass reflection sheen */}
          <path d="M 12 18 L 120 18 L 40 238 L 12 238 Z" fill="#FFFFFF" fillOpacity="0.04" />
          {/* Orange Ribbon Cable connecting to body */}
          <path d="M 125 150 C 150 150, 160 160, 185 160" stroke="#FFBE0B" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
          <path d="M 125 150 C 150 150, 160 160, 185 160" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
        </g>

        {/* --- Professional Repair Tools on Mat --- */}
        {/* 1. Precision Screwdriver with Yellow Accent Band */}
        <g transform="translate(525, 80) rotate(24)">
          {/* Swivel cap */}
          <rect x="0" y="0" width="22" height="16" rx="4" fill="#111827" stroke="#374151" />
          {/* Grip handle */}
          <rect x="2" y="16" width="18" height="110" rx="3" fill="#1F2937" stroke="#4B5563" />
          {/* itech Yellow ergonomic accent rings */}
          <rect x="2" y="40" width="18" height="8" fill="#FFBE0B" />
          <rect x="2" y="60" width="18" height="6" fill="#FFBE0B" />
          {/* Metal shaft */}
          <rect x="8" y="126" width="6" height="85" fill="url(#metalShaft)" />
          {/* Torx / Phillips bit tip */}
          <polygon points="7,211 15,211 13,225 9,225" fill="#475569" />
        </g>

        {/* 2. Curved Anti-Static ESD Tweezers */}
        <g transform="translate(595, 200) rotate(68)">
          <path
            d="M 0 0 C 10 30, 15 120, 2 170 L 6 170 C 22 110, 16 30, 4 0 Z"
            fill="#0F172A"
            stroke="#38BDF8"
            strokeWidth="0.5"
          />
          <text x="-40" y="85" fill="#64748B" fontSize="7" transform="rotate(-90)" fontFamily="sans-serif">ESD-15</text>
        </g>

        {/* 3. Digital Multimeter Probe Leads (Right Edge) */}
        <g transform="translate(680, 150)">
          {/* Red probe */}
          <rect x="0" y="0" width="12" height="90" rx="3" fill="#DC2626" />
          <rect x="4" y="90" width="4" height="40" fill="url(#metalShaft)" />
          <path d="M 6 0 C 6 -30, 25 -40, 25 -70" stroke="#DC2626" strokeWidth="4" fill="none" />

          {/* Black probe */}
          <rect x="24" y="30" width="12" height="90" rx="3" fill="#1F2937" stroke="#374151" />
          <rect x="28" y="120" width="4" height="40" fill="url(#metalShaft)" />
          <path d="M 30 30 C 30 0, 45 -10, 45 -40" stroke="#111827" strokeWidth="4" fill="none" />
        </g>

        {/* 4. Thermal Paste / Syringe Tool */}
        <g transform="translate(180, 375) rotate(-8)">
          <rect x="0" y="0" width="70" height="14" rx="3" fill="#334155" opacity="0.8" />
          <rect x="70" y="4" width="22" height="6" fill="#94A3B8" />
          <rect x="92" y="6" width="14" height="2" fill="#E2E8F0" />
        </g>

        {/* Subtle itech Lab Identifier on Mat */}
        <text x="600" y="420" fill="#4B5563" fontSize="10" fontFamily="sans-serif" letterSpacing="2" fontWeight="bold">
          ITECH · LAB DE PRECISÃO
        </text>
      </svg>

      {/* Floating high-tech badge / caption overlay */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 px-3.5 py-2 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800 text-xs text-neutral-300">
        <span className="w-2 h-2 rounded-full bg-[#FFBE0B] shadow-[0_0_8px_#FFBE0B]" />
        <span className="font-medium">Bancada Técnica · Diagnóstico e Reparo Especializado</span>
      </div>

      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 text-[11px] text-neutral-400 font-mono">
        Canindé de São Francisco · SE
      </div>
    </div>
  );
}
