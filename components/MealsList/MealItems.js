import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItems({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function selectedMealHandler() {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  }
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={selectedMealHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed && Platform.OS === "ios" ? { opacity: 0.5 } : null
        }
      >
        <View style={styles.mealContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.textStyle}>{title}</Text>
          <View style={styles.extraInfoContainer}>
            <View style={styles.extraInfo}>
              <Text style={styles.textStyle}>Duration: {duration}min</Text>
            </View>
            <View style={styles.extraInfo}>
              <Text style={styles.textStyle}>
                Complexity: {complexity.toUpperCase()}
              </Text>
            </View>
            <View style={styles.extraInfo}>
              <Text style={styles.textStyle}>
                Affordability: {affordability.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItems;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 16,
    // shadow iOS
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 5, height: 20 },
    shadowRadius: 6,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : null,
  },
  mealContainer: {
    width: "100%",
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    elevation: 4,
  },
  textStyle: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    padding: 9,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
    justifyContent: "center",
    borderRadius: 9,
  },

  extraInfoContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  extraInfo: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cardPressed: {
    opacity: 0.25,
  },
});
