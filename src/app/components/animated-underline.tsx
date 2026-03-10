import { useRef, useEffect, useState } from "react";

interface AnimatedUnderlineProps {
  darkMode?: boolean;
  delay?: number;
  width?: string;
  className?: string;
}

export function AnimatedUnderline({ darkMode = false, delay = 600, width = "60px", className = "" }: AnimatedUnderlineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const accent = darkMode ? "#E5E5E5" : "#1A1A1A";

  return (
    <div ref={ref} className={`h-[1.5px] mt-2 mb-4 ${className}`} style={{ width }}>
      <div
        className="h-full origin-left transition-transform ease-out"
        style={{
          backgroundColor: accent,
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transitionDuration: "800ms",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}
