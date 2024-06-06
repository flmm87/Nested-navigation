import { Text, View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummyData";
import { useNavigation, useRoute } from "@react-navigation/native";
import MealItems from "../components/MealsList/MealItems";
import { useLayoutEffect } from "react";
import MealList from "../components/MealsList/MealList";

function MealOverviewScreen() {
  const route = useRoute();
  const catId = route.params.categoryId;
  const navigation = useNavigation();

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  // Layout effect will be execute at the same time that the component mount.

  useLayoutEffect(
    function () {
      const categoryTitle = CATEGORIES.find(
        (category) => category.id === catId
      ).title;

      navigation.setOptions({
        title: categoryTitle,
      });
    },
    [catId, navigation]
  );
  return <MealList items={displayMeals} />;
}

export default MealOverviewScreen;
