import { ChevronDown } from "lucide-react";
import { projects } from "./portfolio-data";
import imgImporter from "figma:asset/0d149e6b4f265ce9fab8f96d496bdff142072465.png";
import imgProgresik from "figma:asset/245961698ee04bb37859fe13eb3b37d5dbbe27f5.png";
import imgAutoTicket from "figma:asset/42510fb41d1b1539c77bc7f196a1ab146cce3512.png";
import imgEduWiedza from "figma:asset/0b601dd107d08418ad2d5a8bdf0b56f44f7ad430.png";
import imgCeleste from "figma:asset/930c7700c0a03793a55ec92704d2122b863812f4.png";
import imgGames from "figma:asset/6587caac511b7fd997ad705e9d3b0163ad809674.png";

const projectImages: Record<string, string> = {
  Importer: imgImporter,
  Progresik: imgProgresik,
  AutoTicket: imgAutoTicket,
  EduWiedza: imgEduWiedza,
  Celeste: imgCeleste,
  Games: imgGames,
};

export function HighlightedProjects() {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#E5E7EB]">
        <h3 className="text-[15px] text-[#1F2937]">Wyróżnione projekty</h3>
      </div>

      {/* Projects List */}
      <div className="divide-y divide-[#F3F4F6]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex gap-3.5 p-4 hover:bg-[#F9FAFB] transition-colors cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="w-[72px] h-[54px] rounded-lg overflow-hidden bg-[#F3F4F6] shrink-0">
              <img
                src={projectImages[project.name]}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-[#9CA3AF] mb-0.5 truncate">
                {project.category}
              </p>
              <h4 className="text-[13px] text-[#1F2937] mb-0.5 truncate">
                {project.name}
              </h4>
              <p className="text-[11px] text-[#9CA3AF] line-clamp-2 leading-[1.5]">
                {project.description}
              </p>
              <button className="flex items-center gap-0.5 mt-1.5 text-[11px] text-[#3B82F6] hover:text-[#2563EB]">
                Pokaż pliki
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
