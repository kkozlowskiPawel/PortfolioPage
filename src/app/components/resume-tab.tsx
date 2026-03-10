import { useRef, useState } from "react";
import { Briefcase, GraduationCap, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { experience, education, badges } from "./portfolio-data";
import { HighlightedProjects } from "./highlighted-projects";

export function ResumeTab() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Left Column */}
      <div className="flex-1 min-w-0 space-y-8">
        {/* Experience */}
        <ExperienceSection />

        {/* Badges */}
        <BadgesSection />

        {/* Education */}
        <EducationSection />
      </div>

      {/* Right Column - Highlighted Projects */}
      <div className="xl:w-[340px] xl:min-w-[340px]">
        <HighlightedProjects />
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section>
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-7 h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center">
          <Briefcase className="w-3.5 h-3.5 text-[#3B82F6]" />
        </div>
        <h2 className="text-[17px] text-[#1F2937]">Doświadczenie</h2>
      </div>
      <div className="space-y-5 pl-1">
        {experience.map((exp) => (
          <div key={exp.id}>
            <h3 className="text-[14px] text-[#1F2937] mb-0.5">
              {exp.role} w {exp.company}
            </h3>
            <p className="text-[13px] text-[#6B7280] mb-1.5">
              {exp.description}
            </p>
            <div className="flex items-center gap-1.5 text-[12px] text-[#9CA3AF]">
              <Calendar className="w-3 h-3" />
              <span>{exp.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BadgesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -160 : 160;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
      setTimeout(updateScrollState, 300);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[17px] text-[#1F2937]">
          Odznaki ({badges.length})
        </h2>
        <div className="flex gap-1">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-7 h-7 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F9FAFB] transition-colors disabled:opacity-30"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-[#6B7280]" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-7 h-7 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F9FAFB] transition-colors disabled:opacity-30 bg-[#3B82F6] !border-[#3B82F6]"
          >
            <ChevronRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex flex-col items-center gap-2 shrink-0 w-[90px]"
          >
            <div
              className="w-[56px] h-[56px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: badge.bg }}
            >
              <div
                className="w-7 h-7 rounded-full"
                style={{ backgroundColor: badge.color, opacity: 0.7 }}
              />
            </div>
            <span className="text-[11px] text-[#6B7280] text-center leading-tight">
              {badge.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section>
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-7 h-7 rounded-full bg-[#F0FDF4] flex items-center justify-center">
          <GraduationCap className="w-3.5 h-3.5 text-[#22C55E]" />
        </div>
        <h2 className="text-[17px] text-[#1F2937]">Edukacja</h2>
      </div>
      <div className="space-y-4 pl-1">
        {education.map((edu) => (
          <div key={edu.id}>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-1">
              <h3 className="text-[14px] text-[#1F2937]">{edu.school}</h3>
              <span className="text-[11px] text-[#9CA3AF]">-</span>
              <div className="flex items-center gap-1.5 text-[12px] text-[#9CA3AF]">
                <Calendar className="w-3 h-3" />
                <span>{edu.period}</span>
              </div>
            </div>
            <p className="text-[13px] text-[#6B7280]">{edu.degree}</p>
            <p className="text-[12px] text-[#9CA3AF] mt-1">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
