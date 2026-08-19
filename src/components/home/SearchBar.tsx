import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

import { spacing } from "@/theme";

type SearchBarProps = {
  value?: string;
  onChangeText?: (value: string) => void;
  onPressFilter?: () => void;
};

export function SearchBar({
  value = "",
  onChangeText,
  onPressFilter,
}: SearchBarProps) {
  return (
    <View style={styles.row}>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={22} color="#98A2B3" />

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Search products..."
          placeholderTextColor="#98A2B3"
          style={styles.input}
          returnKeyType="search"
          accessibilityLabel="Search products"
        />
      </View>

      <Pressable
        onPress={onPressFilter}
        style={({ pressed }) => [
          styles.filterButton,
          pressed && styles.pressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel="Open filters"
      >
        <MaterialIcons name="tune" size={22} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingHorizontal: spacing.xl,
    marginTop: spacing.lg,
  },

  searchContainer: {
    flex: 1,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    borderRadius: 16,
    backgroundColor: "rgba(128, 128, 128, 0.10)",
  },

  input: {
    flex: 1,
    marginLeft: spacing.sm,
    fontSize: 15,
    color: "#111827",
  },

  filterButton: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4F7CFF",
  },

  pressed: {
    opacity: 0.75,
  },
});
