import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { cartData } from "../Data/HomeScreenHeroSectionData";
export default function HeroSection() {
  const { addItemToCart } = useContext(CartContext);

  return (
    <View style={styles.wrapper}>
      <View style={styles.heroSectionHeader}>
        <Text style={styles.ourStory}>OUR STORY</Text>
        <View style={styles.filterAndListContainer}>
          <View style={styles.listContainer}>
            <Image
              style={styles.listView}
              source={require("../assets/Listview.png")}
            />
          </View>
          <View style={styles.filterContainer}>
            <Image
              style={styles.filter}
              source={require("../assets/Filter.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.cartContainer}>
        {cartData.map((item, id) => (
          <View style={styles.card} key={id}>
            <View style={styles.imageAndAddContainer}>
              <Image source={item.image} />
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addItemToCart(item)}
              >
                <Image
                  style={styles.add}
                  source={require("../assets/add_circle.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.attireType}>{item.attireType}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.amount}>${item.amount}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    padding: 10,
    marginTop: 50,
    marginBottom: 260,
  },
  heroSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 50,
  },
  ourStory: {
    letterSpacing: 2,
    fontSize: 22,
  },
  filterAndListContainer: {
    width: 110,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  filter: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  listContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  listView: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  cartContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  card: {
    width: "35%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginRight: 15,
    marginBottom: 90,
    marginLeft: 15,
  },
  imageAndAddContainer: {
    position: "relative",
  },
  addButton: {
    position: "absolute",
    top: 185,
    right: 8,
  },
  add: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  textContainer: {
    textAlign: "right",
    left: 20,
    lineHeight: 20,
  },
  description: {
    fontSize: 13,
    width: 200,
    color: "gray",
  },
  amount: {
    color: "red",
  },
});
