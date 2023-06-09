import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import FoodCategoryGrid from "../components/FoodCategoryGrid";
import MealItem from "../components/MealsList/MealItem";

function FoodCategoryScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("FoodOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <FoodCategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default FoodCategoryScreen;
