import { useState, useCallback, useEffect } from "react";
import { type SectionId } from "./components/nav-sidebar";
import { PageHome } from "./components/page-home";
import { PageAbout } from "./components/page-about";
import { PageProjects } from "./components/page-projects";
import { PageEducation } from "./components/page-education";
import { PageContact } from "./components/page-contact";
import { PageLanding } from "./components/page-landing";
import { DottedSurface } from "./components/dotted-surface";
import { AppContextProvider } from "../context/AppContext";
import { cvText } from "./components/portfolio-data";
import { Settings, Moon, Globe, Download, Sun, X } from "lucide-react";

const sections: { id: SectionId | "landing"; label: string; labelEn: string }[] = [
  { id: "landing", label: "Start", labelEn: "Start" },
  { id: "home", label: "Przegląd", labelEn: "Overview" },
  { id: "about", label: "O mnie", labelEn: "About" },
  { id: "projects", label: "Projekty", labelEn: "Projects" },
  { id: "education", label: "Edukacja", labelEn: "Education" },
  { id: "contact", label: "Kontakt", labelEn: "Contact" },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<"pl" | "en">("pl");
  const [activeSection, setActiveSection] = useState<string>("landing");
  const [showSettings, setShowSettings] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = useCallback((id: SectionId | "landing") => {
    const el = document.getElementById(`section-${id}`);
    if (!el) return;

    const start = window.scrollY;
    const target = el.getBoundingClientRect().top + start;
    const distance = target - start;
    const duration = Math.min(1200, Math.max(600, Math.abs(distance) * 0.5));
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + distance * easeInOutCubic(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  const openSection = useCallback((id: SectionId) => {
    scrollToSection(id);
  }, [scrollToSection]);

  // Scroll progress bar — separate from section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver.
  // rootMargin "-45% 0px -45% 0px" creates a 10% detection band at the
  // center of the viewport — a section becomes active only when its content
  // occupies the middle of the screen, matching the feel of most portfolio sites.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id.replace("section-", ""));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    for (const section of sections) {
      const el = document.getElementById(`section-${section.id}`);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const downloadCV = useCallback(() => {
    const blob = new Blob([cvText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Pawel_Kozlowski_CV.txt";
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const d = darkMode;
  const accent = d ? "#FAFAFA" : "#18181B";
  const dotBg = d ? "#3F3F46" : "#D4D4D8";
  const dotActive = d ? "#FAFAFA" : "#18181B";
  const floatBg = d ? "rgba(39,39,42,0.92)" : "rgba(255,255,255,0.92)";
  const floatBorder = d ? "#3F3F46" : "#E4E4E7";
  const text2 = d ? "#A1A1AA" : "#71717A";

  return (
    <div className={`min-h-screen transition-colors duration-300 noise-overlay ${d ? "bg-[#18181B] text-white" : "bg-[#F4F4F5] text-[#18181B]"}`}>
      <DottedSurface darkMode={d} />

      <div className="fixed top-0 left-0 right-0 z-50 h-[2px]">
        <div
          className="h-full transition-none"
          style={{
            backgroundColor: accent,
            width: `${scrollProgress * 100}%`,
            opacity: scrollProgress > 0.01 ? 0.6 : 0,
          }}
        />
      </div>

      <nav className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-0">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center gap-2.5 py-2 px-0 transition-all duration-200"
              title={lang === "pl" ? section.label : section.labelEn}
            >
              <span
                className={`whitespace-nowrap text-[11px] tracking-[0.08em] uppercase transition-all duration-500 ease-in-out ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                }`}
                style={{ color: isActive ? accent : text2 }}
              >
                {lang === "pl" ? section.label : section.labelEn}
              </span>
              <span
                className="block transition-all duration-500 ease-in-out shrink-0"
                style={{
                  width: isActive ? "24px" : "12px",
                  height: "2px",
                  backgroundColor: isActive ? dotActive : dotBg,
                  opacity: isActive ? 1 : 0.5,
                }}
              />
            </button>
          );
        })}
      </nav>

      <div className="fixed bottom-5 right-4 sm:right-6 z-40">
        {showSettings && (
          <div
            className="absolute bottom-12 right-0 flex flex-col gap-1 p-2 mb-2 backdrop-blur-md"
            style={{ backgroundColor: floatBg, border: `1px solid ${floatBorder}` }}
          >
            <button
              onClick={() => setDarkMode((p) => !p)}
              className={`flex items-center gap-3 px-3 py-2 text-[13px] transition-colors whitespace-nowrap ${d ? "hover:bg-[#3F3F46]" : "hover:bg-[#F4F4F5]"}`}
              style={{ color: accent }}
            >
              {d ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {d ? (lang === "pl" ? "Jasny motyw" : "Light mode") : (lang === "pl" ? "Ciemny motyw" : "Dark mode")}
            </button>
            <button
              onClick={() => setLang((l) => (l === "pl" ? "en" : "pl"))}
              className={`flex items-center gap-3 px-3 py-2 text-[13px] transition-colors whitespace-nowrap ${d ? "hover:bg-[#3F3F46]" : "hover:bg-[#F4F4F5]"}`}
              style={{ color: accent }}
            >
              <Globe className="w-4 h-4" />
              {lang === "pl" ? "English" : "Polski"}
            </button>
            <button
              onClick={downloadCV}
              className={`flex items-center gap-3 px-3 py-2 text-[13px] transition-colors whitespace-nowrap ${d ? "hover:bg-[#3F3F46]" : "hover:bg-[#F4F4F5]"}`}
              style={{ color: accent }}
            >
              <Download className="w-4 h-4" />
              {lang === "pl" ? "Pobierz CV" : "Download CV"}
            </button>
          </div>
        )}

        <button
          onClick={() => setShowSettings((p) => !p)}
          className="w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all hover:scale-105"
          style={{ backgroundColor: floatBg, border: `1px solid ${floatBorder}`, color: accent }}
        >
          {showSettings ? <X className="w-[18px] h-[18px]" /> : <Settings className="w-[18px] h-[18px]" />}
        </button>
      </div>

      <AppContextProvider darkMode={d} lang={lang} onOpenSection={openSection}>
        <main className="relative z-[1]">
          <div id="section-landing">
            <PageLanding />
          </div>
          <div id="section-home">
            <PageHome />
          </div>
          <div id="section-about">
            <PageAbout />
          </div>
          <div id="section-projects">
            <PageProjects />
          </div>
          <div id="section-education">
            <PageEducation />
          </div>
          <div id="section-contact">
            <PageContact />
          </div>
        </main>
      </AppContextProvider>
    </div>
  );
}
