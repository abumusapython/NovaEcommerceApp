export const Colors = {
  light: {
    background: "#F7F8FA",
    surface: "#FFFFFF",
    surfaceSecondary: "#F0F2F5",
    border: "#E2E6EC",

    primary: "#2563EB",
    primarySoft: "#E8F0FF",

    text: "#111827",
    textSecondary: "#667085",
    textMuted: "#98A2B3",

    success: "#16A34A",
    danger: "#DC2626",
    warning: "#D97706",

    overlay: "rgba(17, 24, 39, 0.06)",
  },

  dark: {
    background: "#080B12",
    surface: "#10151F",
    surfaceSecondary: "#151B27",
    border: "#202A3A",

    primary: "#4F8CFF",
    primarySoft: "#172744",

    text: "#FFFFFF",
    textSecondary: "#94A3B8",
    textMuted: "#64748B",

    success: "#34D399",
    danger: "#F87171",
    warning: "#FBBF24",

    overlay: "rgba(255, 255, 255, 0.06)",
  },
} as const;

export type ThemeMode = keyof typeof Colors;
export type AppColors = (typeof Colors)[ThemeMode];
