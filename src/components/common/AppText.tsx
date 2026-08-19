import { StyleSheet, Text, TextProps } from "react-native";

import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/theme";

type Variant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "bodyMedium"
  | "small"
  | "caption";

type AppTextProps = TextProps & {
  variant?: Variant;
};

export function AppText({
  variant = "body",
  style,
  children,
  ...props
}: AppTextProps) {
  const { colors } = useTheme();

  return (
    <Text
      {...props}
      style={[styles.base, typography[variant], { color: colors.text }, style]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});
