import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Digit({ value, darkMode }: { value: number; darkMode: boolean }) {
  const d = darkMode;
  return (
    <div
      className="relative w-[28px] h-[38px] sm:w-[34px] sm:h-[46px] overflow-hidden flex items-center justify-center"
      style={{
        backgroundColor: d ? "#2B2A33" : "#1A1A1A",
        color: d ? "#FBFBFE" : "#FFFFFF",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Center divider line */}
      <div
        className="absolute left-0 right-0 h-px z-10"
        style={{
          top: "50%",
          backgroundColor: d ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.1)",
        }}
      />
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 flex items-center justify-center text-[18px] sm:text-[22px]"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

interface FlipClockProps {
  darkMode?: boolean;
}

export function FlipClock({ darkMode = false }: FlipClockProps) {
  const [time, setTime] = useState(new Date());
  const d = darkMode;

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const colonColor = d ? "#8F8F97" : "#9CA3AF";

  return (
    <div className="flex items-center gap-[3px]">
      {hours.split("").map((digit, i) => (
        <Digit key={`h-${i}`} value={parseInt(digit)} darkMode={d} />
      ))}
      <span
        className="text-[18px] sm:text-[22px] mx-[2px]"
        style={{ color: colonColor, fontFamily: "Georgia, serif" }}
      >
        :
      </span>
      {minutes.split("").map((digit, i) => (
        <Digit key={`m-${i}`} value={parseInt(digit)} darkMode={d} />
      ))}
      <span
        className="text-[18px] sm:text-[22px] mx-[2px]"
        style={{ color: colonColor, fontFamily: "Georgia, serif" }}
      >
        :
      </span>
      {seconds.split("").map((digit, i) => (
        <Digit key={`s-${i}`} value={parseInt(digit)} darkMode={d} />
      ))}
    </div>
  );
}
