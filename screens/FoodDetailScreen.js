import { useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorites, removeFavorites } from "../store/redux/favorites";
function FoodDetailScreen({ route, navigation }) {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteFoodIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const foodId = route.params.foodId;

  const selectedMeal = MEALS.find((food) => food.id === foodId);

  const FoodFavorites = favoriteFoodIds.includes(foodId);

  function changeFavoriteStatusHandler() {
    if (FoodFavorites) {
      // favoriteMealsCtx.removeFavorite(foodId);
      dispatch(removeFavorites({ id: foodId }));
    } else {
      // favoriteMealsCtx.addFavorite(foodId);
      dispatch(addFavorites({ id: foodId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={FoodFavorites ? "star" : "star-outline"}
            color={FoodFavorites ? "yellow" : "white"}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listoutercontainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default FoodDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listoutercontainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
    textAlign: "center",
  },
});
