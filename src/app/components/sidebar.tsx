import { profileData } from "./portfolio-data";
import { Mail, Phone, Linkedin, Github, Globe, Palette } from "lucide-react";
import imgProfilePhoto from "figma:asset/fb8264a5e4370503c20232acef1fa97d4e29b558.png";

export function Sidebar() {
  return (
    <aside className="w-full lg:w-[320px] lg:min-w-[320px] lg:min-h-screen bg-white lg:border-r border-b lg:border-b-0 border-[#E5E7EB] flex flex-col">
      <div className="p-6 pb-4 flex-1">
        {/* Profile Photo */}
        <div className="flex flex-col items-center mb-5">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-[3px] border-[#E5E7EB] mb-4">
            <img
              src={imgProfilePhoto}
              alt={profileData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-[18px] text-[#1F2937] mb-4">{profileData.name}</h1>

        {/* Bio */}
        <div className="mb-6">
          {profileData.bio.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-[13px] text-[#6B7280] leading-[1.7] mb-3"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Contact */}
        <div className="border-t border-[#E5E7EB] pt-5">
          <h3 className="text-[15px] text-[#1F2937] mb-4">Kontakt</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <ContactChip
                icon={<Mail className="w-3 h-3" />}
                label={profileData.contact.email}
              />
              <ContactChip
                icon={<Phone className="w-3 h-3" />}
                label={profileData.contact.phone}
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <ContactChip
                icon={
                  <span className="text-[10px]">
                    <Linkedin className="w-3 h-3" />
                  </span>
                }
                label={profileData.contact.linkedin}
              />
              <ContactChip
                icon={<Palette className="w-3 h-3" />}
                label={profileData.contact.dribbble}
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <ContactChip
                icon={
                  <span className="text-[10px]">Be</span>
                }
                label={profileData.contact.behance}
              />
              <ContactChip
                icon={<Github className="w-3 h-3" />}
                label={profileData.contact.github}
              />
            </div>
            <div className="flex items-center gap-2">
              <ContactChip
                icon={<Globe className="w-3 h-3" />}
                label={profileData.contact.website}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function ContactChip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-1.5 text-[12px] text-[#6B7280]">
      <span className="text-[#9CA3AF]">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
