import { Home, User, FolderKanban, GraduationCap, Mail } from "lucide-react";

export type SectionId = "home" | "about" | "projects" | "education" | "contact";

export const sections: { id: SectionId; label: string; icon: React.ReactNode }[] = [
  { id: "home", label: "Główna", icon: <Home className="w-[18px] h-[18px]" /> },
  { id: "about", label: "O mnie", icon: <User className="w-[18px] h-[18px]" /> },
  { id: "projects", label: "Projekty", icon: <FolderKanban className="w-[18px] h-[18px]" /> },
  { id: "education", label: "Edukacja", icon: <GraduationCap className="w-[18px] h-[18px]" /> },
  { id: "contact", label: "Kontakt", icon: <Mail className="w-[18px] h-[18px]" /> },
];

interface NavSidebarProps {
  activeSection: SectionId;
  openTabs: SectionId[];
  onSectionClick: (id: SectionId) => void;
}

export function NavSidebar({ activeSection, openTabs, onSectionClick }: NavSidebarProps) {
  const activeIndex = sections.findIndex((s) => s.id === activeSection);

  return (
    <div className="w-[74px] min-w-[74px] bg-white border-r border-[#E5E7EB] flex flex-col items-center py-5 relative">
      {/* Progress bar track on the left */}
      <div className="absolute left-[8px] top-[24px] bottom-[24px] w-[3px] rounded-full bg-[#F3F4F6] overflow-hidden">
        <div
          className="w-full bg-gradient-to-b from-[#3B82F6] to-[#60A5FA] rounded-full transition-all duration-500 ease-out"
          style={{ height: `${((activeIndex + 1) / sections.length) * 100}%` }}
        />
      </div>

      {/* Navigation tiles */}
      <div className="flex flex-col items-center gap-3 w-full relative z-10">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const isOpen = openTabs.includes(section.id);

          return (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              title={section.label}
              className={`
                relative w-[48px] h-[48px] rounded-2xl flex flex-col items-center justify-center gap-[3px]
                transition-all duration-200
                ${isActive
                  ? "bg-[#3B82F6] text-white shadow-[0_4px_12px_rgba(59,130,246,0.25)]"
                  : isOpen
                    ? "bg-[#EFF6FF] text-[#3B82F6] hover:bg-[#DBEAFE]"
                    : "bg-transparent text-[#9CA3AF] hover:bg-[#F3F4F6] hover:text-[#6B7280]"
                }
              `}
            >
              {section.icon}
              <span className="text-[7px] leading-none tracking-wide uppercase">
                {section.label}
              </span>
              {/* Active dot indicator */}
              {isOpen && !isActive && (
                <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[4px] h-[4px] rounded-full bg-[#3B82F6]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
