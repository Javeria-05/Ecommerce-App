import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {

  return (
    <ScrollView style={styles.container}>

      {/* Hero Section */}
      <View style={styles.heroSection}>


        {/* Logo */}
        <Image
          source={require("../../assets/logo.jpg")}
          style={styles.logo}
        />


        <View style={styles.left}>

          <Text style={styles.smallText}>
            SEASONAL DROP 2026
          </Text>

          <Text style={styles.bigText}>
            AESTHETIC{"\n"}ELEGANCE
          </Text>

          <Text style={styles.desc}>
            Defining modern fashion through luxury,
            confidence, and timeless craftsmanship.
          </Text>


          {/* Button */}
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate("Products")
            }
          >
            <Text style={styles.btnText}>
              SHOP COLLECTION
            </Text>
          </TouchableOpacity>

        </View>


        {/* Banner */}
        <Image
          source={require("../../assets/banner.jpg")}
          style={styles.heroImage}
        />

      </View>


      {/* Categories */}
      <View style={styles.categoryRow}>


        {/* Men */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("Products")
          }
        >
          <Image
            source={require("../../assets/men.jpg")}
            style={styles.categoryImage}
          />

          <Text style={styles.overlayText}>
            Men Fashion
          </Text>

        </TouchableOpacity>


        {/* Women */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("Products")
          }
        >
          <Image
            source={require("../../assets/women.jpg")}
            style={styles.categoryImage}
          />

          <Text style={styles.overlayText}>
            Women Fashion
          </Text>

        </TouchableOpacity>


        {/* Accessories */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("Products")
          }
        >
          <Image
            source={require("../../assets/accessories.jpg")}
            style={styles.categoryImage}
          />

          <Text style={styles.overlayText}>
            Accessories
          </Text>

        </TouchableOpacity>

      </View>


      {/* Footer */}
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

  heroSection: {
    padding: 20,
  },


  /* Updated Logo Position */
  logo: {
    width: 85,
    height: 85,
    alignSelf: "flex-start",
    marginBottom: 15,
    marginLeft: 5,
    resizeMode: "contain",
  },

  left: {
    marginBottom: 20,
  },


  /* Left aligned text */
  smallText: {
    color: "gold",
    letterSpacing: 2,
    marginBottom: 15,
  },

  bigText: {
    color: "white",
    fontSize: 38,
    fontWeight: "bold",
  },

  desc: {
    color: "white",
    marginTop: 20,
    lineHeight: 24,
  },


  /* Left aligned button */
  btn: {
    borderWidth: 1,
    borderColor: "gold",
    padding: 12,
    marginTop: 20,
    width: 180,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

  heroImage: {
    width: "100%",
    height: 350,
    marginTop: 20,
  },

  categoryRow: {
    padding: 20,
  },

  categoryImage: {
    width: "100%",
    height: 220,
    marginBottom: 15,
  },

  overlayText: {
    position: "absolute",
    bottom: 25,
    left: 20,
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },

  footer: {
    color: "gray",
    textAlign: "center",
    marginVertical: 30,
    fontSize: 16,
  },

});