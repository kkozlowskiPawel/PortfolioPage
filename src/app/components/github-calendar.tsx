import { useMemo, useState } from "react";

// Generate mock contribution data for the last ~52 weeks
function generateContributions(): { date: string; count: number; level: number }[] {
  const data: { date: string; count: number; level: number }[] = [];
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 364);

  // Align to Sunday
  const dayOfWeek = startDate.getDay();
  startDate.setDate(startDate.getDate() - dayOfWeek);

  for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split("T")[0];
    // Pseudo-random based on date string hash
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash << 5) - hash + dateStr.charCodeAt(i);
      hash |= 0;
    }
    const rand = Math.abs(hash % 100);
    let count = 0;
    let level = 0;

    // Create realistic-looking pattern with some busy periods
    const month = d.getMonth();
    const dayNum = d.getDate();
    const weekday = d.getDay();

    // More activity on weekdays
    const weekdayBoost = weekday > 0 && weekday < 6 ? 15 : 0;
    // Bursts of activity in certain months
    const monthBoost = [1, 3, 5, 8, 10].includes(month) ? 12 : 0;
    // Some "sprint" weeks
    const sprintBoost = dayNum >= 10 && dayNum <= 20 ? 10 : 0;

    const threshold = rand + weekdayBoost + monthBoost + sprintBoost;

    if (threshold > 85) {
      count = Math.min(Math.floor((threshold - 85) / 3) + 8, 15);
      level = 4;
    } else if (threshold > 70) {
      count = Math.floor((threshold - 70) / 4) + 4;
      level = 3;
    } else if (threshold > 50) {
      count = Math.floor((threshold - 50) / 6) + 2;
      level = 2;
    } else if (threshold > 30) {
      count = 1;
      level = 1;
    }

    data.push({ date: dateStr, count, level });
  }
  return data;
}

interface GitHubCalendarProps {
  darkMode?: boolean;
  lang?: "pl" | "en";
}

export function GitHubCalendar({ darkMode = false, lang = "pl" }: GitHubCalendarProps) {
  const d = darkMode;
  const contributions = useMemo(() => generateContributions(), []);
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number; x: number; y: number } | null>(null);

  // Group by weeks (columns)
  const weeks: { date: string; count: number; level: number }[][] = [];
  let currentWeek: typeof weeks[0] = [];
  for (const day of contributions) {
    const date = new Date(day.date);
    if (date.getDay() === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  }
  if (currentWeek.length > 0) weeks.push(currentWeek);

  const totalContributions = contributions.reduce((sum, d) => sum + d.count, 0);

  // Colors matching portfolio style
  const levelColors = d
    ? ["#2B2A33", "#324B30", "#3B6E36", "#47A03E", "#5CC84E"]
    : ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"];

  const monthLabels = lang === "pl"
    ? ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"]
    : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Calculate month positions
  const monthPositions: { label: string; x: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const firstDay = new Date(week[0].date);
    const month = firstDay.getMonth();
    if (month !== lastMonth) {
      monthPositions.push({ label: monthLabels[month], x: wi });
      lastMonth = month;
    }
  });

  const dayLabels = lang === "pl"
    ? ["", "Pon", "", "Śr", "", "Pt", ""]
    : ["", "Mon", "", "Wed", "", "Fri", ""];

  const cellSize = 10;
  const cellGap = 2;

  return (
    <div className="w-full overflow-x-auto" style={{ scrollbarWidth: "none" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <p
          className="text-[11px] uppercase tracking-widest"
          style={{ color: d ? "#E5E5E5" : "#1A1A1A" }}
        >
          {lang === "pl" ? "Aktywność GitHub" : "GitHub Activity"}
        </p>
        <p
          className="text-[11px]"
          style={{
            color: d ? "#B1B1B3" : "#6B7280",
            fontFamily: "Georgia, serif",
          }}
        >
          {totalContributions} {lang === "pl" ? "kontryb. w ostatnim roku" : "contributions in last year"}
        </p>
      </div>

      <div className="relative">
        {/* Month labels */}
        <div className="flex ml-[26px] mb-[2px]" style={{ gap: 0 }}>
          {monthPositions.map((mp, i) => {
            const nextPos = monthPositions[i + 1]?.x ?? weeks.length;
            const width = (nextPos - mp.x) * (cellSize + cellGap);
            return (
              <div
                key={`${mp.label}-${mp.x}`}
                className="text-[9px]"
                style={{
                  width: `${width}px`,
                  color: d ? "#8F8F97" : "#9CA3AF",
                  flexShrink: 0,
                }}
              >
                {mp.label}
              </div>
            );
          })}
        </div>

        <div className="flex">
          {/* Day labels */}
          <div
            className="flex flex-col shrink-0 mr-[2px]"
            style={{ gap: `${cellGap}px` }}
          >
            {dayLabels.map((label, i) => (
              <div
                key={i}
                className="text-[9px] flex items-center justify-end pr-1"
                style={{
                  height: `${cellSize}px`,
                  width: "24px",
                  color: d ? "#8F8F97" : "#9CA3AF",
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex" style={{ gap: `${cellGap}px` }}>
            {weeks.map((week, wi) => (
              <div
                key={wi}
                className="flex flex-col"
                style={{ gap: `${cellGap}px` }}
              >
                {week.map((day) => (
                  <div
                    key={day.date}
                    className="transition-all duration-100 cursor-pointer"
                    style={{
                      width: `${cellSize}px`,
                      height: `${cellSize}px`,
                      backgroundColor: levelColors[day.level],
                      outline: hoveredDay?.date === day.date
                        ? `1px solid ${d ? "#FBFBFE" : "#1A1A1A"}`
                        : "none",
                      outlineOffset: "-1px",
                    }}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const parentRect = e.currentTarget.closest(".relative")?.getBoundingClientRect();
                      if (parentRect) {
                        setHoveredDay({
                          date: day.date,
                          count: day.count,
                          x: rect.left - parentRect.left + cellSize / 2,
                          y: rect.top - parentRect.top - 4,
                        });
                      }
                    }}
                    onMouseLeave={() => setHoveredDay(null)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Tooltip */}
        {hoveredDay && (
          <div
            className="absolute z-50 pointer-events-none px-2 py-1 text-[10px] whitespace-nowrap"
            style={{
              left: `${hoveredDay.x}px`,
              top: `${hoveredDay.y}px`,
              transform: "translate(-50%, -100%)",
              backgroundColor: d ? "#42414D" : "#1A1A1A",
              color: d ? "#FBFBFE" : "#FFFFFF",
              border: `1px solid ${d ? "#5B5B66" : "#333"}`,
            }}
          >
            <span style={{ fontFamily: "Georgia, serif" }}>{hoveredDay.count}</span>{" "}
            {lang === "pl" ? "kontryb." : "contributions"} — {hoveredDay.date}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-1 mt-2">
        <span
          className="text-[9px] mr-1"
          style={{ color: d ? "#8F8F97" : "#9CA3AF" }}
        >
          {lang === "pl" ? "Mniej" : "Less"}
        </span>
        {levelColors.map((color, i) => (
          <div
            key={i}
            style={{
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              backgroundColor: color,
            }}
          />
        ))}
        <span
          className="text-[9px] ml-1"
          style={{ color: d ? "#8F8F97" : "#9CA3AF" }}
        >
          {lang === "pl" ? "Więcej" : "More"}
        </span>
      </div>
    </div>
  );
}
