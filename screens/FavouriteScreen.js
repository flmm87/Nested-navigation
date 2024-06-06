import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummyData";
import MealList from "../components/MealsList/MealList";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function FavouriteScreen() {
  // Getting ids from Context
  // const { ids } = useContext(FavoritesContext);

  // Getting ids from Redux
  const ids = useSelector((state) => state.favoriteMeals.ids);
  const favMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.textStyle}>You have no favorites meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favMeals} />;
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
