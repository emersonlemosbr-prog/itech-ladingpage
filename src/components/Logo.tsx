interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'hero';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', variant = 'header', size = 'md' }: LogoProps) {
  const isFooter = variant === 'footer';

  // Sizing definitions
  const sizes = {
    sm: {
      text: 'text-2xl',
      dotTop: 'w-2 h-2 mb-0.5',
      subText: 'text-[8.5px] tracking-[0.22em]',
      dotSub: 'w-1.5 h-1.5 ml-1',
    },
    md: {
      text: 'text-3xl sm:text-[2rem]',
      dotTop: 'w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 mb-0.5',
      subText: 'text-[9.5px] sm:text-[10.5px] tracking-[0.24em]',
      dotSub: 'w-1.5 h-1.5 sm:w-2 sm:h-2 ml-1',
    },
    lg: {
      text: 'text-4xl sm:text-5xl',
      dotTop: 'w-3.5 h-3.5 sm:w-4 sm:h-4 mb-1',
      subText: 'text-[12px] sm:text-[14px] tracking-[0.28em]',
      dotSub: 'w-2 h-2 sm:w-2.5 sm:h-2.5 ml-1.5',
    },
  }[size];

  return (
    <div className={`inline-flex flex-col select-none leading-none ${className}`} aria-label="itech celular e informática">
      {/* Brand Name: "itech" with yellow dot above the dotless 'ı' */}
      <div className={`flex items-baseline font-black tracking-[-0.04em] text-white ${sizes.text} font-sans`}>
        {/* Letter 'i' constructed with official yellow dot */}
        <span className="inline-flex flex-col items-center justify-end mr-[0.5px]">
          <span className={`rounded-full bg-[#FFBE0B] shadow-[0_0_8px_rgba(255,190,11,0.4)] ${sizes.dotTop}`} />
          <span className="leading-[0.8] font-bold">ı</span>
        </span>
        {/* Remaining letters 'tech' */}
        <span className="leading-[0.8]">tech</span>
      </div>

      {/* Subtitle: "CELULAR E INFORMÁTICA" + yellow dot */}
      <div className={`flex items-center font-bold text-white uppercase mt-1 sm:mt-1.5 ${sizes.subText}`}>
        <span className="whitespace-nowrap">CELULAR E INFORMÁTICA</span>
        {/* Yellow dot at the end */}
        <span className={`rounded-full bg-[#FFBE0B] shrink-0 ${sizes.dotSub}`} />
      </div>
    </div>
  );
}
