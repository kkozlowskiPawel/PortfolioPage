import { education, certifications, badges, skillsWithLevel } from "./portfolio-data";
import { Code2, Trophy, Award, ArrowRight } from "lucide-react";
import { TextEffect } from "./text-effect";
import { ScrollReveal } from "./scroll-reveal";
import { SkillBar } from "./skill-bar";
import { AnimatedCounter } from "./animated-counter";
import { AnimatedUnderline } from "./animated-underline";
import { MagneticButton } from "./magnetic-button";
import { SectionNav } from "./section-nav";
import { SectionFooter } from "./section-footer";
import { useAppContext } from "../../context/AppContext";

export function PageEducation() {
  const { darkMode, lang, theme, onOpenSection } = useAppContext();
  const d = darkMode;
  const { text1, text2, text3, divider, accent, cardBg } = theme;

  const subjects = lang === "pl"
    ? ["Algorytmy i struktury danych", "Inżynieria oprogramowania", "Bazy danych", "Sieci komputerowe", "Architektura systemów", "Programowanie obiektowe"]
    : ["Algorithms & Data Structures", "Software Engineering", "Databases", "Computer Networks", "System Architecture", "Object-Oriented Programming"];

  return (
    <div className="max-w-[960px] mx-auto py-6 sm:py-10 px-4 sm:px-6">
      <div className={`border ${divider} overflow-hidden backdrop-blur-sm`} style={{ backgroundColor: cardBg }}>
        {/* ── Formal Education ── */}
        <div className="p-6 sm:p-10">
          <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: accent }}>
            {lang === "pl" ? "Edukacja" : "Education"}
          </p>
          <TextEffect per="word" preset="slide" as="h1" className={`text-[28px] sm:text-[32px] ${text1} mb-1 tracking-tight`}>
            {lang === "pl" ? "Wykształcenie i rozwój" : "Education & Growth"}
          </TextEffect>
          <AnimatedUnderline darkMode={d} delay={300} width="50px" className="mb-8" />

          {education.map((edu) => (
            <div key={edu.id}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h2 className={`text-[18px] sm:text-[20px] ${text1}`}>
                    {lang === "pl" ? edu.school : edu.schoolEn}
                  </h2>
                  <p className="text-[15px] mt-1" style={{ color: accent }}>
                    {lang === "pl" ? edu.degree : edu.degreeEn}
                  </p>
                </div>
                <span
                  className={`text-[12px] shrink-0 border px-3 py-1 ${d ? "border-[#3F3F46]" : "border-[#E4E4E7]"}`}
                  style={{ color: d ? "#71717A" : "#A1A1AA", fontFamily: "Georgia, serif" }}
                >
                  {edu.period}
                </span>
              </div>
              <p className={`text-[14px] ${text2} leading-[24px] mb-6`}>
                {lang === "pl" ? edu.description : edu.descriptionEn}
              </p>

              <div className={`border-t ${divider} pt-5`}>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-3" style={{ color: accent }}>
                  {lang === "pl" ? "Kluczowe przedmioty" : "Key subjects"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <span
                      key={subject}
                      className={`px-3 py-1.5 text-[12px] border transition-colors ${d ? "border-[#3F3F46] text-[#D4D4D8] hover:border-[#71717A]" : "border-[#E4E4E7] text-[#52525B] hover:border-[#A1A1AA]"}`}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <SectionFooter num="01" label={lang === "pl" ? "Wykształcenie" : "Formal education"} />

        {/* ── Certifications ── */}
        <div className={`border-t ${divider}`} />
        <ScrollReveal>
          <div className="p-6 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-5" style={{ color: accent }}>
              {lang === "pl" ? "Certyfikaty i kursy" : "Certifications & Courses"}
            </p>

            <div className="space-y-0">
              {certifications.map((cert, i) => (
                <div key={cert.name} className={`flex items-start gap-4 py-4 ${i < certifications.length - 1 ? `border-b ${divider}` : ""}`}>
                  <div
                    className="w-9 h-9 shrink-0 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: accent, color: d ? "#18181B" : "#FFFFFF" }}
                  >
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className={`text-[14px] ${text1}`}>{cert.name}</h3>
                      <span className="text-[12px] shrink-0" style={{ color: d ? "#71717A" : "#A1A1AA", fontFamily: "Georgia, serif" }}>{cert.year}</span>
                    </div>
                    <p className={`text-[13px] ${text3} mt-0.5`}>{cert.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <SectionFooter num="02" label={lang === "pl" ? "Certyfikaty" : "Certifications"} />

        {/* ── Self-learning & Tech Stack ── */}
        <div className={`border-t ${divider}`} />
        <ScrollReveal>
          <div className="p-6 sm:p-10">
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-0 border ${divider} mb-8`}>
              {[
                {
                  icon: <Code2 className="w-5 h-5" />,
                  title: lang === "pl" ? "Kursy online" : "Online courses",
                  desc: "Udemy, Coursera, Frontend Masters",
                  count: 25,
                  suffix: "+",
                },
                {
                  icon: <Trophy className="w-5 h-5" />,
                  title: lang === "pl" ? "Projekty open source" : "Open source projects",
                  desc: lang === "pl" ? "Kontrybutor i maintainer" : "Contributor & maintainer",
                  count: 12,
                  suffix: "",
                },
                {
                  icon: <Award className="w-5 h-5" />,
                  title: lang === "pl" ? "Certyfikaty" : "Certifications",
                  desc: "AWS, Meta, Google",
                  count: 5,
                  suffix: "",
                },
              ].map((item, i) => (
                <div key={item.title} className={`p-5 sm:p-6 ${i < 2 ? `sm:border-r border-b sm:border-b-0 ${divider}` : ""}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: accent, color: d ? "#18181B" : "#FFFFFF" }}>
                        {item.icon}
                      </div>
                      <h3 className={`text-[14px] ${text1}`}>{item.title}</h3>
                    </div>
                    <AnimatedCounter end={item.count} suffix={item.suffix} className={`text-[28px] block ${text1}`} />
                  </div>
                  <p className={`text-[13px] ${text2}`}>{item.desc}</p>
                </div>
              ))}
            </div>

            <ScrollReveal delay={150}>
              <div className={`border-t ${divider} pt-6`}>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-5" style={{ color: accent }}>
                  {lang === "pl" ? "Pełen stack technologiczny" : "Full tech stack"}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                  {skillsWithLevel.map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} darkMode={d} delay={i * 50} />
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className={`border-t ${divider} pt-6 mt-6`}>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-4" style={{ color: accent }}>
                  {lang === "pl" ? "Specjalizacje" : "Specializations"} ({badges.length})
                </p>
                <div className="flex flex-wrap gap-4">
                  {badges.map((badge) => (
                    <div key={badge.id} className="flex flex-col items-center gap-2">
                      <div className="w-11 h-11 flex items-center justify-center text-[18px]" style={{ backgroundColor: accent, color: d ? "#18181B" : "#FFFFFF" }}>
                        {badge.icon}
                      </div>
                      <span className={`text-[11px] ${text2}`}>{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        <SectionFooter num="03" label={lang === "pl" ? "Samodzielna nauka" : "Self-learning"}>
          <MagneticButton
            onClick={() => onOpenSection("contact")}
            className="text-[12px] flex items-center gap-1.5 transition-opacity hover:opacity-60"
            style={{ color: accent }}
          >
            {lang === "pl" ? "Kontakt" : "Contact"} <ArrowRight className="w-3 h-3" />
          </MagneticButton>
        </SectionFooter>

        <SectionNav
          prevSection="projects"
          prevLabel={lang === "pl" ? "Projekty" : "Projects"}
          nextSection="contact"
          nextLabel={lang === "pl" ? "Kontakt" : "Contact"}
        />
      </div>
    </div>
  );
}
