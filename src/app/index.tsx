import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HeroSection } from "@/components/home/HeroSection";
import { SearchBar } from "@/components/home/SearchBar";
import { spacing } from "@/theme";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <HeroSection />

        <SearchBar
          value={search}
          onChangeText={setSearch}
          onPressFilter={() => {}}
        />

        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerEyebrow}>LIMITED TIME</Text>

            <Text style={styles.bannerTitle}>Summer sale</Text>

            <Text style={styles.bannerDescription}>
              Up to 40% off selected products
            </Text>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Shop summer sale"
              style={({ pressed }) => [
                styles.bannerButton,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.bannerButtonText}>Shop now</Text>

              <MaterialIcons name="arrow-forward" size={17} color="#111827" />
            </Pressable>
          </View>

          <View style={styles.bannerShape} pointerEvents="none">
            <MaterialIcons
              name="shopping-bag"
              size={88}
              color="rgba(255,255,255,0.20)"
            />
          </View>
        </View>

        <CategorySection />

        <FeaturedProducts />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingBottom: spacing.huge,
  },

  banner: {
    minHeight: 190,
    marginHorizontal: spacing.xl,
    marginTop: spacing.xxl,
    padding: spacing.xl,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#4F7CFF",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bannerContent: {
    flex: 1,
  },

  bannerEyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "rgba(255,255,255,0.75)",
  },

  bannerTitle: {
    marginTop: spacing.sm,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "900",
    color: "#FFFFFF",
  },

  bannerDescription: {
    maxWidth: 190,
    marginTop: spacing.sm,
    fontSize: 13,
    lineHeight: 19,
    color: "rgba(255,255,255,0.82)",
  },

  bannerButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: spacing.lg,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },

  bannerButtonText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#111827",
  },

  bannerShape: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
