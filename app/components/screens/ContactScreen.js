import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function ContactScreen() {

  const sendMessage = () => {

    Alert.alert(
      "Message Sent",
      "Thank you for contacting Fashion Hub!"
    );
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.content}>

        {/* Heading */}
        <Text style={styles.smallText}>
          GET IN TOUCH
        </Text>

        <Text style={styles.heading}>
          Let's Talk Fashion
        </Text>


        {/* Contact Info */}
        <Text style={styles.info}>
          Email: support@fashionhub.com
        </Text>

        <Text style={styles.info}>
          Phone: +92XXXXXXXXXX
        </Text>

        <Text style={styles.info}>
          Location: Attock, Pakistan
        </Text>


        {/* Form */}
        <TextInput
          placeholder="Your Name"
          placeholderTextColor="gray"
          style={styles.input}
        />

        <TextInput
          placeholder="Your Email"
          placeholderTextColor="gray"
          style={styles.input}
        />

        <TextInput
          placeholder="Your Message"
          placeholderTextColor="gray"
          style={styles.message}
          multiline
        />


        {/* Button */}
        <TouchableOpacity
          style={styles.btn}
          onPress={sendMessage}
        >
          <Text style={styles.btnText}>
            Send Message
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
    marginVertical: 20,
  },

  info: {
    color: "white",
    marginBottom: 10,
    fontSize: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    color: "white",
    padding: 15,
    marginTop: 20,
    backgroundColor: "#111",
  },

  message: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    color: "white",
    padding: 15,
    marginTop: 20,
    height: 150,
    backgroundColor: "#111",
    textAlignVertical: "top",
  },

  btn: {
    borderWidth: 1,
    borderColor: "gold",
    marginTop: 20,
    padding: 15,
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
    fontSize: 15,
  },

});