import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoryScreen from "./screens/CategoryScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
// import FavouritesContextProvider from "./store/context/favourites-context";
import { store } from "./store/redux/store";

// Create navigation View
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// App

export default function App() {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#24180f" },
          headerTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#24180f" },
          headerBackTitle: "Back",
          drawerContentStyle: { backgroundColor: "#24180f" },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#e4baa1",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoryScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favourites"
          component={FavouriteScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#24180f" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#24180f" },
              headerBackTitle: "Back",
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealOverviewScreen} />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                title: "Meal Details",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
