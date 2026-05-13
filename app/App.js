import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./components/screens/HomeScreen";
import ProductsScreen from "./components/screens/ProductsScreen";
import CartScreen from "./components/screens/CartScreen";
import AboutScreen from "./components/screens/AboutScreen";
import ContactScreen from "./components/screens/ContactScreen";

const Tab = createBottomTabNavigator();

export default function App() {

  const [cart, setCart] = useState([]);

  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000",
          },

          headerTintColor: "gold",

          tabBarStyle: {
            backgroundColor: "#000",
          },

          tabBarActiveTintColor: "gold",

          tabBarInactiveTintColor: "gray",
        }}
      >

        {/* Home */}
        <Tab.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
            />
          )}
        </Tab.Screen>


        {/* Products */}
        <Tab.Screen name="Products">
          {(props) => (
            <ProductsScreen
              {...props}
              cart={cart}
              setCart={setCart}
            />
          )}
        </Tab.Screen>


        {/* Cart */}
        <Tab.Screen name="Cart">
          {(props) => (
            <CartScreen
              {...props}
              cart={cart}
              setCart={setCart}
            />
          )}
        </Tab.Screen>


        {/* About */}
        <Tab.Screen
          name="About"
          component={AboutScreen}
        />


        {/* Contact */}
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
}