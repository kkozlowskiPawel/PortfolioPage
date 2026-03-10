export const THEME = {
  dark: {
    text1: "text-[#FAFAFA]",
    text2: "text-[#A1A1AA]",
    text3: "text-[#71717A]",
    divider: "border-[#3F3F46]",
    accent: "#FAFAFA",
    cardBg: "rgba(39,39,42,0.88)",
    hoverBg: "hover:bg-[#3F3F46]",
    floatBg: "rgba(39,39,42,0.92)",
    floatBorder: "#3F3F46",
    dotBg: "#3F3F46",
    dotActive: "#FAFAFA",
  },
  light: {
    text1: "text-[#18181B]",
    text2: "text-[#52525B]",
    text3: "text-[#A1A1AA]",
    divider: "border-[#E4E4E7]",
    accent: "#18181B",
    cardBg: "rgba(255,255,255,0.88)",
    hoverBg: "hover:bg-[#F4F4F5]",
    floatBg: "rgba(255,255,255,0.92)",
    floatBorder: "#E4E4E7",
    dotBg: "#D4D4D8",
    dotActive: "#18181B",
  },
} as const;

export type ThemeTokens = typeof THEME.dark;

export const ANIMATION = {
  landingRoles: 1200,
  landingMotto: 1500,
  landingSocial: 1700,
  landingScroll: 2000,
  landingNavBase: 1900,
  landingNavStagger: 100,
  landingFooter: 2500,
} as const;
