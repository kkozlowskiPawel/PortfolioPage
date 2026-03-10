import { useEffect, useState } from "react";
import { AnimatedCounter } from "./animated-counter";

const STORAGE_KEY = "pk_portfolio_views";

function getAndIncrementViews(): number {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const current = stored ? parseInt(stored, 10) : 0;
    // Start from a reasonable base number to look authentic
    const baseViews = 1247;
    const newCount = (isNaN(current) ? 0 : current) + 1;
    localStorage.setItem(STORAGE_KEY, String(newCount));
    return baseViews + newCount;
  } catch {
    return 1248;
  }
}

interface ViewCounterProps {
  darkMode?: boolean;
  lang?: "pl" | "en";
}

export function ViewCounter({ darkMode = false, lang = "pl" }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);
  const d = darkMode;

  useEffect(() => {
    setViews(getAndIncrementViews());
  }, []);

  if (views === null) return null;

  return (
    <div className="flex items-center gap-2">
      {/* Eye icon */}
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path
          d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z"
          stroke={d ? "#E5E5E5" : "#1A1A1A"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="8"
          cy="8"
          r="2"
          stroke={d ? "#E5E5E5" : "#1A1A1A"}
          strokeWidth="1.5"
        />
      </svg>
      <AnimatedCounter
        end={views}
        className="text-[20px] sm:text-[24px]"
        duration={2000}
      />
      <span
        className="text-[10px] uppercase tracking-wider"
        style={{ color: d ? "#8F8F97" : "#9CA3AF" }}
      >
        {lang === "pl" ? "wyświetleń" : "views"}
      </span>
    </div>
  );
}
