import { useState } from "react";
import { projects } from "./portfolio-data";
import { ArrowRight } from "lucide-react";
import { TextEffect } from "./text-effect";
import { ScrollReveal } from "./scroll-reveal";
import { AnimatedUnderline } from "./animated-underline";
import { MagneticButton } from "./magnetic-button";
import { SectionNav } from "./section-nav";
import { useAppContext } from "../../context/AppContext";
import imgImporter from "figma:asset/0d149e6b4f265ce9fab8f96d496bdff142072465.png";
import imgProgresik from "figma:asset/245961698ee04bb37859fe13eb3b37d5dbbe27f5.png";
import imgAutoTicket from "figma:asset/42510fb41d1b1539c77bc7f196a1ab146cce3512.png";
import imgEduWiedza from "figma:asset/0b601dd107d08418ad2d5a8bdf0b56f44f7ad430.png";
import imgCeleste from "figma:asset/930c7700c0a03793a55ec92704d2122b863812f4.png";
import imgGames from "figma:asset/6587caac511b7fd997ad705e9d3b0163ad809674.png";

const projectImages: Record<string, string> = {
  NexusFlow: imgImporter, DataVault: imgProgresik, CloudSync: imgAutoTicket,
  PixelForge: imgEduWiedza, SwiftPay: imgCeleste, EcoTrack: imgGames,
};

export function PageProjects() {
  const { darkMode, lang, theme, onOpenSection } = useAppContext();
  const d = darkMode;
  const { text1, text2, text3, divider, accent, cardBg } = theme;

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <div className="max-w-[960px] mx-auto py-6 sm:py-10 px-4 sm:px-6">
      <div className={`border ${divider} overflow-hidden backdrop-blur-sm`} style={{ backgroundColor: cardBg }}>
        {/* Header */}
        <div className="p-6 sm:p-10 pb-4 sm:pb-6">
          <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: accent }}>
            {lang === "pl" ? "Projekty" : "Projects"}
          </p>
          <TextEffect per="word" preset="blur" as="h1" className={`text-[28px] sm:text-[32px] ${text1} tracking-tight`}>
            {lang === "pl" ? "Wybrane realizacje" : "Selected Work"}
          </TextEffect>
          <AnimatedUnderline darkMode={d} delay={300} width="50px" />
          <p className={`text-[14px] ${text3} mt-1`}>
            {projects.length} {lang === "pl" ? "projektów w portfolio" : "projects in portfolio"} — {lang === "pl" ? "enterprise, fintech, design systems" : "enterprise, fintech, design systems"}
          </p>
        </div>

        {/* Featured project */}
        <div className={`border-t ${divider}`}>
          <div className="relative group cursor-pointer overflow-hidden">
            <div className="aspect-[21/9] sm:aspect-[21/8] overflow-hidden">
              <img
                src={projectImages[featured.name]}
                alt={featured.nameDisplay}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className={`absolute inset-0 ${d ? "bg-gradient-to-t from-[#27272A] via-[#27272A]/30 to-transparent" : "bg-gradient-to-t from-white via-white/30 to-transparent"}`} />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] uppercase tracking-[0.15em]" style={{ color: accent }}>
                  {lang === "pl" ? "Wyróżniony" : "Featured"}
                </span>
                <span className={`text-[11px] ${text3}`}>— {featured.category}</span>
              </div>
              <h2 className={`text-[26px] sm:text-[32px] ${text1} mb-1`} style={{ fontFamily: "Georgia, serif" }}>
                {featured.nameDisplay}
              </h2>
              <p className={`text-[14px] ${text2} mb-4 max-w-[560px]`}>
                {lang === "pl" ? featured.description : featured.descriptionEn}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex gap-2 flex-wrap">
                  {featured.tags.map((tag) => (
                    <span key={tag} className={`px-3 py-1 text-[11px] border ${d ? "border-[#3F3F46] text-[#D4D4D8]" : "border-[#E4E4E7] text-[#52525B]"}`}>{tag}</span>
                  ))}
                </div>
                <span className="text-[12px]" style={{ color: d ? "#A1A1AA" : "#71717A", fontFamily: "Georgia, serif" }}>
                  {lang === "pl" ? featured.metrics : featured.metricsEn}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Other projects */}
        {rest.map((project, i) => {
          const isHovered = hoveredProject === project.id;
          const globalIndex = projects.indexOf(project);
          return (
            <ScrollReveal key={project.id} delay={i * 60}>
              <div
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`relative cursor-pointer border-t ${divider} transition-all duration-300 ${
                  isHovered ? (d ? "bg-[#3F3F46]" : "bg-[#FAFAFA]") : ""
                }`}
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

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className={`aspect-video sm:aspect-[4/3] overflow-hidden ${i % 2 === 0 ? "" : "md:order-2"}`}>
                    <img
                      src={projectImages[project.name]}
                      alt={project.nameDisplay}
                      className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-[1.03]" : ""}`}
                    />
                  </div>
                  <div className={`p-6 sm:p-8 flex flex-col justify-center ${i % 2 === 0 ? "" : "md:order-1"}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[12px] tabular-nums" style={{ color: d ? "#71717A" : "#A1A1AA", fontFamily: "Georgia, serif" }}>
                        {String(globalIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.15em]" style={{ color: accent }}>
                        {project.category}
                      </span>
                    </div>
                    <h2 className={`text-[22px] sm:text-[24px] ${text1} mb-1`} style={{ fontFamily: "Georgia, serif" }}>
                      {project.nameDisplay}
                    </h2>
                    <p className={`text-[13px] ${text3} mb-3`}>
                      {lang === "pl" ? project.subtitle : project.subtitleEn}
                    </p>
                    <p className={`text-[14px] ${text2} leading-[24px] mb-5`}>
                      {lang === "pl" ? project.description : project.descriptionEn}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className={`px-3 py-1 text-[11px] border ${d ? "border-[#3F3F46] text-[#D4D4D8]" : "border-[#E4E4E7] text-[#52525B]"}`}>{tag}</span>
                        ))}
                      </div>
                      <span className="text-[12px]" style={{ color: d ? "#A1A1AA" : "#71717A", fontFamily: "Georgia, serif" }}>
                        {lang === "pl" ? project.metrics : project.metricsEn}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}

        {/* Footer */}
        <div className={`border-t ${divider} px-6 sm:px-10 py-3.5 flex justify-between items-center`}>
          <span className="text-[12px] tabular-nums" style={{ color: accent, fontFamily: "Georgia, serif" }}>01</span>
          <span className={`text-[11px] ${text3} uppercase tracking-[0.15em]`}>
            {lang === "pl" ? "Galeria projektów" : "Project gallery"}
          </span>
          <MagneticButton
            onClick={() => onOpenSection("contact")}
            className="text-[12px] flex items-center gap-1.5 transition-opacity hover:opacity-60"
            style={{ color: accent }}
          >
            {lang === "pl" ? "Współpraca" : "Work together"} <ArrowRight className="w-3 h-3" />
          </MagneticButton>
        </div>

        <SectionNav
          prevSection="about"
          prevLabel={lang === "pl" ? "O mnie" : "About"}
          nextSection="education"
          nextLabel={lang === "pl" ? "Edukacja" : "Education"}
        />
      </div>
    </div>
  );
}
