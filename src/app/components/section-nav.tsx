import { ArrowUp, ArrowDown } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import type { SectionId } from "./nav-sidebar";
import { useAppContext } from "../../context/AppContext";

interface SectionNavProps {
  prevSection?: SectionId | "landing";
  prevLabel?: string;
  nextSection?: SectionId;
  nextLabel?: string;
}

export function SectionNav({ prevSection, prevLabel, nextSection, nextLabel }: SectionNavProps) {
  const { lang, theme, onOpenSection } = useAppContext();
  const { divider, accent, text3: text3Color, hoverBg } = theme;
  const text3 = text3Color;

  const scrollToLanding = () => {
    const el = document.getElementById("section-landing");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`border-t ${divider} grid ${prevSection && nextSection ? "grid-cols-2" : "grid-cols-1"}`}>
      {prevSection && (
        <button
          onClick={() => (prevSection === "landing" ? scrollToLanding() : onOpenSection(prevSection as SectionId))}
          className={`group flex items-center gap-3 px-6 sm:px-10 py-5 transition-colors text-left ${hoverBg} ${nextSection ? `border-r ${divider}` : ""}`}
        >
          <ArrowUp className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-y-0.5" style={{ color: accent }} />
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.15em]" style={{ color: text3 }}>
              {lang === "pl" ? "Poprzednia" : "Previous"}
            </p>
            <p className="text-[14px] truncate" style={{ color: accent }}>{prevLabel}</p>
          </div>
        </button>
      )}
      {nextSection && (
        <button
          onClick={() => onOpenSection(nextSection)}
          className={`group flex items-center justify-end gap-3 px-6 sm:px-10 py-5 transition-colors text-right ${hoverBg}`}
        >
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.15em]" style={{ color: text3 }}>
              {lang === "pl" ? "Następna" : "Next"}
            </p>
            <p className="text-[14px] truncate" style={{ color: accent }}>{nextLabel}</p>
          </div>
          <ArrowDown className="w-4 h-4 shrink-0 transition-transform group-hover:translate-y-0.5" style={{ color: accent }} />
        </button>
      )}
    </div>
  );
}
