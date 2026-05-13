import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function CartScreen({
  cart,
  setCart,
}) {

  // Remove Product
  const removeItem = (indexToRemove) => {

    const updatedCart =
      cart.filter(
        (_, index) =>
          index !== indexToRemove
      );

    setCart(updatedCart);

    Alert.alert(
      "Removed",
      "Product removed from cart"
    );
  };


  // Checkout
  const checkout = () => {

    Alert.alert(
      "Order Confirmed",
      "Your order has been placed successfully!"
    );

    setCart([]);
  };


  // Total Price
  const totalPrice =
    cart.reduce(
      (sum, item) =>
        sum +
        parseInt(
          item.price.replace(
            "Rs. ",
            ""
          )
        ),
      0
    );

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>
        Your Cart
      </Text>


      {cart.length === 0 ? (

        <Text style={styles.empty}>
          Cart is empty
        </Text>

      ) : (

        <>
          {cart.map((item, index) => (

            <View
              key={index}
              style={styles.card}
            >

              <Image
                source={item.image}
                style={styles.image}
              />

              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                {item.price}
              </Text>


              {/* Remove */}
              <TouchableOpacity
                style={styles.removeBtn}
                onPress={() =>
                  removeItem(index)
                }
              >
                <Text style={styles.removeText}>
                  Remove
                </Text>
              </TouchableOpacity>

            </View>

          ))}


          {/* Total */}
          <Text style={styles.total}>
            Total: Rs. {totalPrice}
          </Text>


          {/* Checkout */}
          <TouchableOpacity
            style={styles.checkoutBtn}
            onPress={checkout}
          >
            <Text style={styles.checkoutText}>
              Proceed to Checkout
            </Text>
          </TouchableOpacity>

        </>
      )}


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

  heading: {
    color: "gold",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "bold",
  },

  empty: {
    color: "white",
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
  },

  card: {
    margin: 15,
    backgroundColor: "#111",
    borderRadius: 12,
    padding: 12,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 10,
  },

  name: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },

  price: {
    color: "gold",
    marginTop: 5,
    fontSize: 16,
  },

  removeBtn: {
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    marginTop: 15,
  },

  removeText: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
  },

  total: {
    color: "gold",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "bold",
  },

  checkoutBtn: {
    borderWidth: 1,
    borderColor: "gold",
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },

  checkoutText: {
    color: "gold",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  footer: {
    color: "gray",
    textAlign: "center",
    marginBottom: 30,
  },

});