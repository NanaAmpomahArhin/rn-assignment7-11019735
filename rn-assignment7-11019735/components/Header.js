import { View, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.wrapper}>
      <Image source={require("../assets/Menu.png")} style={styles.menu} />
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Logo.png")} style={styles.logo} />
      </View>
      <View style={styles.searchAndBagContainer}>
        <Image source={require("../assets/Search.png")} style={styles.search} />
        <Image
          source={require("../assets/shoppingBag.png")}
          style={styles.shopping}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 40,
    alignItems: "center",
  },
  menu: {
    width: 30,
    height: 30,
    left: 20,
  },

  logoContainer: {
    resizeMode: "contain",
    width: 100,
    left: 12,
  },
  logo: {
    width: 100,
    height: 40,
  },
  searchAndBagContainer: {
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
    right: 20,
  },
  search: {
    width: 30,
    height: 30,
  },
  shopping: {
    width: 30,
    height: 30,
  },
});
