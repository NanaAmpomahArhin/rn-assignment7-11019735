import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailsScreen from "./ProductDetailsScreen";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

const ProductStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProductStackNavigator;
