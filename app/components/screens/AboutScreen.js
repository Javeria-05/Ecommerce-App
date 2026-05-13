import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function AboutScreen() {

  return (
    <ScrollView style={styles.container}>

      {/* Hero Image */}
      <Image
        source={require("../../assets/about.jpg")}
        style={styles.image}
      />


      {/* Content */}
      <View style={styles.content}>

        <Text style={styles.smallText}>
          OUR STORY
        </Text>

        <Text style={styles.heading}>
          Crafting Luxury Through Fashion
        </Text>

        <Text style={styles.desc}>
          Fashion Hub was created with one vision:
          redefining modern fashion through timeless
          design, premium craftsmanship, and elegant styling.
        </Text>

      </View>


      {/* Box 1 */}
      <View style={styles.box}>

        <Text style={styles.boxTitle}>
          Premium Quality
        </Text>

        <Text style={styles.boxText}>
          Carefully selected fabrics and materials
          for the best luxury experience.
        </Text>

      </View>


      {/* Box 2 */}
      <View style={styles.box}>

        <Text style={styles.boxTitle}>
          Modern Design
        </Text>

        <Text style={styles.boxText}>
          Designed for today's confident and stylish generation.
        </Text>

      </View>


      {/* Box 3 */}
      <View style={styles.box}>

        <Text style={styles.boxTitle}>
          Luxury Experience
        </Text>

        <Text style={styles.boxText}>
          Fashion that creates unforgettable impressions.
        </Text>

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

  image: {
    width: "100%",
    height: 350,
  },

  content: {
    padding: 20,
  },

  smallText: {
    color: "gold",
    letterSpacing: 2,
    fontSize: 14,
  },

  heading: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
  },

  desc: {
    color: "white",
    marginTop: 20,
    lineHeight: 26,
    fontSize: 16,
  },

  box: {
    marginHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#111",
  },

  boxTitle: {
    color: "gold",
    fontSize: 22,
    fontWeight: "bold",
  },

  boxText: {
    color: "white",
    marginTop: 10,
    lineHeight: 22,
  },

  footer: {
    color: "gray",
    textAlign: "center",
    marginVertical: 30,
    fontSize: 15,
  },

});