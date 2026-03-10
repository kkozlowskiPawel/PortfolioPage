import { useState, useRef } from "react";
import { profileData } from "./portfolio-data";
import { TextEffect } from "./text-effect";
import { Typewriter } from "./typewriter-text";
import { AnimatedUnderline } from "./animated-underline";
import type { SectionId } from "./nav-sidebar";
import { useAppContext } from "../../context/AppContext";
import { ANIMATION } from "../../lib/constants";

function IconGithub({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
      <path d="M6 12.7c-3.3 1-3.3-1.7-4.7-2C2 10.3 2.7 11 3.7 11.3c1 .3 2-.2 2.3-.5M10 14v-2.3c0-.8-.1-1.1-.4-1.5 2.3-.3 4.4-1 4.4-4.5 0-1-.4-1.8-1-2.5.1-.3.4-1.2-.1-2.5 0 0-.8-.3-2.6 1a9 9 0 00-4.6 0C4 .7 3.2 1 3.2 1c-.5 1.3-.2 2.2-.1 2.5-.6.7-1 1.5-1 2.5 0 3.5 2.1 4.2 4.4 4.5-.3.3-.4.7-.4 1.2V14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconLinkedin({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke={color} strokeWidth="1.5"/>
      <path d="M5.5 7v4M5.5 5v.01M8.5 11V8.5a1.5 1.5 0 013 0V11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconMail({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="3" width="12" height="10" rx="1.5" stroke={color} strokeWidth="1.5"/>
      <path d="M2 5l6 4 6-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SectionPreview({ id }: { id: SectionId }) {
  const { darkMode } = useAppContext();
  const d = darkMode;
  const bg = d ? "#42414D" : "#FAFAF8";
  const line = d ? "#5B5B66" : "#D5D5D9";
  const acc = d ? "#B1B1B3" : "#4B5563";

  const previews: Record<SectionId, React.ReactNode> = {
    home: (
      <svg width="140" height="90" viewBox="0 0 140 90" fill="none">
        <rect width="140" height="90" fill={bg}/>
        <rect x="10" y="10" width="28" height="28" fill={line}/>
        <rect x="46" y="12" width="60" height="5" fill={acc}/>
        <rect x="46" y="22" width="80" height="2" fill={line}/>
        <rect x="46" y="28" width="70" height="2" fill={line}/>
        <rect x="10" y="48" width="120" height="1" fill={line}/>
        <rect x="10" y="58" width="28" height="24" fill={line}/>
        <rect x="44" y="58" width="28" height="24" fill={line}/>
        <rect x="78" y="58" width="28" height="24" fill={line}/>
      </svg>
    ),
    about: (
      <svg width="140" height="90" viewBox="0 0 140 90" fill="none">
        <rect width="140" height="90" fill={bg}/>
        <rect x="10" y="10" width="32" height="32" fill={line}/>
        <rect x="50" y="12" width="50" height="5" fill={acc}/>
        <rect x="50" y="22" width="75" height="2" fill={line}/>
        <rect x="50" y="28" width="65" height="2" fill={line}/>
        <rect x="10" y="52" width="120" height="1" fill={line}/>
        <rect x="10" y="60" width="55" height="3" fill={acc}/>
        <rect x="10" y="68" width="55" height="2" fill={line}/>
        <rect x="75" y="60" width="55" height="3" fill={acc}/>
        <rect x="75" y="68" width="55" height="2" fill={line}/>
      </svg>
    ),
    projects: (
      <svg width="140" height="90" viewBox="0 0 140 90" fill="none">
        <rect width="140" height="90" fill={bg}/>
        <rect x="10" y="10" width="50" height="5" fill={acc}/>
        <rect x="10" y="22" width="120" height="30" fill={line}/>
        <rect x="10" y="60" width="56" height="22" fill={line}/>
        <rect x="74" y="60" width="56" height="22" fill={line}/>
      </svg>
    ),
    education: (
      <svg width="140" height="90" viewBox="0 0 140 90" fill="none">
        <rect width="140" height="90" fill={bg}/>
        <rect x="10" y="10" width="60" height="5" fill={acc}/>
        <rect x="10" y="22" width="80" height="2" fill={line}/>
        <rect x="10" y="32" width="120" height="1" fill={line}/>
        <rect x="10" y="42" width="22" height="12" fill={acc}/>
        <rect x="38" y="44" width="50" height="3" fill={line}/>
        <rect x="38" y="50" width="40" height="2" fill={line}/>
        <rect x="10" y="64" width="120" height="2" fill={line}/>
        <rect x="10" y="72" width="55" height="3" fill={line}/>
        <rect x="75" y="72" width="55" height="3" fill={line}/>
      </svg>
    ),
    contact: (
      <svg width="140" height="90" viewBox="0 0 140 90" fill="none">
        <rect width="140" height="90" fill={bg}/>
        <rect x="10" y="10" width="50" height="5" fill={acc}/>
        <rect x="10" y="22" width="120" height="1" fill={line}/>
        <rect x="10" y="30" width="45" height="3" fill={line}/>
        <rect x="10" y="38" width="45" height="3" fill={line}/>
        <rect x="10" y="46" width="45" height="3" fill={line}/>
        <rect x="66" y="30" width="64" height="9" fill={line}/>
        <rect x="66" y="44" width="64" height="9" fill={line}/>
        <rect x="66" y="58" width="64" height="20" fill={line}/>
      </svg>
    ),
  };
  return <>{previews[id]}</>;
}

export function PageLanding() {
  const { darkMode, lang, theme, onOpenSection } = useAppContext();
  const d = darkMode;
  const { text1, text2, text3, divider, accent } = theme;

  const [hovered, setHovered] = useState<SectionId | null>(null);
  const [monoHovered, setMonoHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const roleTextsPl = ["Senior Frontend Engineer", "Architekt React", "Ekspert TypeScript", "Team Lead", "Entuzjasta UI/UX"];
  const roleTextsEn = ["Senior Frontend Engineer", "React Architect", "TypeScript Expert", "Team Lead", "UI/UX Enthusiast"];
  const roleTexts = lang === "pl" ? roleTextsPl : roleTextsEn;

  const sections: { id: SectionId; label: string; labelEn: string; desc: string; descEn: string; num: string }[] = [
    { id: "home", label: "Przegląd", labelEn: "Overview", desc: "Podsumowanie kariery i umiejętności", descEn: "Career summary and skills", num: "01" },
    { id: "about", label: "O mnie", labelEn: "About", desc: "Doświadczenie zawodowe i kompetencje", descEn: "Professional experience and skills", num: "02" },
    { id: "projects", label: "Projekty", labelEn: "Projects", desc: "Wybrane realizacje i case studies", descEn: "Selected work and case studies", num: "03" },
    { id: "education", label: "Edukacja", labelEn: "Education", desc: "Wykształcenie i certyfikaty", descEn: "Education and certifications", num: "04" },
    { id: "contact", label: "Kontakt", labelEn: "Contact", desc: "Formularz i dane kontaktowe", descEn: "Contact form and details", num: "05" },
  ];

  const handleSectionMouseMove = (e: React.MouseEvent, id: SectionId) => {
    setHovered(id);
    const listEl = listRef.current;
    if (!listEl) return;
    const rect = listEl.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left + 20,
      y: e.clientY - rect.top - 50,
    });
  };

  const motto = lang === "pl"
    ? "Tworzę interfejsy, które łączą estetykę z wydajnością"
    : "I craft interfaces that merge aesthetics with performance";

  return (
    <div className="max-w-[960px] mx-auto py-6 sm:py-12 px-4 sm:px-6">
      <div
        className={`overflow-hidden border ${divider} backdrop-blur-sm`}
        style={{ backgroundColor: d ? "rgba(39,39,42,0.88)" : "rgba(255,255,255,0.88)" }}
      >
        <div className="flex flex-col items-center justify-center py-20 sm:py-32 px-6 sm:px-12">
          <div
            className="relative w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] mb-14 cursor-pointer opacity-0 animate-appear group"
            onClick={() => onOpenSection("home")}
            onMouseEnter={() => setMonoHovered(true)}
            onMouseLeave={() => setMonoHovered(false)}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120" fill="none">
              <rect
                x="1" y="1" width="118" height="118"
                stroke={accent}
                strokeWidth="1.5"
                strokeDasharray="472"
                strokeDashoffset="472"
                className="animate-draw-border"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="inline-block transition-all duration-500"
                style={{
                  color: accent,
                  fontFamily: "Georgia, serif",
                  fontSize: "38px",
                  letterSpacing: monoHovered ? "10px" : "3px",
                  paddingLeft: monoHovered ? "10px" : "3px",
                }}
              >
                PK
              </span>
            </div>
          </div>

          <TextEffect
            per="char"
            preset="blur"
            delay={0.5}
            as="h1"
            className={`text-[32px] sm:text-[42px] ${text1} tracking-tight mb-1 text-center`}
          >
            {profileData.name}
          </TextEffect>

          <AnimatedUnderline darkMode={d} delay={800} width="80px" />

          <div className="h-[30px] w-full flex items-center justify-center opacity-0 animate-appear" style={{ animationDelay: `${ANIMATION.landingRoles}ms` }}>
            <Typewriter
              text={roleTexts}
              speed={80}
              deleteSpeed={40}
              delay={2000}
              loop={true}
              cursor="_"
              className={`text-[13px] sm:text-[14px] tracking-[0.15em] uppercase ${d ? "text-[#A1A1AA]" : "text-[#A1A1AA]"}`}
            />
          </div>

          <p
            className="mt-12 mb-10 text-center max-w-[480px] opacity-0 animate-appear px-4"
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "16px",
              lineHeight: "28px",
              color: d ? "#71717A" : "#A1A1AA",
              animationDelay: `${ANIMATION.landingMotto}ms`,
            }}
          >
            &ldquo;{motto}&rdquo;
          </p>

          <div className="flex items-center gap-8 opacity-0 animate-appear" style={{ animationDelay: `${ANIMATION.landingSocial}ms` }}>
            <a
              href={`https://github.com/${profileData.contact.github}`}
              target="_blank" rel="noopener noreferrer"
              className="p-2 transition-opacity hover:opacity-50"
              title="GitHub"
            >
              <IconGithub color={d ? "#A1A1AA" : "#71717A"} />
            </a>
            <a
              href={`https://linkedin.com/in/${profileData.contact.linkedin}`}
              target="_blank" rel="noopener noreferrer"
              className="p-2 transition-opacity hover:opacity-50"
              title="LinkedIn"
            >
              <IconLinkedin color={d ? "#A1A1AA" : "#71717A"} />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="p-2 transition-opacity hover:opacity-50"
              title="Email"
            >
              <IconMail color={d ? "#A1A1AA" : "#71717A"} />
            </a>
          </div>

          <div
            className="mt-16 flex flex-col items-center gap-2 opacity-0 animate-appear cursor-pointer group"
            style={{ animationDelay: `${ANIMATION.landingScroll}ms` }}
            onClick={() => onOpenSection("home")}
          >
            <span className={`text-[11px] uppercase tracking-[0.15em] ${text3}`}>
              {lang === "pl" ? "Przewiń w dół" : "Scroll down"}
            </span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
              <path d="M8 4v14M3 14l5 5 5-5" stroke={d ? "#71717A" : "#A1A1AA"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div ref={listRef} className={`border-t ${divider} relative`}>
          {sections.map((section, i) => {
            const isHovered = hovered === section.id;
            return (
              <div
                key={section.id}
                onMouseMove={(e) => handleSectionMouseMove(e, section.id)}
                onMouseLeave={() => { setHovered(null); setTooltipPos(null); }}
                onClick={() => onOpenSection(section.id)}
                className={`relative cursor-pointer border-b ${divider} transition-all duration-300 ${
                  isHovered ? "py-6 sm:py-7" : "py-5 sm:py-5"
                } ${isHovered ? (d ? "bg-[#3F3F46]" : "bg-[#FAFAFA]") : ""} px-6 sm:px-10 opacity-0 animate-appear`}
                style={{ animationDelay: `${ANIMATION.landingNavBase + i * ANIMATION.landingNavStagger}ms` }}
              >
                {isHovered && (
                  <>
                    <div className="absolute top-3 left-3 w-4 h-4">
                      <div className="absolute top-0 left-0 w-3 h-[1.5px]" style={{ backgroundColor: accent }} />
                      <div className="absolute top-0 left-0 w-[1.5px] h-3" style={{ backgroundColor: accent }} />
                    </div>
                    <div className="absolute bottom-3 right-3 w-4 h-4">
                      <div className="absolute bottom-0 right-0 w-3 h-[1.5px]" style={{ backgroundColor: accent }} />
                      <div className="absolute bottom-0 right-0 w-[1.5px] h-3" style={{ backgroundColor: accent }} />
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5 sm:gap-6 min-w-0">
                    <span className="text-[12px] tabular-nums shrink-0" style={{ color: d ? "#71717A" : "#A1A1AA", fontFamily: "Georgia, serif" }}>
                      {section.num}
                    </span>
                    <div className="min-w-0">
                      <span className={`text-[15px] sm:text-[16px] transition-colors duration-200 block ${isHovered ? text1 : text2}`}>
                        {lang === "pl" ? section.label : section.labelEn}
                      </span>
                      <span className={`text-[12px] sm:text-[13px] ${text3} block mt-0.5 truncate`}>
                        {lang === "pl" ? section.desc : section.descEn}
                      </span>
                    </div>
                  </div>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className={`shrink-0 transition-all duration-200 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}
                  >
                    <path d="M6 3l5 5-5 5" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            );
          })}

          {hovered && tooltipPos && (
            <div
              className="absolute z-50 pointer-events-none transition-opacity duration-150 hidden sm:block"
              style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
            >
              <div className={`border shadow-lg overflow-hidden ${d ? "border-[#3F3F46] shadow-black/30" : "border-[#E4E4E7] shadow-black/8"}`}>
                <SectionPreview id={hovered} />
              </div>
            </div>
          )}
        </div>

        <div className="px-6 sm:px-10 py-4 flex justify-between items-center opacity-0 animate-appear" style={{ animationDelay: `${ANIMATION.landingFooter}ms` }}>
          <span className="text-[12px]" style={{ color: accent, fontFamily: "Georgia, serif" }}>2025</span>
          <span className={`text-[11px] ${text3} uppercase tracking-[0.15em]`}>Portfolio</span>
        </div>
      </div>
    </div>
  );
}
