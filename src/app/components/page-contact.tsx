import { useState, useMemo } from "react";
import { profileData, stats } from "./portfolio-data";
import { Mail, Phone, Linkedin, Github, Globe, MapPin, Send, Clock } from "lucide-react";
import { TextEffect } from "./text-effect";
import { ScrollReveal } from "./scroll-reveal";
import { AnimatedCounter } from "./animated-counter";
import { AnimatedUnderline } from "./animated-underline";
import { SectionNav } from "./section-nav";
import { useAppContext } from "../../context/AppContext";

export function PageContact() {
  const { darkMode, lang, theme } = useAppContext();
  const d = darkMode;
  const { text1, text2, text3, divider, accent, cardBg } = theme;

  const inputBg = d
    ? "bg-[#27272A] border-[#3F3F46] text-[#FAFAFA] placeholder:text-[#52525B]"
    : "bg-[#FAFAFA] border-[#E4E4E7] text-[#18181B] placeholder:text-[#D4D4D8]";

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactItems = useMemo(() => [
    { icon: <Mail className="w-4 h-4" />, label: "Email", value: profileData.contact.email, href: `mailto:${profileData.contact.email}` },
    { icon: <Phone className="w-4 h-4" />, label: lang === "pl" ? "Telefon" : "Phone", value: profileData.contact.phone, href: `tel:${profileData.contact.phone.replace(/\s/g, "")}` },
    { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", value: profileData.contact.linkedin, href: `https://linkedin.com/in/${profileData.contact.linkedin}` },
    { icon: <Github className="w-4 h-4" />, label: "GitHub", value: profileData.contact.github, href: `https://github.com/${profileData.contact.github}` },
    { icon: <Globe className="w-4 h-4" />, label: lang === "pl" ? "Strona" : "Website", value: profileData.contact.website, href: `https://${profileData.contact.website}` },
  ], [lang]);

  const statItems = useMemo(() => [
    { label: lang === "pl" ? "Projektów" : "Projects", value: stats.projects, suffix: "+" },
    { label: lang === "pl" ? "Lat doświadczenia" : "Years experience", value: stats.yearsExperience, suffix: "+" },
    { label: lang === "pl" ? "Tysięcy użytkowników" : "K+ users", value: stats.users, suffix: "K+" },
    { label: lang === "pl" ? "Technologii" : "Technologies", value: stats.technologies, suffix: "" },
  ], [lang]);

  return (
    <div className="max-w-[960px] mx-auto py-6 sm:py-10 px-4 sm:px-6">
      <div className={`border ${divider} overflow-hidden backdrop-blur-sm`} style={{ backgroundColor: cardBg }}>
        {/* Header */}
        <div className="p-6 sm:p-10 pb-4 sm:pb-6">
          <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: accent }}>
            {lang === "pl" ? "Kontakt" : "Contact"}
          </p>
          <TextEffect per="word" preset="blur" as="h1" className={`text-[28px] sm:text-[32px] ${text1} mb-1 tracking-tight`}>
            {lang === "pl" ? "Porozmawiajmy" : "Let's talk"}
          </TextEffect>
          <AnimatedUnderline darkMode={d} delay={300} width="50px" />
          <p className={`text-[14px] ${text3} mt-1`}>
            {lang === "pl"
              ? "Chętnie porozmawiam o Twoim projekcie, ofercie pracy lub współpracy"
              : "I'd love to discuss your project, job offer, or collaboration opportunity"}
          </p>
        </div>

        {/* Stats */}
        <ScrollReveal>
          <div className={`border-t ${divider} grid grid-cols-2 sm:grid-cols-4`}>
            {statItems.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-6 px-4 text-center ${i < 3 ? `sm:border-r ${divider}` : ""} ${i < 2 ? `border-b sm:border-b-0 ${divider}` : ""} ${i === 2 ? `border-r ${divider} sm:border-r` : ""}`}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} className={`text-[26px] sm:text-[30px] block ${text1}`} />
                <span className={`text-[11px] ${text3} uppercase tracking-[0.1em]`}>{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Main content */}
        <div className="p-6 sm:p-10 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10">
            {/* Left: Contact details */}
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-0">
                <div className={`py-4 border-b ${divider}`}>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-2.5 h-2.5 animate-pulse" style={{ backgroundColor: "#22C55E" }} />
                    <span className="text-[14px]" style={{ color: accent }}>
                      {lang === "pl" ? "Dostępny do współpracy" : "Available for work"}
                    </span>
                  </div>
                  <div className={`flex items-center gap-2 text-[13px] ${text3}`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{lang === "pl" ? "Odpowiadam w ciągu 24h" : "I reply within 24h"}</span>
                  </div>
                </div>

                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 py-3.5 border-b ${divider} transition-colors group cursor-pointer ${d ? "hover:bg-[#3F3F46]" : "hover:bg-[#FAFAFA]"}`}
                  >
                    <span style={{ color: accent }}>{item.icon}</span>
                    <div className="min-w-0">
                      <p className={`text-[10px] ${text3} uppercase tracking-[0.1em]`}>{item.label}</p>
                      <p className={`text-[14px] ${text1} truncate group-hover:underline group-hover:underline-offset-2`}>{item.value}</p>
                    </div>
                  </a>
                ))}

                <div className="flex items-center gap-4 py-3.5">
                  <MapPin className="w-4 h-4" style={{ color: accent }} />
                  <div>
                    <p className={`text-[10px] ${text3} uppercase tracking-[0.1em]`}>
                      {lang === "pl" ? "Lokalizacja" : "Location"}
                    </p>
                    <p className={`text-[14px] ${text1}`}>
                      Gdańsk, {lang === "pl" ? "Polska" : "Poland"} ({lang === "pl" ? "praca zdalna" : "remote"})
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Form */}
            <ScrollReveal className={`lg:col-span-3 lg:border-l ${d ? "lg:border-[#3F3F46]" : "lg:border-[#E4E4E7]"} lg:pl-8 sm:lg:pl-10 border-t lg:border-t-0 ${divider} pt-6 lg:pt-0`} delay={150}>
              <h3 className={`text-[16px] ${text1} mb-6`}>
                {lang === "pl" ? "Napisz do mnie" : "Send a message"}
              </h3>

              {sent && (
                <div className={`mb-5 p-4 text-[14px] border ${divider}`} style={{ color: accent }}>
                  {lang === "pl"
                    ? "Wiadomość wysłana! Odpowiem najszybciej jak to możliwe."
                    : "Message sent! I'll reply as soon as possible."}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`text-[13px] ${text2} mb-2 block`}>
                      {lang === "pl" ? "Imię i nazwisko" : "Full name"}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Jan Kowalski"
                      className={`w-full px-4 py-3 ${inputBg} border text-[14px] focus:outline-none transition-all`}
                      onFocus={(e) => e.target.style.borderColor = accent}
                      onBlur={(e) => e.target.style.borderColor = ""}
                      required
                    />
                  </div>
                  <div>
                    <label className={`text-[13px] ${text2} mb-2 block`}>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      placeholder="jan@example.com"
                      className={`w-full px-4 py-3 ${inputBg} border text-[14px] focus:outline-none transition-all`}
                      onFocus={(e) => e.target.style.borderColor = accent}
                      onBlur={(e) => e.target.style.borderColor = ""}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className={`text-[13px] ${text2} mb-2 block`}>
                    {lang === "pl" ? "Temat" : "Subject"}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
                    placeholder={lang === "pl" ? "Współpraca / Oferta pracy / Pytanie" : "Collaboration / Job offer / Question"}
                    className={`w-full px-4 py-3 ${inputBg} border text-[14px] focus:outline-none transition-all`}
                    onFocus={(e) => e.target.style.borderColor = accent}
                    onBlur={(e) => e.target.style.borderColor = ""}
                    required
                  />
                </div>
                <div>
                  <label className={`text-[13px] ${text2} mb-2 block`}>
                    {lang === "pl" ? "Wiadomość" : "Message"}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    placeholder={lang === "pl" ? "Opisz swój projekt lub zapytanie..." : "Describe your project or inquiry..."}
                    rows={5}
                    className={`w-full px-4 py-3 ${inputBg} border text-[14px] focus:outline-none transition-all resize-none`}
                    onFocus={(e) => e.target.style.borderColor = accent}
                    onBlur={(e) => e.target.style.borderColor = ""}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 text-[14px] hover:opacity-90 active:opacity-80 transition-all"
                  style={{ backgroundColor: accent, color: d ? "#18181B" : "#FFFFFF" }}
                >
                  <Send className="w-4 h-4" />
                  {lang === "pl" ? "Wyślij wiadomość" : "Send message"}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>

        <div className={`border-t ${divider} px-6 sm:px-10 py-3.5 flex justify-between`}>
          <span className="text-[12px] tabular-nums" style={{ color: accent, fontFamily: "Georgia, serif" }}>01</span>
          <span className={`text-[11px] ${text3} uppercase tracking-[0.15em]`}>
            {lang === "pl" ? "Formularz kontaktowy" : "Contact form"}
          </span>
        </div>

        <SectionNav
          prevSection="education"
          prevLabel={lang === "pl" ? "Edukacja" : "Education"}
        />

        <div className={`border-t ${divider} px-6 sm:px-10 py-5 flex justify-center`}>
          <button
            onClick={() => {
              const el = document.getElementById("section-landing");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="flex items-center gap-2 text-[12px] transition-opacity hover:opacity-60"
            style={{ color: accent }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 11V3M3 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {lang === "pl" ? "Powrót na górę" : "Back to top"}
          </button>
        </div>
      </div>
    </div>
  );
}
