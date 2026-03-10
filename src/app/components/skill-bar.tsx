import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  darkMode?: boolean;
  delay?: number;
}

export function SkillBar({ name, level, darkMode = false, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const d = darkMode;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const accent = d ? "#E5E5E5" : "#1A1A1A";
  const trackBg = d ? "#4A4953" : "#E5E7EB";

  return (
    <div ref={ref} className="flex items-center gap-3 py-[6px]">
      <span className={`text-[12px] w-[90px] shrink-0 ${d ? "text-[#FBFBFE]" : "text-[#1A1A1A]"}`}>
        {name}
      </span>
      <div className="flex-1 h-[3px] relative" style={{ backgroundColor: trackBg }}>
        <div
          className="absolute top-0 left-0 h-full transition-all ease-out"
          style={{
            backgroundColor: accent,
            width: visible ? `${level}%` : "0%",
            transitionDuration: "1200ms",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
      <span
        className="text-[11px] w-[30px] text-right tabular-nums"
        style={{ color: d ? "#B1B1B3" : "#9CA3AF", fontFamily: "Georgia, serif" }}
      >
        {level}%
      </span>
    </div>
  );
}
