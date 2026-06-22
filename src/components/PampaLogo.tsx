import React from "react";

interface PampaLogoProps {
  className?: string; // Additional classes for sizing/spacing
  showText?: boolean;  // Whether to show the "PampaLearn AI" text alongside the emblem
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const PampaLogo: React.FC<PampaLogoProps> = ({
  className = "",
  showText = true,
  size = "md",
}) => {
  // Dimensions map based on size parameter increased by 35%
  const dimensions = {
    xs: { svg: "h-[38px] w-[38px]", textClass: "text-[20px]" },
    sm: { svg: "h-[49px] w-[49px]", textClass: "text-[24px]" },
    md: { svg: "h-[60px] w-[60px]", textClass: "text-[27px]" },
    lg: { svg: "h-[86px] w-[86px]", textClass: "text-[41px]" },
    xl: { svg: "h-[130px] w-[130px]", textClass: "text-[49px]" },
  };

  const currentSize = dimensions[size];

  return (
    <div className={`inline-flex items-center ${size === "xs" ? "gap-1.5" : "gap-3"} ${className}`}>
      {/* Brand logo image */}
      <img
        src="https://i.postimg.cc/j5yrvbvb/Chat-GPT-Image-21-jun-2026-11-59-25-p-m.png"
        alt="PampaLearn AI Logo"
        referrerPolicy="no-referrer"
        className={`${currentSize.svg} shrink-0 transition-all duration-300 hover:scale-105 object-contain`}
      />

      {/* Styled Brand Lettering */}
      {showText && (
        <div className="text-left select-none flex flex-col justify-center pl-1 font-sans">
          <h1 className={`${currentSize.textClass} font-black tracking-tight flex items-center leading-none text-slate-900 dark:text-white`}>
            <span className="text-[#0F3D2E] dark:text-white">Pampa</span>
            <span className="text-[#22C55E] dark:text-pampa-bright">Learn</span>
            <span className="text-[#F59E0B] dark:text-pampa-gold ml-1">AI</span>
          </h1>
          <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 tracking-wide mt-0.5 hidden sm:block">
            Cursos premium y biblioteca gratuita
          </span>
        </div>
      )}
    </div>
  );
};
