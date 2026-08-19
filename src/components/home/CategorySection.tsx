import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { categories } from "@/data/home";
import { spacing } from "@/theme";

type CategoryCardProps = {
  title: string;
  count: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
};

function CategoryCard({ title, count, icon, onPress }: CategoryCardProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${title}, ${count}`}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.iconContainer}>
        <MaterialIcons name={icon} size={25} color="#4F7CFF" />
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.count}>{count}</Text>
    </Pressable>
  );
}

export function CategorySection() {
  return (
    <View style={styles.container}>
      <View style={styles.headingRow}>
        <View style={styles.headingContent}>
          <Text style={styles.heading}>Shop by category</Text>

          <Text style={styles.description}>Explore products by category</Text>
        </View>

        <Pressable
          onPress={() => {}}
          accessibilityRole="button"
          accessibilityLabel="View all categories"
          hitSlop={8}
        >
          <Text style={styles.viewAll}>View all</Text>
        </Pressable>
      </View>

      <View style={styles.grid}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            count={category.count}
            icon={category.icon}
            onPress={() => {
              console.log(`Category: ${category.id}`);
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
  },

  headingRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },

  headingContent: {
    flex: 1,
    paddingRight: spacing.md,
  },

  heading: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "800",
  },

  description: {
    marginTop: spacing.xs,
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.55,
  },

  viewAll: {
    fontSize: 13,
    fontWeight: "700",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },

  card: {
    width: "48%",
    minHeight: 140,
    padding: spacing.lg,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "rgba(128, 128, 128, 0.08)",
  },

  cardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
    backgroundColor: "rgba(79, 124, 255, 0.10)",
  },

  title: {
    fontSize: 16,
    fontWeight: "800",
  },

  count: {
    marginTop: spacing.xs,
    fontSize: 12,
    opacity: 0.5,
  },
});
