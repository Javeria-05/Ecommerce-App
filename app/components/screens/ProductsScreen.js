import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

const products = [
  {
    name: "Men Jacket",
    category: "Men",
    price: "Rs. 8500",
    desc: "Premium cotton fabric with modern luxury design.",
    image: require("../../assets/men1.jpg"),
  },
  {
    name: "Men Shirt",
    category: "Men",
    price: "Rs. 4500",
    desc: "Designed for comfort and modern fashion.",
    image: require("../../assets/men2.jpg"),
  },
  {
    name: "Men Hoodie",
    category: "Men",
    price: "Rs. 6000",
    desc: "Stylish winter essential with premium fit.",
    image: require("../../assets/men3.jpg"),
  },
  {
    name: "Women Dress",
    category: "Women",
    price: "Rs. 12000",
    desc: "Elegant design for timeless fashion.",
    image: require("../../assets/women1.jpg"),
  },
  {
    name: "Women Coat",
    category: "Women",
    price: "Rs. 9000",
    desc: "Crafted for comfort and beauty.",
    image: require("../../assets/women2.jpg"),
  },
  {
    name: "Women Casual",
    category: "Women",
    price: "Rs. 7000",
    desc: "Modern style with premium stitching.",
    image: require("../../assets/women3.jpg"),
  },
  {
    name: "Luxury Watch",
    category: "Accessories",
    price: "Rs. 15000",
    desc: "Luxury watch with premium style.",
    image: require("../../assets/acc1.jpg"),
  },
  {
    name: "Premium Bag",
    category: "Accessories",
    price: "Rs. 9500",
    desc: "Stylish bag for modern fashion.",
    image: require("../../assets/acc2.jpg"),
  },
  {
    name: "Fashion Glasses",
    category: "Accessories",
    price: "Rs. 5000",
    desc: "Elegant glasses for daily style.",
    image: require("../../assets/acc3.jpg"),
  },
];

export default function ProductsScreen({
  navigation,
  cart,
  setCart,
}) {

  const [favorites, setFavorites] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");


  const toggleFavorite = (name) => {

    if (favorites.includes(name)) {

      setFavorites(
        favorites.filter(
          (item) => item !== name
        )
      );

    } else {

      setFavorites([
        ...favorites,
        name,
      ]);

    }
  };


  const addToCart = (item) => {

    setCart([...cart, item]);

    Alert.alert(
      "Added Successfully",
      `${item.name} added to cart`
    );
  };


  const filteredProducts =
    products.filter((item) => {

      const matchSearch =
        item.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      return (
        matchSearch &&
        matchCategory
      );

    });


  return (
    <ScrollView style={styles.container}>

      {/* Top Bar */}
      <View style={styles.topBar}>

        <Text style={styles.heading}>
          LUXURY COLLECTION
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Cart")
          }
        >
          <Text style={styles.cart}>
            🛒 {cart.length}
          </Text>
        </TouchableOpacity>

      </View>


      {/* Search */}
      <TextInput
        placeholder="Search products..."
        placeholderTextColor="gray"
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />


      {/* Category Filters */}
      <View style={styles.filterRow}>

        {[
          "All",
          "Men",
          "Women",
          "Accessories",
        ].map((cat) => (

          <TouchableOpacity
            key={cat}
            style={[
              styles.filterBtn,

              selectedCategory === cat &&
              styles.activeFilter,
            ]}
            onPress={() =>
              setSelectedCategory(cat)
            }
          >

            <Text style={styles.filterText}>
              {cat}
            </Text>

          </TouchableOpacity>

        ))}

      </View>


      {/* Products */}
      {filteredProducts.length === 0 ? (

        <Text style={styles.noData}>
          No products found
        </Text>

      ) : (

        filteredProducts.map((item, index) => (

          <TouchableOpacity
            key={index}
            style={styles.card}
            activeOpacity={0.85}
          >

            <Image
              source={item.image}
              style={styles.image}
            />


            <TouchableOpacity
              style={styles.heartBtn}
              onPress={() =>
                toggleFavorite(item.name)
              }
            >
              <Text style={styles.heart}>
                {favorites.includes(item.name)
                  ? "❤️"
                  : "🤍"}
              </Text>
            </TouchableOpacity>


            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.desc}>
              {item.desc}
            </Text>

            <Text style={styles.star}>
              ★★★★★
            </Text>

            <Text style={styles.price}>
              {item.price}
            </Text>


            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                addToCart(item)
              }
            >
              <Text style={styles.btnText}>
                Add to Cart
              </Text>
            </TouchableOpacity>

          </TouchableOpacity>

        ))
      )}


      <Text style={styles.footer}>
        © 2026 Fashion Hub Studio
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },

  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  cart: {
    color: "gold",
    fontSize: 22,
    fontWeight: "bold",
  },

  search: {
    borderWidth: 1,
    borderColor: "gold",
    color: "white",
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 12,
    borderRadius: 8,
  },

  filterRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },

  filterBtn: {
    borderWidth: 1,
    borderColor: "gold",
    padding: 8,
    borderRadius: 8,
  },

  activeFilter: {
    backgroundColor: "#333",
  },

  filterText: {
    color: "white",
  },

  noData: {
    color: "white",
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
  },

  card: {
    margin: 15,
    backgroundColor: "#111",
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },

  image: {
    width: "100%",
    height: 280,
  },

  heartBtn: {
    position: "absolute",
    top: 15,
    right: 15,
  },

  heart: {
    fontSize: 28,
  },

  name: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    margin: 12,
  },

  desc: {
    color: "gray",
    marginHorizontal: 12,
  },

  star: {
    color: "gold",
    marginHorizontal: 12,
    marginTop: 8,
    fontSize: 18,
  },

  price: {
    color: "gold",
    fontSize: 18,
    marginHorizontal: 12,
    marginTop: 8,
  },

  btn: {
    borderWidth: 1,
    borderColor: "gold",
    margin: 12,
    padding: 12,
  },

  btnText: {
    color: "gold",
    textAlign: "center",
    fontWeight: "bold",
  },

  footer: {
    color: "gray",
    textAlign: "center",
    marginVertical: 30,
  },

});