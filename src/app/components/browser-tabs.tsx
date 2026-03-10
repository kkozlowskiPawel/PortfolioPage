import { useState, useRef } from "react";
import { X, Home, User, FolderKanban, GraduationCap, Mail } from "lucide-react";
import type { SectionId } from "./nav-sidebar";

const sectionMeta: Record<SectionId, { label: string; icon: React.ReactNode; color: string }> = {
  home: { label: "Główna", icon: <Home className="w-3 h-3" />, color: "#3B82F6" },
  about: { label: "O mnie", icon: <User className="w-3 h-3" />, color: "#8B5CF6" },
  projects: { label: "Projekty", icon: <FolderKanban className="w-3 h-3" />, color: "#22C55E" },
  education: { label: "Edukacja", icon: <GraduationCap className="w-3 h-3" />, color: "#F59E0B" },
  contact: { label: "Kontakt", icon: <Mail className="w-3 h-3" />, color: "#EF4444" },
};

interface BrowserTabsProps {
  tabs: SectionId[];
  activeTab: SectionId;
  onTabClick: (id: SectionId) => void;
  onTabClose: (id: SectionId) => void;
  onTabReorder: (tabs: SectionId[]) => void;
}

export function BrowserTabs({ tabs, activeTab, onTabClick, onTabClose, onTabReorder }: BrowserTabsProps) {
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const dragRef = useRef<number | null>(null);

  const handleDragStart = (index: number) => {
    dragRef.current = index;
    setDragIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (index: number) => {
    if (dragRef.current === null) return;
    const newTabs = [...tabs];
    const [moved] = newTabs.splice(dragRef.current, 1);
    newTabs.splice(index, 0, moved);
    onTabReorder(newTabs);
    setDragIndex(null);
    setDragOverIndex(null);
    dragRef.current = null;
  };

  const handleDragEnd = () => {
    setDragIndex(null);
    setDragOverIndex(null);
    dragRef.current = null;
  };

  return (
    <div className="flex items-end gap-0 px-2 pt-1 bg-[#F9FAFB] min-h-[41px] border-b border-[#E5E7EB]" style={{ scrollbarWidth: "none" }}>
      {tabs.map((tabId, index) => {
        const meta = sectionMeta[tabId];
        const isActive = activeTab === tabId;
        const isDragging = dragIndex === index;
        const isDragOver = dragOverIndex === index && dragIndex !== index;

        return (
          <div
            key={tabId}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
            onClick={() => onTabClick(tabId)}
            className={`
              group flex items-center gap-[6px] px-[13px] py-[9px] rounded-t-[10px] cursor-pointer
              transition-all duration-150 min-w-[90px] max-w-[160px] select-none
              ${isActive
                ? "bg-white border-t-2 border-l border-r border-[#E5E7EB] -mb-px"
                : "hover:bg-[#E5E7EB]/70"
              }
              ${isDragging ? "opacity-40" : ""}
              ${isDragOver ? "ring-2 ring-[#3B82F6]/30 ring-inset" : ""}
            `}
            style={isActive ? { borderTopColor: meta.color } : {}}
          >
            <span
              className="shrink-0"
              style={{ color: isActive ? meta.color : "#9CA3AF" }}
            >
              {meta.icon}
            </span>
            <span className={`text-[12px] truncate ${isActive ? "text-[#1F2937]" : "text-[#6B7280]"}`}>
              {meta.label}
            </span>
            {tabs.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTabClose(tabId);
                }}
                className="shrink-0 ml-auto w-[16px] h-[16px] rounded-sm flex items-center justify-center
                  opacity-0 group-hover:opacity-100 hover:bg-[#D1D5DB] transition-all"
              >
                <X className="w-[10px] h-[10px] text-[#6B7280]" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}