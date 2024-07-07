import { ScrollView, StyleSheet, Button } from "react-native";
import Header from "./Header";
import HeroSection from "./HeroSection";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <HeroSection />
      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
