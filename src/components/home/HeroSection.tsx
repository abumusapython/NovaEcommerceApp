import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { spacing } from "@/theme";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good morning";
  }

  if (hour < 18) {
    return "Good afternoon";
  }

  return "Good evening";
}

export function HeroSection() {
  const greeting = getGreeting();

  return (
    <>
      <View style={styles.header}>
        <View style={styles.brandContainer}>
          <Text style={styles.brand}>NOVA</Text>

          <Text style={styles.greeting}>{greeting}</Text>
        </View>

        <View style={styles.headerActions}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Favorites"
            style={({ pressed }) => [
              styles.headerButton,
              pressed && styles.headerButtonPressed,
            ]}
          >
            <MaterialIcons name="favorite-border" size={23} color="#344054" />
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Shopping cart"
            style={({ pressed }) => [
              styles.headerButton,
              pressed && styles.headerButtonPressed,
            ]}
          >
            <MaterialIcons name="shopping-bag" size={23} color="#344054" />

            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>2</Text>
            </View>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Profile"
            style={({ pressed }) => [
              styles.headerButton,
              pressed && styles.headerButtonPressed,
            ]}
          >
            <MaterialIcons name="person-outline" size={24} color="#344054" />
          </Pressable>
        </View>
      </View>

      <View style={styles.hero}>
        <Text style={styles.heroTitle}>
          Discover products{"\n"}you'll love.
        </Text>

        <Text style={styles.heroDescription}>
          Curated products, simple shopping and a better everyday experience.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },

  brandContainer: {
    flexShrink: 1,
  },

  brand: {
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 2,
    color: "#111827",
  },

  greeting: {
    marginTop: 4,
    fontSize: 12,
    color: "#667085",
  },

  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginLeft: spacing.md,
  },

  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F4F7",
    position: "relative",
  },

  headerButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },

  cartBadge: {
    position: "absolute",
    top: -3,
    right: -3,
    minWidth: 17,
    height: 17,
    paddingHorizontal: 4,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4F7CFF",
  },

  cartBadgeText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "800",
  },

  hero: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
  },

  heroTitle: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "900",
    letterSpacing: -1,
    color: "#111827",
  },

  heroDescription: {
    maxWidth: 340,
    marginTop: spacing.md,
    fontSize: 14,
    lineHeight: 21,
    color: "#667085",
  },
});
