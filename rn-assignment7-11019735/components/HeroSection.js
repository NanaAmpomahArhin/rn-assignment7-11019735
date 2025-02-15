import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "./CartContext";
import axios from "axios";

export default function HeroSection({ product }) {
  const navigation = useNavigation();
  const { addItemToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const navigateToProductDetails = (productId) => {
    navigation.navigate("ProductDetails", { productId });
  };

  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + "...";
  };

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
        {products.map((item) => (
          <TouchableOpacity
            style={styles.card}
            key={item.id}
            onPress={() => navigateToProductDetails(item.id)}
          >
            <View style={styles.imageAndAddContainer}>
              <Image style={styles.productImage} source={{ uri: item.image }} />
              <TouchableOpacity
                style={styles.addButton}
                onPress={(e) => {
                  e.stopPropagation();
                  addItemToCart(item);
                }}
              >
                <Image
                  style={styles.add}
                  source={require("../assets/add_circle.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.attireType}>{item.title}</Text>
              <Text style={styles.description}>
                {truncateText(item.description, 50)}
              </Text>
              <Text style={styles.amount}>${item.price}</Text>
            </View>
          </TouchableOpacity>
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
    paddingBottom: 750,
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
    marginRight: 18,
    marginBottom: 100,
    marginLeft: 10,
  },
  imageAndAddContainer: {
    position: "relative",
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    left: -15,
    bottom: 5,
  },
  addButton: {
    position: "absolute",
    top: 125,
    right: 0,
  },
  add: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  textContainer: {
    textAlign: "right",
    left: 14,
  },
  attireType: {
    fontWeight: "bold",
  },
  description: {
    fontSize: 11,
    width: 150,
    color: "gray",
    marginTop: 0,
  },
  amount: {
    color: "red",
  },
});
