import HomeScreen from "./components/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CartProvider from "./components/CartContext";
import CartScreen from "./components/CartScreen";
import ProductDetailsScreen from "./components/ProductDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
