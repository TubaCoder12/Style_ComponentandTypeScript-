// theme.ts
import type { DefaultTheme } from "styled-components"; // ✅ type-only import

export const theme: DefaultTheme = {
  colors: {
    primary: "#ff6600",
    secondary: "#333333",
    background: "#f5f5f5",
    text: "#222222",
    white: "#ffffff",
    gray: "#E0E0E0",
  },
  fonts: {
    body: "Arial, Helvetica, sans-serif",
    heading: "Georgia, serif",
  },
};
