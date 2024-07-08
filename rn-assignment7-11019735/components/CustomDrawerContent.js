import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function CustomDrawerContent(props) {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <TouchableWithoutFeedback onPress={() => navigation.closeDrawer()}>
          <Image
            source={require("../assets/Close.png")}
            style={styles.closeIcon}
          />
        </TouchableWithoutFeedback>
        <View style={styles.drawerHeaderContainer}>
          <Text style={styles.drawerHeader1}>ERIC</Text>
          <Text style={styles.drawerHeader2}>ATSU</Text>
        </View>

        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 20,
  },
  closeIcon: {
    width: 30,
    height: 30,
    left: 10,
    tintColor: "black",
  },
  drawerHeaderContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "red",
    width: 100,
    left: 20,
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  drawerHeader1: {
    fontSize: 20,
    left: -10,
    marginBottom: 10,
    letterSpacing: 2,
  },
  drawerHeader2: {
    fontSize: 20,
    right: -10,
    marginBottom: 10,
    letterSpacing: 2,
  },
});
