import { ScrollView, StyleSheet } from "react-native";
import Header from "./Header";
import HeroSection from "./HeroSection";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <HeroSection navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
