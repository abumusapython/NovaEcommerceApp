import { Pressable, StyleSheet, Text, View } from "react-native";

import { spacing } from "@/theme";

type AppHeaderProps = {
  cartCount?: number;
  onCartPress?: () => void;
};

export function AppHeader({ cartCount = 0, onCartPress }: AppHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}>
        <Text style={styles.brand}>NOVA</Text>

        <Text style={styles.tagline}>Shop smarter</Text>
      </View>

      <Pressable
        onPress={onCartPress}
        style={({ pressed }) => [styles.cartButton, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel={`Shopping cart with ${cartCount} items`}
      >
        <Text style={styles.cartIcon}>🛒</Text>

        {cartCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartCount}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
  },

  brandContainer: {
    gap: spacing.xs,
  },

  brand: {
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 2,
  },

  tagline: {
    fontSize: 12,
    fontWeight: "600",
    opacity: 0.55,
  },

  cartButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  cartIcon: {
    fontSize: 21,
  },

  badge: {
    position: "absolute",
    top: -2,
    right: -2,
    minWidth: 19,
    height: 19,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EF4444",
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
  },

  pressed: {
    opacity: 0.7,
  },
});
