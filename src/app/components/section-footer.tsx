import { useAppContext } from "../../context/AppContext";

interface SectionFooterProps {
  num: string;
  label: string;
  children?: React.ReactNode;
}

export function SectionFooter({ num, label, children }: SectionFooterProps) {
  const { theme } = useAppContext();
  const { divider, accent, text3 } = theme;

  return (
    <div className={`border-t ${divider} px-6 sm:px-10 py-3.5 flex justify-between items-center`}>
      <span className="text-[12px] tabular-nums" style={{ color: accent, fontFamily: "Georgia, serif" }}>
        {num}
      </span>
      <span className={`text-[11px] ${text3} uppercase tracking-[0.15em]`}>{label}</span>
      {children ?? <span />}
    </div>
  );
}
