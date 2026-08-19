import { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/context/ThemeContext";

type ScreenContainerProps = PropsWithChildren<
  ViewProps & {
    scroll?: boolean;
  }
>;

export function ScreenContainer({
  children,
  scroll = false,
  style,
  ...props
}: ScreenContainerProps) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const content = (
    <View
      {...props}
      style={[
        styles.content,
        {
          backgroundColor: colors.background,
          paddingTop: insets.top,
          paddingBottom: Math.max(insets.bottom, 24),
        },
        style,
      ]}
    >
      {children}
    </View>
  );

  if (scroll) {
    return (
      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {content}
      </ScrollView>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },
});
