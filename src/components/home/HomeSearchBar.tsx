import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { spacing } from "@/theme";

type HomeSearchBarProps = {
  value?: string;
  onChangeText?: (value: string) => void;
  onPress?: () => void;
};

export function HomeSearchBar({
  value = "",
  onChangeText,
  onPress,
}: HomeSearchBarProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.icon}>⌕</Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search products..."
        placeholderTextColor="#98A2B3"
        style={styles.input}
        returnKeyType="search"
      />

      <View style={styles.filterButton}>
        <Text style={styles.filterIcon}>≡</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: spacing.xl,
    paddingLeft: spacing.lg,
    paddingRight: spacing.xs,
    borderRadius: 18,
    backgroundColor: "rgba(128, 128, 128, 0.09)",
  },

  icon: {
    fontSize: 26,
    lineHeight: 28,
    opacity: 0.55,
  },

  input: {
    flex: 1,
    marginLeft: spacing.md,
    fontSize: 15,
    fontWeight: "500",
    paddingVertical: spacing.md,
  },

  filterButton: {
    width: 44,
    height: 44,
    marginRight: 5,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(128, 128, 128, 0.12)",
  },

  filterIcon: {
    fontSize: 22,
    fontWeight: "700",
  },
});
