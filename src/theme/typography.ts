import { TextStyle } from "react-native";

export const typography: Record<
  "display" | "h1" | "h2" | "h3" | "body" | "bodyMedium" | "small" | "caption",
  TextStyle
> = {
  display: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: "800",
  },

  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "800",
  },

  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "800",
  },

  h3: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },

  bodyMedium: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },

  small: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },

  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
  },
};
