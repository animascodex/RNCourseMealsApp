import { View, Text, StyleSheet } from "react-native";
// import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FoodFavorites() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteFoodIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteFoods = MEALS.filter((meal) =>
    favoriteFoodIds.includes(meal.id)
  );

  if (favoriteFoods.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.favoriteText}>You have no Favorite Food yet!</Text>
      </View>
    );
  }
  return <MealsList displayedFoodItems={favoriteFoods} />;
}

export default FoodFavorites;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
