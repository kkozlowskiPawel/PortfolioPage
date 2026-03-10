import { useMemo } from "react";
import { profileData, skillsWithLevel, badges, experience } from "./portfolio-data";
import { Mail, Phone, Linkedin, Github, Globe, MapPin, Briefcase, Code2, GraduationCap, ArrowRight } from "lucide-react";
import { TextEffect } from "./text-effect";
import { ScrollReveal } from "./scroll-reveal";
import { SkillBar } from "./skill-bar";
import { AnimatedUnderline } from "./animated-underline";
import { MagneticButton } from "./magnetic-button";
import { SectionNav } from "./section-nav";
import { SectionFooter } from "./section-footer";
import { useAppContext } from "../../context/AppContext";
import imgProfilePhoto from "figma:asset/fb8264a5e4370503c20232acef1fa97d4e29b558.png";

const timelineIcons: Record<string, React.ReactNode> = {
  briefcase: <Briefcase className="w-4 h-4" />,
  code: <Code2 className="w-4 h-4" />,
  graduation: <GraduationCap className="w-4 h-4" />,
};

export function PageAbout() {
  const { darkMode, lang, theme, onOpenSection } = useAppContext();
  const d = darkMode;
  const { text1, text2, text3, divider, accent, cardBg } = theme;

  const contactItems = useMemo(() => [
    { icon: <Mail className="w-4 h-4" />, label: "Email", value: profileData.contact.email, href: `mailto:${profileData.contact.email}` },
    { icon: <Phone className="w-4 h-4" />, label: lang === "pl" ? "Telefon" : "Phone", value: profileData.contact.phone, href: `tel:${profileData.contact.phone.replace(/\s/g, "")}` },
    { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", value: profileData.contact.linkedin, href: `https://linkedin.com/in/${profileData.contact.linkedin}` },
    { icon: <Github className="w-4 h-4" />, label: "GitHub", value: profileData.contact.github, href: `https://github.com/${profileData.contact.github}` },
    { icon: <Globe className="w-4 h-4" />, label: lang === "pl" ? "Strona" : "Website", value: profileData.contact.website, href: `https://${profileData.contact.website}` },
    { icon: <MapPin className="w-4 h-4" />, label: lang === "pl" ? "Lokalizacja" : "Location", value: "Gdańsk, " + (lang === "pl" ? "Polska" : "Poland"), href: undefined },
  ], [lang]);

  return (
    <div className="max-w-[960px] mx-auto py-6 sm:py-10 px-4 sm:px-6">
      <div className={`border ${divider} overflow-hidden backdrop-blur-sm`} style={{ backgroundColor: cardBg }}>
        {/* ── Profile ── */}
        <div className="p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
            <div className="shrink-0">
              <div className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] overflow-hidden border" style={{ borderColor: d ? "#3F3F46" : "#E4E4E7" }}>
                <img src={imgProfilePhoto} alt={profileData.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: accent }}>
                {lang === "pl" ? "O mnie" : "About me"}
              </p>
              <TextEffect per="word" preset="blur" as="h1" className={`text-[28px] sm:text-[32px] ${text1} mb-1 tracking-tight`}>
                {profileData.name}
              </TextEffect>
              <AnimatedUnderline darkMode={d} delay={400} width="60px" />
              <p className="text-[15px] mb-5" style={{ color: accent }}>{profileData.title}</p>
              {(lang === "pl" ? profileData.bio : profileData.bioEn).split("\n\n").map((p, i) => (
                <p key={i} className={`text-[14px] ${text2} leading-[24px] mb-3`}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <SectionFooter num="01" label={lang === "pl" ? "Profil" : "Profile"} />

        {/* ── Contact & Skills ── */}
        <div className={`border-t ${divider}`} />
        <ScrollReveal>
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-5" style={{ color: accent }}>
                  {lang === "pl" ? "Dane kontaktowe" : "Contact details"}
                </p>
                <div className="space-y-0">
                  {contactItems.map((item) => {
                    const inner = (
                      <div className={`flex items-center gap-4 py-3 border-b ${divider} transition-colors ${item.href ? `cursor-pointer ${d ? "hover:bg-[#3F3F46]" : "hover:bg-[#FAFAFA]"}` : ""}`}>
                        <span style={{ color: accent }}>{item.icon}</span>
                        <div className="min-w-0">
                          <p className={`text-[10px] ${text3} uppercase tracking-[0.1em]`}>{item.label}</p>
                          <p className={`text-[14px] ${text1} truncate ${item.href ? "hover:underline hover:underline-offset-2" : ""}`}>{item.value}</p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                    ) : (
                      <div key={item.label}>{inner}</div>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-5" style={{ color: accent }}>
                  {lang === "pl" ? "Umiejętności techniczne" : "Technical skills"}
                </p>
                <div className="mb-8">
                  {skillsWithLevel.map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} darkMode={d} delay={i * 50} />
                  ))}
                </div>

                <p className="text-[11px] uppercase tracking-[0.15em] mb-4" style={{ color: accent }}>
                  {lang === "pl" ? "Specjalizacje" : "Specializations"}
                </p>
                <div className="flex flex-wrap gap-3">
                  {badges.map((badge) => (
                    <div key={badge.id} className="flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center text-[14px]" style={{ backgroundColor: accent, color: d ? "#18181B" : "#FFFFFF" }}>
                        {badge.icon}
                      </div>
                      <span className={`text-[12px] ${text2}`}>{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <SectionFooter num="02" label={lang === "pl" ? "Kontakt i umiejętności" : "Contact & Skills"} />

        {/* ── Experience Timeline ── */}
        <div className={`border-t ${divider}`} />
        <ScrollReveal>
          <div className="p-6 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-6" style={{ color: accent }}>
              {lang === "pl" ? "Doświadczenie zawodowe" : "Professional experience"}
            </p>

            <div className="space-y-0">
              {experience.map((exp, i) => (
                <div
                  key={exp.id}
                  className={`relative pl-10 sm:pl-12 pb-8 ${i < experience.length - 1 ? "border-l ml-[11px]" : "ml-[11px]"}`}
                  style={{ borderColor: i < experience.length - 1 ? (d ? "#3F3F46" : "#E4E4E7") : "transparent" }}
                >
                  <div
                    className="absolute left-[-12px] top-[2px] w-[24px] h-[24px] flex items-center justify-center"
                    style={{ backgroundColor: accent, color: d ? "#18181B" : "#FFFFFF" }}
                  >
                    {timelineIcons[exp.icon]}
                  </div>
                  <div className={`border-b ${divider} pb-6`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className={`text-[16px] ${text1}`}>
                        {lang === "pl" ? exp.role : exp.roleEn}
                      </h3>
                      <span className="text-[12px] shrink-0" style={{ color: d ? "#71717A" : "#A1A1AA", fontFamily: "Georgia, serif" }}>
                        {lang === "pl" ? exp.period : exp.periodEn}
                      </span>
                    </div>
                    <p className="text-[14px] mb-3" style={{ color: accent }}>{exp.company}</p>
                    <p className={`text-[14px] ${text2} leading-[24px] mb-4`}>
                      {lang === "pl" ? exp.description : exp.descriptionEn}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(lang === "pl" ? exp.highlights : exp.highlightsEn).map((h) => (
                        <span key={h} className={`px-3 py-1 text-[11px] border ${d ? "border-[#3F3F46] text-[#D4D4D8]" : "border-[#E4E4E7] text-[#52525B]"}`}>
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <SectionFooter num="03" label={lang === "pl" ? "Doświadczenie" : "Experience"}>
          <MagneticButton
            onClick={() => onOpenSection("projects")}
            className="text-[12px] flex items-center gap-1.5 transition-opacity hover:opacity-60"
            style={{ color: accent }}
          >
            {lang === "pl" ? "Zobacz projekty" : "See projects"} <ArrowRight className="w-3 h-3" />
          </MagneticButton>
        </SectionFooter>

        <SectionNav
          prevSection="home"
          prevLabel={lang === "pl" ? "Przegląd" : "Overview"}
          nextSection="projects"
          nextLabel={lang === "pl" ? "Projekty" : "Projects"}
        />
      </div>
    </div>
  );
}
