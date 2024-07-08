import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import axios from "axios";
import { maintenanceData } from "../Data/MaintenaceData";
import Header from "./Header";

export default function ProductDetailsScreen({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  if (!product) {
    return (
      <View style={styles.wrapper}>
        <Header />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            top: 400,
          }}
        >
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Header />
      <View style={styles.imageContainer}>
        <Image style={styles.productImage} source={{ uri: product.image }} />
      </View>
      <View style={styles.textAndExportContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title.toUpperCase()}</Text>

          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
        <View style={styles.exportIconContainer}>
          <Image
            style={styles.exportIcon}
            source={require("../assets/Export.png")}
          />
        </View>
      </View>
      <View style={styles.materialsContainer}>
        <Text style={styles.materialsHeader}>MATERIALS</Text>
        <Text style={styles.materialsText}>
          We work with monitoring programmes to ensure compliance with safety,
          health and quality standards for our products.
        </Text>
      </View>
      <View style={styles.maintenanceContainer}>
        {maintenanceData.map((item) => (
          <View style={styles.maintenanceItem} key={item.id}>
            <Image source={item.image} style={styles.maintenanceImage} />
            <Text style={styles.maintenanceText}>{item.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.deliveryContainer}>
        <Image
          source={require("../assets/Shipping.png")}
          style={styles.deliveryIcon}
        />
        <View style={styles.deliveryInfo}>
          <Text style={styles.deliveryCompany}>Free Flat Rate Shipping</Text>
          <Text style={styles.deliveryTime}>Estimated to be delivered on</Text>
          <Text style={styles.deliveryTime}>09/11/2021 - 12/11/2021.</Text>
        </View>
        <View>
          <Image source={require("../assets/Up.png")} style={styles.upIcon} />
        </View>
      </View>
      <View style={styles.basketContainer}>
        <Image source={require("../assets/Plus.png")} style={styles.plusIcon} />
        <Text style={styles.addToBasket}>ADD TO BASKET</Text>
        <Image
          source={require("../assets/Heart.png")}
          style={styles.heartIcon}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: { flexGrow: 1, flexDirection: "column", paddingBottom: 100 },
  imageContainer: {
    width: 300,
    height: 400,
    left: 30,
    top: 60,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textAndExportContainer: {
    flexDirection: "row",
    width: 350,
    height: 350,
    top: -30,
    left: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 30,
  },
  textContainer: {
    flexDirection: "column",
    width: 300,
  },

  title: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "bold",
  },
  description: {
    fontSize: 13,
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    color: "red",
  },
  exportIconContainer: {
    width: 20,
    height: 20,
    top: -65,
    left: -10,
  },
  exportIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  materialsContainer: {
    flexDirection: "column",
    top: -100,
    left: 20,
    width: 350,
  },
  materialsHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  materialsText: {
    fontSize: 14,
    width: 300,
  },
  maintenanceContainer: {
    width: 300,
    flexDirection: "column",
    top: -80,
    left: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingBottom: 15,
  },
  maintenanceItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  maintenanceImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    tintColor: "gray",
  },
  maintenanceText: {
    fontSize: 12,
  },
  deliveryContainer: {
    flexDirection: "row",
    top: -50,
    left: 20,
  },
  deliveryIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  deliveryInfo: {
    flexDirection: "column",
  },
  deliveryCompany: {
    fontSize: 16,
  },
  deliveryTime: {
    fontSize: 13,
  },
  upIcon: {
    width: 30,
    height: 30,
    left: 80,
  },
  basketContainer: {
    flexDirection: "row",
    top: 100,
    height: 80,
    alignItems: "center",
    backgroundColor: "black",
  },
  plusIcon: {
    width: 30,
    height: 30,
    tintColor: "white",
    marginRight: 20,
    marginLeft: 15,
  },
  addToBasket: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginRight: 100,
  },
  heartIcon: {
    width: 30,
    height: 30,
    tintColor: "white",
  },
});
