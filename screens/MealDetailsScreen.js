import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummyData";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconsButton from "../components/IconsButton";
// import { FavoritesContext } from "../store/context/favourites-context";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetailsScreen() {
  //Context
  // const { addFavorite, removeIds, ids } = useContext(FavoritesContext);

  //Redux getting data
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  //Navigation
  const navigation = useNavigation();
  const route = useRoute();
  
  // Data Meal
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const isMealFav = favoriteMealIds.includes(mealId);

  function changeFavStatusHandler() {
    if (isMealFav) {
      // removeIds(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(
    function () {
      navigation.setOptions({
        headerRight: () => {
          return (
            <IconsButton
              onPress={changeFavStatusHandler}
              icon={isMealFav ? "star" : "star-outline"}
              color="white"
            />
          );
        },
      });
    },
    [navigation, changeFavStatusHandler]
  );
  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
          <MealDetails
            affordability={selectedMeal.affordability}
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            textStyle={styles.datailText}
          />
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingridients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  datailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
