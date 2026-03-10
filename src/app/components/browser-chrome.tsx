import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { SectionId } from "./nav-sidebar";

// ── Dynamic icon color based on dark mode ──
// All SVG icons now accept a color prop to ensure visibility in both themes.

function IconBack({ disabled, color }: { disabled?: boolean; color: string }) {
  const c = disabled ? (color === "#E5E5E5" ? "#5B5B66" : "#C0C0C8") : color;
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 3L5 8l5 5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconForward({ disabled, color }: { disabled?: boolean; color: string }) {
  const c = disabled ? (color === "#E5E5E5" ? "#5B5B66" : "#C0C0C8") : color;
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 3l5 5-5 5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconRefresh({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M13.5 2.5v4h-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.3 10a5.5 5.5 0 11-1-6.3L13.5 6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconHome({ color }: { color: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 6.5L8 2l5.5 4.5V13a1 1 0 01-1 1h-10a1 1 0 01-1-1V6.5z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 14V9h4v5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconLock({ color }: { color: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
      <rect x="3" y="7" width="10" height="7" rx="1.5" stroke={color} strokeWidth="1.5"/>
      <path d="M5 7V5a3 3 0 016 0v2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconDownload({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M8 2v8.5M4.5 7.5L8 11l3.5-3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12.5v1a1 1 0 001 1h8a1 1 0 001-1v-1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconSun({ color }: { color: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="3" stroke={color} strokeWidth="1.5"/>
      <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M3.4 12.6l1.1-1.1M11.5 4.5l1.1-1.1" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconMoon({ color }: { color: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path d="M13.5 8.5a5.5 5.5 0 01-7.4 2.4A5.5 5.5 0 018 2a5.5 5.5 0 005.5 6.5z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconGlobe({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1.5"/>
      <path d="M2 8h12M8 2c1.7 2 2.5 4 2.5 6s-.8 4-2.5 6M8 2c-1.7 2-2.5 4-2.5 6s.8 4 2.5 6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconPresentation({ color }: { color: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="2.5" width="13" height="9" rx="1" stroke={color} strokeWidth="1.5"/>
      <path d="M5 14l3-2.5L11 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconExitPresentation() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="2.5" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 6l4 4M10 6l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconDots({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="3.5" r="1" fill={color}/>
      <circle cx="8" cy="8" r="1" fill={color}/>
      <circle cx="8" cy="12.5" r="1" fill={color}/>
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function IconPlus() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

// Tab icons — small, outline style, dynamic color
function TabIconHome({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 6.5L8 2l5.5 4.5V13a1 1 0 01-1 1h-10a1 1 0 01-1-1V6.5z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function TabIconUser({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5.5" r="2.5" stroke={color} strokeWidth="1.5"/>
      <path d="M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function TabIconFolder({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path d="M2 4.5A1.5 1.5 0 013.5 3H6l1.5 2h5A1.5 1.5 0 0114 6.5v5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 11.5v-7z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function TabIconGrad({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path d="M8 1L1 5l7 4 7-4-7-4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M3.5 7v4c0 1.7 2 3 4.5 3s4.5-1.3 4.5-3V7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function TabIconMail({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="3" width="12" height="10" rx="1.5" stroke={color} strokeWidth="1.5"/>
      <path d="M2 5l6 4 6-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Tab icon map now needs color, so we use a function
function getTabIcon(id: SectionId, color: string): React.ReactNode {
  switch (id) {
    case "home": return <TabIconHome color={color} />;
    case "about": return <TabIconUser color={color} />;
    case "projects": return <TabIconFolder color={color} />;
    case "education": return <TabIconGrad color={color} />;
    case "contact": return <TabIconMail color={color} />;
  }
}

// ── Meta ──

const sectionMeta: Record<SectionId, { label: string; labelEn: string; url: string }> = {
  home:      { label: "Portfolio",  labelEn: "Portfolio",  url: "https://Paweł.Kozłowski/Portfolio" },
  about:     { label: "O mnie",    labelEn: "About me",   url: "https://Paweł.Kozłowski/O.mnie" },
  projects:  { label: "Projekty",  labelEn: "Projects",   url: "https://Paweł.Kozłowski/Projekty" },
  education: { label: "Edukacja",  labelEn: "Education",  url: "https://Paweł.Kozłowski/Edukacja" },
  contact:   { label: "Kontakt",   labelEn: "Contact",    url: "https://Paweł.Kozłowski/Kontakt" },
};

const allSections: SectionId[] = ["home", "about", "projects", "education", "contact"];

interface StyleFilter { name: string; nameEn: string; class: string }
const styleFilters: StyleFilter[] = [
  { name: "Normalny",        nameEn: "Normal",        class: "" },
  { name: "Sepia",            nameEn: "Sepia",         class: "sepia" },
  { name: "Skala szarości",   nameEn: "Grayscale",     class: "grayscale" },
  { name: "Wysoki kontrast",  nameEn: "High contrast", class: "contrast-125" },
  { name: "Odwrócony",        nameEn: "Inverted",      class: "invert" },
];

// ── Helper: parse URL into breadcrumb segments ──
function parseUrlSegments(url: string): { protocol: string; domain: string; path: string | null } {
  const match = url.match(/^(https?:\/\/)([^/]+)(\/.*)?$/);
  if (!match) return { protocol: "https://", domain: url, path: null };
  return { protocol: match[1], domain: match[2], path: match[3] || null };
}

// ── Props ──

interface BrowserChromeProps {
  tabs: SectionId[];
  activeTab: SectionId | null;
  onTabClick: (id: SectionId) => void;
  onTabClose: (id: SectionId) => void;
  onTabReorder: (tabs: SectionId[]) => void;
  onOpenSection: (id: SectionId) => void;
  isLoading: boolean;
  onGoPrev: () => void;
  onGoNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  lang: "pl" | "en";
  onToggleLang: () => void;
  onScrollToTop: () => void;
  onDownloadCV: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
}

export function BrowserChrome({
  tabs, activeTab, onTabClick, onTabClose, onTabReorder, onOpenSection,
  isLoading, onGoPrev, onGoNext, canGoPrev, canGoNext,
  darkMode, onToggleDarkMode, lang, onToggleLang,
  onScrollToTop, onDownloadCV, onToggleFullscreen, isFullscreen,
}: BrowserChromeProps) {
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [showStyleMenu, setShowStyleMenu] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [urlFocused, setUrlFocused] = useState(false);
  const [hasInitiallyRendered, setHasInitiallyRendered] = useState(false);
  const dragRef = useRef<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setHasInitiallyRendered(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleDragStart = (i: number) => { dragRef.current = i; setDragIndex(i); };
  const handleDragOver = (e: React.DragEvent, i: number) => { e.preventDefault(); setDragOverIndex(i); };
  const handleDrop = (i: number) => {
    if (dragRef.current === null) return;
    const n = [...tabs]; const [m] = n.splice(dragRef.current, 1); n.splice(i, 0, m);
    onTabReorder(n); setDragIndex(null); setDragOverIndex(null); dragRef.current = null;
  };
  const handleDragEnd = () => { setDragIndex(null); setDragOverIndex(null); dragRef.current = null; };

  const applyFilter = (cls: string) => {
    setActiveFilter(cls);
    const el = document.querySelector("[data-content-area]") as HTMLElement;
    if (el) { el.classList.remove("sepia", "grayscale", "contrast-125", "invert"); if (cls) el.classList.add(cls); }
    setShowStyleMenu(false);
  };

  const activeMeta = activeTab ? sectionMeta[activeTab] : null;
  const currentUrl = activeMeta ? activeMeta.url : "https://Paweł.Kozłowski";
  const urlParts = parseUrlSegments(currentUrl);
  const d = darkMode;

  // ── Dynamic accent color for icons ──
  const ic = d ? "#E5E5E5" : "#18181B";

  // ── Three-tier color hierarchy ──
  const bgTabBar      = d ? "rgba(24,24,27,0.96)"  : "rgba(212,212,216,0.97)";
  const bgToolbar     = d ? "rgba(39,39,42,0.96)"  : "rgba(228,228,231,0.97)";
  const bgBookmarks   = d ? "rgba(52,52,56,0.96)"  : "rgba(239,239,242,0.97)";

  const bgActive   = d ? "bg-[#3F3F46]" : "bg-white";
  const bgTabHover = d ? "hover:bg-[#3F3F46]" : "hover:bg-[#D4D4D8]";
  const border     = d ? "border-[#3F3F46]" : "border-[#D4D4D8]";
  const txtP       = d ? "text-[#FAFAFA]" : "text-[#18181B]";
  const txtS       = d ? "text-[#A1A1AA]" : "text-[#52525B]";
  const urlBg      = d ? "bg-[#18181B]" : "bg-white";
  const urlBorder  = d ? "border-[#3F3F46]" : "border-[#D4D4D8]";
  const sep        = d ? "bg-[#3F3F46]" : "bg-[#D4D4D8]";
  const bkmkActive = d ? "bg-[#3F3F46]" : "bg-[#E4E4E7]";
  const btnH       = d ? "hover:bg-[#3F3F46]" : "hover:bg-[#E4E4E7]";

  // Presentation mode
  if (isFullscreen) {
    return (
      <button
        onClick={onToggleFullscreen}
        className="fixed top-3 right-3 z-[100] w-8 h-8 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-30 hover:opacity-100"
        title={lang === "pl" ? "Wyjdź z prezentacji (Esc)" : "Exit presentation (Esc)"}
      >
        <IconExitPresentation />
      </button>
    );
  }

  return (
    <div className="sticky top-0 z-50 select-none" style={{
      boxShadow: d
        ? "0 2px 8px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)"
        : "0 2px 8px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)"
    }}>
      {/* ── Loading Bar with shimmer ── */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] z-[60] origin-left overflow-hidden"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0" style={{ backgroundColor: ic }} />
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent, ${d ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.6)"}, transparent)`,
                width: "40%",
              }}
              animate={{ x: ["-100%", "350%"] }}
              transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Tab Bar ── */}
      <div className={`flex items-stretch h-[37px] border-b ${border} backdrop-blur-sm`}
        style={{ backgroundColor: bgTabBar }}
      >
        <div className="flex items-stretch flex-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <AnimatePresence initial={false}>
            {tabs.map((tabId, index) => {
              const meta = sectionMeta[tabId];
              const isActive = activeTab === tabId;
              const isDragging = dragIndex === index;
              const isDragOver = dragOverIndex === index && dragIndex !== index;

              return (
                <motion.div
                  key={tabId}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0, minWidth: 0 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e: React.DragEvent) => handleDragOver(e, index)}
                  onDrop={() => handleDrop(index)}
                  onDragEnd={handleDragEnd}
                  onClick={() => onTabClick(tabId)}
                  className={`
                    group flex items-center gap-[6px] px-3 min-w-[110px] sm:min-w-[130px] max-w-[200px] cursor-pointer
                    transition-colors duration-100 relative overflow-hidden
                    ${isActive ? `${bgActive} rounded-t-lg` : bgTabHover}
                    ${isDragging ? "opacity-40" : ""}
                    ${isDragOver ? (d ? "bg-[#4A4953]" : "bg-[#E0E0E6]") : ""}
                  `}
                  style={isActive ? {
                    boxShadow: d
                      ? "0 2px 10px rgba(255,255,255,0.06), 0 0 1px rgba(255,255,255,0.1)"
                      : "0 2px 10px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.08)",
                  } : undefined}
                >
                  {/* Sliding active tab indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: ic }}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  {!isActive && index > 0 && (
                    <div className={`absolute left-0 top-[8px] bottom-[8px] w-px ${sep}`} />
                  )}

                  {/* Tab favicon with pulse during loading */}
                  <motion.span
                    className="shrink-0 flex items-center"
                    animate={isActive && isLoading ? { opacity: [1, 0.3, 1] } : { opacity: 1 }}
                    transition={isActive && isLoading ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" } : {}}
                  >
                    {getTabIcon(tabId, ic)}
                  </motion.span>

                  <span className={`text-[11.5px] truncate flex-1 ${isActive ? txtP : txtS}`}>
                    {lang === "pl" ? meta.label : meta.labelEn}
                  </span>
                  <motion.button
                    onClick={(e: React.MouseEvent) => { e.stopPropagation(); onTabClose(tabId); }}
                    className={`shrink-0 w-[18px] h-[18px] rounded flex items-center justify-center
                      opacity-0 group-hover:opacity-100 transition-all ${txtS} ${d ? "hover:bg-[#5B5B66]" : "hover:bg-[#D7D7DB]"}`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                  >
                    <IconClose />
                  </motion.button>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Subtle "+" button — no rotate, smaller */}
          <button
            className={`shrink-0 w-[30px] flex items-center justify-center ${txtS} ${btnH} transition-colors`}
            title={lang === "pl" ? "Nowa karta (Ctrl+T)" : "New tab (Ctrl+T)"}
            onClick={() => { const u = allSections.find((s) => !tabs.includes(s)); if (u) onOpenSection(u); }}
          >
            <IconPlus />
          </button>
        </div>
      </div>

      {/* ── URL Bar ── */}
      <div
        className={`px-1 sm:px-2 py-[3px] flex items-center gap-[1px] sm:gap-[2px] border-b ${border} backdrop-blur-sm`}
        style={{ backgroundColor: bgToolbar }}
      >
        {/* Nav buttons — hide some on very small screens */}
        <ToolbarBtn onClick={onGoPrev} disabled={!canGoPrev} title={lang === "pl" ? "Poprzednia" : "Previous"} d={d} hoverEffect="slideLeft">
          <IconBack disabled={!canGoPrev} color={ic} />
        </ToolbarBtn>
        <ToolbarBtn onClick={onGoNext} disabled={!canGoNext} title={lang === "pl" ? "Następna" : "Next"} d={d} hoverEffect="slideRight">
          <IconForward disabled={!canGoNext} color={ic} />
        </ToolbarBtn>
        <ToolbarBtn onClick={onScrollToTop} title={lang === "pl" ? "Przewiń na górę" : "Scroll to top"} d={d} hoverEffect="rotate" className="hidden sm:flex">
          <IconRefresh color={ic} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => onOpenSection("home")} title={lang === "pl" ? "Strona główna" : "Home"} d={d} hoverEffect="bounce" className="hidden sm:flex">
          <IconHome color={ic} />
        </ToolbarBtn>

        {/* URL bar with breadcrumb, focus expand, lock animation, connection dot */}
        <motion.div
          className={`flex items-center gap-1.5 sm:gap-2 ${urlBg} border px-2 sm:px-3 py-[4px] mx-0.5 sm:mx-1 cursor-text relative
            transition-colors ${urlFocused ? (d ? "border-[#FBFBFE]" : "border-[#1A1A1A]") : urlBorder}`}
          animate={{ flexGrow: urlFocused ? 1.3 : 1 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          style={{ flexShrink: 1, flexBasis: 0, minWidth: 0 }}
          onClick={() => setUrlFocused(true)}
          onBlur={() => setUrlFocused(false)}
          tabIndex={0}
        >
          {/* Focus glow */}
          <AnimatePresence>
            {urlFocused && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: d
                    ? "0 0 0 2px rgba(251,251,254,0.12)"
                    : "0 0 0 2px rgba(26,26,26,0.08)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            )}
          </AnimatePresence>

          {/* Lock icon with security animation */}
          <motion.span
            key={activeTab || "default"}
            className="shrink-0 flex items-center"
            initial={{ y: -3, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 600, damping: 20, delay: 0.05 }}
          >
            <IconLock color={ic} />
          </motion.span>

          {/* Connection quality dot */}
          <span className="shrink-0 relative hidden sm:block">
            <motion.span
              className="block w-[5px] h-[5px] rounded-full"
              style={{ backgroundColor: "#22C55E" }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.9, 0.5, 0.9] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>

          {/* Breadcrumb URL with hover highlights */}
          <div className="flex items-center gap-0 truncate flex-1 text-[11px] sm:text-[12.5px]">
            <motion.span
              key={`proto-${activeTab}`}
              className={`${d ? "text-[#8F8F97]" : "text-[#9CA3AF]"} shrink-0 hidden sm:inline`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {urlParts.protocol}
            </motion.span>
            <motion.span
              key={`domain-${activeTab}`}
              className={`${txtP} shrink-0 px-[1px] rounded cursor-pointer transition-colors ${d ? "hover:bg-[#4A4953]" : "hover:bg-[#E3E2DD]"}`}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              onClick={(e) => { e.stopPropagation(); onOpenSection("home"); }}
              title={lang === "pl" ? "Przejdź do strony głównej" : "Go to homepage"}
            >
              {urlParts.domain}
            </motion.span>
            <AnimatePresence mode="wait">
              {urlParts.path && (
                <motion.span
                  key={`path-${activeTab}`}
                  className={`${d ? "text-[#B1B1B3]" : "text-[#5B5B66]"} shrink-0 px-[1px] rounded cursor-pointer transition-colors ${d ? "hover:bg-[#4A4953]" : "hover:bg-[#E3E2DD]"}`}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  {urlParts.path}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Dark mode toggle with rotation */}
        <ToolbarBtn
          onClick={onToggleDarkMode}
          title={d ? (lang === "pl" ? "Tryb jasny" : "Light mode") : (lang === "pl" ? "Tryb ciemny" : "Dark mode")}
          d={d}
          hoverEffect="none"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={d ? "sun" : "moon"}
              className="flex items-center justify-center"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              {d ? <IconSun color={ic} /> : <IconMoon color={ic} />}
            </motion.span>
          </AnimatePresence>
        </ToolbarBtn>

        <ToolbarBtn onClick={onToggleLang} title={lang === "pl" ? "Switch to English" : "Przełącz na polski"} d={d} className="relative" hoverEffect="bounce">
          <IconGlobe color={ic} />
          <span className="absolute -bottom-[2px] -right-[2px] text-[7px] px-[2px] rounded-sm" style={{ color: ic, backgroundColor: d ? "#42414D" : "#E8E8EC" }}>
            {lang.toUpperCase()}
          </span>
        </ToolbarBtn>

        <ToolbarBtn onClick={onToggleFullscreen} title={lang === "pl" ? "Tryb prezentacji" : "Presentation mode"} d={d} hoverEffect="scale" className="hidden sm:flex">
          <IconPresentation color={ic} />
        </ToolbarBtn>

        <ToolbarBtn onClick={onDownloadCV} title={lang === "pl" ? "Pobierz CV" : "Download CV"} d={d} hoverEffect="bounce" className="hidden sm:flex">
          <IconDownload color={ic} />
        </ToolbarBtn>

        {/* 3-dot menu */}
        <div className="relative">
          <ToolbarBtn onClick={() => setShowStyleMenu(!showStyleMenu)} title={lang === "pl" ? "Styl" : "Style"} d={d} hoverEffect="scale">
            <IconDots color={ic} />
          </ToolbarBtn>
          <AnimatePresence>
            {showStyleMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowStyleMenu(false)} />
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                  className={`absolute right-0 top-[34px] z-50 ${d ? "bg-[#42414D] border-[#5B5B66]" : "bg-white border-[#D5D5D9]"} border shadow-xl py-1 min-w-[170px]`}
                >
                  {/* Mobile-only: hidden buttons */}
                  <div className="sm:hidden border-b mb-1 pb-1" style={{ borderColor: d ? "#5B5B66" : "#E5E7EB" }}>
                    <button
                      onClick={() => { onScrollToTop(); setShowStyleMenu(false); }}
                      className={`w-full text-left px-3 py-[6px] text-[12px] flex items-center gap-2 ${d ? "text-[#CFCFD8] hover:bg-[#5B5B66]" : "text-[#4B5563] hover:bg-[#F5F5F5]"}`}
                    >
                      <IconRefresh color={ic} />
                      {lang === "pl" ? "Na górę" : "Scroll top"}
                    </button>
                    <button
                      onClick={() => { onOpenSection("home"); setShowStyleMenu(false); }}
                      className={`w-full text-left px-3 py-[6px] text-[12px] flex items-center gap-2 ${d ? "text-[#CFCFD8] hover:bg-[#5B5B66]" : "text-[#4B5563] hover:bg-[#F5F5F5]"}`}
                    >
                      <IconHome color={ic} />
                      {lang === "pl" ? "Strona główna" : "Home"}
                    </button>
                    <button
                      onClick={() => { onToggleFullscreen(); setShowStyleMenu(false); }}
                      className={`w-full text-left px-3 py-[6px] text-[12px] flex items-center gap-2 ${d ? "text-[#CFCFD8] hover:bg-[#5B5B66]" : "text-[#4B5563] hover:bg-[#F5F5F5]"}`}
                    >
                      <IconPresentation color={ic} />
                      {lang === "pl" ? "Prezentacja" : "Presentation"}
                    </button>
                    <button
                      onClick={() => { onDownloadCV(); setShowStyleMenu(false); }}
                      className={`w-full text-left px-3 py-[6px] text-[12px] flex items-center gap-2 ${d ? "text-[#CFCFD8] hover:bg-[#5B5B66]" : "text-[#4B5563] hover:bg-[#F5F5F5]"}`}
                    >
                      <IconDownload color={ic} />
                      {lang === "pl" ? "Pobierz CV" : "Download CV"}
                    </button>
                  </div>

                  <p className={`px-3 py-1.5 text-[10px] uppercase tracking-wider ${d ? "text-[#8F8F97]" : "text-[#9CA3AF]"}`}>
                    {lang === "pl" ? "Styl wyświetlania" : "Display style"}
                  </p>
                  {styleFilters.map((f) => (
                    <button
                      key={f.class || "normal"}
                      onClick={() => applyFilter(f.class)}
                      className={`w-full text-left px-3 py-[6px] text-[12px] transition-colors flex items-center gap-2
                        ${activeFilter === f.class
                          ? (d ? "bg-[#5B5B66] text-white" : "bg-[#F0F0F0] text-[#1A1A1A]")
                          : (d ? "text-[#CFCFD8] hover:bg-[#5B5B66]" : "text-[#4B5563] hover:bg-[#F5F5F5]")}`}
                    >
                      <span className={`w-[10px] h-[10px] rounded-full border ${activeFilter === f.class
                        ? (d ? "border-[#E5E5E5] bg-[#E5E5E5]" : "border-[#1A1A1A] bg-[#1A1A1A]")
                        : (d ? "border-[#8F8F97]" : "border-[#D1D5DB]")}`}
                      />
                      {lang === "pl" ? f.name : f.nameEn}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Bookmarks Bar with stagger animation ── */}
      <div
        className={`px-1.5 sm:px-3 py-[2px] flex items-center gap-0 border-b ${border} overflow-x-auto backdrop-blur-sm`}
        style={{ scrollbarWidth: "none", backgroundColor: bgBookmarks }}
      >
        {allSections.map((sid, i) => {
          const meta = sectionMeta[sid];
          const isActive = activeTab === sid;
          return (
            <motion.button
              key={sid}
              onClick={() => onOpenSection(sid)}
              className={`flex items-center gap-[4px] sm:gap-[5px] px-[6px] sm:px-[9px] py-[3px] rounded text-[10.5px] sm:text-[11.5px] transition-colors whitespace-nowrap shrink-0
                ${isActive ? `${bkmkActive} ${txtP}` : `${txtS} ${btnH}`}`}
              initial={!hasInitiallyRendered ? { opacity: 0, y: 6 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: !hasInitiallyRendered ? i * 0.06 : 0,
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="shrink-0 flex items-center">{getTabIcon(sid, ic)}</span>
              {lang === "pl" ? meta.label : meta.labelEn}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ── Toolbar button wrapper with micro-interactions ──
type HoverEffect = "rotate" | "bounce" | "slideLeft" | "slideRight" | "scale" | "none";

function ToolbarBtn({ children, onClick, disabled, title, d, className = "", hoverEffect = "scale" }: {
  children: React.ReactNode; onClick: () => void; disabled?: boolean; title: string; d: boolean; className?: string; hoverEffect?: HoverEffect;
}) {
  const getHoverAnim = (): Record<string, unknown> => {
    if (disabled) return {};
    switch (hoverEffect) {
      case "rotate": return { rotate: 30, scale: 1.1 };
      case "bounce": return { y: -2, scale: 1.08 };
      case "slideLeft": return { x: -2, scale: 1.05 };
      case "slideRight": return { x: 2, scale: 1.05 };
      case "scale": return { scale: 1.12 };
      case "none": return {};
      default: return { scale: 1.1 };
    }
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] rounded flex items-center justify-center transition-colors
        ${disabled ? "cursor-default opacity-40" : (d ? "hover:bg-[#4A4953]" : "hover:bg-[#E0E0E6]")} ${className}`}
      whileHover={getHoverAnim()}
      whileTap={disabled ? {} : { scale: 0.82 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}