import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import FoodCategoryGrid from "../components/FoodCategoryGrid";

function renderCategoryItem(itemData) {
  return (
    <FoodCategoryGrid title={itemData.item.title} color={itemData.item.color} />
  );
}

function FoodCategoryScreen() {
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
