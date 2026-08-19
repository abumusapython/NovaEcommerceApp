import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { featuredProducts, Product } from "@/data/home";
import { spacing } from "@/theme";

type ProductCardProps = {
  product: Product;
  onPress: () => void;
};

function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          contentFit="cover"
          transition={200}
        />

        <View style={styles.discount}>
          <Text style={styles.discountText}>
            {product.originalPrice
              ? `-${Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100,
                )}%`
              : ""}
          </Text>
        </View>

        <View style={styles.favorite}>
          <MaterialIcons name="favorite-border" size={19} color="#344054" />
        </View>
      </View>

      <Text style={styles.category}>{product.category}</Text>

      <Text style={styles.name} numberOfLines={2}>
        {product.name}
      </Text>

      <View style={styles.ratingRow}>
        <MaterialIcons name="star" size={16} color="#F5B940" />

        <Text style={styles.rating}>{product.rating}</Text>

        <Text style={styles.reviews}>({product.reviews})</Text>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        {product.originalPrice && (
          <Text style={styles.originalPrice}>
            ${product.originalPrice.toFixed(2)}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

export function FeaturedProducts() {
  return (
    <View style={styles.container}>
      <View style={styles.headingRow}>
        <View>
          <Text style={styles.heading}>Featured products</Text>

          <Text style={styles.description}>Popular picks for you</Text>
        </View>

        <Pressable hitSlop={8}>
          <Text style={styles.viewAll}>View all</Text>
        </Pressable>
      </View>

      <View style={styles.grid}>
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={() => console.log(`Product: ${product.id}`)}
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
    paddingBottom: spacing.huge,
  },

  headingRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
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
  },

  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  imageContainer: {
    height: 190,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#F2F4F7",
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  discount: {
    position: "absolute",
    top: 10,
    left: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: "#111827",
  },

  discountText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
  },

  favorite: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.92)",
  },

  category: {
    marginTop: spacing.md,
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    opacity: 0.5,
  },

  name: {
    marginTop: spacing.xs,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "700",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.sm,
  },

  rating: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "700",
  },

  reviews: {
    marginLeft: 3,
    fontSize: 12,
    opacity: 0.45,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.sm,
  },

  price: {
    fontSize: 17,
    fontWeight: "800",
  },

  originalPrice: {
    marginLeft: spacing.sm,
    fontSize: 12,
    textDecorationLine: "line-through",
    opacity: 0.45,
  },
});
