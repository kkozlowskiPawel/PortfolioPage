import { useState, useMemo } from "react";
import { profileData, skillCategories, projects, stats } from "./portfolio-data";
import { ArrowRight, MapPin, Terminal, Zap, TrendingUp } from "lucide-react";
import { TextEffect } from "./text-effect";
import { ScrollReveal } from "./scroll-reveal";
import { AnimatedUnderline } from "./animated-underline";
import { AnimatedCounter } from "./animated-counter";
import { MagneticButton } from "./magnetic-button";
import { FlipClock } from "./flip-clock";
import { GitHubCalendar } from "./github-calendar";
import { ViewCounter } from "./view-counter";
import { SectionNav } from "./section-nav";
import { SectionFooter } from "./section-footer";
import { useAppContext } from "../../context/AppContext";
import imgProfilePhoto from "figma:asset/fb8264a5e4370503c20232acef1fa97d4e29b558.png";
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

export function PageHome() {
  const { darkMode, lang, theme, onOpenSection } = useAppContext();
  const d = darkMode;
  const { text1, text2, text3, divider, accent, cardBg, hoverBg } = theme;

  const [hoveredProject, setHoveredProject] = useState<number>(0);
  const activeProject = projects[hoveredProject] || projects[0];

  const statItems = useMemo(() => [
    { label: lang === "pl" ? "Lat doświadczenia" : "Years experience", value: stats.yearsExperience, suffix: "+" },
    { label: lang === "pl" ? "Zrealizowanych projektów" : "Projects delivered", value: stats.projects, suffix: "+" },
    { label: lang === "pl" ? "Tysięcy użytkowników" : "Thousands of users", value: stats.users, suffix: "K+" },
    { label: lang === "pl" ? "Technologii w stacku" : "Technologies in stack", value: stats.technologies, suffix: "" },
  ], [lang]);

  return (
    <div className="max-w-[960px] mx-auto py-6 sm:py-10 px-4 sm:px-6">
      <div className={`border ${divider} overflow-hidden backdrop-blur-sm`} style={{ backgroundColor: cardBg }}>
        {/* ── Dashboard Header ── */}
        <div className="p-6 sm:p-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="w-4 h-4" style={{ color: accent }} />
                <p className="text-[11px] uppercase tracking-[0.15em]" style={{ color: accent }}>
                  {lang === "pl" ? "Panel przeglądu" : "Overview Dashboard"} — 2025
                </p>
              </div>
              <TextEffect per="word" preset="blur" as="h1" className={`text-[24px] sm:text-[28px] ${text1} tracking-tight`}>
                {lang === "pl" ? "Witaj w moim portfolio" : "Welcome to my portfolio"}
              </TextEffect>
              <AnimatedUnderline darkMode={d} delay={400} width="60px" />
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span className="w-2 h-2 animate-pulse" style={{ backgroundColor: "#22C55E" }} />
              <span className={`text-[12px] ${text3}`}>
                {lang === "pl" ? profileData.availability : profileData.availabilityEn}
              </span>
            </div>
          </div>

          <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 py-3 px-4 border ${divider}`}
            style={{ backgroundColor: d ? "rgba(63,63,70,0.4)" : "rgba(244,244,245,0.6)" }}
          >
            <div className="flex items-center gap-2.5">
              <img src={imgProfilePhoto} alt="" className="w-8 h-8 object-cover border" style={{ borderColor: d ? "#3F3F46" : "#E4E4E7" }} />
              <div>
                <span className={`text-[13px] ${text1} block`}>{profileData.name}</span>
                <span className={`text-[11px] ${text3}`}>{profileData.title}</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-6" style={{ backgroundColor: d ? "#3F3F46" : "#E4E4E7" }} />
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" style={{ color: d ? "#71717A" : "#A1A1AA" }} />
              <span className={`text-[12px] ${text3}`}>Gdańsk, {lang === "pl" ? "Polska" : "Poland"}</span>
            </div>
            <div className="hidden sm:block w-px h-6" style={{ backgroundColor: d ? "#3F3F46" : "#E4E4E7" }} />
            <MagneticButton
              onClick={() => onOpenSection("about")}
              className={`text-[12px] flex items-center gap-1.5 transition-opacity hover:opacity-60`}
              style={{ color: accent }}
            >
              {lang === "pl" ? "Pełen profil" : "Full profile"} <ArrowRight className="w-3 h-3" />
            </MagneticButton>
          </div>
        </div>

        {/* ── Stats ── */}
        <ScrollReveal>
          <div className={`border-t ${divider} grid grid-cols-2 sm:grid-cols-4`}>
            {statItems.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-6 px-4 text-center ${i < 3 ? `sm:border-r ${divider}` : ""} ${i < 2 ? `border-b sm:border-b-0 ${divider}` : ""} ${i === 2 ? `border-r ${divider} sm:border-r` : ""} ${i === 3 ? `border-b-0` : ""}`}
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className={`text-[28px] sm:text-[32px] block ${text1}`}
                />
                <span className={`text-[11px] ${text3} uppercase tracking-[0.1em]`}>{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <SectionFooter num="01" label={lang === "pl" ? "Podsumowanie" : "Overview"} />

        {/* ── Skills Overview ── */}
        <div className={`border-t ${divider}`} />
        <ScrollReveal>
          <div className="p-6 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: accent }}>
              {lang === "pl" ? "Stack technologiczny" : "Tech Stack"}
            </p>
            <p className={`text-[13px] ${text3} mb-6`}>
              {lang === "pl" ? "Główne technologie, z którymi pracuję na co dzień" : "Core technologies I work with daily"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {(["frontend", "backend", "tools"] as const).map((category) => (
                <div key={category}>
                  <p className="text-[11px] uppercase tracking-[0.15em] mb-3" style={{ color: accent }}>
                    {category === "frontend" ? "Frontend" : category === "backend" ? "Backend" : (lang === "pl" ? "Narzędzia" : "Tools")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skillCategories[category].map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 text-[12px] border transition-colors ${d ? "border-[#3F3F46] text-[#D4D4D8] hover:border-[#71717A]" : "border-[#E4E4E7] text-[#52525B] hover:border-[#A1A1AA]"}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <SectionFooter num="02" label={lang === "pl" ? "Technologie" : "Technologies"}>
          <MagneticButton
            onClick={() => onOpenSection("about")}
            className="text-[12px] flex items-center gap-1.5 transition-opacity hover:opacity-60"
            style={{ color: accent }}
          >
            {lang === "pl" ? "Pełen profil" : "Full profile"} <ArrowRight className="w-3 h-3" />
          </MagneticButton>
        </SectionFooter>

        {/* ── Projects Preview ── */}
        <div className={`border-t ${divider}`} />
        <ScrollReveal>
          <div className="p-6 sm:p-10">
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: accent }}>
                  {lang === "pl" ? "Wybrane projekty" : "Selected Projects"}
                </p>
                <p className={`text-[13px] ${text3}`}>
                  {lang === "pl" ? "Najedź na projekt, aby zobaczyć podgląd" : "Hover a project to see preview"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div>
                {projects.map((project, i) => {
                  const isActive = hoveredProject === i;
                  return (
                    <div
                      key={project.id}
                      onMouseEnter={() => setHoveredProject(i)}
                      onClick={() => onOpenSection("projects")}
                      className={`relative cursor-pointer border-b ${divider} transition-all duration-300 group ${
                        isActive ? "py-5 sm:py-6" : "py-4"
                      } ${isActive ? hoverBg : ""} px-4`}
                    >
                      {isActive && (
                        <>
                          <div className="absolute top-2 left-2 w-4 h-4">
                            <div className="absolute top-0 left-0 w-3 h-[1.5px]" style={{ backgroundColor: accent }} />
                            <div className="absolute top-0 left-0 w-[1.5px] h-3" style={{ backgroundColor: accent }} />
                          </div>
                          <div className="absolute bottom-2 right-2 w-4 h-4">
                            <div className="absolute bottom-0 right-0 w-3 h-[1.5px]" style={{ backgroundColor: accent }} />
                            <div className="absolute bottom-0 right-0 w-[1.5px] h-3" style={{ backgroundColor: accent }} />
                          </div>
                        </>
                      )}
                      <div className="flex items-center gap-4">
                        <span className="text-[12px] tabular-nums shrink-0" style={{ color: d ? "#71717A" : "#A1A1AA", fontFamily: "Georgia, serif" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1 min-w-0">
                          <span className={`text-[14px] ${isActive ? text1 : text2} transition-colors`}>{project.nameDisplay}</span>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className={`text-[11px] ${text3}`}>{project.category}</span>
                            <span className={`text-[11px] ${text3}`}>·</span>
                            <span className="text-[11px]" style={{ color: d ? "#A1A1AA" : "#71717A", fontFamily: "Georgia, serif" }}>
                              {lang === "pl" ? project.metrics : project.metricsEn}
                            </span>
                          </div>
                        </div>
                        <ArrowRight
                          className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
                          style={{ color: accent }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={`hidden md:flex items-center justify-center border-l ${divider} relative overflow-hidden min-h-[360px]`}>
                <div className="absolute inset-0 transition-all duration-500">
                  <img
                    key={activeProject.name}
                    src={projectImages[activeProject.name]}
                    alt={activeProject.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className={`absolute inset-0 ${d ? "bg-gradient-to-t from-[#27272A]/90 via-[#27272A]/20 to-transparent" : "bg-gradient-to-t from-white/90 via-white/20 to-transparent"}`} />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: accent }}>{activeProject.category}</p>
                    <p className={`text-[18px] ${text1}`} style={{ fontFamily: "Georgia, serif" }}>{activeProject.nameDisplay}</p>
                    <p className={`text-[12px] ${text2} mt-1`}>{lang === "pl" ? activeProject.subtitle : activeProject.subtitleEn}</p>
                    <div className="flex gap-2 mt-3">
                      {activeProject.tags.map((tag) => (
                        <span key={tag} className={`text-[10px] px-2 py-0.5 border ${d ? "border-[#3F3F46] text-[#D4D4D8]" : "border-[#E4E4E7] text-[#52525B]"}`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <SectionFooter num="03" label={lang === "pl" ? "Projekty" : "Projects"}>
          <MagneticButton
            onClick={() => onOpenSection("projects")}
            className="text-[12px] flex items-center gap-1.5 transition-opacity hover:opacity-60"
            style={{ color: accent }}
          >
            {lang === "pl" ? "Wszystkie" : "All projects"} <ArrowRight className="w-3 h-3" />
          </MagneticButton>
        </SectionFooter>

        {/* ── Live Dashboard ── */}
        <div className={`border-t ${divider}`} />
        <ScrollReveal>
          <div className="p-6 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: accent }}>
              {lang === "pl" ? "Na żywo" : "Live"}
            </p>
            <p className={`text-[13px] ${text3} mb-6`}>
              {lang === "pl" ? "Statystyki, lokalizacja i aktywność" : "Stats, location and activity"}
            </p>

            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-0 border ${divider} mb-6`}>
              <div className={`p-5 flex flex-col items-center justify-center sm:border-r ${divider} border-b sm:border-b-0`}>
                <ViewCounter darkMode={d} lang={lang} />
              </div>
              <div className={`p-5 flex flex-col items-center justify-center sm:border-r ${divider} border-b sm:border-b-0`}>
                <div className="flex items-center gap-2.5 mb-1">
                  <MapPin className="w-4 h-4" style={{ color: accent }} />
                  <span className={`text-[16px] ${text1}`} style={{ fontFamily: "Georgia, serif" }}>Gdańsk</span>
                </div>
                <p className={`text-[11px] ${text3} uppercase tracking-[0.1em]`}>
                  {lang === "pl" ? "Polska · Pomorze" : "Poland · Pomerania"}
                </p>
                <p className={`text-[10px] ${text3} mt-0.5`} style={{ fontFamily: "Georgia, serif" }}>54.35°N · 18.65°E</p>
              </div>
              <div className="p-5 flex flex-col items-center justify-center">
                <FlipClock darkMode={d} />
                <p className={`text-[11px] ${text3} uppercase tracking-[0.1em] mt-2`}>
                  {lang === "pl" ? "Czas lokalny" : "Local time"} (CET)
                </p>
              </div>
            </div>

            <div className={`border ${divider} p-5`}>
              <GitHubCalendar darkMode={d} lang={lang} />
            </div>
          </div>
        </ScrollReveal>

        <SectionFooter num="04" label={lang === "pl" ? "Dashboard" : "Dashboard"}>
          <MagneticButton
            onClick={() => onOpenSection("contact")}
            className="text-[12px] flex items-center gap-1.5 transition-opacity hover:opacity-60"
            style={{ color: accent }}
          >
            {lang === "pl" ? "Kontakt" : "Contact"} <ArrowRight className="w-3 h-3" />
          </MagneticButton>
        </SectionFooter>

        <SectionNav
          prevSection="landing"
          prevLabel="Start"
          nextSection="about"
          nextLabel={lang === "pl" ? "O mnie" : "About me"}
        />
      </div>
    </div>
  );
}
