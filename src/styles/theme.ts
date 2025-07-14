import { tagColors } from "./tagColors";

const colors = {
  // --blue: #498ce8;
  // --neutral-50: #f7fafc;
  // --neutral-100: #e2e8f0;
  // --neutral-200: #cbd5e0;
  // --shadow: rgba(0, 0, 0, 0.1);

  primary: "#2d3862",
  secondary: "#498ce8",
  accent: "#3182ce",

  success: "#28a745",
  danger: "#dc3545",
  blue: "#498ce8",

  white: "#ffffff",
  black: "#000000",

  lightGray: "#ababab",
  mediumGray: "#718096",
  darkGray: "#1a202c",
} as const;

const breakpoints = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1200px",
} as const;

const size = {
  xs: "0.25rem" /* 4px */,
  sm: "0.5rem" /* 8px */,
  md: "1rem" /* 16px */,
  lg: "1.5rem" /* 24px */,
  xl: "2rem" /* 32px */,
  xxl: "3rem" /* 48px */,
  xxxl: "4rem" /* 64px */,
} as const;

export const theme = {
  colors,
  tagColors,
  breakpoints,
  size,
} as const;

export type Theme = typeof theme;
