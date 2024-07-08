import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CartProvider from "./components/CartContext";
import CartScreen from "./components/CartScreen";
import ProductStackNavigator from "./components/ProductStackNavigator";
import CustomDrawerContent from "./components/CustomDrawerContent";
import HomeScreen from "./components/HomeScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Cart" component={CartScreen} />
          <Drawer.Screen name="Products" component={ProductStackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
