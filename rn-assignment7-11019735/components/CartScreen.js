import { useContext } from "react";
import { CartContext } from "./CartContext";
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function CartScreen({ navigation }) {
  const { cartItem, removeItemFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItem.reduce((total, item) => total + item.amount, 0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoANdSearchContainer}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/Logo.png")} style={styles.logo} />
        </View>
        <Image source={require("../assets/Search.png")} style={styles.search} />
      </View>

      <View style={styles.header}>
        <Text style={styles.headerText}>CHECKOUT</Text>
        <Image
          source={require("../assets/lineAndDiamond.png")}
          style={styles.lineAndDiamond}
        />
      </View>
      {cartItem.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>
            No items have been added to the cart.
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItem}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.itemImage} />
                </View>
                <View style={styles.textAndRemoveContainer}>
                  <Text style={styles.attireType}>
                    {item.attireType.toUpperCase()}
                  </Text>
                  <Text style={styles.description}>
                    {item.actualDescription}
                  </Text>
                  <Text style={styles.amount}>${item.amount}</Text>
                  <TouchableOpacity
                    onPress={() => removeItemFromCart(item)}
                    style={styles.removeButton}
                  >
                    <Image
                      source={require("../assets/remove.png")}
                      style={styles.remove}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </>
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.estimate}>EST. TOTAL</Text>
        <Text style={styles.totalText}> ${calculateTotal()}</Text>
      </View>
      <TouchableOpacity
        style={styles.checkoutContainer}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../assets/shoppingBag.png")}
          style={styles.shoppingImage}
        />
        <Text style={styles.checkoutText}>CHECKOUT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexGrow: 1,
    top: 40,
    paddingBottom: 20,
  },
  logoANdSearchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  logoContainer: {
    width: 80,
    marginLeft: 100,
    resizeMode: "contain",
  },
  logo: {
    width: "100%",
  },
  search: {
    width: 30,
    marginLeft: 90,
  },
  header: {
    flexDirection: "column",
    marginLeft: 100,
    marginBottom: 40,
  },
  headerText: {
    fontSize: 24,
    letterSpacing: 5,
    marginBottom: 0,
  },
  lineAndDiamond: {
    width: 500,
    height: 39,
    resizeMode: "contain",
    left: -170,
    marginTop: -10,
    tintColor: "gray",
  },
  itemContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: -10,
  },
  imageContainer: {
    width: 150,
    height: 200,
    resizeMode: "contain",
  },
  itemImage: {
    width: "80%",
    height: "80%",
  },
  textAndRemoveContainer: {
    flexDirection: "column",
    marginTop: 40,
    marginLeft: -19,
  },
  attireType: {
    fontSize: 18,
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
  amount: {
    fontSize: 18,
    color: "red",
  },
  removeButton: {
    left: 170,
  },
  remove: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  totalContainer: {
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
    marginLeft: -40,
    marginBottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  estimate: {
    fontSize: 20,
    color: "gray",
    marginRight: 120,
  },
  totalText: {
    fontSize: 24,
    color: "red",
  },
  checkoutContainer: {
    width: 400,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  shoppingImage: {
    width: 30,
    height: 30,
    tintColor: "white",
  },
  checkoutText: {
    color: "white",
    fontSize: 20,
    marginLeft: 20,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  emptyCartText: {
    fontSize: 18,
    color: "gray",
  },
});
