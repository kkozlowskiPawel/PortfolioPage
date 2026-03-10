import { projects } from "./portfolio-data";
import { ExternalLink } from "lucide-react";
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

export function ProjectsTab() {
  return (
    <div>
      <h2 className="text-[17px] text-[#1F2937] mb-5">Wszystkie projekty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:shadow-md hover:border-[#D1D5DB] transition-all duration-200"
          >
            {/* Project Image */}
            <div className="relative h-36 overflow-hidden bg-[#F3F4F6]">
              <img
                src={projectImages[project.name]}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[10px] text-[#6B7280] rounded-full border border-[#E5E7EB]">
                  {project.category}
                </span>
              </div>
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#E5E7EB] hover:bg-white">
                  <ExternalLink className="w-3 h-3 text-[#6B7280]" />
                </button>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-[14px] text-[#1F2937] mb-1">
                {project.name}
              </h3>
              <p className="text-[12px] text-[#9CA3AF] leading-relaxed mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-[#EFF6FF] text-[10px] text-[#3B82F6] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
